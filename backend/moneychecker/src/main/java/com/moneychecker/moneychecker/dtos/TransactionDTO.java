package com.moneychecker.moneychecker.dtos;

import java.math.BigDecimal;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonView;
import com.moneychecker.moneychecker.utils.ContractDTO;
import com.moneychecker.moneychecker.utils.GenericJsonViews;
import com.moneychecker.moneychecker.utils.ValidationGroups;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

//@formatter:off
public record TransactionDTO (
        @NotNull(groups = ValidationGroups.Update.class)
        @NotNull(groups = ValidationGroups.Delete.class)
        @JsonView(GenericJsonViews.Internal.class)
        Integer transactionId,
        
        @NotBlank(groups = ValidationGroups.Create.class)
        @JsonView(GenericJsonViews.Public.class)
        BigDecimal amount, 

        @NotBlank(groups = ValidationGroups.Create.class)
        @JsonView(GenericJsonViews.Public.class)
        String description, 
        
        @NotNull(groups = ValidationGroups.Create.class)
        @JsonView(GenericJsonViews.Public.class)
        Date transactionDate,
        
        @NotNull(groups = ValidationGroups.Create.class)
        @JsonView(GenericJsonViews.Public.class)
        Integer userCod,
        
        @NotNull(groups = ValidationGroups.Create.class)
        @JsonView(GenericJsonViews.Public.class)
        Integer accountCod,
    
        @NotNull(groups = ValidationGroups.Create.class)
        Integer transactionCategoryCod
        ) implements ContractDTO {

    @Override
    public Integer getId() {
        return this.transactionId;
    }
}