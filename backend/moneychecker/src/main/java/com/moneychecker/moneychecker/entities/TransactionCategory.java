package com.moneychecker.moneychecker.entities;

import com.moneychecker.moneychecker.enums.TransactionCategoryTypeEnum;
import com.moneychecker.moneychecker.utils.BooleanToSmallintConverter;

import jakarta.persistence.Column;
import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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

@Table(name = "TRANSACTION_CATEGORIES")
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TransactionCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "GEN_TRANSACTION_CATEGORIES")
    @SequenceGenerator(name = "GEN_TRANSACTION_CATEGORIES", sequenceName = "GEN_TRANSACTION_CATEGORIES", allocationSize = 1)
    @Column(name = "TRANSACTION_CATEGORY_ID")
    private Integer transactionCategoryId;

    @Column(name = "CATEGORY_NAME")
    private String categoryName;

    @Column(name = "CATEGORY_TYPE")
    @Enumerated(EnumType.STRING)
    private TransactionCategoryTypeEnum categoryType;

    @Convert(converter = BooleanToSmallintConverter.class)
    @Column(name = "ACTIVE")
    private boolean active = true;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_COD", nullable = false)
    private SystemUser userCod;
}