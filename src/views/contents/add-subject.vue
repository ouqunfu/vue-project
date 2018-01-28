<template>
    <div class="home-main">
        <i-card dis-hover>
            <i-form :model="formItem" :label-width="100">
                <i-row :style="{marginLeft: '100px'}">
                    <i-row :gutter="10">
                        <i-col :xs="24" :sm="12" :md="9">
                            <i-form-item label="专题名称">
                                <i-input name="name" placeholder=""></i-input>
                            </i-form-item>
                        </i-col>
                        <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                            <i-tooltip content="请填写专题名称！" placement="left">
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
                            <i-form-item label="生成静态">
                                <i-radio-group v-model="formItem.isShow">
                                    <i-radio label="0">不生成</i-radio>
                                    <i-radio label="1">生成</i-radio>
                                </i-radio-group>
                            </i-form-item>
                        </i-col>
                        <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                            <i-tooltip placement="left">
                                <i-icon type="information-circled"></i-icon>
                                <div slot="content">
                                    选择专题是否生成HTML静态页面！
                                </div>
                            </i-tooltip>
                        </i-col>
                    </i-row>
                    <i-row :gutter="10">
                        <i-col :xs="24" :sm="12" :md="9">
                            <i-form-item label="专题图片">
                                <i-upload action="http://" accept="image/*">
                                    <i-button type="ghost" icon="ios-cloud-upload-outline">点击上传</i-button>
                                </i-upload>
                            </i-form-item>
                        </i-col>
                        <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                            <i-tooltip placement="left">
                                <i-icon type="information-circled"></i-icon>
                                <div slot="content">
                                    专题图片！
                                </div>
                            </i-tooltip>
                        </i-col>
                    </i-row>
                    <i-row :gutter="10">
                        <i-col :xs="24" :sm="15" :md="18">
                            <i-form-item label="描述">
                                <tinymce-editer></tinymce-editer>
                            </i-form-item>
                        </i-col>
                        <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                            <i-tooltip placement="left">
                                <i-icon type="information-circled"></i-icon>
                                <div slot="content">
                                    专题描述内容！
                                </div>
                            </i-tooltip>
                        </i-col>
                    </i-row>
                    <i-button type="primary" size="large">提交</i-button>
                </i-row>
            </i-form>
        </i-card>
    </div>
</template>

<script>
    import tinymceEditer from '../common-components/tinymce-editer.vue';

    export default {
        name: 'add-subject',
        components: {
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
                    isShow: '0'
                }
            };
        }
    };
</script>

<style scoped>

</style>
