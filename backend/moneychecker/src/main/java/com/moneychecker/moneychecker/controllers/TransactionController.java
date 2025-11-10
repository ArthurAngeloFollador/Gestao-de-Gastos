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

import com.moneychecker.moneychecker.dtos.TransactionDTO;
import com.moneychecker.moneychecker.services.TransactionService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/movement/transaction")
public class TransactionController {

    @Autowired
    TransactionService transactionService;

    @PostMapping
    @Transactional
    public void saveTransaction(@Valid @RequestBody TransactionDTO transactionDto) {
        transactionService.create(transactionDto);
    }

    @PutMapping
    @Transactional
    public void updateTransaction(@Valid @RequestBody TransactionDTO transactionDTO) {
        transactionService.update(transactionDTO);
    }

    @DeleteMapping(path = "/{id}")
    @Transactional
    public void deleteTransaction(@PathVariable Integer id) {
        transactionService.delete(id);
    }

    @GetMapping
    public Page<TransactionDTO> getTransactions(@PageableDefault(size = 10) Pageable pageable) {
        return transactionService.findAll(pageable);
    }
}