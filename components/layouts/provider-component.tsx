'use client';
import App from '@/App';
import store from '@/store';
import { Provider } from 'react-redux';
import React, { ReactNode, Suspense } from 'react';
import Loading from '@/components/layouts/loading';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface IProps {
    children?: ReactNode;
}

const ProviderComponent = ({ children }: IProps) => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
            },
        },
    });
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <Suspense fallback={<Loading />}>
                    <App>{children} </App>
                </Suspense>
            </QueryClientProvider>
        </Provider>
    );
};

export default ProviderComponent;
