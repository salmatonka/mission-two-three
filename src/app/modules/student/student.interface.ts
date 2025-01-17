// // // 1st step : create a interface
// export type TUserName = {
//     firstName: string;  // interface er type small latter: string;
//     middleName: string;
//     lastName: string;
// }
// export type TGuardian = {
//     fatherName: string;
//     fatherOccupation: string;
//     fatherContactNo: string;
//     motherName: string;
//     motherOccupation: string;
//     motherContactNo: string;
// }
// export type TLocalGuardian = {
//     name: string;
//     occupation: string;
//     contactNo: string;
//     address: string;
// }

// export type TStudent = {
//     id: string;
//     name: TUserName;
//     // password: string;
//     gender: 'male' | 'female';
//     dateOfBirth?: string;
//     email: string;
//     contactNo: string;
//     emergencyContactNo: string;
//     bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
//     presentAddress: string;
//     permanentAddress: string;
//     guardian: TGuardian;
//     localGuardian: TLocalGuardian;
//     profileImg?: string;
//     isActive: 'active' | 'block';
//     // isDeleted: boolean;

// }










import { Schema, model, Document } from 'mongoose';

// Interfaces
export type TUserName = {
    firstName: string;
    middleName: string;
    lastName: string;
}

export type TGuardian = {
    fatherName: string;
    fatherOccupation: string;
    fatherContactNo: string;
    motherName: string;
    motherOccupation: string;
    motherContactNo: string;
}

export type TLocalGuardian = {
    name: string;
    occupation: string;
    contactNo: string;
    address: string;
}

export type TStudent = {
    id: string;
    name: TUserName;
    gender: 'male' | 'female';
    dateOfBirth?: string;
    email: string;
    contactNo: string;
    emergencyContactNo: string;
    bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
    presentAddress: string;
    permanentAddress: string;
    guardian: TGuardian;
    localGuardian: TLocalGuardian;
    profileImg?: string;
    isActive: 'active' | 'block';
}
