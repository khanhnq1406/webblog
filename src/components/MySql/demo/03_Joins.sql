-- CREATE DATABASE joindemo;

-- USE joindemo;

-- CREATE TABLE customer
-- (
    -- custid VARCHAR(6),
    -- fname VARCHAR(30),
    -- mname VARCHAR(30),
    -- lname VARCHAR(30),
    -- city VARCHAR(15),
    -- mobileno VARCHAR(10),
    -- occupation VARCHAR(10),
    -- dob DATE,
--     CONSTRAINT customer_custid_pk PRIMARY KEY(custid)
-- );

-- CREATE TABLE account
-- (
    -- acnumber VARCHAR(6),
    -- custid VARCHAR(6),
    -- opening_balance INT(7),
    -- aod DATE,
    -- atype VARCHAR(10),
    -- astatus VARCHAR(10),
    -- CONSTRAINT account_acnumber_pk PRIMARY KEY(acnumber),
    -- CONSTRAINT account_custid_fk FOREIGN KEY(custid) REFERENCES customer(custid)
-- );


-- INSERT INTO customer VALUES ('C00001', 'John', 'Michael', 'Smith', 'New York', '1234567890', 'Engineer', '1990-01-15');
-- INSERT INTO customer VALUES ('C00002', 'Emily', 'Rose', 'Johnson', 'Chicago', '9876543210', 'Teacher', '1985-07-23');
-- INSERT INTO customer VALUES ('C00003', 'David', null, 'Brown', 'Los Angeles', '5678901234', 'Doctor', '1992-11-10');
-- INSERT INTO customer VALUES ('C00004', 'Sophia', null, 'Garcia', 'Houston', '3456789012', 'Nurse', '1995-05-18');
-- INSERT INTO customer VALUES ('C00005', 'Liam', 'James', 'Martinez', 'Phoenix', '2345678901', 'Lawyer', '1988-03-12');
-- INSERT INTO customer VALUES ('C00006', 'Ava', 'Elizabeth', 'Wilson', 'Philadelphia', '8901234567', 'Designer', '1993-09-07');
-- INSERT INTO customer VALUES ('C00007', 'Noah', null, 'Taylor', 'San Antonio', '9012345678', 'Architect', '1991-12-02');
-- INSERT INTO customer VALUES ('C00008', 'Isabella', 'Grace', 'Anderson', 'San Diego', '7890123456', 'Chef', '1996-08-22');
-- INSERT INTO customer VALUES ('C00009', 'Mason', null, 'Lee', 'Dallas', '6789012345', 'Artist', '1989-06-30');
-- INSERT INTO customer VALUES ('C00010', 'Mia', 'Charlotte', 'Thomas', 'San Jose', '5678901234', 'Writer', '1994-04-16');

-- INSERT INTO account VALUES ('A00001', 'C00001', 5000, '2020-01-10', 'Savings', 'Active');
-- INSERT INTO account VALUES ('A00002', 'C00002', 15000, '2019-05-15', 'Checking', 'Active');
-- INSERT INTO account VALUES ('A00003', 'C00003', 20000, '2021-03-20', 'Savings', 'Suspended');
-- INSERT INTO account VALUES ('A00004', 'C00004', 10000, '2022-07-01', 'Savings', 'Inactive');
-- INSERT INTO account VALUES ('A00005', 'C00005', 30000, '2018-11-25', 'Checking', 'Active');
-- INSERT INTO account VALUES ('A00006', 'C00006', 12000, '2021-09-10', 'Savings', 'Inactive');
-- INSERT INTO account VALUES ('A00007', 'C00007', 8000, '2023-02-14', 'Savings', 'Terminated');
-- INSERT INTO account VALUES ('A00008', 'C00008', 25000, '2017-06-30', 'Checking', 'Active');
-- INSERT INTO account VALUES ('A00009', 'C00009', 1500, '2023-10-05', 'Savings', 'Active');
-- INSERT INTO account VALUES ('A00010', 'C00010', 18000, '2020-12-20', 'Savings', 'Inactive');

-- SELECT fname, acnumber FROM customer
-- INNER JOIN account
-- ON customer.custid = account.custid;

-- SELECT count(*) FROM customer;
-- SELECT count(*) FROM account;

-- SELECT count(fname) FROM customer
-- INNER JOIN account
-- ON customer.custid = account.custid;

-- SELECT * FROM customer
-- LEFT JOIN account
-- ON customer.custid = account.custid;