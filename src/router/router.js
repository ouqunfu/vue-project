import Main from '@/views/Main.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: resolve => { require(['@/views/login.vue'], resolve); }
};

export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: resolve => { require(['@/views/error-page/404.vue'], resolve); }
};

export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: resolve => { require(['@//views/error-page/403.vue'], resolve); }
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error-500',
    component: resolve => { require(['@/views/error-page/500.vue'], resolve); }
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    component: Main,
    children: [
        { path: 'home', title: {i18n: 'home'}, name: 'home_index', component: resolve => { require(['@/views/home/home.vue'], resolve); } }
    ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    {
        path: '/',
        icon: 'ios-paper',
        name: 'index',
        title: '首页',
        component: Main,
        children: [
            { path: 'index', title: 'Page', name: 'page_index', component: resolve => { require(['@/views/home/home.vue'], resolve); } }
        ]
    },
    {
        path: '/',
        icon: 'ios-folder',
        name: 'contents',
        title: '内容',
        component: Main,
        children: [
            {
                path: 'columns/list',
                icon: 'ios-paper-outline',
                name: 'columns-list',
                title: '栏目管理',
                component: resolve => { require(['@/views/group/page1/page1.vue'], resolve); }
            },
            {
                path: 'cato/list',
                icon: 'ios-list-outline',
                name: 'cato-list',
                title: '分类管理',
                component: resolve => { require(['@/views/group/page2/page2.vue'], resolve); }
            },
            {
                path: 'subjects/list',
                icon: 'ios-list-outline',
                name: 'subjects-list',
                title: '专题管理',
                component: resolve => { require(['@/views/group/page2/page2.vue'], resolve); }
            },
            {
                path: 'contents/list',
                icon: 'ios-list-outline',
                name: 'contents-list',
                title: '内容管理',
                component: resolve => { require(['@/views/group/page2/page2.vue'], resolve); }
            },
            {
                path: 'url-manage/list',
                icon: 'ios-list-outline',
                name: 'url-manage-list',
                title: 'URL规则',
                component: resolve => { require(['@/views/group/page2/page2.vue'], resolve); }
            },
            {
                path: 'gallery/list-dir',
                icon: 'ios-list-outline',
                name: 'gallery-list-dir',
                title: '图片库',
                component: resolve => { require(['@/views/group/page2/page2.vue'], resolve); }
            },
            {
                path: 'tags/list',
                icon: 'ios-list-outline',
                name: 'tags-list',
                title: '标签管理',
                component: resolve => { require(['@/views/group/page2/page2.vue'], resolve); }
            }
        ]
    },
    {
        path: '/',
        icon: 'ios-folder',
        name: 'users',
        title: '用户',
        component: Main,
        children: [
            {
                path: 'users/list',
                icon: 'ios-paper-outline',
                name: 'users-list',
                title: '用户管理',
                component: resolve => { require(['@/views/group/page1/page1.vue'], resolve); }
            },
            {
                path: 'role/list',
                icon: 'ios-list-outline',
                name: 'role-list',
                title: '角色管理',
                component: resolve => { require(['@/views/group/page2/page2.vue'], resolve); }
            }
        ]
    },
    {
        path: '/',
        icon: 'ios-folder',
        name: 'functions',
        title: '功能',
        component: Main,
        children: [
            {
                path: 'notice/list-notice',
                icon: 'ios-paper-outline',
                name: 'list-notice',
                title: '公告管理',
                component: resolve => { require(['@/views/group/page1/page1.vue'], resolve); }
            },
            {
                path: 'notice/list-message',
                icon: 'ios-list-outline',
                name: 'list-message',
                title: '留言管理',
                component: resolve => { require(['@/views/group/page2/page2.vue'], resolve); }
            },
            {
                path: 'comments/list',
                icon: 'ios-paper-outline',
                name: 'comments',
                title: '评论管理',
                component: resolve => { require(['@/views/group/page1/page1.vue'], resolve); }
            },
            {
                path: 'data-manage/index',
                icon: 'ios-list-outline',
                name: 'data-manage',
                title: '数据管理',
                component: resolve => { require(['@/views/group/page2/page2.vue'], resolve); }
            }
        ]
    },
    {
        path: '/market',
        icon: 'ios-folder',
        name: 'market',
        title: '营销',
        component: Main,
        children: [
            {
                path: 'list-seo-rule',
                icon: 'ios-paper-outline',
                name: 'list-seo-rule',
                title: 'SEO管理',
                component: resolve => { require(['@/views/group/page1/page1.vue'], resolve); }
            },
            {
                path: 'list-links',
                icon: 'ios-list-outline',
                name: 'list-links',
                title: '友链管理',
                component: resolve => { require(['@/views/group/page2/page2.vue'], resolve); }
            }
        ]
    },
    {
        path: '/settings',
        icon: 'ios-folder',
        name: 'settings',
        title: '设置',
        component: Main,
        children: [
            {
                path: 'index',
                icon: 'ios-paper-outline',
                name: 'site-config',
                title: '网站配置',
                component: resolve => { require(['@/views/group/page1/page1.vue'], resolve); }
            },
            {
                path: 'watermark',
                icon: 'ios-list-outline',
                name: 'watermark',
                title: '水印设置',
                component: resolve => { require(['@/views/group/page2/page2.vue'], resolve); }
            },
            {
                path: 'str-filter-list',
                icon: 'ios-paper-outline',
                name: 'str-filter-list',
                title: '敏感词管理',
                component: resolve => { require(['@/views/group/page1/page1.vue'], resolve); }
            },
            {
                path: 'attachment',
                icon: 'ios-list-outline',
                name: 'attachment',
                title: '附件设置',
                component: resolve => { require(['@/views/group/page2/page2.vue'], resolve); }
            }
        ]
    },
    {
        path: '/customs',
        icon: 'ios-folder',
        name: 'customs',
        title: '自定义',
        component: Main,
        children: [
            {
                path: 'list-content-field',
                icon: 'ios-paper-outline',
                name: 'list-content-field',
                title: '内容字段',
                component: resolve => { require(['@/views/group/page1/page1.vue'], resolve); }
            },
            {
                path: 'list-user-field',
                icon: 'ios-list-outline',
                name: 'list-user-field',
                title: '用户字段',
                component: resolve => { require(['@/views/group/page2/page2.vue'], resolve); }
            }
        ]
    }
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    otherRouter,
    ...appRouter,
    page500,
    page403,
    page404
];
