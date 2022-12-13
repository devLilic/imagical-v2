import React from "react";

interface IInputError {
    message: string,
    className: string
}

export default function InputError({message, className = ''}: IInputError) {
    return message ? <p className={'text-sm text-red-600 ' + className}>{message}</p> : null;
}
