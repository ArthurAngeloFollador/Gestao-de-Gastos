package com.moneychecker.moneychecker.mappers;

import org.mapstruct.Mapper;

import com.moneychecker.moneychecker.entities.SystemUser;

@Mapper(componentModel = "spring")
public interface SystemUserToIntegerMapper {
    default Integer toId(SystemUser user) {
        return user != null ? user.getUserId() : null;
    }

    default SystemUser fromId(Integer id) {
        if (id == null)
            return null;
        SystemUser user = new SystemUser();
        user.setUserId(id);
        return user;
    }
}