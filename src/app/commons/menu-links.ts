export interface ILink {
    name: string;
    class: string;
    routerLink?: string;
}

export const guestLinks: ILink[] = [
    {
        name: 'Home',
        class: 'nav-item nav-link',
        routerLink: ''
    },
    // {
    //     name: 'Login',
    //     class: 'nav-item nav-link',
    //     routerLink: '/login'
    // }

];

export const registeredLinks: ILink[] = [
    {
        name: 'Home',
        class: 'nav-item nav-link',
        routerLink: ''
    },
    {
        name: 'user',
        class: 'nav-item nav-link',
        routerLink: '/user'
    },
    // {
    //     name: 'Login',
    //     class: 'nav-item nav-link',
    //     routerLink: '/login'
    // }
];
