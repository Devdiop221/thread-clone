import type {DefaultSession} from 'next-auth';

declare module 'next-auth' {
    interface session {
        user: DefaultSession['user'] & {
            id?: string;
        }
    }
}