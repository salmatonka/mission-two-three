import express, { Application, Request, Response } from 'express'
import cors from "cors";
import dotenv from "dotenv";
import { StudentRoutes } from './app/modules/student/student.routes';

const app:Application = express()
// const port = 3000

dotenv.config();

//parsers
app.use(express.json());
app.use(cors());

//application routes
app.use('/api/v1/students', StudentRoutes)

app.get('/', (req:Request, res:Response) => {
  res.send('Hello module two threes!')
})



export default app;


// {
//   "id": "123456",
//   "name": {
//     "firstName": "John",
//     "middleName": "Michael",
//     "lastName": "Doe"
//   },
//   "gender": "male",
//   "dateOfBirth": "2000-01-01",
//   "email": "john.doe@example.com",
//   "contractNo": "123-456-7890",
//   "emergencyContractNo": "098-765-4321",
//   "bloodGroup": "O+",
//   "presentAddress": "1234 Elm Street, Some City, Some Country",
//   "permanentAddress": "5678 Oak Street, Another City, Another Country",
//   "guardian": {
//     "fatherName": "Richard Doe",
//     "fatherOccupation": "Engineer",
//     "fatherContractNo": "321-654-9870",
//     "motherName": "Jane Doe",
//     "motherOccupation": "Teacher",
//     "motherContractNo": "987-654-3210"
//   },
//   "loacalGuardian": {
//     "name": "Alice Smith",
//     "occupation": "Doctor",
//     "contractNo": "456-123-7890"
//   },
//   "profileImg": "http://example.com/images/john_doe.jpg",
//   "isActive": "active"
// }
