INSERT INTO users (userName, password, email, createdAt, updatedAt)
VALUES ("slimbeek", "password1", "shaun.limbeek@gmail.com", "2021-02-02 19:54:05", "2021-02-02 19:54:06");

INSERT INTO applications (company, role, jobsitelink, createdAt, updatedAt, userID, recruiterID)
VALUES ("facebook", "SWE", "jobs.fb.com", "2021-02-02 19:54:05", "2021-02-02 19:54:06", 1, 1);

INSERT INTO notes (body, userID, applicationID, createdAt, updatedAt)
VALUES ("facebook", 1, 1, "2021-02-02 19:54:05", "2021-02-02 19:54:06");

INSERT INTO recruiters (name, contact, applicationID, createdAt, updatedAt)
VALUES ("Recruiter 1", "rec1@fb.com", 1, "2021-02-02 19:54:05", "2021-02-02 19:54:06");