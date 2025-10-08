package com.moneychecker.moneychecker.services;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.moneychecker.moneychecker.dtos.SystemUserDTO;
import com.moneychecker.moneychecker.entities.SystemUser;
import com.moneychecker.moneychecker.mappers.SystemUserMapper;
import com.moneychecker.moneychecker.utils.GenericServiceImpl;

@Service
public class SystemUserService extends GenericServiceImpl<SystemUser, Integer, SystemUserDTO> {

    public SystemUserService(JpaRepository<SystemUser, Integer> repository, SystemUserMapper mapper) {
        super(repository, mapper);
    }

    // @formatter:off
    public Optional<SystemUser> findUserByEmail(String userEmail) {
        String sql = "SELECT * FROM USERS U WHERE U.EMAIL = :email";

        return Optional.of((SystemUser) entityManager.createNativeQuery(sql, SystemUser.class)
                                .setParameter("email", userEmail)
                                .getSingleResult());
    }
 
    public Optional<SystemUserDTO> getUserDTOByEmail(String userEmail) {
        return Optional.ofNullable(findUserByEmail(userEmail)).map(usr -> mapper.entityToDto(usr.get()));
    }
    // @formatter:on
}