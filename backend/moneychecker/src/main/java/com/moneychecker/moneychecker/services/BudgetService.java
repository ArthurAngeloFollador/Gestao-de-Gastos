package com.moneychecker.moneychecker.services;

import org.springframework.stereotype.Service;

import com.moneychecker.moneychecker.dtos.BudgetDTO;
import com.moneychecker.moneychecker.entities.Budget;
import com.moneychecker.moneychecker.mappers.BudgetMapper;
import com.moneychecker.moneychecker.repositories.BudgetRepository;
import com.moneychecker.moneychecker.utils.GenericServiceImpl;

@Service
public class BudgetService extends GenericServiceImpl<Budget, Integer, BudgetDTO> {

    public BudgetService(BudgetRepository repository, BudgetMapper mapper) {
        super(repository, mapper);
    }
}