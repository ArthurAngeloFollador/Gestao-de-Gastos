package com.moneychecker.moneychecker.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.moneychecker.moneychecker.dtos.create.SystemUserDTO;
import com.moneychecker.moneychecker.entities.SystemUser;
import com.moneychecker.moneychecker.services.SystemUserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/cadastros/usuario")
public class UserController {

    @Autowired
    SystemUserService systemUserService;

    @GetMapping
    public Page<SystemUserDTO> findAll(@PageableDefault(size = 10, page = 0) Pageable pageable) {
        return systemUserService.findAll(pageable);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<SystemUserDTO> findById(@PathVariable Integer id) {
        return systemUserService.findById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    @Transactional
    public SystemUser create(@RequestBody @Valid SystemUserDTO createDTO) {
        return systemUserService.create(createDTO);
    }

    @PutMapping
    @Transactional
    public void update(@RequestBody @Valid SystemUserDTO updateDTO) {
        systemUserService.update(updateDTO);
    }

    @DeleteMapping
    @Transactional
    public void delete(@PathVariable Integer id) {
        try {
            systemUserService.delete(id);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}