package com.moneychecker.moneychecker.mappers;

import java.util.List;

import org.mapstruct.Mapper;

import com.moneychecker.moneychecker.dtos.TransactionDTO;
import com.moneychecker.moneychecker.entities.Transaction;
import com.moneychecker.moneychecker.utils.GenericMapper;

@Mapper(componentModel = "spring", uses = { SystemUserToIntegerMapper.class, AccountToIntegerMapper.class,
        TransactionCategoryToIntegerMapper.class })
public interface TransactionMapper extends GenericMapper<Transaction, TransactionDTO> {
    @Override
    Transaction dtoToEntity(TransactionDTO dto);

    @Override
    TransactionDTO entityToDto(Transaction entity);

    @Override
    List<Transaction> dtoToEntityList(List<TransactionDTO> dtos);

    @Override
    List<TransactionDTO> entityToDtoList(List<Transaction> entities);
}