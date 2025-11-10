package com.moneychecker.moneychecker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.moneychecker.moneychecker.entities.Transaction;

public interface TransactionRepository extends JpaRepository<Transaction, Integer> {
}