package com.moneychecker.moneychecker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.moneychecker.moneychecker.entities.FinancialGoal;

public interface FinancialGoalRepository extends JpaRepository<FinancialGoal, Integer> {

}
