DROP DATABASE IF EXISTS DOCTORAL;
CREATE DATABASE DOCTORAL;
USE DOCTORAL;

/*
not necessary after we just created the new database
DROP TABLE IF EXISTS INSTRUCTOR;
DROP TABLE IF EXISTS TT;
DROP TABLE IF EXISTS PHDSTUDENT;
DROP TABLE IF EXISTS GTA;
DROP TABLE IF EXISTS GRA;
DROP TABLE IF EXISTS GRA;
DROP TABLE IF EXISTS SELFSUPPORT;
DROP TABLE IF EXISTS SCHOLARSHIPSUPPORT;
DROP TABLE IF EXISTS COURSE;
DROP TABLE IF EXISTS SECTION;
DROP TABLE IF EXISTS COURSESTAUGHT;
DROP TABLE IF EXISTS MILESTONE;
DROP TABLE IF EXISTS MILESTONESPASSED;
DROP TABLE IF EXISTS GRANTS;
DROP TABLE IF EXISTS GRANTSASSOCIATED;
DROP TABLE IF EXISTS PHDCOMMITTEE;
*/

CREATE TABLE COURSE(
	CourseId VARCHAR(50),
	CName VARCHAR(50),
	PRIMARY KEY(CourseId)
);

CREATE TABLE SECTION(
	SectionId VARCHAR(50),
	CourseId VARCHAR(50),
	PRIMARY KEY(SectionId),
	FOREIGN KEY(CourseId) REFERENCES COURSE(CourseId)
);

CREATE TABLE INSTRUCTOR(
	InstructorId VARCHAR(50),
	FName VARCHAR(50) NOT NULL,
	LName VARCHAR(50) NOT NULL,
	StartDate DATE NOT NULL,
	Degree VARCHAR(50) NOT NULL,
	Rnk VARCHAR(50) NOT NULL,
	Type VARCHAR(50) NOT NULL,
	PRIMARY KEY(InstructorId)
);


CREATE TABLE TT(
	InstructorId VARCHAR(50),
	NoOfPhDStudents INT,
	PRIMARY KEY(InstructorId),
	FOREIGN KEY(InstructorId) REFERENCES INSTRUCTOR(InstructorId)
);

CREATE TABLE GRANTS(
	AccountNo VARCHAR(50),
	Type VARCHAR(50),
	GrantTitle VARCHAR(50),
	Source VARCHAR(50),
	StDate DATE,
	EndDate DATE,
	StAmount FLOAT,
	CurrBalance FLOAT,
	PRIMARY KEY(AccountNo)
);

CREATE TABLE PHDSTUDENT(
	StudentId VARCHAR(50),
	FName VARCHAR(50) NOT NULL,
	LName VARCHAR(50) NOT NULL,
	StSem VARCHAR(50) NOT NULL,
	StYear VARCHAR(50) NOT NULL,
	Supervisor VARCHAR(50) NOT NULL,
	PRIMARY KEY(StudentId),
	FOREIGN KEY(Supervisor) REFERENCES TT(InstructorId)
);

CREATE TABLE GTA(
	SectionId VARCHAR(50),
	MonthlyPay FLOAT,
	StudentId VARCHAR(50),
	PRIMARY KEY(StudentId),
	FOREIGN KEY(StudentId) REFERENCES PHDSTUDENT(StudentId),
	FOREIGN KEY(SectionId) REFERENCES SECTION(SectionId)
);

CREATE TABLE GRA(
	StudentId VARCHAR(50),
	Funding VARCHAR(50),
	MonthlyPay FLOAT,
	PRIMARY KEY(StudentId),
	FOREIGN KEY(StudentId) REFERENCES PHDSTUDENT(StudentId),
	FOREIGN KEY(Funding) REFERENCES GRANTS(AccountNo)
);

CREATE TABLE SELFSUPPORT(
	StudentId VARCHAR(50),
	PRIMARY KEY(StudentId),
	FOREIGN KEY(StudentId) REFERENCES PHDSTUDENT(StudentId) ON DELETE CASCADE
);

CREATE TABLE SCHOLARSHIPSUPPORT(
	StudentId VARCHAR(50),
	Type VARCHAR(50),
	Source VARCHAR(50),
	PRIMARY KEY(StudentId),
	FOREIGN KEY(StudentId) REFERENCES PHDSTUDENT(StudentId)
);

CREATE TABLE COURSESTAUGHT(
	CourseId VARCHAR(50),
	InstructorId VARCHAR(50),
	CONSTRAINT PK_CoursesTaught PRIMARY KEY (CourseId, InstructorId),
	FOREIGN KEY(CourseId) REFERENCES COURSE(CourseId),
	FOREIGN KEY(InstructorId) REFERENCES INSTRUCTOR(InstructorId)
);

CREATE TABLE MILESTONE(
	MId VARCHAR(50),
	MName VARCHAR(50),
	PRIMARY KEY(MId)
);

CREATE TABLE MILESTONESPASSED(
	StudentId VARCHAR(50),
	MId VARCHAR(50),
	PassDate DATE,
	CONSTRAINT PK_MilestonesPassed PRIMARY KEY (StudentId, MId),
	FOREIGN KEY(StudentId) REFERENCES PHDSTUDENT(StudentId),
	FOREIGN KEY(MId) REFERENCES MILESTONE(MId)
);


CREATE TABLE GRANTSASSOCIATED(
	AccountNo VARCHAR(50),
	InstructorID VARCHAR(50),
	PIType VARCHAR(50),
	CONSTRAINT PK_GrantsAssociated PRIMARY KEY (AccountNo, InstructorID),
	FOREIGN KEY(AccountNo) REFERENCES GRANTS(AccountNo),
	FOREIGN KEY(InstructorId) REFERENCES TT(InstructorId)
);

CREATE TABLE PHDCOMMITTEE(
	StudentId VARCHAR(50),
	InstructorId VARCHAR(50),
	CONSTRAINT PK_PHDCommittee PRIMARY KEY (StudentId, InstructorID),
	FOREIGN KEY(StudentId) REFERENCES PHDSTUDENT(StudentId),
	FOREIGN KEY(InstructorId) REFERENCES INSTRUCTOR(InstructorId)
);

