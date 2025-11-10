package com.moneychecker.moneychecker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.moneychecker.moneychecker.entities.TransactionCategory;

public interface TransactionCategoryRepository extends JpaRepository<TransactionCategory, Integer> {
}