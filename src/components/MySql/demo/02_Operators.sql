SELECT * FROM student_table;

SELECT * FROM student_table
WHERE course_name = "c1001";

SELECT * FROM student_table
WHERE student_id = 1 AND course_name = "c1005";

SELECT * FROM student_table
WHERE student_id = 1 OR course_name = "c1005";

SELECT * FROM student_table
WHERE NOT student_name = "Khanh Nguyen";

SELECT * FROM student_table
WHERE course_name IN ("c1002", "c1005");

SELECT * FROM student_table
WHERE student_id BETWEEN 1 AND 2;

SELECT * FROM student_table
WHERE email LIKE '%k%';

SELECT * FROM student_table
WHERE student_name LIKE '%nguyen%';

SELECT * FROM student_table
WHERE email is null;