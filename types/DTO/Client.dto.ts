export interface CreateClientDto {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    dateOfBirth: string;
    age: string;
    gender: string;
    address: string;
    contactNumber: string;
    emailAddress: string;
    flag: string;
    isPriority: string;
    employersId: number;
    status: string;
    civilStatus: string;
    appointmentType: string;
    appointmentDate: string;
}

export type UpdateClientDto = CreateClientDto & {
    id: number;
};

export type UpdateStatusDTO = {
    id: number;
    status: string;
};

export type ClientDto = {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    dateOfBirth: string;
    age: string;
    gender: string;
    currentAddress: string;
    province: string;
    barangay: string;
    seniorCitizen: string;
    validId: string;
    validIdNo: string;
    activePhoneNumber: string;
    activeEmail: string;
    medicalHistory: string;
    currentMedication: string;
    knownAllergies: string;
    insuranceInfo: string;
    appointmentDate: string;
    appointmentType: string;
    status: string;
};

export type GetClientDTO = {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    dateOfBirth: string;
    age: string;
    gender: string;
    address: string;
    contactNumber: string;
    emailAddress: string;
    flag: string;
    isPriority: string;
    employersId: number;
    status: string;
    civilStatus: string;
    qrCodeImage: string;
    referralCode: string;
    priorityNo: string;
    appointmentType: string;
    appointmentDate: string;
};

export type GetReferralCodeDTO = {
    id: number;
    referralCode: string;
    message: string;
};

export type GetOnQueDTO = {
    id: number;
    priorityNo: string;
    status: string;
    isPriority: string;
};

export type GetClientByStatusDTO = {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    dateOfBirth: string;
    age: string;
    gender: string;
    address: string;
    contactNumber: string;
    isPriority: string;
};
