INSERT INTO users (userName, firstName, lastName, password, email, createdAt, updatedAt)
VALUES ("slimbeek", "Shaun", "Limbeek", "password1", "shaun.limbeek@gmail.com", "2021-02-02 19:54:05", "2021-02-02 19:54:06");

INSERT INTO applications (company, role, jobsitelink, recruiterName, recruiterContact, createdAt, updatedAt, userID, recruiterID)
VALUES ("facebook", "SWE", "jobs.fb.com", "Recruiter 1", "rec1@fb.com", "2021-02-02 19:54:05", "2021-02-02 19:54:06", 1, 1);

INSERT INTO notes (body, userID, applicationID, createdAt, updatedAt)
VALUES ("facebook", 1, 1, "2021-02-02 19:54:05", "2021-02-02 19:54:06");