import { User } from "./User";

export type UserLoginProps = {
        user: User
        logIn: (value: User)=> void
      
}