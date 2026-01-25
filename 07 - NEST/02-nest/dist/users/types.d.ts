export interface UserLogin {
    email: string;
    password: string;
}
export interface DataUser {
    firstname: string;
    email: string;
    role: string;
}
export interface RequestUser extends Request {
    user: DataUser;
}
