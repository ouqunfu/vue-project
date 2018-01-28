<template>
    <div class="home-main">
        <i-row :gutter="10">
            <i-col :md="24" :lg="24">
                <i-card dis-hover>
                    <i-row :gutter="10" :style="{marginBottom: '10px'}">
                        <a href="#/contents/add-cato">
                            <i-button type="primary">添加分类</i-button>
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
                                    <i-button>移动到</i-button>
                                </a>
                                <i-select style="width:120px" name="select" transfer placement="top" placeholder="请选择...">
                                    <i-option v-for="item in cityList" :value="item.value" :key="item.label"></i-option>
                                </i-select>
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
        name: 'cato-list',
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
                        title: '分类名称',
                        key: 'name'
                    },
                    {
                        title: '别名',
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
                        name: 'John Brown11',
                        alias: '111'
                    },
                    {
                        id: 2,
                        name: 'John Brown222',
                        alias: '111'
                    },
                    {
                        id: 3,
                        name: 'John Brown333',
                        alias: '111'
                    },
                    {
                        id: 4,
                        name: 'John Brown444',
                        alias: '111'
                    },
                    {
                        id: 3,
                        name: 'John Brown333',
                        alias: '111'
                    }
                ],
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
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
