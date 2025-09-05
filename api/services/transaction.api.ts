import { CreateTransactionDTO, GetTransactionsDTO } from '@/types/DTO/Transaction.dto';
import httpHelper from '../HttpAxios';
import { BaseResponseType } from '@/types/BaseResponse';

const baseAPI = 'Payment';
const TransactionAPI = 'transactions';

export const createTransaction = async (params: CreateTransactionDTO) => {
    const { data: response } = await httpHelper.post<BaseResponseType<number>>(`${baseAPI}`, params);
    return response;
};

export const getAllTransactions = async () => {
    const { data: response } = await httpHelper.get<BaseResponseType<GetTransactionsDTO[]>>(`${TransactionAPI}`);
    return response;
};

export const ReprintEntireOR = async (id: number) => {
    const { data: response } = await httpHelper.get<BaseResponseType<GetTransactionsDTO[]>>(`${TransactionAPI}/reprint-or/${id}`);
    return response;
};

export const ReprintORPerTest = async (id: number) => {
    const { data: response } = await httpHelper.get<BaseResponseType<GetTransactionsDTO[]>>(`${TransactionAPI}/reprint-per-test/${id}`);
    return response;
};
