package com.moneychecker.moneychecker.utils;

import java.lang.reflect.Field;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.validation.constraints.NotNull;

@Validated
public abstract class GenericServiceImpl<T, ID, DTO extends ContractDTO> implements GenericService<T, ID, DTO> {

    protected final JpaRepository<T, ID> repository;
    protected final GenericMapper<T, DTO> mapper;
    @PersistenceContext
    protected EntityManager entityManager;

    public GenericServiceImpl(JpaRepository<T, ID> repository, GenericMapper<T, DTO> mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    public static <T> void updateFields(T target, Object source) {
        updateFields(target, source, null);
    }

    public static <T> void updateFields(T target, Object source, Set<String> excludeFields) {
        if (target == null || source == null)
            throw new RuntimeException("Objetos target ou source não podem ser null.");

        try {
            Class<?> sourceClass = source.getClass();
            Class<?> targetClass = target.getClass();

            for (Field sourceField : sourceClass.getDeclaredFields()) {
                String fieldName = sourceField.getName();

                if (excludeFields != null && excludeFields.contains(fieldName)) {
                    continue;
                }

                sourceField.setAccessible(true);
                Object value = sourceField.get(source);

                if (value != null) {
                    try {
                        Field targetField = targetClass.getDeclaredField(fieldName);
                        if (isCompatibleType(targetField.getType(), sourceField.getType())) {
                            targetField.setAccessible(true);
                            targetField.set(target, value);
                        }
                    } catch (NoSuchFieldException e) {
                    }
                }
            }
        } catch (IllegalAccessException e) {
            throw new RuntimeException("Erro ao atualizar campos", e);
        }
    }

    private static boolean isCompatibleType(Class<?> targetType, Class<?> sourceType) {
        return targetType.isAssignableFrom(sourceType) || (targetType.equals(sourceType))
                || (isPrimitiveWrapper(targetType, sourceType));
    }

    private static boolean isPrimitiveWrapper(Class<?> targetType, Class<?> sourceType) {
        return (targetType.equals(Boolean.class) && sourceType.equals(Boolean.class))
                || (targetType.equals(Integer.class) && sourceType.equals(Integer.class))
                || (targetType.equals(Long.class) && sourceType.equals(Long.class))
                || (targetType.equals(Double.class) && sourceType.equals(Double.class));
    }

    
    @Transactional(readOnly = true)
    public List<T> findAll() {
        return repository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Page<DTO> findAll(Pageable pageable) {
        Page<T> entityPage = repository.findAll(pageable);
        return entityPage.map(mapper::entityToDto);
    }

    @Transactional(readOnly = true)
    public Optional<DTO> findById(@NotNull ID id) {
        return Optional.of(mapper.entityToDto(repository.findById(id).get()));
    }

    @Transactional
    public T create(@Validated(value = ValidationGroups.Create.class) DTO dto) {
        T entity = mapper.dtoToEntity(dto);

        T savedEntity = repository.save(entity);

        return savedEntity;
    }

    @SuppressWarnings("unchecked")
    @Transactional
    public void update(@Validated(value = ValidationGroups.Update.class) DTO dto) {
        Optional<T> entity = repository.findById((ID) dto.getId());
        Optional<T> source = Optional.of(mapper.dtoToEntity(dto));
        updateFields(entity.get(), source.get());
        repository.save(entity.get());
    }

    @Transactional
    public void delete(@NotNull ID id) {
        if (!repository.existsById(id)) {
            throw new RuntimeException("Registro com id \"" + id + "\" não encontrado");
        }
        repository.deleteById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public boolean existsById(@NotNull ID id) {
        return repository.existsById(id);
    }
}