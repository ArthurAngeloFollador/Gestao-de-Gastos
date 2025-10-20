package com.moneychecker.moneychecker.entities;

import java.math.BigDecimal;
import java.util.Date;

import com.moneychecker.moneychecker.enums.BudgetStatusEnum;
import com.moneychecker.moneychecker.enums.PeriodTypeEnum;
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
import lombok.Setter;

@Table(name = "BUDGETS")
@Entity
@Getter
@Setter
@AllArgsConstructor 
public class Budget {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "GEN_BUDGET")
    @SequenceGenerator(name = "GEN_BUDGET", sequenceName = "GEN_BUDGET", allocationSize = 1)
    @Column(name = "BUDGET_ID")
    private Integer budgetId;
    @Column(name = "BUDGET_NAME")
    private String budgetName;
    @Column(name = "PERIOD_TYPE")
    @Enumerated(EnumType.STRING)
    private PeriodTypeEnum periodType;
    @Column(name = "START_DATE")
    private Date startDate;
    @Column(name = "END_DATE")
    private Date endDate;
    @Column(name = "TOTAL_BUDGET")
    private BigDecimal totalBudget = BigDecimal.ZERO;
    @Convert(converter = BooleanToSmallintConverter.class)
    @Column(name = "STATUS")
    @Enumerated(EnumType.STRING)
    private BudgetStatusEnum status = BudgetStatusEnum.ACTIVE;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_COD", nullable = false)
    private SystemUser userCod;
}
