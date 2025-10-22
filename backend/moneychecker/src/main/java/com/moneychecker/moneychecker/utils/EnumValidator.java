package com.moneychecker.moneychecker.utils;

import java.util.Arrays;
import java.util.Objects;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class EnumValidator implements ConstraintValidator<ValidEnum, String> {
    private Class<? extends Enum<?>> enumClass;

    @Override
    public void initialize(ValidEnum validEnum) {
        this.enumClass = validEnum.enumClass();
    }

    // @formatter:off
    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        if(value == null) {
            return true;
        }
        
        return Arrays.stream(enumClass.getEnumConstants())
                   .anyMatch(constant -> Objects.equals(constant.name(), value)); 
    }
    // @formatter:on
}