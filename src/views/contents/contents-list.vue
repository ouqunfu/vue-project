<template>
    <div class="home-main">
        <i-row :gutter="10">
            <i-col :md="24" :lg="24">
                <i-card dis-hover>
                    <i-row :gutter="10" :style="{marginBottom: '10px'}">
                        <i-col :xs="24" :sm="12" :md="15">
                            栏目：
                            <i-select style="width:120px" name="select" transfer placement="bottom"
                                      placeholder="请选择...">
                                <i-option v-for="item in cityList" :value="item.value" :key="item.label"></i-option>
                            </i-select>
                            分类：
                            <i-select style="width:120px" name="select" transfer placement="bottom"
                                      placeholder="请选择...">
                                <i-option v-for="item in cityList" :value="item.value" :key="item.label"></i-option>
                            </i-select>
                            专题：
                            <i-select style="width:120px" name="select" transfer placement="bottom"
                                      placeholder="请选择...">
                                <i-option v-for="item in cityList" :value="item.value" :key="item.label"></i-option>
                            </i-select>
                            标题：
                            <i-input name="name" placeholder="" style="width: 20%;"></i-input>
                            <i-button type="primary">提交</i-button>
                        </i-col>
                        <i-col :xs="24" :sm="12" :md="9">
                            <div style="float: right;">
                                <a href="#/contents/add-content">
                                    <i-button type="primary">添加内容</i-button>
                                </a>
                                <a href="#/contents/add-content">
                                    <i-button type="primary">审核内容</i-button>
                                </a>
                                <a href="#/contents/add-content">
                                    <i-button>回收站</i-button>
                                </a>
                            </div>
                        </i-col>
                    </i-row>
                    <i-row :gutter="10" :style="{marginBottom: '10px'}">
                        <i-table :loading="loading" border :columns="columns" :data="data"></i-table>
                        <div style="margin: 10px 0 10px 0;overflow: hidden">
                            <a href="javascript:void(0)">
                                <i-button>排序</i-button>
                            </a>
                            <a href="javascript:void(0)">
                                <i-button>审核</i-button>
                            </a>
                            <a href="javascript:void(0)">
                                <i-button>删除</i-button>
                            </a>
                            <a href="javascript:void(0)">
                                <i-button>彻底删除</i-button>
                            </a>
                        </div>
                        <div style="margin: 10px 0 10px 0;overflow: hidden">
                            <div style="float: left;">
                                移动内容到：
                                <i-select style="width:120px" name="select" transfer placement="top"
                                          placeholder="请选择...">
                                    <i-option v-for="item in cityList" :value="item.value" :key="item.label"></i-option>
                                </i-select>
                                <a href="javascript:void(0)">
                                    <i-button>移动</i-button>
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
        name: 'contents-list',
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
                        title: '栏目',
                        key: 'column',
                        width: 150
                    },
                    {
                        title: '分类',
                        key: 'cato',
                        width: 150
                    },
                    {
                        title: '标题',
                        key: 'title'
                    },
                    {
                        title: '别名',
                        key: 'alias'
                    },
                    {
                        title: '浏览',
                        key: 'views',
                        width: 70
                    },
                    {
                        title: '审核',
                        key: 'checked',
                        width: 70
                    },
                    {
                        title: '添加时间',
                        key: 'create_time',
                        width: 150
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
                        alias: '111',
                        isNav: '是',
                        create_time: '2017-03-09 21:20:51'
                    },
                    {
                        id: 2,
                        name: 'John Brown222',
                        alias: '222',
                        isNav: '是',
                        create_time: '2017-03-09 21:20:51'
                    },
                    {
                        id: 3,
                        name: 'John Brown333',
                        alias: '333',
                        isNav: '是',
                        create_time: '2017-03-09 21:20:51'
                    },
                    {
                        id: 4,
                        name: 'John Brown444',
                        alias: '44',
                        isNav: '是',
                        create_time: '2017-03-09 21:20:51'
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
