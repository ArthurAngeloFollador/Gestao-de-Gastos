package com.moneychecker.moneychecker.enums;

public enum StatusEnum {
    ACTIVE {
        @Override
        public String getDescription() {
            return "Active";
        }
    },
    COMPLETED {
        @Override
        public String getDescription() {
            return "Completed";
        }
    },
    STANDBY {
        @Override
        public String getDescription() {
            return "Standby";
        }
    },
    CANCELLED {
        @Override
        public String getDescription() {
            return "Cancelled";
        }
    };

    public abstract String getDescription();
}