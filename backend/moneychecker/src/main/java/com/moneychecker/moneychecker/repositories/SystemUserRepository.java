package com.moneychecker.moneychecker.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.moneychecker.moneychecker.entities.SystemUser;

public interface SystemUserRepository extends JpaRepository<SystemUser, Integer> {

    @Query(value = "SELECT * FROM USERS WHERE EMAIL = :email AND PASSWORD_HASH = :passwordHash", nativeQuery = true)
    public Optional<SystemUser> findUserByEmailPassword(@Param("email") String email,
            @Param("passwordHash") String passwordHash);
}