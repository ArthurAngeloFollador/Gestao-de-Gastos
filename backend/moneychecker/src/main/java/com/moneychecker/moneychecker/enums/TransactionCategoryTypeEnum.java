package com.moneychecker.moneychecker.enums;

import java.util.Objects;

public enum TransactionCategoryTypeEnum {
    EXPENSE {
        @Override
        public String getDescription() {
            return "Expense";
        }
    },
    INCOME {
        @Override
        public String getDescription() {
            return "Income";
        }
    },
    TRANSFERENCE {
        @Override
        public String getDescription() {
            return "Transference";
        }
    },
    INVESTMENT {
        @Override
        public String getDescription() {
            return "Investment";
        }
    };

    public abstract String getDescription();

    public static TransactionCategoryTypeEnum getEnumFromString(String stringConstant) {
        for (TransactionCategoryTypeEnum enumConstant : values()) {
            if (Objects.equals(enumConstant.toString(), stringConstant)) {
                return enumConstant;
            }
        }
        throw new IllegalArgumentException(
                String.format("Valor \"%s\" não está presente no Enum: TransactionCategoryTypeEnum.", stringConstant));
    }
}