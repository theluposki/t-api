CREATE TABLE users (
    id varchar(36) NOT NULL PRIMARY KEY,
    name varchar(255) NOT NULL,
    email varchar(255) NOT NULL UNIQUE,
    password varchar(255) NOT NULL,
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO users 
(id, name, email, password)
VALUES 
("440da3ba-073d-4809-901d-f87586749380", "Lucas", "lu@mail.com", "12345");

