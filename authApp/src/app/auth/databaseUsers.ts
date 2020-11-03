import { User } from './user';

export const USERS: User[] = [
    {
        id: 1,
        username: 'admin',
        email: 'admin@gmail.com',
        password: 'admin',
        age: 20,
        department: 'IT',
        teamlead: false,
        verification: true,
    },
    {
        id: 2,
        username: 'moderator',
        email: 'moderator@gmail.com',
        password: 'moderator',
        age: 32,
        department: 'IT',
        teamlead: false,
        verification: true,
    },
    {
        id: 3,
        username: 'teamlead',
        email: 'angulardeveloper@gmail.com',
        password: 'Angular',
        age: 25,
        department: 'Marketing',
        teamlead: true,
        verification: true,
    },
    {
        id: 4,
        username: 'kiriloid69',
        email: 'kirill.plyushchai@gmail.com',
        password: 'qwerty123',
        age: 20,
        department: '',
        teamlead: false,
        verification: true,
    },
    {
        id: 5,
        username: 'natali.daineko',
        email: 'natalie.daineko@gmail.com',
        password: '83ZuDuRu',
        age: 20,
        department: 'Managment',
        teamlead: true,
        verification: true,
    },
    {
        id: 6,
        username: 'kirill',
        email: 'kirill@gmail.com',
        password: '123',
        age: 37,
        department: 'Production',
        teamlead: false,
        verification: false,
    },
    {
        id: 7,
        username: 'Dmitry',
        email: 'dima.durov@mail.ru',
        password: '1488',
        age: 31,
        department: 'HR',
        teamlead: true,
        verification: true,
    },
    {
        id: 8,
        username: 'sasha',
        email: 'sasha.er@gmail.com',
        password: 'sasha123',
        age: 36,
        department: 'Managment',
        teamlead: false,
        verification: true,
    },
    {
        id: 9,
        username: 'VladIsLove',
        email: 'vlad.fed@gmail.com',
        password: 'vladfed',
        age: 24,
        department: '',
        teamlead: false,
        verification: true,
    },
    {
        id: 10,
        username: 'Anastasiya',
        email: 'nasty-wiki@gmail.com',
        password: 'nastya123',
        age: 22,
        department: 'Production',
        teamlead: true,
        verification: true,
    }
];


// проверяять по никнейму не зареган ли пользователь так же и с почтой
// не пропускть если не заполнены requared поля
// фильтрация по полям
// сортировка 
// 