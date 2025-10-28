package com.moneychecker.moneychecker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.moneychecker.moneychecker.entities.Account;

public interface AccountRepository extends JpaRepository<Account, Integer> {
}