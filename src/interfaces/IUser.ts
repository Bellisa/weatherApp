/* Defines the user entity */
export interface IUser {
    id: number;
    userName: string;
    password: string;
    isAdmin: boolean;
    token: string;
}
