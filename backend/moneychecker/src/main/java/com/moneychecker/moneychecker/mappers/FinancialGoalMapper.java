package com.moneychecker.moneychecker.mappers;

import org.mapstruct.Mapper;

import com.moneychecker.moneychecker.dtos.FinancialGoalDTO;
import com.moneychecker.moneychecker.entities.FinancialGoal;
import com.moneychecker.moneychecker.utils.GenericMapper;

@Mapper(componentModel = "spring")
public interface FinancialGoalMapper extends GenericMapper<FinancialGoal, FinancialGoalDTO> {
}