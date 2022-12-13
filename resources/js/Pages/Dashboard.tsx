import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from '@inertiajs/inertia-react';
import React from "react";

interface IDashboard {
    auth: {
        user: IUser
    },
    errors: object
}

export default function Dashboard({auth, errors}: IDashboard) {
    return (
        <AuthenticatedLayout
            auth={auth}
            errors={errors}
        >
            <Head title="Dashboard"/>

            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!</div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
