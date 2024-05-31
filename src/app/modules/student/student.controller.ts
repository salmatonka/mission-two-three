import { Request, Response } from "express";
import { StudentServices } from "./student.service";
import StudentValidationSchema from "./joi.validation";
// 4th step : create a controller
//insert/create data
const createStudent = async (req: Request, res: Response) => {
    try {
        const { student: studentData } = req.body; // postman e {"student": {}} data collection

        //crating a schema validation using joi

        const { value } = StudentValidationSchema.validate(studentData);

        // will call service fun to send this data 
        const result = await StudentServices.createStudentIntoDB(value);

        // if (error) {
        //     res.status(200).json({
        //         success: false,
        //         message: "Something is wrong",
        //         error: error.details,
        //     })
        // }


        //send response

        res.status(200).json({
            success: true,
            message: 'Student is created succcessfully',
            data: result
        });
    } catch (err) {
        console.log(err)
    }
};


//alldata
const getAllStudents = async (req: Request, res: Response) => {
    try {
        const result = await StudentServices.getAllStudentsFromDB();

        res.status(200).json({
            success: true,
            message: "Students are retrieved successfully",
            data: result
        })
    } catch (err) {
        console.log(err)
    }
}

//single data
const getSingleStudent = async (req: Request, res: Response) => {
    try {
        const { studentId } = req.params; //route je name sei nam hbe id ba studentId
        const result = await StudentServices.getSingleStudentFromDB(studentId);

        res.status(200).json({
            success: true,
            message: "Single student is fetched successfully ",
            data: result
        })

    } catch (err) {
        console.log(err)
    }
}

export const StudentControllers = {
    createStudent,
    getAllStudents,
    getSingleStudent
}