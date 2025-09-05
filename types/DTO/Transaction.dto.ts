export type CreateTransactionDTO = {
    clientId: number;
    amountPaid: string;
    paymentType: string;
    change: number;
    paymentReference: string;
    totalAmount: number;
    remarks: string;
};

export type GetTransactionsDTO = {
    id: number;
    transactionNumber: string;
    clientId: number;
    packageId: number;
    amountPaid: string;
    change: number;
    paymentType: string;
    paymentReference: string;
    totalAmount: number;
    remarks: string;
    firstName: string;
    middleName: string;
    lastName: string;
    dateOfBirth: string;
    age: string;
    gender: string;
    address: string;
    contactNumber: string;
    isPriority: string;
    appointmentType: string;
    appointmentDate: string;
    dateCreated: string;
};
