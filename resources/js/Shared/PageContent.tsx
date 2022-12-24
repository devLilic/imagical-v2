import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React, {ReactNode} from 'react';

interface IPageContent{
    auth: {
        user: IUser
    },
    errors: object,
    children: ReactNode
}
const PageContent = ({auth, errors, children}: IPageContent) => {
    return (
        <AuthenticatedLayout auth={auth} errors={errors}>
            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {children}
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default PageContent;
