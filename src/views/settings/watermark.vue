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
                                        <table class="table pos-table-l" cellspacing="0">
                                            <tbody>
                                                <tr v-for="(item, index) in data">
                                                    <td @click="selectPos(item.num1)" :class="{pos_select: item.num1.isSelected}">{{item.num1.value}}</td>
                                                    <td @click="selectPos(item.num2)" :class="{pos_select: item.num2.isSelected}">{{item.num2.value}}</td>
                                                    <td @click="selectPos(item.num3)" :class="{pos_select: item.num3.isSelected}">{{item.num3.value}}</td>
                                                </tr>
                                            </tbody>
                                        </table>
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
                    isShow: 5
                },
                data: [
                    {
                        num1: {value: 1, isSelected: false},
                        num2: {value: 2, isSelected: false},
                        num3: {value: 3, isSelected: false}
                    },
                    {
                        num1: {value: 4, isSelected: false},
                        num2: {value: 5, isSelected: true},
                        num3: {value: 6, isSelected: false}
                    },
                    {
                        num1: {value: 7, isSelected: false},
                        num2: {value: 8, isSelected: false},
                        num3: {value: 9, isSelected: false}
                    }
                ],
                pos: [
                    {
                        value: 1,
                        label: 1
                    },
                    {
                        value: 2,
                        label: 2
                    },
                    {
                        value: 3,
                        label: 3
                    },
                    {
                        value: 4,
                        label: 4
                    },
                    {
                        value: 5,
                        label: 5
                    },
                    {
                        value: 6,
                        label: 6
                    },
                    {
                        value: 7,
                        label: 7
                    },
                    {
                        value: 8,
                        label: 8
                    },
                    {
                        value: 9,
                        label: 9
                    }
                ]
            };
        },
        methods: {
            init: function () {
                this.data.forEach(function (item) {
                    item.num1.isSelected = this.formItem.isShow === item.num1.value ? true : false;
                    item.num2.isSelected = this.formItem.isShow === item.num2.value ? true : false;
                    item.num3.isSelected = this.formItem.isShow === item.num3.value ? true : false;
                }, this);
            },
            selectPos: function (obj) {
                // 使用v-for 生成table
                this.data.forEach(function (item) {
                    item.num1.isSelected = false;
                    item.num2.isSelected = false;
                    item.num3.isSelected = false;
                });
                obj.isSelected = true;
                this.formItem.isShow = obj.value;
            }
        },
        mounted () {
            this.init();
        },
    };
</script>

<style scoped>
    #pos_table table {
        border-color: #8c8888;
        cursor: pointer;
    }

    .pos_select {
        background-color: yellow;
    }

    .pos_hover {
        background-color: yellow;
    }
    .pos-table-l{
        width: 151px;
        text-align: center;
        border-left: 1px solid #e9eaec;
        border-top: 1px solid #e9eaec;
    }
    .pos-table-l td{
        border-right: 1px solid #e9eaec;
        border-bottom: 1px solid #e9eaec;
        padding: 5px;
        cursor: pointer;
    }
    .pos-table-l td:hover{
        background-color: yellow;
    }
</style>
