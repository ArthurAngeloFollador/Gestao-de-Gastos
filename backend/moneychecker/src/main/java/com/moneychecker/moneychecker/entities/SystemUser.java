package com.moneychecker.moneychecker.entities;

import com.moneychecker.moneychecker.utils.BooleanToSmallintConverter;

import jakarta.persistence.Column;
import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Table(name = "USERS")
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SystemUser {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "GEN_USER")
    @SequenceGenerator(name = "GEN_USER", sequenceName = "GEN_USER", allocationSize = 1, initialValue = 1)
    @Column(name = "USER_ID")
    private Integer userId;
    @Column(name = "EMAIL")
    private String email;
    @Column(name = "PASSWORD_HASH")
    private String passwordHash;
    @Column(name = "NAME")
    private String name;
    @Convert(converter = BooleanToSmallintConverter.class)
    @Column(name = "ACTIVE")
    private boolean active;
}