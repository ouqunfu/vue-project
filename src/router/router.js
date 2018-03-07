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
        {path: 'contents/add-column', title: '添加栏目', name: 'add-column', component: () => import('@/views/contents/add-column.vue')},
        {path: 'contents/add-cato', title: '添加分类', name: 'add-cato', component: () => import('@/views/contents/add-cato.vue')},
        {path: 'contents/add-subject', title: '添加专题', name: 'add-subject', component: () => import('@/views/contents/add-subject.vue')},
        {path: 'contents/add-content', title: '添加内容', name: 'add-content', component: () => import('@/views/contents/add-content.vue')},
        {path: 'contents/add-url', title: '添加URL规则', name: 'add-url', component: () => import('@/views/contents/add-url.vue')},
        {path: 'contents/gallery-list-img', title: '图片列表', name: 'gallery-list-img', component: () => import('@/views/contents/gallery-list-img.vue')},
        {path: 'contents/add-tag', title: '添加标签', name: 'add-tag', component: () => import('@/views/contents/add-tag.vue')},
        {path: 'users/add-user', title: '添加用户', name: 'add-user', component: () => import('@/views/users/add-user.vue')},
        {path: 'users/add-role', title: '添加角色', name: 'add-role', component: () => import('@/views/users/add-role.vue')},
        {path: 'functions/add-notice', title: '添加公告', name: 'add-notice', component: () => import('@/views/functions/add-notice.vue')},
        {path: 'market/add-seo-rule', title: '添加SEO规则', name: 'add-seo-rule', component: () => import('@/views/market/add-seo-rule.vue')},
        {path: 'market/add-link', title: '添加友情链接', name: 'add-link', component: () => import('@/views/market/add-link.vue')},
        {path: 'market/links-cato-list', title: '管理友链分类', name: 'links-cato-list', component: () => import('@/views/market/links-cato-list.vue')},
        {path: 'market/add-links-cato', title: '添加友链分类', name: 'add-links-cato', component: () => import('@/views/market/add-links-cato.vue')},
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
                component: resolve => { require(['@/views/contents/columns-list.vue'], resolve) }
            },
            {
                path: 'cato-list',
                icon: 'ios-list',
                name: 'cato-list',
                title: '分类管理',
                component: resolve => { require(['@/views/contents/cato-list.vue'], resolve) }
            },
            {
                path: 'subjects-list',
                icon: 'folder',
                name: 'subjects-list',
                title: '专题管理',
                component: resolve => { require(['@/views//contents/subjects-list.vue'], resolve) }
            },
            {
                path: 'contents-list',
                icon: 'document-text',
                name: 'contents-list',
                title: '内容管理',
                component: resolve => { require(['@/views/contents/contents-list.vue'], resolve) }
            },
            {
                path: 'url-manage-list',
                icon: 'link',
                name: 'url-manage-list',
                title: 'URL规则',
                component: resolve => { require(['@/views/contents/url-manage-list.vue'], resolve) }
            },
            {
                path: 'gallery-list-dir',
                icon: 'android-image',
                name: 'gallery-list-dir',
                title: '图片库',
                component: resolve => { require(['@/views/contents/gallery-list-dir.vue'], resolve) }
            },
            {
                path: 'tags-list',
                icon: 'ios-pricetags',
                name: 'tags-list',
                title: '标签管理',
                component: resolve => { require(['@/views/contents/tags-list.vue'], resolve) }
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
                component: resolve => { require(['@/views/users/users-list.vue'], resolve) }
            },
            {
                path: 'role-list',
                icon: 'person-stalker',
                name: 'role-list',
                title: '角色管理',
                component: resolve => { require(['@/views/users/role-list.vue'], resolve) }
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
                component: resolve => { require(['@/views/functions/notice-list.vue'], resolve) }
            },
            {
                path: 'list-message',
                icon: 'chatbubble',
                name: 'list-message',
                title: '留言管理',
                component: resolve => { require(['@/views/functions/message-list.vue'], resolve) }
            },
            {
                path: 'comments-list',
                icon: 'chatbox',
                name: 'comments-list',
                title: '评论管理',
                component: resolve => { require(['@/views/functions/comments-list.vue'], resolve) }
            },
            {
                path: 'data-manage',
                icon: 'social-buffer',
                name: 'data-manage',
                title: '数据管理',
                component: resolve => { require(['@/views/functions/data-manage.vue'], resolve) }
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
                component: resolve => { require(['@/views/market/seo-rule-list.vue'], resolve) }
            },
            {
                path: 'list-links',
                icon: 'link',
                name: 'list-links',
                title: '友链管理',
                component: resolve => { require(['@/views/market/links-list.vue'], resolve) }
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
    },
    {
        path: '/component',
        icon: 'social-buffer',
        name: 'component',
        title: '组件',
        component: Main,
        children: [
            {
                path: 'text-editor',
                icon: 'compose',
                name: 'text-editor',
                title: '富文本编辑器',
                component: () => import('@/views/my-components/text-editor/text-editor.vue')
            },
            {
                path: 'md-editor',
                icon: 'pound',
                name: 'md-editor',
                title: 'Markdown编辑器',
                component: () => import('@/views/my-components/markdown-editor/markdown-editor.vue')
            },
            {
                path: 'image-editor',
                icon: 'crop',
                name: 'image-editor',
                title: '图片预览编辑',
                component: () => import('@/views/my-components/image-editor/image-editor.vue')
            },
            {
                path: 'draggable-list',
                icon: 'arrow-move',
                name: 'draggable-list',
                title: '可拖拽列表',
                component: () => import('@/views/my-components/draggable-list/draggable-list.vue')
            },
            {
                path: 'area-linkage',
                icon: 'ios-more',
                name: 'area-linkage',
                title: '城市级联',
                component: () => import('@/views/my-components/area-linkage/area-linkage.vue')
            },
            {
                path: 'file-upload',
                icon: 'android-upload',
                name: 'file-upload',
                title: '文件上传',
                component: () => import('@/views/my-components/file-upload/file-upload.vue')
            },
            {
                path: 'count-to',
                icon: 'arrow-graph-up-right',
                name: 'count-to',
                title: '数字渐变',
                // component: () => import('@/views/my-components/count-to/count-to.vue')
                component: () => import('@/views/my-components/count-to/count-to.vue')
            },
            {
                path: 'split-pane-page',
                icon: 'ios-pause',
                name: 'split-pane-page',
                title: 'split-pane',
                component: () => import('@/views/my-components/split-pane/split-pane-page.vue')
            }
        ]
    },
    {
        path: '/form',
        icon: 'android-checkbox',
        name: 'form',
        title: '表单编辑',
        component: Main,
        children: [
            { path: 'artical-publish', title: '文章发布', name: 'artical-publish', icon: 'compose', component: () => import('@/views/form/article-publish/article-publish.vue') },
            { path: 'workflow', title: '工作流', name: 'workflow', icon: 'arrow-swap', component: () => import('@/views/form/work-flow/work-flow.vue') }

        ]
    },
]

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const testRouter = [
    {
        path: '/access',
        icon: 'key',
        name: 'access',
        title: '权限管理',
        component: Main,
        children: [
            { path: 'index', title: '权限管理', name: 'access_index', component: () => import('@/views/access/access.vue') }
        ]
    },
    {
        path: '/access-test',
        icon: 'lock-combination',
        title: '权限测试页',
        name: 'accesstest',
        access: 0,
        component: Main,
        children: [
            { path: 'index', title: '权限测试页', name: 'accesstest_index', access: 0, component: () => import('@/views/access/access-test.vue') }
        ]
    },
    {
        path: '/international',
        icon: 'earth',
        title: {i18n: 'international'},
        name: 'international',
        component: Main,
        children: [
            { path: 'index', title: {i18n: 'international'}, name: 'international_index', component: () => import('@/views/international/international.vue') }
        ]
    },
    {
        path: '/component',
        icon: 'social-buffer',
        name: 'component',
        title: '组件',
        component: Main,
        children: [
            {
                path: 'text-editor',
                icon: 'compose',
                name: 'text-editor',
                title: '富文本编辑器',
                component: () => import('@/views/my-components/text-editor/text-editor.vue')
            },
            {
                path: 'md-editor',
                icon: 'pound',
                name: 'md-editor',
                title: 'Markdown编辑器',
                component: () => import('@/views/my-components/markdown-editor/markdown-editor.vue')
            },
            {
                path: 'image-editor',
                icon: 'crop',
                name: 'image-editor',
                title: '图片预览编辑',
                component: () => import('@/views/my-components/image-editor/image-editor.vue')
            },
            {
                path: 'draggable-list',
                icon: 'arrow-move',
                name: 'draggable-list',
                title: '可拖拽列表',
                component: () => import('@/views/my-components/draggable-list/draggable-list.vue')
            },
            {
                path: 'area-linkage',
                icon: 'ios-more',
                name: 'area-linkage',
                title: '城市级联',
                component: () => import('@/views/my-components/area-linkage/area-linkage.vue')
            },
            {
                path: 'file-upload',
                icon: 'android-upload',
                name: 'file-upload',
                title: '文件上传',
                component: () => import('@/views/my-components/file-upload/file-upload.vue')
            },
            {
                path: 'count-to',
                icon: 'arrow-graph-up-right',
                name: 'count-to',
                title: '数字渐变',
                // component: () => import('@/views/my-components/count-to/count-to.vue')
                component: () => import('@/views/my-components/count-to/count-to.vue')
            },
            {
                path: 'split-pane-page',
                icon: 'ios-pause',
                name: 'split-pane-page',
                title: 'split-pane',
                component: () => import('@/views/my-components/split-pane/split-pane-page.vue')
            }
        ]
    },
    {
        path: '/form',
        icon: 'android-checkbox',
        name: 'form',
        title: '表单编辑',
        component: Main,
        children: [
            { path: 'artical-publish', title: '文章发布', name: 'artical-publish', icon: 'compose', component: () => import('@/views/form/article-publish/article-publish.vue') },
            { path: 'workflow', title: '工作流', name: 'workflow', icon: 'arrow-swap', component: () => import('@/views/form/work-flow/work-flow.vue') }

        ]
    },
    // {
    //     path: '/charts',
    //     icon: 'ios-analytics',
    //     name: 'charts',
    //     title: '图表',
    //     component: Main,
    //     children: [
    //         { path: 'pie', title: '饼状图', name: 'pie', icon: 'ios-pie', component: resolve => { require('@/views/access/access.vue') },
    //         { path: 'histogram', title: '柱状图', name: 'histogram', icon: 'stats-bars', component: resolve => { require('@/views/access/access.vue') }

    //     ]
    // },
    {
        path: '/tables',
        icon: 'ios-grid-view',
        name: 'tables',
        title: '表格',
        component: Main,
        children: [
            { path: 'dragableTable', title: '可拖拽排序', name: 'dragable-table', icon: 'arrow-move', component: () => import('@/views/tables/dragable-table.vue') },
            { path: 'editableTable', title: '可编辑表格', name: 'editable-table', icon: 'edit', component: () => import('@/views/tables/editable-table.vue') },
            { path: 'searchableTable', title: '可搜索表格', name: 'searchable-table', icon: 'search', component: () => import('@/views/tables/searchable-table.vue') },
            { path: 'exportableTable', title: '表格导出数据', name: 'exportable-table', icon: 'code-download', component: () => import('@/views/tables/exportable-table.vue') },
            { path: 'table2image', title: '表格转图片', name: 'table-to-image', icon: 'images', component: () => import('@/views/tables/table-to-image.vue') }
        ]
    },
    {
        path: '/advanced-router',
        icon: 'ios-infinite',
        name: 'advanced-router',
        title: '高级路由',
        component: Main,
        children: [
            { path: 'mutative-router', title: '动态路由', name: 'mutative-router', icon: 'link', component: () => import('@/views/advanced-router/mutative-router.vue') },
            { path: 'argument-page', title: '带参页面', name: 'argument-page', icon: 'android-send', component: () => import('@/views/advanced-router/argument-page.vue') }
        ]
    },
    {
        path: '/error-page',
        icon: 'android-sad',
        title: '错误页面',
        name: 'errorpage',
        component: Main,
        children: [
            { path: 'index', title: '错误页面', name: 'errorpage_index', component: () => import('@/views/error-page/error-page.vue') }
        ]
    }
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    otherRouter,
    preview,
    locking,
    ...appRouter,
    ...testRouter,
    page500,
    page403,
    page404
]
