const Menu =  [
  { header: 'Views' },
  {
    title: 'Dashboard',
    group: 'apps',
    icon: 'dashboard',
    name: 'Dashboard',
  },


  {
    title: 'Full Stack Experience',
    group: 'apps',
    name: 'site',
    component: 'site',
    icon: 'tune',
  },

    {
      title: 'Contact',
      group: 'apps',
      name: 'contact',
      icon: 'email',
    },
  { divider: true },
  { header: 'Extras' },

  {
    title: 'Error Pages',
    group: 'extra',
    icon: 'list',
    items: [
      { name: '404', title: '404', component: 'NotFound' },
      { name: '403', title: '403', component: 'AccessDenied' },
      { name: '500', title: '500', component: 'ServerError' },
    ]
  },
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
