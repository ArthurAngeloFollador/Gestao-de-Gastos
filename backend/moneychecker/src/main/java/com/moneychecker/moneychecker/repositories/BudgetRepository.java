package com.moneychecker.moneychecker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.moneychecker.moneychecker.entities.Budget;

public interface BudgetRepository extends JpaRepository<Budget, Integer> {

}
