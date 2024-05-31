import { TStudent } from "./student.interface";
import Student from "./student.model";
// 3rd step : create a service

const createStudentIntoDB = async(student:TStudent) =>{
  const result = await Student.create(student);
  return result;
}

//allData
const getAllStudentsFromDB = async() =>{
    const result = await Student.find();
    return result;
}

const getSingleStudentFromDB = async(id:string) =>{
    const result = await Student.find( {id} );
    return result;
}
export const StudentServices = {
    createStudentIntoDB,
    getAllStudentsFromDB ,
    getSingleStudentFromDB
}