package com.moneychecker.moneychecker.dtos;

import com.moneychecker.moneychecker.enums.TransactionCategoryTypeEnum;
import com.moneychecker.moneychecker.utils.ContractDTO;
import com.moneychecker.moneychecker.utils.ValidEnum;
import com.moneychecker.moneychecker.utils.ValidationGroups;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

//@formatter:off

public record TransactionCategoryDTO (
        @NotNull(groups = ValidationGroups.Update.class)
        @NotNull(groups = ValidationGroups.Delete.class)
        Integer transactionCategoryId,

        @NotBlank(groups = ValidationGroups.Create.class)
        String categoryName, 

        @ValidEnum(enumClass = TransactionCategoryTypeEnum.class, groups = { ValidationGroups.Update.class, ValidationGroups.Create.class })
        @NotBlank(groups = ValidationGroups.Create.class)
        String categoryType,
 
        @NotNull(groups = ValidationGroups.Create.class)
        Integer userCod,
        
        boolean active) implements ContractDTO {

    @Override
    public Object getId() {
        return this.transactionCategoryId;
    }
}