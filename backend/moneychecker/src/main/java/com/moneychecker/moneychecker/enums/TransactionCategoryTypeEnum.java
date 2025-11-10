package com.moneychecker.moneychecker.enums;

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
}