package com.moneychecker.moneychecker.services;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.moneychecker.moneychecker.dtos.TransactionDTO;
import com.moneychecker.moneychecker.dtos.TransactionReportDTO;
import com.moneychecker.moneychecker.entities.Transaction;
import com.moneychecker.moneychecker.mappers.TransactionMapper;
import com.moneychecker.moneychecker.projections.ValueByMonth;
import com.moneychecker.moneychecker.repositories.TransactionRepository;
import com.moneychecker.moneychecker.utils.GenericServiceImpl;

@Service
public class TransactionService extends GenericServiceImpl<Transaction, Integer, TransactionDTO> {

    private final TransactionRepository transactionRepository;

    // @formatter:off
    private static final String[] MESES = {
            "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
            "Jul", "Ago", "Set", "Out", "Nov", "Dez"
        };
    
    public TransactionService(TransactionRepository repository, TransactionMapper mapper) {
        super(repository, mapper);
        this.transactionRepository = repository;
    }

    public TransactionReportDTO findTransactionsByCategory(String categoryType, Integer accountId) {
        List<ValueByMonth> valuesByCategoryType =
            transactionRepository.getTransactionValuesByCategoryType(categoryType, accountId);

        // Agrupa as transações por mês
        Map<Integer, List<BigDecimal>> transactionsByMonth = valuesByCategoryType.stream()
            .collect(Collectors.groupingBy(
                ValueByMonth::getReferenceMonth,
                Collectors.mapping(
                    ValueByMonth::getAmount,
                    Collectors.toList()
                )
            ));

        // Cria uma lista de datasets, um para cada mês (1 a 12)
        List<List<BigDecimal>> datasets = new ArrayList<>();
        for (int mes = 1; mes <= 12; mes++) {
            List<BigDecimal> valoresDoMes = transactionsByMonth.getOrDefault(mes, Collections.emptyList());
            datasets.add(valoresDoMes);
        }

        List<String> labels = Arrays.asList(MESES);

        return new TransactionReportDTO(labels, datasets);
    }
    // @formatter:on
}