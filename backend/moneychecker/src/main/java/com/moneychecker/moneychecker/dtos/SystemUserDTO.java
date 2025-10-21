package com.moneychecker.moneychecker.dtos;

import com.fasterxml.jackson.annotation.JsonView;
import com.moneychecker.moneychecker.utils.ContractDTO;
import com.moneychecker.moneychecker.utils.GenericJsonViews;
import com.moneychecker.moneychecker.utils.ValidationGroups;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Null;
import jakarta.validation.constraints.Size;

//@formatter:off
public record SystemUserDTO(
        @JsonView(GenericJsonViews.Internal.class)
        @Null(groups = ValidationGroups.Create.class)
        @NotNull(groups = ValidationGroups.Update.class)
        Integer userId,
        
        @JsonView(GenericJsonViews.Internal.class)
        @NotBlank(groups = ValidationGroups.Create.class) 
        String passwordHash, 
        
        @JsonView(GenericJsonViews.Public.class)
        @NotBlank(groups = ValidationGroups.Create.class)
        @Size(min = 3, max = 100)
        String name, 
        
        @JsonView(GenericJsonViews.Public.class)
        @NotBlank(groups = ValidationGroups.Create.class)
        @Email
        String email, 

        @JsonView(GenericJsonViews.Internal.class)
        boolean active) implements ContractDTO {

    @Override
    public Integer getId() {
        return this.userId;
    }
}