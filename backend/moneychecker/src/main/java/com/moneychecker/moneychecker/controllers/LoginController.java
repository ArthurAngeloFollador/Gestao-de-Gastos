package com.moneychecker.moneychecker.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;
import com.moneychecker.moneychecker.dtos.SystemUserDTO;
import com.moneychecker.moneychecker.services.SystemUserService;
import com.moneychecker.moneychecker.utils.GenericJsonViews;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/login")
public class LoginController {

    @Autowired
    SystemUserService systemUserService;

    @PostMapping
    @JsonView(GenericJsonViews.Public.class)
    public ResponseEntity<SystemUserDTO> getUser(@RequestBody @Valid SystemUserDTO userDTO) {
        return systemUserService.getUserDTOByEmailPassword(userDTO.email(), userDTO.passwordHash())
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}