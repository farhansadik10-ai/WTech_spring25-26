export interface Alumni {
    user_id: number;
    id: number;
    graduation_year?: number;
    degree?: string;
    current_company?:string;
    job_title?: string;
    linkedin_id? : string;
    experience?: string;
    bio?: string;
    profile_picture_url?: string;
    update_at:Date;
    created_at:Date;


}
export interface createAlumniDTO{
    user_id: number;
    graduation_yeatr?: number;
    degree?: string;
    current_company?:string ;
    job_title?: string;
    linkinedin_id? :string;
    expariance?: string;
    bio?: string;
    profile_picture_url?: string;
}
export interface UpdateAlumniDTO{
    graduation_year?: number;
    degree?: string;
    department?:string;
    current_company?:string;
    job_title?: string;
    bio?: string;
    profaile_picture_url: string;
    experience?: string;
}