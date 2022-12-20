import React, {FormEvent, useRef, useState} from 'react';
import InputError from '@/Components/InputError';
import {useForm} from '@inertiajs/inertia-react';
import {Button, Dialog, DialogBody, DialogFooter, DialogHeader, Input} from "@material-tailwind/react";
import route from "ziggy-js";

interface IDeleteUserForm {
    className: string
}

export default function DeleteUserForm({className}: IDeleteUserForm) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef<HTMLInputElement>(null);

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e: FormEvent) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current?.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Delete Account</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Once your account is deleted, all of its resources and data will be permanently deleted. Before
                    deleting your account, please download any data or information that you wish to retain.
                </p>
            </header>

            <Button onClick={confirmUserDeletion} size="sm" type="submit" color="red" disabled={processing}>Delete
                Account</Button>

            <Dialog open={confirmingUserDeletion} handler={closeModal} size="lg">
                <DialogHeader>
                    Are you sure your want to delete your account?
                </DialogHeader>
                <DialogBody divider>
                    <form onSubmit={deleteUser}>
                        <p className="mt-1 text-sm text-gray-600">
                            Once your account is deleted, all of its resources and data will be permanently deleted.
                            Please
                            enter your password to confirm you would like to permanently delete your account.
                        </p>

                        <div className="mt-6">

                            <Input label="Password"
                                   type="password"
                                   name="password"
                                   value={data.password}
                                   ref={passwordInput}
                                   autoComplete="current-password"
                                   onChange={(e) => setData('password', e.target.value)}
                            />
                            <InputError message={errors.password} className="mt-2"/>
                        </div>

                        <div className="mt-6 flex justify-end">
                            <Button onClick={closeModal} size="sm" variant="outlined" type="submit"
                                    color="gray">Cancel</Button>

                            <Button className="ml-3" onClick={confirmUserDeletion} size="sm" type="submit" color="red"
                                    disabled={processing}>Delete Account</Button>
                        </div>
                    </form>
                </DialogBody>
            </Dialog>
        </section>
    );
}
