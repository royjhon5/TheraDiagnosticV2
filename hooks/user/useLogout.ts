import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const useLogout = () => {
    const router = useRouter();

    const logout = () => {
        // remove all cookies you set on login
        Cookies.remove('userid');
        Cookies.remove('token');
        Cookies.remove('user');

        // redirect to login
        router.push('/auth/login');
    };

    return logout;
};

export default useLogout;
