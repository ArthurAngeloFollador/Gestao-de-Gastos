package com.moneychecker.moneychecker.services;

import org.springframework.stereotype.Service;

import com.moneychecker.moneychecker.dtos.TransactionCategoryDTO;
import com.moneychecker.moneychecker.entities.TransactionCategory;
import com.moneychecker.moneychecker.mappers.TransactionCategoryMapper;
import com.moneychecker.moneychecker.repositories.TransactionCategoryRepository;
import com.moneychecker.moneychecker.utils.GenericServiceImpl;

@Service
public class TransactionCategoryService extends GenericServiceImpl<TransactionCategory, Integer, TransactionCategoryDTO> {

    public TransactionCategoryService(TransactionCategoryRepository repository, TransactionCategoryMapper mapper) {
        super(repository, mapper);
    }
}