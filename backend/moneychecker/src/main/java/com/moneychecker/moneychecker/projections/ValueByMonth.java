package com.moneychecker.moneychecker.projections;

import java.math.BigDecimal;

public interface ValueByMonth {
    Integer getReferenceMonth();

    BigDecimal getAmount();
}