package com.moneychecker.moneychecker.mappers;

import org.mapstruct.Mapper;

import com.moneychecker.moneychecker.dtos.BudgetDTO;
import com.moneychecker.moneychecker.entities.Budget;
import com.moneychecker.moneychecker.utils.GenericMapper;

@Mapper(componentModel = "spring")
public interface BudgetMapper extends GenericMapper<Budget, BudgetDTO> {
}