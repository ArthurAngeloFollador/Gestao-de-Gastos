package com.moneychecker.moneychecker.services;

import org.springframework.stereotype.Service;

import com.moneychecker.moneychecker.dtos.TransactionDTO;
import com.moneychecker.moneychecker.entities.Transaction;
import com.moneychecker.moneychecker.mappers.TransactionMapper;
import com.moneychecker.moneychecker.repositories.TransactionRepository;
import com.moneychecker.moneychecker.utils.GenericServiceImpl;

@Service
public class TransactionService extends GenericServiceImpl<Transaction, Integer, TransactionDTO> {

    public TransactionService(TransactionRepository repository, TransactionMapper mapper) {
        super(repository, mapper);
    }
}