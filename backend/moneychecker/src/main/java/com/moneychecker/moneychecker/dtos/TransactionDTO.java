package com.moneychecker.moneychecker.dtos;

import java.math.BigDecimal;
import java.util.Date;

import com.moneychecker.moneychecker.utils.ContractDTO;
import com.moneychecker.moneychecker.utils.ValidationGroups;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

//@formatter:off
public record TransactionDTO (
        @NotNull(groups = ValidationGroups.Update.class)
        @NotNull(groups = ValidationGroups.Delete.class)
        Integer transactionId,
        
        @NotBlank(groups = ValidationGroups.Create.class)
        BigDecimal amount, 

        @NotBlank(groups = ValidationGroups.Create.class)
        String description, 
        
        @NotNull(groups = ValidationGroups.Create.class)
        Date transactionDate,
        
        @NotNull(groups = ValidationGroups.Create.class)
        Integer userCod,
        
        @NotNull(groups = ValidationGroups.Create.class)
        Integer accountCod,
    
        @NotNull(groups = ValidationGroups.Create.class)
        Integer transactionCategoryCod
        ) implements ContractDTO {

    @Override
    public Integer getId() {
        return this.transactionId;
    }
}