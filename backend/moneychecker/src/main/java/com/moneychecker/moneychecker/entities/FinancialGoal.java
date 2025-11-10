package com.moneychecker.moneychecker.entities;

import java.math.BigDecimal;
import java.time.LocalDate;

import com.moneychecker.moneychecker.enums.PriorityEnum;
import com.moneychecker.moneychecker.enums.StatusEnum;
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
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Table(name = "FINANCIAL_GOALS")
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class FinancialGoal {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "GEN_FINANCIAL_GOAL")
    @SequenceGenerator(name = "GEN_FINANCIAL_GOAL", sequenceName = "GEN_FINANCIAL_GOAL", allocationSize = 1, initialValue = 1)
    @Column(name = "GOAL_ID")
    private Integer goalId;

    @NotNull
    @Column(name = "GOAL_NAME", length = 100)
    private String goalName;

    @NotNull
    @Column(name = "TARGET_AMOUNT")
    private BigDecimal targetAmount;

    @NotNull
    @Column(name = "CURRENT_AMOUNT")
    private BigDecimal currentAmount = BigDecimal.ZERO;

    @Column(name = "TARGET_DATE")
    private LocalDate targetDate;

    @Enumerated(EnumType.STRING)
    @Column(name = "PRIORITY", length = 10)
    private PriorityEnum priority = PriorityEnum.MEDIUM;

    @Enumerated(EnumType.STRING)
    @Column(name = "STATUS", length = 20)
    private StatusEnum status = StatusEnum.ACTIVE;

    @NotNull
    @Convert(converter = BooleanToSmallintConverter.class)
    @Column(name = "ACTIVE", length = 20)
    private boolean active = true;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_COD", referencedColumnName = "USER_ID")
    private SystemUser systemUser;
}
