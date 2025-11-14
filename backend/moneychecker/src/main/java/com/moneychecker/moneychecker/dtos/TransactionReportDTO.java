package com.moneychecker.moneychecker.dtos;

import java.math.BigDecimal;
import java.util.List;

//@formatter:off
public record TransactionReportDTO (
        List<String> labels,
        List<List<BigDecimal>> datasets
        ) {};