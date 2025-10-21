package com.moneychecker.moneychecker.enums;

public enum PriorityEnum {
    LOW {
        @Override
        public String getDescription() {
            return "Low";
        }
    },
    MEDIUM {
        @Override
        public String getDescription() {
            return "Medium";
        }
    },
    HIGH {
        @Override
        public String getDescription() {
            return "High";
        }
    },
    IMMEDIATE {
        @Override
        public String getDescription() {
            return "Immediate";
        }
    },
    NONE {
        @Override
        public String getDescription() {
            return "None";
        }
    };

    public abstract String getDescription();
}