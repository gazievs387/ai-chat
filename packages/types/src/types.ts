


export interface MessageType {
    id: number;
    role: "model" | "user";
    text: string;
}

export interface ChatType {
    id: number;
    title: string;
    model: string;
}
