import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    meta: { scrollToTop: true },
    component: Home,
    children: [{
            path: 'about',
            component: () =>
                import ('../views/About.vue'),
            meta: { scrollToTop: true }
        }, {
            path: 'article',
            component: () =>
                import ('@/components/Article.vue')
        },
        {
            path: '/bar',
            component: () =>
                import ('@/components/Bar.vue'),
            meta: { scrollToTop: true }
        }
    ]
}, ]

const scrollBehavior = function(to, from, savedPosition) {
    if (savedPosition) {
        // savedPosition is only available for popstate navigations.
        return savedPosition
    } else {
        const position = {
            behavior: 'smooth',
        }

        // scroll to anchor by returning the selector
        if (to.hash) {
            position.selector = to.hash

            // specify offset of the element
            // if (to.hash === '#anchor1') {
            //     position.offset = { y: 100 }
            // }

            // bypass #1number check
            if (/^#\d/.test(to.hash) || document.querySelector(to.hash)) {
                return position
            }

            // if the returned position is falsy or an empty object,
            // will retain current scroll position.
            return false
        }

        return new Promise(resolve => {
            // check if any matched route config has meta that requires scrolling to top
            if (to.matched.some(m => m.meta.scrollToTop)) {
                // coords will be used if no selector is provided,
                // or if the selector didn't match any element.
                position.x = 0
                position.y = 0
            }

            resolve(position)
        })
    }
}

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior,
    routes
})

router.beforeEach((to, from, next) => {
    console.log('เร้าตู่', to)
    next()
})

export default router