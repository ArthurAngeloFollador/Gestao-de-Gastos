package com.moneychecker.moneychecker.utils;

import org.springframework.lang.NonNull;
import java.util.List;

public interface GenericMapper<T, DTO> {
    T dtoToEntity(@NonNull DTO dto);
    DTO entityToDto(@NonNull T entity);

    List<T> dtoToEntityList(@NonNull List<DTO> dtos);
    List<DTO> entityToDtoList(@NonNull List<T> entities);
}    