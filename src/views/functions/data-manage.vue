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
                </i-tab-pane>
                <i-tab-pane label="日志管理">
                </i-tab-pane>
                <i-tab-pane label="备份整站">
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
