package com.moneychecker.moneychecker.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.moneychecker.moneychecker.services.TransactionService;

@RestController
@RequestMapping("/report/transaction")
public class TransactionReportController {

    @Autowired
    TransactionService transactionService;

    @GetMapping("/{accountId}/{categoryType}")
    public Object getValuesByMonth(@PathVariable Integer accountId, @PathVariable String categoryType) {
        return transactionService.findTransactionsByCategory(categoryType, accountId);
    }
}