import { User } from "./User";

export type LoginProps ={
    users:  User[]
    logIn: (value: User) => void 
    setModal: React.Dispatch<React.SetStateAction<string>>
}