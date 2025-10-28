package com.moneychecker.moneychecker.dtos;

import java.math.BigDecimal;

import com.moneychecker.moneychecker.utils.ContractDTO;
import com.moneychecker.moneychecker.utils.ValidationGroups;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

//@formatter:off
public record AccountDTO (
        @NotNull(groups = ValidationGroups.Update.class)
        @NotNull(groups = ValidationGroups.Delete.class)
        Integer accountId,
        
        @NotBlank(groups = ValidationGroups.Create.class)
        String accountName, 

        @NotBlank(groups = ValidationGroups.Create.class)
        String bankName, 
        
        @NotNull(groups = ValidationGroups.Create.class)
        BigDecimal currentBalance,
        
        @NotNull(groups = ValidationGroups.Create.class)
        Integer userCod,
        
        boolean active) implements ContractDTO {

    @Override
    public Integer getId() {
        return this.accountId;
    }
}