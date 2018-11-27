import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import('../views/About.vue')
    },
    {
        path: '/markinfo',
        name: 'markInfo',
        meta: { requiresAuth: true }, // Example to private access
        component: () =>
            import('../views/MarkInfo.vue')
    },
    {
        path: '/agreements',
        name: 'agreements',
        meta: { requiresAuth: true }, // Example to private access
        component: () =>
            import('../views/Agreements/Container.vue'),
        children: [{
                path: '',
                name: 'allAgreements',
                component: () =>
                    import('../views/Agreements/AllAgreements.vue')
            },
            {
                path: '/acepted',
                name: 'acepted',
                component: () =>
                    import('../views/Agreements/Acepted.vue')
            },
            {
                path: '/finalized',
                name: 'finalized',
                component: () =>
                    import('../views/Agreements/Finalized.vue')
            }
        ]
    },
    {
        path: '/form',
        name: 'form',
        meta: { requiresAuth: true }, 
        component: () =>
            import('../views/FormularioAcuerdo.vue')
    },
    {
        path: '/info/:id',
        name: 'info',
        meta: { requiresAuth: true }, 
        component: () =>
            import('../views/Info/Info.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import('../views/Auth/Login.vue')
    },
    {
        path: '/register',
        name: 'Login',
        component: () =>
            import('../views/Auth/Login.vue')
    }
]

const router = new Router({
    routes,
    mode: 'history'
})

// Perms sections
router.beforeEach((to, from, next) => {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // router.app is the app global instance
        var loguedin = router.app.$store.getters['auth/isAuthenticated']
        if (!loguedin) {
            next({
                path: '/',
                query: {
                    redirect: to.fullPath,
                    error: true,
                    msg: 'Not logued in'
                }
            })
        } else {
            next()
        }
    } else {
        next() // make sure to always call next()!
    }
})

export default router;