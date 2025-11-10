package com.moneychecker.moneychecker.mappers;

import org.mapstruct.Mapper;

import com.moneychecker.moneychecker.dtos.TransactionCategoryDTO;
import com.moneychecker.moneychecker.entities.TransactionCategory;
import com.moneychecker.moneychecker.utils.GenericMapper;

@Mapper(componentModel = "spring", uses = { SystemUserToIntegerMapper.class })
public interface TransactionCategoryMapper extends GenericMapper<TransactionCategory, TransactionCategoryDTO> {
}