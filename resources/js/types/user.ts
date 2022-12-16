interface IUser {
    id: number
    name: string
    email: string
    email_verified_at: Date | null
    created_at: Date
    updated_at: Date
}

interface IUserCredentials {
    name: string
    email: string
    password: string
    password_confirmation?: string
}
