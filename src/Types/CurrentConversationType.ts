import { MessageType } from "./MessageType";

export type CurrentConversationType = {
    userId: number
    participantId: number
    id: number
    messages: MessageType[]
}