package com.moneychecker.moneychecker.mappers;

import org.mapstruct.Mapper;

import com.moneychecker.moneychecker.entities.TransactionCategory;

@Mapper(componentModel = "spring")
public interface TransactionCategoryToIntegerMapper {
    default Integer toId(TransactionCategory transactionCategory) {
        return transactionCategory != null ? transactionCategory.getTransactionCategoryId() : null;
    }

    default TransactionCategory fromId(Integer id) {
        if (id == null)
            return null;
        TransactionCategory transactionCategory = new TransactionCategory();
        transactionCategory.setTransactionCategoryId(id);
        return transactionCategory;
    }
}