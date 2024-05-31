import express  from "express";
import { StudentControllers } from "./student.controller";
// 5th step : create a route

const router = express.Router()

router.post('/create-student', StudentControllers.createStudent)
router.get('/', StudentControllers.getAllStudents )
router.get('/:studentId', StudentControllers.getSingleStudent)  //controller same id ba studentId dis korte hbe

export const StudentRoutes = router;