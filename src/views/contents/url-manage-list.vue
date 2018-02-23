<template>
    <div class="home-main">
        <i-row :gutter="10">
            <i-col :md="24" :lg="24">
                <i-card dis-hover>
                    <i-row :gutter="10" :style="{marginBottom: '10px'}">
                        <a href="#/contents/add-url">
                            <i-button type="primary">添加URL规则</i-button>
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
        name: 'url-manage-list',
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
                        title: '所属模块',
                        key: 'name',
                        width: 150
                    },
                    {
                        title: '名称',
                        key: 'name',
                        width: 150
                    },
                    {
                        title: 'URL示例',
                        key: 'examples'
                    },
                    {
                        title: 'URL规则',
                        key: 'rule'
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
                        name: 'John Brown11',
                        examples: '/news/china/1000.html',
                        rule: '{$categorydir}{$catdir}/index.html|{$categorydir}{$catdir}/{$page}.html'
                    },
                    {
                        id: 2,
                        name: 'John Brown222',
                        examples: 'list-1-1-1.html',
                        rule: 'list-{$catid}-{$id}-{$page}.html'
                    }
                ]
            };
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
            }
        }
    };
</script>

<style scoped>

</style>
