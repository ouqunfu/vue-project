<template>
    <div class="home-main">
        <i-row :gutter="10">
            <i-col :md="24" :lg="24">
                <i-card dis-hover>
                    <i-row :gutter="10" :style="{marginBottom: '10px'}">
                        <a href="#/users/add-user">
                            <i-button type="primary">添加用户</i-button>
                        </a>
                    </i-row>
                    <i-row :gutter="10" :style="{marginBottom: '10px'}">
                        <i-table :loading="loading" border :columns="columns" :data="data"></i-table>
                        <div style="margin: 10px 0 10px 0;overflow: hidden">
                            <div style="float: right;">
                                <i-page :total="100" :current="1" show-total></i-page>
                            </div>
                        </div>
                    </i-row>
                </i-card>
            </i-col>
        </i-row>
    </div>
</template>

<script>
    export default {
        name: 'users-list',
        data () {
            return {
                loading: false,
                columns: [
                    {
                        title: 'ID',
                        key: 'id',
                        width: 100
                    },
                    {
                        title: '用户名',
                        key: 'name',
                        width: 200
                    },
                    {
                        title: '昵称',
                        key: 'name',
                        width: 200
                    },
                    {
                        title: '用户组',
                        key: 'examples'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'default',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index);
                                        }
                                    }
                                }, '查看'),
                                h('Button', {
                                    props: {
                                        type: 'default',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {

                                        }
                                    }
                                }, '编辑'),
                                h('Button', {
                                    props: {
                                        type: 'default',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index);
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
                data: [
                    {
                        id: 1,
                        name: 'admin',
                        examples: '超级管理员'
                    }
                ]
            };
        },
        watch: {
            '$route': function () {
                this.fetchData();
            }
        },
        mounted () {
            this.fetchData();
        },
        methods: {
            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data[index].name}<br>Age：${this.data[index].age}<br>Address：${this.data[index].address}`
                });
            },
            remove (index) {
                this.data.splice(index, 1);
            },
            fetchData () {
                console.log(this.$ajax);
                //请求方法，根据实际情况使用
                this.$ajax.get('/sys/user/lists').then((res) => {
                    //res 为成功回调的响应
                    console.log(res.data);
                });
            }
        }
    };
</script>

<style scoped>

</style>
