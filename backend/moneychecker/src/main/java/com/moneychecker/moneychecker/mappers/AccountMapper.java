package com.moneychecker.moneychecker.mappers;

import org.mapstruct.Mapper;

import com.moneychecker.moneychecker.dtos.AccountDTO;
import com.moneychecker.moneychecker.entities.Account;
import com.moneychecker.moneychecker.utils.GenericMapper;

@Mapper(componentModel = "spring", uses = { SystemUserToIntegerMapper.class })
public interface AccountMapper extends GenericMapper<Account, AccountDTO> {
}