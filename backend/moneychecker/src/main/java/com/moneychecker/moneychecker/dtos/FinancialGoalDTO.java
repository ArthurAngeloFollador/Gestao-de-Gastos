package com.moneychecker.moneychecker.dtos;

import java.sql.Date;

import com.moneychecker.moneychecker.enums.PriorityEnum;
import com.moneychecker.moneychecker.enums.StatusEnum;
import com.moneychecker.moneychecker.utils.ContractDTO;
import com.moneychecker.moneychecker.utils.ValidEnum;
import com.moneychecker.moneychecker.utils.ValidationGroups;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Null;
import jakarta.validation.constraints.Size;

//@formatter:off
public record FinancialGoalDTO(
        @Null(groups = ValidationGroups.Create.class)
        @NotNull(groups = ValidationGroups.Update.class)
        @Null(groups = ValidationGroups.Find.class)
        Integer goalId,

        @NotBlank(groups = ValidationGroups.Create.class)
        @Size(max = 100)
        String goalName,

        @NotNull(groups = ValidationGroups.Create.class)
        Double targetAmount,

        @NotNull(groups = ValidationGroups.Update.class)
        Double currentAmount,

        @NotNull(groups = ValidationGroups.Create.class)
        Date targetDate,

        @ValidEnum(enumClass = PriorityEnum.class, groups = { ValidationGroups.Update.class, ValidationGroups.Create.class })
        String priority,

        @ValidEnum(enumClass = StatusEnum.class, groups = { ValidationGroups.Update.class, ValidationGroups.Create.class })
        String status,

        @NotNull(groups = ValidationGroups.Create.class)
        Integer userCod
) implements ContractDTO {

    @Override
    public Integer getId() {
        return this.goalId;
    }
}