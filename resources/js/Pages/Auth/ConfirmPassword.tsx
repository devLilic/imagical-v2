import React, {ChangeEvent, FormEvent, useEffect} from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import { Head, useForm } from '@inertiajs/inertia-react';
import route from "ziggy-js";
import {Button, Input} from "@material-tailwind/react";


interface IInputType<T>{

}
export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
        let name = event.target.name as "name" | "email" | "password" | "password_confirmation"
        setData(name, event.target.value);
    };

    const submit = (e: FormEvent) => {
        e.preventDefault();

        post(route('password.confirm'));
    };

    return (
        <GuestLayout>
            <Head title="Confirm Password" />

            <div className="mb-4 text-sm text-gray-600">
                This is a secure area of the application. Please confirm your password before continuing.
            </div>

            <form onSubmit={submit}>
                <div className="mt-4">
                    <Input label="Password"
                           type="password"
                           name="password"
                           value={data.password}
                           autoComplete="current-password"
                           onChange={onHandleChange}
                           autoFocus={true}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Button className="ml-4" type="submit" disabled={processing}>Confirm</Button>
                </div>
            </form>
        </GuestLayout>
    );
}
