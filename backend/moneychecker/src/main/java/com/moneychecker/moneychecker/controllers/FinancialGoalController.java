package com.moneychecker.moneychecker.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.moneychecker.moneychecker.dtos.FinancialGoalDTO;
import com.moneychecker.moneychecker.entities.FinancialGoal;
import com.moneychecker.moneychecker.services.FinancialGoalService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/financialGoal")
public class FinancialGoalController {

    @Autowired
    FinancialGoalService financialGoalService;

    @GetMapping(path = "/{id}")
    public ResponseEntity<FinancialGoalDTO> findById(@PathVariable Integer id) {
        return financialGoalService.findById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @GetMapping
    public Page<FinancialGoalDTO> listAll(@PageableDefault(size = 10, page = 0) Pageable pageable) {
        return financialGoalService.findAll(pageable);
    }

    @PostMapping
    @Transactional
    public FinancialGoal create(@RequestBody @Valid FinancialGoalDTO createDTO) {
        return financialGoalService.create(createDTO);
    }

    @PutMapping
    @Transactional
    public void update(@RequestBody @Valid FinancialGoalDTO updateDTO) {
        financialGoalService.update(updateDTO);
    }

    @DeleteMapping
    @Transactional
    public void delete(@PathVariable Integer id) {
        try {
            financialGoalService.delete(id);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}