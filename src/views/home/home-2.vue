<style lang="less">
    @import "./home.less";
    @import "../../styles/common.less";
</style>
<template>
    <div class="home-main">
        <i-row :gutter="10">
            <i-col :md="24" :lg="24">
                <i-col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}">
                    <infor-card
                            id-name="contents_count"
                            :end-val="count.contents"
                            iconType="document-text"
                            color="#2d8cf0"
                            intro-text="内容"
                    ></infor-card>
                </i-col>
                <i-col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}">
                    <infor-card
                            id-name="subjects_count"
                            :end-val="count.subjects"
                            iconType="folder"
                            color="#64d572"
                            :iconSize="50"
                            intro-text="专题"
                    ></infor-card>
                </i-col>
                <i-col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}">
                    <infor-card
                            id-name="comments_count"
                            :end-val="count.comments"
                            iconType="chatbox-working"
                            color="#ffd572"
                            intro-text="评论"
                    ></infor-card>
                </i-col>
                <i-col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}">
                    <infor-card
                            id-name="messages_count"
                            :end-val="count.messages"
                            iconType="chatbubble-working"
                            color="#f25e43"
                            intro-text="留言"
                    ></infor-card>
                </i-col>
            </i-col>
        </i-row>
        <i-row :gutter="10">
            <i-col :md="24" :lg="12">
                <i-card dis-hover :style="{marginBottom: '10px'}">
                    <shortcut-key-list-item></shortcut-key-list-item>
                </i-card>
                <i-card dis-hover>
                    <p slot="title">最新增加的内容</p>
                    <p>
                        <i-table :columns="tableColumns" :data="tableData"></i-table>
                    </p>
                    <p :style="{marginTop: '10px'}">
                        <a href="#/home">
                            <i-button type="primary">添加新的内容</i-button>
                        </a>
                        <i-button type="default">查看所有内容</i-button>
                    </p>
                </i-card>
            </i-col>
            <i-col :md="24" :lg="12">
                <i-card dis-hover :style="{marginBottom: '10px'}">
                    <p slot="title" style="padding-left: 1px;"><i-icon type="ios-location" style="font-size: 18px; margin-right: 5px"></i-icon>访问分布图</p>
                    <div class="map-con">
                        <i-col :md="24" :lg="24" class="map-incon">
                            <i-row type="flex" justify="center" align="middle">
                                <home-map></home-map>
                            </i-row>
                        </i-col>
                    </div>
                </i-card>
                <i-card dis-hover :style="{marginBottom: '10px'}">
                    <p slot="title">系统信息</p>
                </i-card>
                <i-card dis-hover>
                    <p slot="title">使用指南</p>
                    <p class="user-guide">
                        <i-tag><strong>设置</strong></i-tag>
                        设置网站基本信息、网站快捷操作等
                    </p>
                    <p class="user-guide">
                        <i-tag><strong>栏目</strong></i-tag>
                        配置中设置网站栏目及相关参数
                    </p>
                    <p class="user-guide">
                        <i-tag><strong>专题</strong></i-tag>
                        聚合网站内容
                    </p>
                    <p class="user-guide">
                        <i-tag><strong>营销</strong></i-tag>
                        设置优化推广及其他信息
                    </p>
                    <p class="user-guide">
                        <i-tag><strong>内容</strong></i-tag>
                        中添加网站内容
                    </p>
                </i-card>
            </i-col>
        </i-row>
    </div>
</template>

<script>
    import homeMap from './components/map.vue';
    import inforCard from './components/inforCard.vue';
    import shortcutKeyListItem from './components/shortcutKeyListItem.vue';

    export default {
        name: 'home',
        components: {
            homeMap,
            inforCard,
            shortcutKeyListItem
        },
        data () {
            return {
                count: {
                    contents: 496,
                    subjects: 3264,
                    comments: 2438,
                    messages: 3950
                },
                showAddNewTodo: false,
                newToDoItemValue: '',
                tableColumns: [
                    {
                        title: '所属分类',
                        key: 'cato'
                    },
                    {
                        title: '标题',
                        key: 'title'
                    },
                    {
                        title: '摘要',
                        key: 'profile'
                    },
                    {
                        title: '状态',
                        key: 'status'
                    }
                ],
                tableData: [
                    {
                        cato: 'John Brown',
                        title: 18,
                        profile: 'New York No. 1 Lake Park',
                        status: '2016-10-03'
                    },
                    {
                        cato: 'Jim Green',
                        title: 24,
                        profile: 'London No. 1 Lake Park',
                        status: '2016-10-01'
                    },
                    {
                        cato: 'Joe Black',
                        title: 30,
                        profile: 'Sydney No. 1 Lake Park',
                        status: '2016-10-02'
                    },
                    {
                        cato: 'Jon Snow',
                        title: 26,
                        profile: 'Ottawa No. 2 Lake Park',
                        status: '2016-10-04'
                    }
                ]
            };
        },
        computed: {
            avatorPath () {
                return localStorage.avatorImgPath;
            }
        },
        methods: {
            addNewToDoItem () {
                this.showAddNewTodo = true;
            },
            addNew () {
                if (this.newToDoItemValue.length !== 0) {
                    this.toDoList.unshift({
                        title: this.newToDoItemValue
                    });
                    setTimeout(() => {
                        this.newToDoItemValue = '';
                    }, 200);
                    this.showAddNewTodo = false;
                } else {
                    this.$Message.error('请输入待办事项内容');
                }
            },
            cancelAdd () {
                this.showAddNewTodo = false;
                this.newToDoItemValue = '';
            }
        }
    };
</script>
