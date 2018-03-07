<template>
    <div class="home-main">
        <i-card dis-hover>
            <i-form :model="formItem" :label-width="100">
                <i-tabs :animated="false" :style="{paddingBottom: '40px'}">
                    <i-tab-pane label="图片水印">
                        <i-row :gutter="10" :style="{marginLeft: '50px'}">
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="水印开关">
                                        <i-select v-model="formItem.isNav" transfer>
                                            <i-option value="0">开</i-option>
                                            <i-option value="1">关</i-option>
                                        </i-select>
                                    </i-form-item>
                                </i-col>
                            </i-row>
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="最小宽度">
                                        <i-input name="name" placeholder=""></i-input>
                                    </i-form-item>
                                </i-col>
                            </i-row>
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="最小高度">
                                        <i-input name="alias" placeholder=""></i-input>
                                    </i-form-item>
                                </i-col>
                            </i-row>
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="水印路径">
                                        <i-upload action="http://" accept="image/*">
                                            <i-button type="ghost" icon="ios-cloud-upload-outline">点击上传</i-button>
                                        </i-upload>
                                    </i-form-item>
                                </i-col>
                            </i-row>
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="透明度">
                                        <i-input name="name" placeholder=""></i-input>
                                    </i-form-item>
                                </i-col>
                            </i-row>
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="JPEG图片质量">
                                        <i-input name="alias" placeholder=""></i-input>
                                    </i-form-item>
                                </i-col>
                            </i-row>
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="添加位置">
                                        <i-select v-model="formItem.isShow" transfer>
                                            <i-option v-for="item in pos" :value="item.value"
                                                      :key="item.label"></i-option>
                                        </i-select>
                                    </i-form-item>
                                </i-col>
                            </i-row>
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="">
                                        <i-table id="pos_table" style="width: 151px;" :loading="loading" border
                                                 :columns="columns" :show-header="false" :disabled-hover="true"
                                                 :data="data"></i-table>
                                    </i-form-item>
                                </i-col>
                            </i-row>
                        </i-row>
                    </i-tab-pane>
                </i-tabs>
                <i-button type="primary" size="large">提交</i-button>
            </i-form>
        </i-card>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                loading: false,
                formItem: {
                    parent: '0',
                    isNav: '0',
                    isShow: '1'
                },
                columns: [
                    {
                        title: 1,
                        key: 1,
                        width: 50
                    },
                    {
                        title: 2,
                        key: 2,
                        width: 50
                    },
                    {
                        title: 3,
                        key: 3,
                        width: 50
                    }
                ],
                data: [
                    {
                        1: 1,
                        2: 2,
                        3: 3
                    },
                    {
                        1: 4,
                        2: 5,
                        3: 6
                    },
                    {
                        1: 7,
                        2: 8,
                        3: 9
                    }
                ],
                pos: [
                    {
                        value: '1',
                        label: '1'
                    },
                    {
                        value: '2',
                        label: '2'
                    },
                    {
                        value: '3',
                        label: '3'
                    },
                    {
                        value: '4',
                        label: '4'
                    },
                    {
                        value: '5',
                        label: '5'
                    },
                    {
                        value: '6',
                        label: '6'
                    },
                    {
                        value: '7',
                        label: '7'
                    },
                    {
                        value: '8',
                        label: '8'
                    },
                    {
                        value: '9',
                        label: '9'
                    }
                ]
            };
        }
    };
</script>

<style scoped>
    #pos_table table{
        border-color:#8c8888;
        cursor: pointer;
    }
    .pos_select {
        background-color: yellow;
    }
    .pos_hover{background-color: yellow;}
</style>
