package com.moneychecker.moneychecker.projections;

import java.math.BigDecimal;

public interface ValueByCategory {
    Integer getCategoryId();

    String getCategoryName();

    BigDecimal getAmount();
}