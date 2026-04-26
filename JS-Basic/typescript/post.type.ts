export interface Post{
    id: number;
    user_id: number;
    caption?: string;
    image_url?: string;
     created_at: Date;
    update_at: Date;
}
export interface CreatePostDTo{
    user_id: number;
    captin?: string;
    media_url?: string;

}
export interface UpdatePostDTO{
    caption?: string;
    media_ulr?: string;
}