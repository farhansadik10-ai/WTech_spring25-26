export interface user {
    id: number;
    name: string;
    email : string;
    password : string;
    role : string;
    photo_url ?: string;
    login_at? : Date;
    logout_at? : Date;
    created_at : Date;
    update_at : Date;
}
export interface CreateUserDTO {
    name : string;
    email: string;
    password: string;
    role: string;
    photo_url?: string;
}
export interface LoginUserDTO{
    email: string;
    password: string;
}