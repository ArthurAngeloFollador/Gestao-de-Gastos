package com.moneychecker.moneychecker.services;

import org.springframework.stereotype.Service;

import com.moneychecker.moneychecker.dtos.FinancialGoalDTO;
import com.moneychecker.moneychecker.entities.FinancialGoal;
import com.moneychecker.moneychecker.mappers.FinancialGoalMapper;
import com.moneychecker.moneychecker.repositories.FinancialGoalRepository;
import com.moneychecker.moneychecker.utils.GenericServiceImpl;

@Service
public class FinancialGoalService extends GenericServiceImpl<FinancialGoal, Integer, FinancialGoalDTO> {

    public FinancialGoalService(FinancialGoalRepository repository, FinancialGoalMapper mapper) {
        super(repository, mapper);
    }
}