PH University Management Project 
.................................

Functional Requirements: 
........................

1. Authentication
..............

a. Student 
Students can log in and log out securely.
Students can update their password.

b. Faculty
Faculty can log in and log out securely.
Faculty can update their password.

c. Admin:
Admin can log in and log out securely.
Admin can update their password.

2. Profile Management: 
....................

a. Student
Students can manage and update their profile.
Students can update certain fields.

b. Faculty:
Faculty can manage and update their profile.
Faculty can update certain fields.

c. Admin: 
Admin can manage and update their profile.
Admin can update certain fields.

3. Academic Process:
...................

a. Student:
Students can enroll in offered courses for a specific semester.
Students can view their class schedule.
Students can see their grades.
Students can view notice boards and events.

b. Faculty:
Faculty can manage student grades.
Faculty can access student’s personal and academic information.

c.Admin:
Admin can manage multiple processes:
Semester.
Course.
Offered Course.
Section.
Room.
Building.

4. User Management:
Admin:
Admins can manage multiple accounts.
Admin can block/unblock users.
Admin can change user passwords.




5. Data Model
...............

a. User:

_id
id (generated)
password
needsPasswordChange
role
status
isDeleted
createdAt
updatedAt


b. Student:

_id
id  (generated)
name
gender
dateOfBirth
email
contactNo
emergencyContactNo
presentAddress
permanentAddress
guardian
localGuardian
profileImage
admissionSemester
isDeleted
createdAt
updatedAt


c. Faculty:
_id
id  (generated)
designation
name
gender
dateOfBirth
email
contactNo
emergencyContactNo
presentAddress
permanentAddress
profileImage
academicFaculty
academicDepartment
isDeleted
createdAt
updatedAt



d. Admin:
_id
id  (generated)
designation
name
gender
dateOfBirth
email
contactNo
emergencyContactNo
presentAddress
permanentAddress
profileImage
managementDepartment
isDeleted
createdAt
updatedAt



6. Academic Semester:
..................

_id
name
year
code
startMonth
endMonth
createdAt
updatedAt


Academic Faculty:
_id
name
createdAt
updatedAt


Academic Department:
_id
name
academicFaculty
createdAt
updatedAt




API Endpoints
User:

users/create-student (POST)
users/create-faculty (POST)
users/create-admin (POST)


Student:
students (GET)
students/:id (GET)
students/:id (PATCH)
students/:id (DELETE)
students/my-profile

 
Faculty:
faculties(GET)
faculties/:id (GET)
faculties/:id (PATCH)
faculties/:id (DELETE)
faculties/my-profile

Admin:
admins (GET)
admins /:id (GET)
admins /:id (PATCH)
admins /:id (DELETE)
admins /my-profile

Auth:

auth/login
auth/refresh-token
auth/change-password
auth/forgot-password
auth/reset-password

