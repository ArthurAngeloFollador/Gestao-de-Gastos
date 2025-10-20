package com.moneychecker.moneychecker.utils;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter(autoApply = true) // autoApply = true aplica automaticamente para todos os Boolean
public class BooleanToSmallintConverter implements AttributeConverter<Boolean, Short> {

    @Override
    public Short convertToDatabaseColumn(Boolean attribute) {
        return attribute != null && attribute ? (short) 1 : (short) 0;
    }

    @Override
    public Boolean convertToEntityAttribute(Short dbData) {
        return dbData != null && dbData == 1;
    }
}