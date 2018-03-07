<template>
    <div class="home-main">
        <i-row :gutter="10">
            <i-col :md="24" :lg="24">
                <i-card dis-hover>
                    <i-row :gutter="10" :style="{marginBottom: '10px'}">
                        <a href="#/market/add-link">
                            <i-button type="primary">添加友情链接</i-button>
                        </a>
                        <a href="#/market/links-cato-list">
                            <i-button>管理友链分类</i-button>
                        </a>
                    </i-row>
                    <i-row :gutter="10" :style="{marginBottom: '10px'}">
                        <i-table :loading="loading" border :columns="columns" :data="data"></i-table>
                        <div style="margin: 10px 0 10px 0;overflow: hidden">
                            <div style="float: left;">
                                <a href="javascript:void(0)">
                                    <i-button>排序</i-button>
                                </a>
                                <a href="javascript:void(0)">
                                    <i-button>删除</i-button>
                                </a>
                            </div>
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
        name: 'links-list',
        data () {
            return {
                loading: false,
                columns: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '排序',
                        key: 'sort',
                        width: 120,
                        render: (h, params) => {
                            return h('div', [
                                h('input', {
                                    props: {
                                        type: 'default'
                                    },
                                    style: {
                                        width: '60px',
                                        height: '30px',
                                        'padding-left': '5px'
                                    },
                                    attrs: {
                                        value: 0,
                                        type: 'number',
                                        min: 0
                                    }
                                })
                            ]);
                        }
                    },
                    {
                        title: 'ID',
                        key: 'id',
                        width: 100
                    },
                    {
                        title: '名称',
                        key: 'name'
                    },
                    {
                        title: '图片Logo',
                        key: 'alias'
                    },
                    {
                        title: '所属分类',
                        key: 'alias'
                    },
                    {
                        title: '链接类型',
                        key: 'type'
                    },
                    {
                        title: '状态',
                        key: 'alias'
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
                        alias: '111',
                        type: '文字链接',
                        status: '通过'
                    },
                    {
                        id: 2,
                        name: 'John Brown222',
                        alias: '222',
                        type: 'logo链接',
                        status: '通过'
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
