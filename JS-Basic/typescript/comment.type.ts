export interface Comment{
    id: number ;
    user_ud:number;
    post_id: number;
    parent_id?:number;
    content: string;
    created_at: Date;
    update_at: Date;
}
export interface CreateCommentDTO{
    user_id: number;
    post_id:number;
    patrent_id?: number;
    content : string;
}
export interface updatecommentDTO{
    content: string;
}