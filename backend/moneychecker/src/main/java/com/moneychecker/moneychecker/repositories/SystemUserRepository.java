package com.moneychecker.moneychecker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.moneychecker.moneychecker.entities.SystemUser;

@Repository
public interface SystemUserRepository extends JpaRepository<SystemUser, Integer> {
}