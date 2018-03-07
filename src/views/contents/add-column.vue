<template>
    <div class="home-main">
        <i-card dis-hover>
            <i-form :model="formItem" :label-width="100">
                <i-tabs :animated="false" :style="{paddingBottom: '40px'}">
                    <i-tab-pane label="基本信息">
                        <i-row :gutter="10" :style="{marginLeft: '50px'}">
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="15" :md="9">
                                    <i-form-item label="所属栏目">
                                        <i-select v-model="formItem.parent" transfer>
                                            <i-option value="0">请选择...</i-option>
                                        </i-select>
                                    </i-form-item>
                                </i-col>
                                <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                                    <i-tooltip content="如果为一级栏目，不需要选择！" placement="left">
                                        <i-icon type="information-circled"></i-icon>
                                    </i-tooltip>
                                </i-col>
                            </i-row>
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="栏目名称">
                                        <i-input name="name" placeholder=""></i-input>
                                    </i-form-item>
                                </i-col>
                                <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                                    <i-tooltip content="请填写栏目名称！" placement="left">
                                        <i-icon type="information-circled"></i-icon>
                                    </i-tooltip>
                                </i-col>
                            </i-row>
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="别名">
                                        <i-input name="alias" placeholder=""></i-input>
                                    </i-form-item>
                                </i-col>
                                <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                                    <i-tooltip placement="left">
                                        <i-icon type="information-circled"></i-icon>
                                        <div slot="content">
                                            <p>“别名”是在URL中使用的别称，它可以令URL<br/>更美观。
                                                通常使用小写，只能包含字母，<br/>数字和连字符（-）。</p>
                                        </div>
                                    </i-tooltip>
                                </i-col>
                            </i-row>
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="在导航中显示">
                                        <i-select v-model="formItem.isNav" transfer>
                                            <i-option value="1">显示</i-option>
                                            <i-option value="0">不显示</i-option>
                                        </i-select>
                                    </i-form-item>
                                </i-col>
                                <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                                    <i-tooltip content="是否在导航栏中显示！" placement="left">
                                        <i-icon type="information-circled"></i-icon>
                                    </i-tooltip>
                                </i-col>
                            </i-row>
                        </i-row>
                    </i-tab-pane>
                    <i-tab-pane label="SEO信息">
                        <i-row :gutter="10" :style="{marginLeft: '50px'}">
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="页面标题">
                                        <i-input name="name" placeholder=""></i-input>
                                    </i-form-item>
                                </i-col>
                                <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                                    <i-tooltip placement="left">
                                        <i-icon type="information-circled"></i-icon>
                                        <div slot="content">
                                            可填写不同于内容名称的关键词，有利于<br/>搜索优化！
                                        </div>
                                    </i-tooltip>
                                </i-col>
                            </i-row>
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="关键词">
                                        <i-input name="name" placeholder=""></i-input>
                                    </i-form-item>
                                </i-col>
                                <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                                    <i-tooltip placement="left">
                                        <i-icon type="information-circled"></i-icon>
                                        <div slot="content">
                                            网页META信息中的keywords信息，<br/>可填写与内容相关的关键词，以英文<br/>逗号相隔，有利于搜索优化！
                                        </div>
                                    </i-tooltip>
                                </i-col>
                            </i-row>
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="页面描述">
                                        <i-input name="name" type="textarea"
                                                 :autosize="{minRows: 2,maxRows: 5}"></i-input>
                                    </i-form-item>
                                </i-col>
                                <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                                    <i-tooltip placement="left">
                                        <i-icon type="information-circled"></i-icon>
                                        <div slot="content">
                                            网页META信息中的description信息，<br/>可填写与内容相关的简介，有利于<br/>搜索优化！
                                        </div>
                                    </i-tooltip>
                                </i-col>
                            </i-row>
                        </i-row>
                    </i-tab-pane>
                    <i-tab-pane label="属性设置">
                        <i-row :gutter="10" :style="{marginLeft: '50px'}">
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="是否启用">
                                        <i-radio-group v-model="formItem.isShow">
                                            <i-radio label="1">正常显示</i-radio>
                                            <i-radio label="0">禁用</i-radio>
                                        </i-radio-group>
                                    </i-form-item>
                                </i-col>
                                <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                                    <i-tooltip placement="left">
                                        <i-icon type="information-circled"></i-icon>
                                        <div slot="content">
                                            选择栏目是否启用！
                                        </div>
                                    </i-tooltip>
                                </i-col>
                            </i-row>
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="外部链接">
                                        <i-input name="name" placeholder=""></i-input>
                                    </i-form-item>
                                </i-col>
                                <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                                    <i-tooltip placement="left">
                                        <i-icon type="information-circled"></i-icon>
                                        <div slot="content">
                                            填写外部链接地址后，访问栏目<br/>将跳转到填写的地址！
                                        </div>
                                    </i-tooltip>
                                </i-col>
                            </i-row>
                        </i-row>
                    </i-tab-pane>
                    <i-tab-pane label="扩展信息">
                        <i-row :gutter="10" :style="{marginLeft: '50px'}">
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="15" :md="18">
                                    <i-form-item label="封面内容">
                                        <tinymce-editer></tinymce-editer>
                                    </i-form-item>
                                </i-col>
                                <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                                    <i-tooltip placement="left">
                                        <i-icon type="information-circled"></i-icon>
                                        <div slot="content">
                                            如使用设置栏目封面，请在模板处选择<br/>本栏目应用list_page.html模板！
                                        </div>
                                    </i-tooltip>
                                </i-col>
                            </i-row>
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="栏目说明图片">
                                        <i-upload action="http://" accept="image/*">
                                            <i-button type="ghost" icon="ios-cloud-upload-outline">点击上传</i-button>
                                        </i-upload>
                                    </i-form-item>
                                </i-col>
                                <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                                    <i-tooltip placement="left">
                                        <i-icon type="information-circled"></i-icon>
                                        <div slot="content">
                                            栏目banner功能,需在模板中<br/>调用显示！
                                        </div>
                                    </i-tooltip>
                                </i-col>
                            </i-row>
                        </i-row>
                    </i-tab-pane>
                    <i-tab-pane label="权限设置">
                        <auth></auth>
                    </i-tab-pane>
                </i-tabs>
                <i-button type="primary" size="large">提交</i-button>
            </i-form>
        </i-card>
    </div>
</template>

<script>
    import auth from '../common-components/auth.vue';
    import tinymceEditer from '../common-components/tinymce-editer.vue';

    export default {
        name: 'add-column',
        components: {
            auth,
            tinymceEditer
        },
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
                ],
                formItem: {
                    parent: '0',
                    isNav: '1',
                    isShow: ''
                }
            };
        }
    };
</script>

<style scoped>

</style>
