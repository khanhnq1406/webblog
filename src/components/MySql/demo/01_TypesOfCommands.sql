SHOW databases;

CREATE DATABASE demodatabase;

USE demodatabase;

DROP DATABASE demodatabase;

CREATE TABLE student_table(
    student_id INT,
    student_name VARCHAR(100),
    course_name VARCHAR(40)
);

DESCRIBE student_table;

SHOW tables;

ALTER TABLE student_table ADD email VARCHAR(100);

TRUNCATE TABLE student_table;

INSERT INTO student_table (student_id, student_name, course_name, email)
VALUES (1, "Khanh Nguyen", "c1002", "khanh@gmail.com");

UPDATE student_table
SET student_name = "Khanh", course_name = "c1001"
WHERE student_id = 1;

DELETE FROM student_table
WHERE student_id = 1;

SELECT student_id FROM student_table;

SELECT student_id, email FROM student_table;

SELECT * FROM student_table;