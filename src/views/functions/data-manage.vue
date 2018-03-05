<template>
    <div class="home-main">
        <i-card dis-hover>
            <i-tabs :animated="false" :style="{paddingBottom: '40px'}">
                <i-tab-pane label="备份数据库">
                    <i-form :model="formItem" :label-width="100">
                        <i-row :gutter="10" :style="{marginLeft: '20px', marginRight: '20px'}">
                            <i-row :gutter="10" :style="{marginBottom: '10px'}">
                                <i-alert type="warning" show-icon closable>
                                    欢迎来到数据库备份页面。您可以对网站数据备份，数据将保存在data文件夹中。
                                </i-alert>
                            </i-row>
                            <i-row :gutter="10" :style="{marginBottom: '10px'}">
                                <i-table :loading="loading" border :columns="columns" :data="data"></i-table>
                            </i-row>
                            <i-row :gutter="10" :style="{marginBottom: '10px'}">
                                <div style="margin: 10px 0 10px 0px;overflow: hidden">
                                    <i-select style="width:150px" name="select" transfer placement="bottom"
                                              placeholder="请选择分卷大小...">
                                        <i-option v-for="item in cityList" :value="item.value"
                                                  :key="item.label"></i-option>
                                    </i-select>
                                </div>
                            </i-row>
                            <i-row :gutter="10" :style="{marginBottom: '10px'}">
                                <i-button type="primary" size="large">备份</i-button>
                            </i-row>
                        </i-row>
                    </i-form>
                </i-tab-pane>
                <i-tab-pane label="还原数据库">
                    <i-row :gutter="10" :style="{marginLeft: '20px', marginRight: '20px'}">
                        <i-row :gutter="10" :style="{marginBottom: '10px'}">
                            <i-table :loading="loading" border :columns="restore_columns" :data="restore_data"></i-table>
                        </i-row>
                        <i-row :gutter="10" :style="{marginBottom: '10px'}">
                            <i-button type="primary" size="large">删除</i-button>
                        </i-row>
                    </i-row>
                </i-tab-pane>
                <i-tab-pane label="日志管理">
                    <i-row :gutter="10" :style="{marginLeft: '20px', marginRight: '20px'}">
                        <i-row :gutter="10" :style="{marginBottom: '10px'}">
                            <i-table :loading="loading" border :columns="log_columns" :data="log_data"></i-table>
                            <div style="margin: 10px 0 10px 0;overflow: hidden">
                                <div style="float: left;">
                                    <a href="javascript:void(0)">
                                        <i-button>清空</i-button>
                                    </a>
                                </div>
                                <div style="float: right;">
                                    <i-page :total="50" :current="1" show-total></i-page>
                                </div>
                            </div>
                        </i-row>
                    </i-row>
                </i-tab-pane>
                <i-tab-pane label="备份整站">
                    <i-row :gutter="10" :style="{marginLeft: '20px', marginRight: '20px'}">
                        <i-row :gutter="10" :style="{marginBottom: '10px'}">
                            <a href="javascript:void(0)">
                                <i-button type="primary">开始备份</i-button>
                            </a>
                        </i-row>
                        <i-row :gutter="10" :style="{marginBottom: '10px'}">
                            <i-table :loading="loading" border :columns="backup_columns" :data="backup_data"></i-table>
                            <div style="margin: 10px 0 10px 0;overflow: hidden">
                                <div style="float: left;">
                                    <a href="javascript:void(0)">
                                        <i-button>删除</i-button>
                                    </a>
                                </div>
                                <div style="float: right;">
                                    <i-page :total="50" :current="1" show-total></i-page>
                                </div>
                            </div>
                        </i-row>
                    </i-row>
                </i-tab-pane>
            </i-tabs>

        </i-card>
    </div>
</template>

<script>
    export default {
        name: 'data-manage',
        data () {
            return {
                formItem: {
                    parent: '0',
                    isNav: '1',
                    isShow: ''
                },
                loading: false,
                columns: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '表名',
                        key: 'name'
                    },
                    {
                        title: '记录数',
                        key: 'alias'
                    },
                    {
                        title: '大小',
                        key: 'size'
                    }
                ],
                data: [
                    {
                        size: '0k',
                        name: 'ws_user',
                        alias: '111'
                    },
                    {
                        size: '0k',
                        name: 'ws_post',
                        alias: '111'
                    }
                ],
                restore_columns: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '档案',
                        key: 'name'
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
                                }, '还原')
                            ]);
                        }
                    }
                ],
                restore_data: [
                    {
                        name: 'backup'
                    },
                    {
                        name: 'message'
                    }
                ],
                log_columns: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: 'ID',
                        key: 'id'
                    },
                    {
                        title: '用户名',
                        key: 'name'
                    },
                    {
                        title: '操作时间',
                        key: 'op_time'
                    },
                    {
                        title: 'IP',
                        key: 'ip'
                    },
                    {
                        title: '操作方法',
                        key: 'method'
                    },
                    {
                        title: '说明',
                        key: 'des'
                    }
                ],
                log_data: [
                    {
                        id: '1',
                        op_time: '2018-03-05 14:11:31',
                        name: '',
                        ip: '192.168.139.1',
                        method: '后台登录',
                        des: ''
                    },
                    {
                        id: '2',
                        op_time: '2018-03-05 14:11:21',
                        name: '',
                        ip: '192.168.139.1',
                        method: '后台登录',
                        des: ''
                    }
                ],
                backup_columns: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '档案',
                        key: 'name'
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
                                }, '下载')
                            ]);
                        }
                    }
                ],
                backup_data: [
                    {
                        name: '20180305170635z6xnn184.zip'
                    }
                ],
                cityList: [
                    {
                        value: '1M',
                        label: '1M'
                    },
                    {
                        value: '2M',
                        label: '2M'
                    },
                    {
                        value: '5M',
                        label: '5M'
                    },
                    {
                        value: '10M',
                        label: '10M'
                    }
                ]
            };
        }
    };
</script>

<style scoped>

</style>
