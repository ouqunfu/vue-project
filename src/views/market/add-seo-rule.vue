<template>
    <div class="home-main">
        <i-card dis-hover>
            <i-form :model="formItem" :label-width="100">
                <i-row :style="{marginLeft: '100px'}">
                    <!--seo规则名称-->
                    <i-row :gutter="10">
                        <i-col :xs="24" :sm="12" :md="9">
                            <i-form-item label="名称">
                                <i-input name="name" placeholder=""></i-input>
                            </i-form-item>
                        </i-col>
                        <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                            <i-tooltip content="请填写SEO规则名称！" placement="left">
                                <i-icon type="information-circled"></i-icon>
                            </i-tooltip>
                        </i-col>
                    </i-row>
                    <!--seo规则所属模块-->
                    <i-row :gutter="10">
                        <i-col :xs="24" :sm="12" :md="9">
                            <i-form-item label="所属模块">
                                <i-select v-model="formItem.parent" transfer>
                                    <i-option value="0">请选择...</i-option>
                                </i-select>
                            </i-form-item>
                        </i-col>
                        <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                            <i-tooltip placement="left">
                                <i-icon type="information-circled"></i-icon>
                                <div slot="content">
                                    <p>请选择SEO规则所属模块！</p>
                                </div>
                            </i-tooltip>
                        </i-col>
                    </i-row>
                    <!--seo规则类型-->
                    <i-row :gutter="10">
                        <i-col :xs="24" :sm="12" :md="9">
                            <i-form-item label="类型">
                                <i-select v-model="formItem.parent" transfer>
                                    <i-option value="0">请选择...</i-option>
                                </i-select>
                            </i-form-item>
                        </i-col>
                        <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                            <i-tooltip placement="left">
                                <i-icon type="information-circled"></i-icon>
                                <div slot="content">
                                    <p>请选择SEO规则所属模块！</p>
                                </div>
                            </i-tooltip>
                        </i-col>
                    </i-row>
                    <!--示例-->
                    <i-row :gutter="10">
                        <i-col :xs="24" :sm="12" :md="9">
                            <i-form-item label="示例">
                                <i-input type="textarea" :autosize="{minRows: 5,maxRows: 8}"></i-input>
                            </i-form-item>
                        </i-col>
                        <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                            <i-tooltip content="请填写SEO规则示例！" placement="left">
                                <i-icon type="information-circled"></i-icon>
                            </i-tooltip>
                        </i-col>
                    </i-row>
                    <!--规则内容-->
                    <i-row :gutter="10">
                        <i-col :xs="24" :sm="12" :md="9">
                            <i-form-item label="规则内容">
                                <i-input type="textarea" :autosize="{minRows: 5,maxRows: 8}" v-model="selectVar"></i-input>
                            </i-form-item>
                        </i-col>
                        <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                            <i-tooltip content="规则内容！" placement="left">
                                <i-icon type="information-circled"></i-icon>
                            </i-tooltip>
                        </i-col>
                    </i-row>
                    <i-row :gutter="10">
                        <i-col :xs="24" :sm="12" :md="9">
                            <i-form-item label="">
                                可选变量：<br/>
                                <div>
                                    <template v-for="(item, index) in buttonData">
                                        <i-button @click="selected_var(item.value, index)" :title="item.title"
                                                  :style="{marginBottom: '10px', marginRight: '10px'}">
                                            {{item.content}}
                                        </i-button>
                                    </template>
                                </div>
                            </i-form-item>
                        </i-col>
                    </i-row>
                    <i-button type="primary" size="large">提交</i-button>
                </i-row>
            </i-form>
        </i-card>
    </div>
</template>

<script>
    export default {
        name: 'add-seo-rule',
        data () {
            return {
                formItem: {
                    parent: '0',
                    isNav: '1',
                    isShow: '0'
                },
                selectVar: '',
                buttonData: [
                    {
                        title: '标题（文章的SEO信息页面标题，若不存在则使用文章的标题）',
                        content: '标题：%title%',
                        value: '%title%',
                        isSelect: false
                    },
                    {
                        title: '关键词（文章的SEO信息页面关键词）',
                        content: '关键词：%keywords%',
                        value: '%keywords%',
                        isSelect: false
                    },
                    {
                        title: '描述（文章的SEO信息页面描述）',
                        content: '描述：%description%',
                        value: '%description%',
                        isSelect: false
                    },
                    {
                        title: '标签（文章的标签）',
                        content: '标签：%tags%',
                        value: '%tags%',
                        isSelect: false
                    },
                    {
                        title: '分类（文章的分类）',
                        content: '分类：%cato%',
                        value: '%cato%',
                        isSelect: false
                    },
                    {
                        title: '栏目（文章的栏目）',
                        content: '栏目：%column%',
                        value: '%column%',
                        isSelect: false
                    },
                    {
                        title: '专题（文章所属专题）',
                        content: '专题：%subject%',
                        value: '%subject%',
                        isSelect: false
                    },
                    {
                        title: '网站名称（设置的网站名称）',
                        content: '网站名称：%siteName%',
                        value: '%siteName%',
                        isSelect: false
                    },
                    {
                        title: '价格（产品的价格）',
                        content: '价格：%price%',
                        value: '%price%',
                        isSelect: false
                    }
                ]
            };
        },
        methods: {
            selected_var: function (selectTag, index) {
                if (this.selectVar) {
                    let arrUrlRule = this.selectVar.split('/');
                    let tempArr = [];
                    let flag = -1;
                    for (let i = 0; i < arrUrlRule.length; i++) {
                        if (selectTag === arrUrlRule[i]) {
                            flag = i;
                        }
                    }
                    if (flag > -1) {
                        arrUrlRule.splice(flag, 1);
                        this.buttonData[index].isSelect = false;
                    } else {
                        arrUrlRule.push(selectTag);
                        this.buttonData[index].isSelect = true;
                    }
                    for (let i = 0; i < arrUrlRule.length; i++) {
                        if (arrUrlRule[i]) {
                            tempArr.push(arrUrlRule[i]);
                        }
                    }
                    this.selectVar = tempArr.join('/');
                } else {
                    this.selectVar = selectTag;
                    this.buttonData[index].isSelect = true;
                }
                this.selectVar = this.selectVar ? '/' + this.selectVar : this.selectVar;
            }
        }
    };
</script>

<style scoped>
    .selectedVar {
        color: #fff;
        background-color: #2d8cf0;
        border-color: #2d8cf0;
    }
</style>
