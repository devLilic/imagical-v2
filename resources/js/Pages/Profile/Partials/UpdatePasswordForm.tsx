import React, {FormEvent, useRef} from 'react';
import InputError from '@/Components/InputError';
import {useForm} from '@inertiajs/inertia-react';
import {Transition} from '@headlessui/react';
import route from "ziggy-js";
import {Button, Input} from "@material-tailwind/react";

interface IUpdatePasswordForm {
    className: string
}

export default function UpdatePasswordForm({className}: IUpdatePasswordForm) {
    const passwordInput = useRef<HTMLInputElement>(null);
    const currentPasswordInput = useRef<HTMLInputElement>(null);

    const {data, setData, errors, put, reset, processing, recentlySuccessful} = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword = (e: FormEvent) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: () => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current?.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current?.focus();
                }
            },
        });
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Update Password</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Ensure your account is using a long, random password to stay secure.
                </p>
            </header>

            <form onSubmit={updatePassword} className="mt-6 space-y-6">
                <div>
                    <Input label="Current Password"
                           type="password"
                           name="password"
                           ref={currentPasswordInput}
                           value={data.current_password}
                           autoComplete="current-password"
                           onChange={(e) => setData('current_password', e.target.value)}
                    />
                    <InputError message={errors.current_password} className="mt-2"/>
                </div>

                <div>
                    <Input label="New Password"
                           type="password"
                           name="password"
                           ref={passwordInput}
                           value={data.password}
                           autoComplete="new-password"
                           onChange={(e) => setData('password', e.target.value)}
                    />
                    <InputError message={errors.password} className="mt-2"/>
                </div>

                <div>
                    <Input label="Confirm Password"
                           type="password"
                           name="password"
                           ref={passwordInput}
                           value={data.password_confirmation}
                           autoComplete="new-password"
                           onChange={(e) => setData('password_confirmation', e.target.value)}
                    />

                    <InputError message={errors.password_confirmation} className="mt-2"/>
                </div>

                <div className="flex items-center gap-4">

                    <Button type="submit" size="sm" color="indigo" disabled={processing}>Save</Button>


                    <Transition
                        show={recentlySuccessful}
                        enterFrom="opacity-0"
                        leaveTo="opacity-0"
                        className="transition ease-in-out"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
