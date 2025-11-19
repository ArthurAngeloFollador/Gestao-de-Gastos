package com.moneychecker.moneychecker.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.moneychecker.moneychecker.entities.Transaction;
import com.moneychecker.moneychecker.projections.ValueByMonth;

public interface TransactionRepository extends JpaRepository<Transaction, Integer> {

    // @formatter:off
    @Query(value = """
            SELECT
                EXTRACT(MONTH FROM T.TRANSACTION_DATE) AS REFERENCE_MONTH,
                T.AMOUNT
            FROM
                TRANSACTIONS T
            INNER JOIN TRANSACTION_CATEGORIES TC ON
                TC.TRANSACTION_CATEGORY_ID = T.TRANSACTION_CATEGORY_COD
            INNER JOIN ACCOUNTS A ON A.ACCOUNT_ID = ?2
            WHERE
                TC.CATEGORY_TYPE = ?1;
            """, nativeQuery = true)
    List<ValueByMonth> getTransactionValuesByCategoryType(
            @Param("categoryTypeEnum") String categoryType,
            @Param("accountId") Integer accountId);
    // @formatter:on
}