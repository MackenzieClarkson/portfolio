import contact from '@/views/contact'
import notfound from '@/views/NotFound'
import site from '@/views/site'
import deny from '@/views/Deny'
import error from '@/views/Error'
import work from '@/views/work'
import dash from '@/views/Dashboard'
export default [

  {
    path: '*',
    meta: {
      public: true,
    },
    redirect: {
      path: '/404'
    }
  },
  {
    path: '/404',
    meta: {
      public: true,
    },
    name: 'NotFound',
    component: notfound
  },
  {
    path: '/403',
    meta: {
      public: true,
    },
    name: 'AccessDenied',
    component: deny
  },
  {
    path: '/500',
    meta: {
      public: true,
    },
    name: 'ServerError',
    component: error
  },
  {
    path: '/',
    meta: { },
    name: 'Root',
    redirect: {
      name: 'Dashboard'
    }
  },
  {
    path: '/dashboard',
    meta: { breadcrumb: true },
    name: 'Dashboard',
    component: dash
  },


  {
    path: '/contact',
    meta: { },
    name: 'contact',
    props: (route) => ({ type: route.query.type }),
    component: contact
  },
  {
    path: '/work',
    meta: { },
    name: 'work',
    props: (route) => ({ type: route.query.type }),
    component: work
  },
  {
    path: '/site',
    meta: { },
    name: 'site',
    props: (route) => ({ type: route.query.type }),
    component: site
    
  },

];
