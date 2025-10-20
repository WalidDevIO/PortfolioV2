export interface Message {
    id?: number;
    name?: string;
    content: string;
    created_at: string;
    published?: boolean;
}
export interface LivreDorProps {
    messages: Message[];
}
export interface MessageProps {
    message: Message;
}
export interface MessageListProps {
    messages: Message[];
}