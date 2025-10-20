package com.moneychecker.moneychecker.mappers;

import org.mapstruct.Mapper;

import com.moneychecker.moneychecker.dtos.create.SystemUserDTO;
import com.moneychecker.moneychecker.entities.SystemUser;
import com.moneychecker.moneychecker.utils.GenericMapper;

@Mapper(componentModel = "spring")
public interface SystemUserMapper extends GenericMapper<SystemUser, SystemUserDTO> {
}