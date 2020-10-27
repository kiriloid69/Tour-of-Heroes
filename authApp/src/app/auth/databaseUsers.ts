import { User } from './user';

export const USERS: User[] = [
    {
        id: 1,
        username: 'admin',
        email: 'admin@gmail.com',
        password: 'admin',
        verification: true,
    },
    {
        id: 2,
        username: 'moderator',
        email: 'moderator@gmail.com',
        password: 'moderator',
        verification: true,
    },
    {
        id: 3,
        username: 'firstuser',
        email: 'angulardeveloper@gmail.com',
        password: 'Angular',
        verification: false,
    },
    {
        id: 4,
        username: 'kiriloid69',
        email: 'kirill.plyushchai@gmail.com',
        password: 'qwerty123',
        verification: false,
    },
];
