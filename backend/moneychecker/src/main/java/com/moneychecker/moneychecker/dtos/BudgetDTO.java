package com.moneychecker.moneychecker.dtos;

import java.math.BigDecimal;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonView;
import com.moneychecker.moneychecker.enums.BudgetStatusEnum;
import com.moneychecker.moneychecker.enums.PeriodTypeEnum;
import com.moneychecker.moneychecker.utils.ContractDTO;
import com.moneychecker.moneychecker.utils.GenericJsonViews;
import com.moneychecker.moneychecker.utils.ValidEnum;
import com.moneychecker.moneychecker.utils.ValidationGroups;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

//@formatter:off
public record BudgetDTO (
        @JsonView(GenericJsonViews.Public.class)
        @NotNull(groups = ValidationGroups.Update.class)
        @NotNull(groups = ValidationGroups.Delete.class)
        Integer budgetId,
        
        @JsonView(GenericJsonViews.Public.class)
        @NotBlank(groups = ValidationGroups.Create.class)
        String budgetName, 
        
        @JsonView(GenericJsonViews.Public.class)
        @NotBlank(groups = ValidationGroups.Create.class)
        @ValidEnum(groups = {ValidationGroups.Create.class, ValidationGroups.Update.class}, enumClass = PeriodTypeEnum.class)
        PeriodTypeEnum periodType, 

        @JsonView(GenericJsonViews.Public.class)
        @NotNull(groups = ValidationGroups.Create.class)
        Date startDate, 
        
        @JsonView(GenericJsonViews.Public.class)
        @NotNull(groups = ValidationGroups.Create.class)
        Date endDate,
        
        @JsonView(GenericJsonViews.Public.class)
        @NotNull(groups = ValidationGroups.Create.class)
        BigDecimal totalBudget,

        @JsonView(GenericJsonViews.Internal.class)
        @NotNull(groups = ValidationGroups.Create.class)
        Integer userCod,
        
        @JsonView(GenericJsonViews.Public.class)
        @NotNull(groups = ValidationGroups.Create.class)
        @ValidEnum(groups = {ValidationGroups.Create.class, ValidationGroups.Update.class}, enumClass = BudgetStatusEnum.class)
        BudgetStatusEnum status) implements ContractDTO {

    @Override
    public Integer getId() {
        return this.budgetId;
    }
}