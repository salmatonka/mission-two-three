import Joi from 'joi';

const UserNameValidationSchema = Joi.object({
    firstName: Joi.string().required(),
    middleName: Joi.string().required(),
    lastName: Joi.string().required()
});

const GuardianValidationSchema = Joi.object({
    fatherName: Joi.string().required(),
    fatherOccupation: Joi.string().required(),
    fatherContactNo: Joi.string().required(),
    motherName: Joi.string().required(),
    motherOccupation: Joi.string().required(),
    motherContactNo: Joi.string().required()
});

const LocalGuardianValidationSchema = Joi.object({
    name: Joi.string().required(),
    occupation: Joi.string().required(),
    contactNo: Joi.string().required(),
    address: Joi.string().required()
});

const StudentValidationSchema = Joi.object({
    id: Joi.string().required(),
    name: UserNameValidationSchema.required(),
    gender: Joi.string().valid('male', 'female').required(),
    dateOfBirth: Joi.string().optional(),
    email: Joi.string().email().required(),
    contactNo: Joi.string().required(),
    emergencyContactNo: Joi.string().required(),
    bloodGroup: Joi.string().valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-').optional(),
    presentAddress: Joi.string().required(),
    permanentAddress: Joi.string().required(),
    guardian: GuardianValidationSchema.required(),
    localGuardian: LocalGuardianValidationSchema.required(),
    profileImg: Joi.string().optional(),
    isActive: Joi.string().valid('active', 'block').required()
});

export default StudentValidationSchema;
