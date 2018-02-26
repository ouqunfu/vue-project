<template>
    <div class="home-main">
        <i-card dis-hover>
            <i-form :model="formItem" :label-width="100">
                <i-row :style="{marginLeft: '100px'}">
                    <!--名称-->
                    <i-row :gutter="10">
                        <i-col :xs="24" :sm="12" :md="9">
                            <i-form-item label="名称">
                                <i-input name="name" placeholder=""></i-input>
                            </i-form-item>
                        </i-col>
                        <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                            <i-tooltip content="请填写标签名称！" placement="left">
                                <i-icon type="information-circled"></i-icon>
                            </i-tooltip>
                        </i-col>
                    </i-row>
                    <!--别名-->
                    <i-row :gutter="10">
                        <i-col :xs="24" :sm="12" :md="9">
                            <i-form-item label="别名">
                                <i-input name="name" placeholder=""></i-input>
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
                    <!--描述-->
                    <i-row :gutter="10">
                        <i-col :xs="24" :sm="12" :md="9">
                            <i-form-item label="描述">
                                <i-input type="textarea"
                                         :autosize="{minRows: 5,maxRows: 8}"></i-input>
                            </i-form-item>
                        </i-col>
                        <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                            <i-tooltip placement="left">
                                <i-icon type="information-circled"></i-icon>
                                <div slot="content">
                                    请填写标签描述！
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
    export default {
        name: 'add-tag',
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
        }
    };
</script>

<style scoped>

</style>
