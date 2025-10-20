package com.moneychecker.moneychecker.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.moneychecker.moneychecker.dtos.create.BudgetDTO;
import com.moneychecker.moneychecker.services.BudgetService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/cadastros/orcamento")
public class BudgetController {

    @Autowired
    BudgetService budgetService;

    @PostMapping
    @Transactional
    public void saveBudget(@Valid @RequestBody BudgetDTO budgetDto) {
        budgetService.create(budgetDto);
    }

    @PutMapping
    @Transactional
    public void updateBudget(@Valid @RequestBody BudgetDTO budgetDTO) {
        budgetService.update(budgetDTO);
    }

    @GetMapping
    public Page<BudgetDTO> getBudgets(@PageableDefault(size = 10) Pageable pageable) {
        return budgetService.findAll(pageable);
    }
}