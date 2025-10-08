package com.moneychecker.moneychecker.dtos;

import com.moneychecker.moneychecker.utils.ContractDTO;
import com.moneychecker.moneychecker.utils.ValidationGroups;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Null;
import jakarta.validation.constraints.Size;

//@formatter:off
public record SystemUserDTO(
        @Null(groups = ValidationGroups.Create.class)
        @NotNull(groups = ValidationGroups.Update.class)
        @Null(groups = ValidationGroups.Find.class)
        Integer userId,
        @NotBlank(groups = ValidationGroups.Create.class) 
        String passwordHash, 
        @NotBlank(groups = ValidationGroups.Create.class)
        @Null(groups = ValidationGroups.Find.class)
        @Size(min = 3, max = 100)
        String name, 
        @NotBlank(groups = ValidationGroups.Create.class)
        @Email
        String email, 
        boolean active) implements ContractDTO {

    @Override
    public Integer getId() {
        return this.userId;
    }
}