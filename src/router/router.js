import Main from '@/views/Main.vue'

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: () => import('@/views/login.vue')
}

export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: () => import('@/views/error-page/404.vue')
}

export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: () => import('@//views/error-page/403.vue')
}

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error-500',
    component: () => import('@/views/error-page/500.vue')
}

export const preview = {
    path: '/preview',
    name: 'preview',
    component: () => import('@/views/form/article-publish/preview.vue')
}

export const locking = {
    path: '/locking',
    name: 'locking',
    component: () => import('@/views/main-components/lockscreen/components/locking-page.vue')
}

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [
        {path: 'home', title: {i18n: 'home'}, name: 'home_index', component: () => import('@/views/home/home.vue')},
        {
            path: 'ownspace',
            title: '个人中心',
            name: 'ownspace_index',
            component: () => import('@/views/own-space/own-space.vue')
        },
        {
            path: 'order/:order_id',
            title: '订单详情',
            name: 'order-info',
            component: () => import('@/views/advanced-router/component/order-info.vue')
        }, // 用于展示动态路由
        {
            path: 'shopping',
            title: '购物详情',
            name: 'shopping',
            component: () => import('@/views/advanced-router/component/shopping-info.vue')
        }, // 用于展示带参路由
        {path: 'message', title: '消息中心', name: 'message_index', component: () => import('@/views/message/message.vue')},
        {path: 'home-2', title: 'index', name: 'home_index_2', component: () => import('@/views/home/home-2.vue')},
    ]
}

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    {
        path: '/contents',
        icon: 'filing',
        name: 'contents',
        title: '内容',
        component: Main,
        children: [
            {
                path: 'columns-list',
                icon: 'ios-list-outline',
                name: 'columns-list',
                title: '栏目管理',
                component: resolve => { require(['@/views/group/page1/page1.vue'], resolve) }
            },
            {
                path: 'cato-list',
                icon: 'ios-list',
                name: 'cato-list',
                title: '分类管理',
                component: resolve => { require(['@/views/group/page2/page2.vue'], resolve) }
            },
            {
                path: 'subjects-list',
                icon: 'folder',
                name: 'subjects-list',
                title: '专题管理',
                component: resolve => { require(['@/views/group/page2/page2.vue'], resolve) }
            },
            {
                path: 'contents-list',
                icon: 'document-text',
                name: 'contents-list',
                title: '内容管理',
                component: resolve => { require(['@/views/group/page2/page2.vue'], resolve) }
            },
            {
                path: 'url-manage-list',
                icon: 'link',
                name: 'url-manage-list',
                title: 'URL规则',
                component: resolve => { require(['@/views/group/page2/page2.vue'], resolve) }
            },
            {
                path: 'gallery-list-dir',
                icon: 'android-image',
                name: 'gallery-list-dir',
                title: '图片库',
                component: resolve => { require(['@/views/group/page2/page2.vue'], resolve) }
            },
            {
                path: 'tags-list',
                icon: 'ios-pricetags',
                name: 'tags-list',
                title: '标签管理',
                component: resolve => { require(['@/views/group/page2/page2.vue'], resolve) }
            }
        ]
    },
    {
        path: '/users',
        icon: 'ios-people',
        name: 'users',
        title: '用户',
        component: Main,
        children: [
            {
                path: 'users-list',
                icon: 'ios-personadd',
                name: 'users-list',
                title: '用户管理',
                component: resolve => { require(['@/views/group/page1/page1.vue'], resolve) }
            },
            {
                path: 'role-list',
                icon: 'person-stalker',
                name: 'role-list',
                title: '角色管理',
                component: resolve => { require(['@/views/group/page2/page2.vue'], resolve) }
            }
        ]
    },
    {
        path: '/functions',
        icon: 'android-apps',
        name: 'functions',
        title: '功能',
        component: Main,
        children: [
            {
                path: 'list-notice',
                icon: 'clipboard',
                name: 'list-notice',
                title: '公告管理',
                component: resolve => { require(['@/views/group/page1/page1.vue'], resolve) }
            },
            {
                path: 'list-message',
                icon: 'chatbubble',
                name: 'list-message',
                title: '留言管理',
                component: resolve => { require(['@/views/group/page2/page2.vue'], resolve) }
            },
            {
                path: 'comments-list',
                icon: 'chatbox',
                name: 'comments-list',
                title: '评论管理',
                component: resolve => { require(['@/views/group/page1/page1.vue'], resolve) }
            },
            {
                path: 'data-manage',
                icon: 'social-buffer',
                name: 'data-manage',
                title: '数据管理',
                component: resolve => { require(['@/views/group/page2/page2.vue'], resolve) }
            }
        ]
    },
    {
        path: '/market',
        icon: 'connection-bars',
        name: 'market',
        title: '营销',
        component: Main,
        children: [
            {
                path: 'list-seo-rule',
                icon: 'arrow-graph-up-right',
                name: 'list-seo-rule',
                title: 'SEO管理',
                component: resolve => { require(['@/views/group/page1/page1.vue'], resolve) }
            },
            {
                path: 'list-links',
                icon: 'link',
                name: 'list-links',
                title: '友链管理',
                component: resolve => { require(['@/views/group/page2/page2.vue'], resolve) }
            }
        ]
    },
    {
        path: '/settings',
        icon: 'android-settings',
        name: 'settings',
        title: '设置',
        component: Main,
        children: [
            {
                path: 'site-config',
                icon: 'ios-world-outline',
                name: 'site-config',
                title: '网站配置',
                component: resolve => { require(['@/views/group/page1/page1.vue'], resolve) }
            },
            {
                path: 'watermark',
                icon: 'bookmark',
                name: 'watermark',
                title: '水印设置',
                component: resolve => { require(['@/views/group/page2/page2.vue'], resolve) }
            },
            {
                path: 'str-filter-list',
                icon: 'ios-color-filter-outline',
                name: 'str-filter-list',
                title: '敏感词管理',
                component: resolve => { require(['@/views/group/page1/page1.vue'], resolve) }
            },
            {
                path: 'attachment',
                icon: 'android-attach',
                name: 'attachment',
                title: '附件设置',
                component: resolve => { require(['@/views/group/page2/page2.vue'], resolve) }
            }
        ]
    },
    {
        path: '/customs',
        icon: 'ios-compose-outline',
        name: 'customs',
        title: '自定义',
        component: Main,
        children: [
            {
                path: 'list-content-field',
                icon: 'edit',
                name: 'list-content-field',
                title: '内容字段',
                component: resolve => { require(['@/views/group/page1/page1.vue'], resolve) }
            },
            {
                path: 'list-user-field',
                icon: 'edit',
                name: 'list-user-field',
                title: '用户字段',
                component: resolve => { require(['@/views/group/page2/page2.vue'], resolve) }
            }
        ]
    }
]

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    otherRouter,
    preview,
    locking,
    ...appRouter,
    page500,
    page403,
    page404
]
