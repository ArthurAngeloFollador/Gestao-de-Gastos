package com.moneychecker.moneychecker.services;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.annotation.JsonView;
import com.moneychecker.moneychecker.dtos.SystemUserDTO;
import com.moneychecker.moneychecker.entities.SystemUser;
import com.moneychecker.moneychecker.mappers.SystemUserMapper;
import com.moneychecker.moneychecker.repositories.SystemUserRepository;
import com.moneychecker.moneychecker.utils.GenericJsonViews;
import com.moneychecker.moneychecker.utils.GenericServiceImpl;

@Service
public class SystemUserService extends GenericServiceImpl<SystemUser, Integer, SystemUserDTO> {

    private final SystemUserRepository repository;
    private final SystemUserMapper mapper;

    public SystemUserService(SystemUserRepository repository, SystemUserMapper mapper) {
        super(repository, mapper);
        this.mapper = mapper;
        this.repository = repository;
    }

    public Optional<SystemUserDTO> getUserDTOByEmailPassword(String userEmail, String userPassword) {
        return repository.findUserByEmailPassword(userEmail, userPassword).map(mapper::entityToDto);
    }
}