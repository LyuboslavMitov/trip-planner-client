export interface ILink {
    name: string;
    class: string;
    routerLink?: string;
}

export const guestLinks: ILink[] = [
    {
        name: 'Login',
        class: 'nav-item nav-link',
        routerLink: '/login'
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
        name: 'Profile',
        class: 'nav-item nav-link',
        routerLink: '/user'
    },
    {
        name: 'Trips',
        class: 'nav-item nav-link',
        routerLink: '/myTrips'
    },
    {
        name:'Other trips',
        class:'nav-item nav-link',
        routerLink: '/myOtherTrips'
    }, 
    {
        name:'Logout',
        class:'nav-item nav-link',
        routerLink: '/logout'
    }
    // {
    //     name: 'Login',
    //     class: 'nav-item nav-link',
    //     routerLink: '/login'
    // }
];
