import ApplicationLogo from '@/Components/ApplicationLogo';
import {Link} from '@inertiajs/inertia-react';
import React, {ReactNode} from 'react';

export default function Guest({children}: { children: ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-2 sm:pt-0 bg-gray-100">
            <div className="-mt-28">
                <Link href="/">
                    <ApplicationLogo classes={"w-48 h-48"}/>
                </Link>
            </div>

            <div className="w-full sm:max-w-md px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
