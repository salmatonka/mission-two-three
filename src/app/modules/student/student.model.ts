// import { Schema, model } from 'mongoose';
// import {
//   TGuardian,
//   TLocalGuardian,
//   TStudent,
//   TUserName,
// } from './student.interface';
// import validator from 'validator';

// const userNameSchema = new Schema<TUserName>({
//   firstName: {
//     type: String,
//     required: [true, 'First Name is required'],
//     trim: true,
//     maxlength: [20, 'Name can not be more than 20 characters'],
//     validate:{ // custom validation
//       validator:function(value:string){  // normal function
//         const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
//         return firstNameStr === value;
//       },
//       message:'{VALUE} is not in capitalize formet first name'
//     }
//   },
//   middleName: {
//     type: String,
//     trim: true,
//   },
//   lastName: {
//     type: String,
//     trim: true,
//     required: [true, 'Last Name is required'],
//     maxlength: [20, 'Name can not be more than 20 characters'],
//     validate:{
//       validator:(value:string)=>validator.isAlpha(value),
//       message:'{VALUE} is not valid last name'
//     }
//   },
// });

// const guardianSchema = new Schema<TGuardian>({
//   fatherName: {
//     type: String,
//     trim: true,
//     required: [true, 'Father Name is required'],
//   },
//   fatherOccupation: {
//     type: String,
//     trim: true,
//     required: [true, 'Father occupation is required'],
//   },
//   fatherContactNo: {
//     type: String,
//     required: [true, 'Father Contact No is required'],
//   },
//   motherName: {
//     type: String,
//     required: [true, 'Mother Name is required'],
//   },
//   motherOccupation: {
//     type: String,
//     required: [true, 'Mother occupation is required'],
//   },
//   motherContactNo: {
//     type: String,
//     required: [true, 'Mother Contact No is required'],
//   },
// });

// const localGuradianSchema = new Schema<TLocalGuardian>({
//   name: {
//     type: String,
//     required: [true, 'Name is required'],
//   },
//   occupation: {
//     type: String,
//     required: [true, 'Occupation is required'],
//   },
//   contactNo: {
//     type: String,
//     required: [true, 'Contact number is required'],
//   },
//   address: {
//     type: String,
//     required: [true, 'Address is required'],
//   },
// });

// const studentSchema = new Schema<TStudent>(
//   {
//     id: {
//       type: String,
//       required: [true, 'ID is required'],
//       unique: true,  //mongodb te index kore.jar karone mongodb te duplicate id entry korte dey na.
//     },
    
//     name: {
//       type: userNameSchema,
//       required: [true, 'Name is required'], //required jeta lagbe se somy
      
//     },
//     gender: {
//       type: String,
//       enum: {
//         values: ['male', 'female', 'other'],
//         message: '{VALUE} is not a valid gender',
//       },
//       required: [true, 'Gender is required'],
//     },
//     dateOfBirth: { type: String },
//     email: {
//       type: String,
//       required: [true, 'Email is required'],
//       unique: true,
//       validate:{
//         validator:(value:string)=>validator.isAlpha(value),
//         message:'{VALUE} is not valid email'
//       }
//     },
//     contactNo: { type: String, required: [true, 'Contact number is required'] },
//     emergencyContactNo: {
//       type: String,
//       required: [true, 'Emergency contact number is required'],
//     },
//     bloodGroup: {
//       type: String,
//       enum: {
//         values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
//         message: '{VALUE} is not a valid blood group',
//       },
//     },
//     presentAddress: {
//       type: String,
//       required: [true, 'Present address is required'],
//     },
//     permanentAddress: {
//       type: String,
//       required: [true, 'Permanent address is required'],
//     },
//     guardian: {
//       type: guardianSchema,
//       required: [true, 'Guardian information is required'],
//     },
//     localGuardian: {
//       type: localGuradianSchema,
//       required: [true, 'Local guardian information is required'],
//     },
//     profileImg: {type: String},
//     isActive: ['active' , 'block']
//   }
  
// );



// export const Student = model<TStudent>('Student', studentSchema);



// // import { Schema, model } from "mongoose";
// // import { TGuardian, TStudent } from "./student.interface";

// // // Define the TGuardian schema
// // const GuardianSchema = new Schema<TGuardian>({
// //     name: { type: String, required: true },
// //     phone: { type: String, required: true },
// //     age: { type: String, required: true },
// //     email: { type: String, required: false, default: null }
// // });

// // // Define the TStudent schema
// // const StudentSchema = new Schema<TStudent>({
// //     // user: { type: Schema.Types.ObjectId, required: true, ref: "user" },
// //     name: { type: String, required: true },
// //     gender: { type: String, required: true },
// //     dateOfBirth: { type: Date, required: true },
// //     email: { type: String, required: true },
// //     phone: { type: String, required: true },
// //     semester: { type: String, required: true },
// //     batch: { type: String, required: true },
// //     presentAddress: { type: String, required: true },
// //     permanentAddress: { type: String, required: true },
// //     needsPasswordChange: { type: Boolean, required: true, default: false },
// //     guardian: { type: GuardianSchema, required: true },
// //     // academicDepartment: { type: Schema.Types.ObjectId, required: true, ref: "academicDepartment" },
// //     isDeleted: { type: Boolean, required: true, default: false }
// // });

// // // Create the model
// // const Student = model<TStudent>("student", StudentSchema);

// // export { Student };




// Mongoose Schema Definitions
import { Schema, model } from "mongoose";
import { TGuardian, TLocalGuardian, TStudent, TUserName } from "./student.interface";

const UserNameSchema = new Schema<TUserName>({
    firstName: { type: String, required: [true, 'First Name is required'], },
    middleName: { type: String, required: true },
    lastName: { type: String, required: true }
});

const GuardianSchema = new Schema<TGuardian>({
    fatherName: { type: String, required: true },
    fatherOccupation: { type: String, required: true },
    fatherContactNo: { type: String, required: true },
    motherName: { type: String, required: true },
    motherOccupation: { type: String, required: true },
    motherContactNo: { type: String, required: true }
});

const LocalGuardianSchema = new Schema<TLocalGuardian>({
    name: { type: String, required: true },
    occupation: { type: String, required: true },
    contactNo: { type: String, required: true },
    address: { type: String, required: true }
});

const StudentSchema = new Schema<TStudent>({
    id: { type: String, required: true, unique: true },
    name: { type: UserNameSchema, required: true },
    gender: { type: String, enum: ['male', 'female'], required: true },
    dateOfBirth: { type: String },
    email: { type: String, required: true, unique: true },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    bloodGroup: { type: String, enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    guardian: { type: GuardianSchema, required: true },
    localGuardian: { type: LocalGuardianSchema, required: true },
    profileImg: { type: String },
    isActive: { type: String, enum: ['active', 'block'], required: true }
});

// Mongoose Model Creation
const Student = model<TStudent >('Student', StudentSchema);

export default Student;