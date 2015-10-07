DROP TABLE inquiries;

CREATE TABLE inquiries
(
    id int NOT NULL AUTO_INCREMENT,
    FirstName varchar(255) NOT NULL,   
    LastName varchar(255) NOT NULL,
    Email varchar(255) NOT NULL,
    Management int,
    Marketing int,
    GeneralBusiness int,
    Economics int,
    PRIMARY KEY(id)
);