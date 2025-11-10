package com.moneychecker.moneychecker.services;

import org.springframework.stereotype.Service;

import com.moneychecker.moneychecker.dtos.AccountDTO;
import com.moneychecker.moneychecker.entities.Account;
import com.moneychecker.moneychecker.mappers.AccountMapper;
import com.moneychecker.moneychecker.repositories.AccountRepository;
import com.moneychecker.moneychecker.utils.GenericServiceImpl;

@Service
public class AccountService extends GenericServiceImpl<Account, Integer, AccountDTO> {

    public AccountService(AccountRepository repository, AccountMapper mapper) {
        super(repository, mapper);
    }
}