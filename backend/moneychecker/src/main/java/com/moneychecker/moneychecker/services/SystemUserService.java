package com.moneychecker.moneychecker.services;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.moneychecker.moneychecker.dtos.create.SystemUserDTO;
import com.moneychecker.moneychecker.entities.SystemUser;
import com.moneychecker.moneychecker.mappers.SystemUserMapper;
import com.moneychecker.moneychecker.utils.GenericServiceImpl;

@Service
public class SystemUserService extends GenericServiceImpl<SystemUser, Integer, SystemUserDTO> {

    public SystemUserService(JpaRepository<SystemUser, Integer> repository, SystemUserMapper mapper) {
        super(repository, mapper);
    }
}