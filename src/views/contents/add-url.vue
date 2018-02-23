<template>
    <div class="home-main">
        <i-card dis-hover>
            <i-form :model="formItem" :label-width="100">
                <i-row :style="{marginLeft: '100px'}">
                    <!--URL规则名称-->
                    <i-row :gutter="10">
                        <i-col :xs="24" :sm="12" :md="9">
                            <i-form-item label="URL规则名称">
                                <i-input name="name" placeholder=""></i-input>
                            </i-form-item>
                        </i-col>
                        <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                            <i-tooltip content="请填写URL规则名称！" placement="left">
                                <i-icon type="information-circled"></i-icon>
                            </i-tooltip>
                        </i-col>
                    </i-row>
                    <!--URL所属模块-->
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
                                    <p>请选择URL规则所属模块！</p>
                                </div>
                            </i-tooltip>
                        </i-col>
                    </i-row>
                    <!--URL示例-->
                    <i-row :gutter="10">
                        <i-col :xs="24" :sm="12" :md="9">
                            <i-form-item label="URL示例">
                                <i-input name="name" placeholder=""></i-input>
                            </i-form-item>
                        </i-col>
                        <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                            <i-tooltip content="请填写URL示例！" placement="left">
                                <i-icon type="information-circled"></i-icon>
                            </i-tooltip>
                        </i-col>
                    </i-row>
                    <!--URL规则-->
                    <i-row :gutter="10">
                        <i-col :xs="24" :sm="12" :md="9">
                            <i-form-item label="URL规则">
                                <i-input name="name" placeholder="" v-model="selectVar"></i-input>
                            </i-form-item>
                        </i-col>
                        <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                            <i-tooltip content="请填写URL规则！" placement="left">
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
                                        <i-button :class="{selectedVar: item.isSelect}"
                                                  @click="selected_var(item.value, index)" :title="item.title"
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
        name: 'add-url',
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
                        title: 'year（文章的年份，四位数字，形如2004。）',
                        content: '年：%year%',
                        value: '%year%',
                        isSelect: false
                    },
                    {
                        title: 'monthnum（月份，形如05。）',
                        content: '月：%monthnum%',
                        value: '%monthnum%',
                        isSelect: false
                    },
                    {
                        title: 'day（日期，形如28。）',
                        content: '日：%day%',
                        value: '%day%',
                        isSelect: false
                    },
                    {
                        title: 'hour（小时，形如15。）',
                        content: '时：%hour%',
                        value: '%hour%',
                        isSelect: false
                    },
                    {
                        title: 'minute（分钟，形如43。）',
                        content: '分：%minute%',
                        value: '%minute%',
                        isSelect: false
                    },
                    {
                        title: 'second（秒数，形如33。）',
                        content: '秒：%second%',
                        value: '%second%',
                        isSelect: false
                    },
                    {
                        title: 'post_id（内容的唯一ID，形如423。）',
                        content: 'ID：%post_id%',
                        value: '%post_id%',
                        isSelect: false
                    },
                    {
                        title: 'postname（清理过的内容标题（别名）。）',
                        content: 'name：%postname%',
                        value: '%postname%',
                        isSelect: false
                    },
                    {
                        title: 'category（分类别名，嵌套的子分类在URL中会显示为嵌套的文件夹。）',
                        content: '分类：%category%',
                        value: '%category%',
                        isSelect: false
                    },
                    {
                        title: 'tag（标签名。）',
                        content: '标签：%tag%',
                        value: '%tag%',
                        isSelect: false
                    },
                    {
                        title: 'author（清理过的作者姓名。）',
                        content: '作者：%author%',
                        value: '%author%',
                        isSelect: false
                    },
                    {
                        title: 'page（分页的页码。）',
                        content: '分页：%page%',
                        value: '%page%',
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
