const Menu = [
    {
        title: 'Dashboard', group: 'breadcrumb',icon: '', name: 'Dashboard',href: '/dashboard',
        items: [
            {title: 'Jobs',     group: 'breadcrumb', icon: '', target: '_blank', name: 'Jobs',     href: '/dashboard/jobs'},
            {title: 'Invoices', group: 'breadcrumb', icon: '', target: '_blank', name: 'Invoices', href: '/dashboard/invoices'},
            {title: 'Settings', group: 'breadcrumb', icon: '', target: '_blank', name: 'Settings', href: '/dashboard/account'},
        ]
    },
    {divider: true},
];
// reorder menu
Menu.forEach((item) => {
    if (item.items) {
        item.items.sort((x, y) => {
            let textA = x.title.toUpperCase();
            let textB = y.title.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
    }
});

export default Menu;
