package com.moneychecker.moneychecker.enums;

public enum PeriodTypeEnum {
    WEEKLY {
        @Override
        public String getLabelPortuguese() {
            return "Semanal";
        }
    },
    MONTHLY {
        @Override
        public String getLabelPortuguese() {
            return "Mensal";
        }
    },
    BIMONTHLY {
        @Override
        public String getLabelPortuguese() {
            return "Bimestral";
        }
    },
    QUARTERLY {
        @Override
        public String getLabelPortuguese() {
            return "Trimestral";
        }
    },
    YEARLY {
        @Override
        public String getLabelPortuguese() {
            return "Anual";
        }
    },
    OTHER {
        @Override
        public String getLabelPortuguese() {
            return "Outro";
        }
    };
    
    public abstract String getLabelPortuguese();
}
