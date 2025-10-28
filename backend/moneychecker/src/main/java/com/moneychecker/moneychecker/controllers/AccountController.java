package com.moneychecker.moneychecker.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.moneychecker.moneychecker.dtos.AccountDTO;
import com.moneychecker.moneychecker.services.AccountService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/register/account")
public class AccountController {

    @Autowired
    AccountService accountService;

    @PostMapping
    @Transactional
    public void saveAccount(@Valid @RequestBody AccountDTO accountDto) {
        accountService.create(accountDto);
    }

    @PutMapping
    @Transactional
    public void updateAccount(@Valid @RequestBody AccountDTO accountDTO) {
        accountService.update(accountDTO);
    }

    @DeleteMapping(path = "/{id}")
    @Transactional
    public void deleteAccount(@PathVariable Integer id) {
        accountService.delete(id);
    }

    @GetMapping
    public Page<AccountDTO> getAccounts(@PageableDefault(size = 10) Pageable pageable) {
        return accountService.findAll(pageable);
    }
}