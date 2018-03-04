<template>
    <div class="home-main">
        <i-card dis-hover>
            <i-form :model="formItem" :label-width="100">
                <i-tabs :animated="false" :style="{paddingBottom: '40px'}">
                    <i-tab-pane label="基本信息">
                        <i-row :gutter="10" :style="{marginLeft: '50px'}">
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="标题">
                                        <i-input name="name" placeholder=""></i-input>
                                    </i-form-item>
                                </i-col>
                                <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                                    <i-tooltip content="请填写标题！" placement="left">
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
                                <i-col :xs="24" :sm="15" :md="9">
                                    <i-form-item label="栏目">
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
                                <i-col :xs="24" :sm="15" :md="9">
                                    <i-form-item label="分类">
                                        <i-select v-model="formItem.parent" transfer>
                                            <i-option value="0">请选择...</i-option>
                                        </i-select>
                                    </i-form-item>
                                </i-col>
                                <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                                    <i-tooltip content="如果为顶级分类，不需要选择！" placement="left">
                                        <i-icon type="information-circled"></i-icon>
                                    </i-tooltip>
                                </i-col>
                            </i-row>
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="15" :md="9">
                                    <i-form-item label="专题">
                                        <i-select v-model="formItem.parent" transfer>
                                            <i-option value="0">请选择...</i-option>
                                        </i-select>
                                    </i-form-item>
                                </i-col>
                                <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                                    <i-tooltip placement="left">
                                        <i-icon type="information-circled"></i-icon>
                                        <div slot="content">
                                            将内容划分到不同专题内，可对<br/>不同内容进行区分！
                                        </div>
                                    </i-tooltip>
                                </i-col>
                            </i-row>
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="内容摘要">
                                        <i-input type="textarea"
                                                 :autosize="{minRows: 5,maxRows: 8}"></i-input>
                                    </i-form-item>
                                </i-col>
                                <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                                    <i-tooltip placement="left">
                                        <i-icon type="information-circled"></i-icon>
                                        <div slot="content">
                                            请填写内容摘要！
                                        </div>
                                    </i-tooltip>
                                </i-col>
                            </i-row>
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="15" :md="18">
                                    <i-form-item label="正文">
                                        <tinymce-editer></tinymce-editer>
                                    </i-form-item>
                                </i-col>
                                <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                                    <i-tooltip placement="left">
                                        <i-icon type="information-circled"></i-icon>
                                        <div slot="content">
                                            请填写正文内容！
                                        </div>
                                    </i-tooltip>
                                </i-col>
                            </i-row>
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="15" :md="9">
                                    <i-form-item label="">
                                        <i-checkbox>第一张图片自动保存为缩略图</i-checkbox>
                                    </i-form-item>
                                </i-col>
                            </i-row>
                            <!--Tag标签-->
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="15" :md="9">
                                    <i-form-item label="Tag标签">
                                        <i-select v-model="formItem.tags" transfer multiple >
                                            <i-option value="0">请选择...</i-option>
                                            <i-option v-for="item in cityList" :value="item.value" :key="item.label"></i-option>
                                        </i-select>
                                    </i-form-item>
                                </i-col>
                                <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                                    <i-tooltip placement="left">
                                        <i-icon type="information-circled"></i-icon>
                                        <div slot="content">
                                            选择内容所属Tag标签！
                                        </div>
                                    </i-tooltip>
                                </i-col>
                            </i-row>
                            <!--发布时间-->
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="15" :md="9">
                                    <i-form-item label="发布时间">
                                        <DatePicker style="width: 100%" format="yyyy-MM-dd" type="date" placeholder="选择发布时间" placement="top" transfer></DatePicker>
                                    </i-form-item>
                                </i-col>
                                <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                                    <i-tooltip placement="left">
                                        <i-icon type="information-circled"></i-icon>
                                        <div slot="content">
                                            内容发布时间！
                                        </div>
                                    </i-tooltip>
                                </i-col>
                            </i-row>
                            <!--过期时间-->
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="15" :md="9">
                                    <i-form-item label="过期时间">
                                        <DatePicker style="width: 100%" format="yyyy-MM-dd" type="date" placeholder="选择过期时间" placement="top" transfer></DatePicker>
                                    </i-form-item>
                                </i-col>
                                <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                                    <i-tooltip placement="left">
                                        <i-icon type="information-circled"></i-icon>
                                        <div slot="content">
                                            过期内容会被移动到回收站！
                                        </div>
                                    </i-tooltip>
                                </i-col>
                            </i-row>
                            <!--发布作者-->
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="发布作者">
                                        <i-input name="name" placeholder="admin"></i-input>
                                    </i-form-item>
                                </i-col>
                                <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                                    <i-tooltip content="内容发布作者名，可自定义！" placement="left">
                                        <i-icon type="information-circled"></i-icon>
                                    </i-tooltip>
                                </i-col>
                            </i-row>
                            <!--来源-->
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="来源">
                                        <i-input name="name" placeholder=""></i-input>
                                    </i-form-item>
                                </i-col>
                                <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                                    <i-tooltip placement="left">
                                        <i-icon type="information-circled"></i-icon>
                                        <div slot="content">
                                            内容发布来源，可自定义，<br/>默认为本站网址！
                                        </div>
                                    </i-tooltip>
                                </i-col>
                            </i-row>
                            <!--审核-->
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="审核">
                                        <i-radio-group v-model="formItem.isChecked">
                                            <i-radio label="1">审核</i-radio>
                                            <i-radio label="0">不审核</i-radio>
                                        </i-radio-group>
                                    </i-form-item>
                                </i-col>
                                <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                                    <i-tooltip placement="left">
                                        <i-icon type="information-circled"></i-icon>
                                        <div slot="content">
                                            设置内容是否发布，勾选未审核，<br/>不在前台显示，内容在后台列表<br/>可继续编辑。默认为审核状态！
                                        </div>
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
                                <i-col :xs="24" :sm="15" :md="9">
                                    <i-form-item label="">
                                        【根据选择的栏目和分类】此处为扩展字段属性
                                    </i-form-item>
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
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="缩略图">
                                        <i-upload action="http://" accept="image/*">
                                            <i-button type="ghost" icon="ios-cloud-upload-outline">点击上传</i-button>
                                        </i-upload>
                                    </i-form-item>
                                </i-col>
                                <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                                    <i-tooltip placement="left">
                                        <i-icon type="information-circled"></i-icon>
                                        <div slot="content">
                                            内容缩略图！
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
        name: 'add-content',
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
                    isChecked: '1',
                    isShow: '',
                    tags: []
                },
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
        }
    };
</script>

<style scoped>

</style>
