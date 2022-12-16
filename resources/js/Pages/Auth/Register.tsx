import {ChangeEvent, FormEvent, useEffect} from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import {Head, Link, useForm} from '@inertiajs/inertia-react';
import React from 'react';
import {Button, Input} from "@material-tailwind/react";
import route from "ziggy-js";

const initialValues = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
}

export default function Register() {

    const {data, setData, post, processing, errors, reset} = useForm(initialValues);

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        let data = event.target.name as keyof typeof initialValues
        event.target.type === 'checkbox' ?
            setData(data, event.target.checked.toString()) :
            setData(data, event.target.value)
    };

    const submit = (e: FormEvent): void => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register"/>

            <form onSubmit={submit}>
                <div>

                    <Input label={"Name"}
                           onChange={onHandleChange}
                           name="name"
                           value={data.name}
                           type='text'
                           autoComplete='name'
                           required={true}
                    />

                    <InputError message={errors.name} className="mt-2"/>
                </div>

                <div className="mt-4">

                    <Input label={"Email"}
                           onChange={onHandleChange}
                           name="email"
                           value={data.email}
                           type='email'
                           autoComplete='email'
                    />


                    <InputError message={errors.email} className="mt-2"/>
                </div>

                <div className="mt-4">
                    <Input label="Password"
                           type="password"
                           name="password"
                           value={data.password}
                           autoComplete="current-password"
                           onChange={onHandleChange}
                    />

                    <InputError message={errors.password} className="mt-2"/>
                </div>

                <div className="mt-4">


                    <Input label="Confirm Password"
                           type="password"
                           name="password_confirmation"
                           value={data.password_confirmation}
                           onChange={onHandleChange}
                           required={true}
                    />

                    <InputError message={errors.password_confirmation} className="mt-2"/>
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <Button className="ml-4" type="submit" disabled={processing}>Register</Button>

                </div>
            </form>
        </GuestLayout>
    );
}
