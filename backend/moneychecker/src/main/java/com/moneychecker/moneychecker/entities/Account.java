package com.moneychecker.moneychecker.entities;

import java.math.BigDecimal;

import com.moneychecker.moneychecker.utils.BooleanToSmallintConverter;

import jakarta.persistence.Column;
import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Table(name = "ACCOUNTS")
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "GEN_ACCOUNT")
    @SequenceGenerator(name = "GEN_ACCOUNT", sequenceName = "GEN_ACCOUNT", allocationSize = 1)
    @Column(name = "ACCOUNT_ID")
    private Integer accountId;
    @Column(name = "ACCOUNT_NAME")
    private String accountName;
    @Column(name = "BANK_NAME")
    private String bankName;
    @Column(name = "CURRENT_BALANCE")
    private BigDecimal currentBalance = BigDecimal.ZERO;
    @Convert(converter = BooleanToSmallintConverter.class)
    @Column(name = "ACTIVE")
    private boolean active = true;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_COD", nullable = false)
    private SystemUser userCod;
}