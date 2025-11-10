package com.moneychecker.moneychecker.mappers;

import org.mapstruct.Mapper;

import com.moneychecker.moneychecker.entities.Account;

@Mapper(componentModel = "spring")
public interface AccountToIntegerMapper {
    default Integer toId(Account account) {
        return account != null ? account.getAccountId() : null;
    }

    default Account fromId(Integer id) {
        if (id == null)
            return null;
        Account account = new Account();
        account.setAccountId(id);
        return account;
    }
}