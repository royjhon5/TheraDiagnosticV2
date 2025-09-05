import * as Yup from 'yup';
import { InferType } from 'yup';

export const loginSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
});
export const globalLoginSchema = Yup.array(loginSchema);
export type globalLoginSchema = InferType<typeof loginSchema>;
