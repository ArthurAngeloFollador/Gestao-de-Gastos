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

import com.moneychecker.moneychecker.dtos.TransactionCategoryDTO;
import com.moneychecker.moneychecker.services.TransactionCategoryService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/register/transactionCategory")
public class TransactionCategoryController {

    @Autowired
    TransactionCategoryService transactionCategoryService;

    @PostMapping
    @Transactional
    public void saveTransactionCategory(@Valid @RequestBody TransactionCategoryDTO transactionCategoryDto) {
        transactionCategoryService.create(transactionCategoryDto);
    }

    @PutMapping
    @Transactional
    public void updateTransactionCategory(@Valid @RequestBody TransactionCategoryDTO transactionCategoryDTO) {
        transactionCategoryService.update(transactionCategoryDTO);
    }

    @DeleteMapping(path = "/{id}")
    @Transactional
    public void deleteTransactionCategory(@PathVariable Integer id) {
        transactionCategoryService.delete(id);
    }

    @GetMapping
    public Page<TransactionCategoryDTO> getTransactionCategorys(@PageableDefault(size = 10) Pageable pageable) {
        return transactionCategoryService.findAll(pageable);
    }
}