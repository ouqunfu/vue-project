<template>
    <i-row :gutter="10" :style="{marginLeft: '50px'}">
        <i-row :gutter="10" :style="{marginBottom: '20px'}">
            <i-col :xs="24" :sm="24" :md="20">
                <Alert type="warning" show-icon closable>
                    勾选为该用户组禁止浏览或下载
                </Alert>
            </i-col>
        </i-row>
        <i-row :gutter="10">
            <i-col :xs="24" :sm="24" :md="20">
                <i-table border :columns="columns" :data="data"></i-table>
            </i-col>
        </i-row>
    </i-row>
</template>

<script>
    export default {
        name: 'auth',
        data () {
            return {
                columns: [
                    {
                        title: '用户组',
                        key: 'userGroup'
                    },
                    {
                        title: '浏览',
                        key: 'browse',
                        render: (h, params) => {
                            return h('div', [
                                h('checkbox', {
                                    props: {
                                        type: 'default'
                                    },
                                    style: {
                                        width: '60px',
                                        height: '30px',
                                        'padding-left': '5px'
                                    }
                                })
                            ]);
                        }
                    },
                    {
                        title: '下载',
                        type: 'download',
                        render: (h, params) => {
                            return h('div', [
                                h('checkbox', {
                                    props: {
                                        type: 'default'
                                    },
                                    style: {
                                        width: '60px',
                                        height: '30px',
                                        'padding-left': '5px'
                                    }
                                })
                            ]);
                        }
                    }
                ],
                data: [
                    {
                        userGroup: '管理员'
                    },
                    {
                        userGroup: '文章管理员'
                    },
                    {
                        userGroup: '一般会员'
                    },
                    {
                        userGroup: '游客'
                    }
                ]
            };
        }
    };
</script>

<style scoped>

</style>
