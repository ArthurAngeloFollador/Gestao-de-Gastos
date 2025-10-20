package com.moneychecker.moneychecker.dtos.create;

import java.math.BigDecimal;
import java.util.Date;

import com.moneychecker.moneychecker.enums.BudgetStatusEnum;
import com.moneychecker.moneychecker.enums.PeriodTypeEnum;
import com.moneychecker.moneychecker.utils.ContractDTO;
import com.moneychecker.moneychecker.utils.ValidationGroups;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

//@formatter:off
public record BudgetDTO (
        @NotNull(groups = ValidationGroups.Update.class)
        @NotNull(groups = ValidationGroups.Delete.class)
        Integer budgetId,
        @NotBlank(groups = ValidationGroups.Create.class)
        String budgetName, 
        @NotBlank(groups = ValidationGroups.Create.class)
        PeriodTypeEnum periodType, 
        @NotNull(groups = ValidationGroups.Create.class)
        Date startDate, 
        @NotNull(groups = ValidationGroups.Create.class)
        Date endDate,
        @NotNull(groups = ValidationGroups.Create.class)
        BigDecimal totalBudget,
        BudgetStatusEnum active) implements ContractDTO {

    @Override
    public Integer getId() {
        return this.budgetId;
    }
}