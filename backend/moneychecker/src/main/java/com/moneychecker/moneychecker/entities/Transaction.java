package com.moneychecker.moneychecker.entities;

import java.math.BigDecimal;
import java.util.Date;

import jakarta.persistence.Column;
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

@Table(name = "TRANSACTIONS")
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "GEN_TRANSACTIONS")
    @SequenceGenerator(name = "GEN_TRANSACTIONS", sequenceName = "GEN_TRANSACTIONS", allocationSize = 1)
    @Column(name = "TRANSACTION_ID")
    private Integer transactionId;

    @Column(name = "AMOUNT")
    private BigDecimal amount;

    @Column(name = "DESCRIPTION")
    private String description;

    @Column(name = "TRANSACTION_DATE")
    private Date transactionDate = new Date();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_COD", nullable = false)
    private SystemUser userCod;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ACCOUNT_COD", nullable = false)
    private Account accountCod;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "TRANSACTION_CATEGORY_COD", nullable = false)
    private TransactionCategory transactionCategoryCod;
}