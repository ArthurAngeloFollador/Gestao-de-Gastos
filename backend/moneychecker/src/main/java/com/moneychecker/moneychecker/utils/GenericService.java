package com.moneychecker.moneychecker.utils;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.validation.annotation.Validated;

import jakarta.validation.constraints.NotNull;

@Validated
public interface GenericService<T, ID, DTO extends ContractDTO> {
    List<T> findAll();
    Page<DTO> findAll(Pageable pageable);
    Optional<DTO> findById(@NotNull ID id);
    
    T create(@Validated(value = ValidationGroups.Create.class) DTO dto);
    void update(@Validated(value = ValidationGroups.Update.class) DTO dto);

    void delete(@NotNull ID id);
    
    boolean existsById(@NotNull ID id);
}
