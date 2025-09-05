import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const userCookie = request.cookies.get('user');

    let user = null;
    if (userCookie?.value) {
        try {
            user = JSON.parse(userCookie.value);
        } catch (err) {
            console.error('Failed to parse user cookie:', err);
            return NextResponse.redirect(new URL('/auth/login', request.url));
        }
    }

    const isLoggedIn = !!(user?.username && user?.role);

    // If trying to access login but already logged in → redirect home
    if (pathname === '/auth/login') {
        if (isLoggedIn) {
            return NextResponse.redirect(new URL('/', request.url));
        }
        return NextResponse.next();
    }

    // If visiting root ("/")
    if (pathname === '/') {
        if (!isLoggedIn) {
            return NextResponse.redirect(new URL('/auth/login', request.url));
        }
        // ✅ just allow, don’t redirect to "/"
        return NextResponse.next();
    }

    // Redirect to login if not logged in
    if (!isLoggedIn) {
        return NextResponse.redirect(new URL('/auth/login', request.url));
    }

    // Role-based protection
    const protectedRoutes: Record<string, string[]> = {
        '/queue-screen': ['QUEUING'],
        '/queue-management': ['RECEPTIONIST', 'ADMIN'],
        '/client-list/registration': ['RECEPTIONIST', 'DOCTOR', 'ADMIN'],
        '/client-list': ['RECEPTIONIST', 'DOCTOR', 'ADMIN', 'MEDTECH', 'RADTECH'],
        '/result-management/client-receiving': ['ADMIN', 'MEDTECH', 'RADTECH'],
        '/result-management/client-result-entry': ['ADMIN', 'MEDTECH', 'RADTECH'],
        '/result-management/client-evaluation': ['ADMIN', 'MEDTECH', 'RADTECH'],
        '/settings/test-package': ['ADMIN'],
        '/settings/laboratory-test': ['ADMIN'],
        '/settings/user-management': ['ADMIN'],
        '/settings/report-settings': ['ADMIN'],
        '/settings': ['ADMIN', 'DOCTOR', 'RECEPTIONIST'],
        '/appointment/create-assessment': ['ADMIN', 'DOCTOR', 'RECEPTIONIST'],
        '/appointment': ['ADMIN', 'DOCTOR', 'RECEPTIONIST'],
        '/transactions/process-transaction': ['ADMIN', 'RECEPTIONIST'],
        '/transactions/transaction-details': ['ADMIN', 'RECEPTIONIST'],
        '/transactions': ['ADMIN', 'RECEPTIONIST'],
        '/dashboard': ['ADMIN', 'DOCTOR'],
        '/doctors': ['ADMIN'],
        '/reports': ['RECEPTIONIST', 'ADMIN'],
        '/medical-records': ['DOCTOR', 'ADMIN'],
        '/analytics': ['DOCTOR', 'RECEPTIONIST', 'ADMIN'],
        '/activity-history': ['RECEPTIONIST', 'ADMIN'],
    };

    let isProtectedRoute = false;
    let allowedRoles: string[] = [];

    for (const route in protectedRoutes) {
        if (pathname === route || pathname.startsWith(`${route}/`)) {
            isProtectedRoute = true;
            allowedRoles = protectedRoutes[route];
            break;
        }
    }

    if (isProtectedRoute) {
        if (!allowedRoles.includes(user.role)) {
            console.log(`Access denied for ${user.role} to ${pathname}. Allowed roles:`, allowedRoles);
            return NextResponse.redirect(new URL('/unauthorized', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/',
        '/auth/login',
        '/dashboard/:path*',
        '/appointment/:path*',
        '/transactions/:path*',
        '/client-list/:path*',
        '/lab-test-management/:path*',
        '/doctors/:path*',
        '/reports/:path*',
        '/medical-records/:path*',
        '/analytics/:path*',
        '/activity-history/:path*',
        '/settings/:path*',
        '/queue-screen',
        '/queue-screen/:path*',
        '/queue-management',
        '/queue-management/:path*',
        '/result-management',
        '/result-management/:path*', // ✅ fixed typo here
    ],
};
