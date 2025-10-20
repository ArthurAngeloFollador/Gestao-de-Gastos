package com.moneychecker.moneychecker.dtos.update;

import jakarta.validation.constraints.NotBlank;

//@formatter:off
public record SystemUserUpdateDTO(
        @NotBlank 
        String passwordHash, 
        @NotBlank 
        String name, 
        @NotBlank 
        String email, 
        boolean active) {
}