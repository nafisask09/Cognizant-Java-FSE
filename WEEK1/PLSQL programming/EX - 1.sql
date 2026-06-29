-- Exercise 1 - CONTROL STRUCTURES
Scenario 1 

DECLARE
    CURSOR c1 IS
        SELECT CustomerID, Age
        FROM Customers;

BEGIN
    FOR c IN c1 LOOP
        IF c.Age > 60 THEN
            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE CustomerID = c.CustomerID;
        END IF;
    END LOOP;

    COMMIT;
END;
/


Scenario 2

DECLARE
    CURSOR c1 IS
        SELECT CustomerID, Balance
        FROM Customers;

BEGIN
    FOR c IN c1 LOOP
        IF c.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = TRUE
            WHERE CustomerID = c.CustomerID;
        END IF;
    END LOOP;

    COMMIT;
END;
/


Scenario 3

DECLARE
    CURSOR c1 IS
        SELECT CustomerID, LoanID, DueDate
        FROM Loans
        WHERE DueDate BETWEEN SYSDATE AND SYSDATE + 30;

BEGIN
    FOR c IN c1 LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: Loan ' || c.LoanID ||
                             ' for Customer ' || c.CustomerID ||
                             ' is due on ' || c.DueDate);
    END LOOP;
END;
/