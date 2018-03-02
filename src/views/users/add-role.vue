<template>
    <div class="home-main">
        <i-card dis-hover>
            <i-form :model="formItem" :label-width="100">
                <i-tabs :animated="false" :style="{paddingBottom: '40px'}">
                    <i-tab-pane label="基本信息">
                        <i-row :gutter="10" :style="{marginLeft: '50px'}">
                            <!--角色名称-->
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="角色名称">
                                        <i-input name="name" placeholder=""></i-input>
                                    </i-form-item>
                                </i-col>
                                <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                                    <i-tooltip content="请填写角色名称！" placement="left">
                                        <i-icon type="information-circled"></i-icon>
                                    </i-tooltip>
                                </i-col>
                            </i-row>
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="状态">
                                        <i-radio-group v-model="formItem.isShow">
                                            <i-radio label="1">启用</i-radio>
                                            <i-radio label="0">禁用</i-radio>
                                        </i-radio-group>
                                    </i-form-item>
                                </i-col>
                                <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                                    <i-tooltip placement="left">
                                        <i-icon type="information-circled"></i-icon>
                                        <div slot="content">
                                            选择角色是否启用！
                                        </div>
                                    </i-tooltip>
                                </i-col>
                            </i-row>
                        </i-row>
                    </i-tab-pane>
                    <i-tab-pane label="权限设置">
                        <i-row :gutter="10" v-for="(item, index) in roleList">
                            <i-col :xs="24" :sm="24" :md="24" class="checkAll">
                                <i-checkbox
                                        :indeterminate="item.indeterminate"
                                        :value="item.selected"
                                        @click.prevent.native="handleCheckAll(index)"
                                        :label="item.module">{{item.title}}
                                </i-checkbox>
                            </i-col>
                            <i-col :xs="24" :sm="24" :md="24" class="checkAllChild"
                                   v-for="(item2, index2) in item.controller">
                                <i-checkbox
                                        :value="item2.selected"
                                        class="checkbox-second"
                                        @on-change="checkControllerChange(index, index2)"
                                        :label="item2.controller">{{item2.title}}
                                </i-checkbox>
                                <i-checkbox-group class="cus-checkbox-group"
                                                  @on-change="checkAllGroupChange(index, index2, index3)"
                                                  v-for="(item3, index3) in item2.action">
                                    <i-checkbox :value="item3.selected" :label="item3.action">{{item3.title}}
                                    </i-checkbox>
                                </i-checkbox-group>
                            </i-col>
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
        name: 'add-role',
        data () {
            return {
                formItem: {
                    parent: '0',
                    isNav: '1',
                    isShow: 1
                },
                checkAll: false,
                checkAllChild: false,
                checkAllGroup: [],
                roleList: [
                    {
                        module: 'contents',
                        title: '内容',
                        selected: false,
                        controller: [
                            {
                                controller: 'columns',
                                title: '栏目管理',
                                selected: false,
                                action: [
                                    {
                                        action: 'lists',
                                        title: '栏目列表',
                                        selected: false,
                                        fid: 1
                                    },
                                    {
                                        action: 'add',
                                        title: '添加栏目',
                                        selected: false,
                                        fid: 2
                                    },
                                    {
                                        action: 'edit',
                                        title: '修改栏目',
                                        selected: false,
                                        fid: 3
                                    },
                                    {
                                        action: 'delete',
                                        title: '删除栏目',
                                        selected: false,
                                        fid: 4
                                    },
                                    {
                                        action: 'role',
                                        title: '栏目前台权限',
                                        selected: false,
                                        fid: 5
                                    }
                                ]
                            },
                            {
                                controller: 'content',
                                title: '内容管理',
                                selected: false,
                                action: [
                                    {
                                        action: 'lists',
                                        title: '内容列表',
                                        selected: false,
                                        fid: 1
                                    },
                                    {
                                        action: 'add',
                                        title: '添加内容',
                                        selected: false,
                                        fid: 2
                                    },
                                    {
                                        action: 'edit',
                                        title: '修改内容',
                                        selected: false,
                                        fid: 3
                                    },
                                    {
                                        action: 'delete',
                                        title: '删除内容',
                                        selected: false,
                                        fid: 4
                                    },
                                    {
                                        action: 'check',
                                        title: '审核内容',
                                        selected: false,
                                        fid: 5
                                    },
                                    {
                                        action: 'role',
                                        title: '内容前台权限',
                                        selected: false,
                                        fid: 6
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        module: 'users',
                        title: '用户',
                        selected: false,
                        controller: [
                            {
                                controller: 'user',
                                title: '用户管理',
                                selected: false,
                                action: [
                                    {
                                        action: 'lists',
                                        title: '用户列表',
                                        selected: false,
                                        fid: 1
                                    },
                                    {
                                        action: 'add',
                                        title: '添加用户',
                                        selected: false,
                                        fid: 2
                                    },
                                    {
                                        action: 'edit',
                                        title: '修改用户',
                                        selected: false,
                                        fid: 3
                                    },
                                    {
                                        action: 'delete',
                                        title: '删除用户',
                                        selected: false,
                                        fid: 4
                                    },
                                    {
                                        action: 'role',
                                        title: '用户前台权限',
                                        selected: false,
                                        fid: 5
                                    }
                                ]
                            }
                        ]
                    }
                ]
            };
        },
        methods: {
            handleCheckAll (index) { // 顶级选择
                // 全选
                this.roleList[index].selected = this.roleList[index].selected ? false : true;
                const arr = this.roleList[index];
                this.roleList[index].controller.forEach(function (ctl) {
                    ctl.selected = arr.selected ? true : false;
                    ctl.action.forEach(function (act) {
                        act.selected = ctl.selected ? true : false;
                    }, ctl);
                }, arr);
            },
            checkControllerChange (index, index2) { // 次级选择
                this.roleList[index].controller[index2].selected = this.roleList[index].controller[index2].selected ? false : true;
                const controller = this.roleList[index].controller[index2];
                // controller 全选/反选
                controller.action.forEach(function (act) {
                    act.selected = controller.selected ? true : false;
                }, controller.selected);
                this.checkSelectAll(index);
            },
            checkSelectAll (index) { // 检查一级全选/反选
                const module = this.roleList[index];
                let countSelect = module.controller.length;
                let countSelectedTrue = 0;
                module.controller.forEach(function (ctl) {
                    if (ctl.selected) {
                        countSelectedTrue++;
                    }
                    countSelect += ctl.action.length;
                    ctl.action.forEach(function (act) {
                        if (act.selected) {
                            countSelectedTrue++;
                        }
                    });
                });
                if (countSelectedTrue === countSelect) {
                    this.roleList[index].selected = true;
                    this.$set(this.roleList[index], 'indeterminate', false);
                }
                if (countSelectedTrue === 0) {
                    this.roleList[index].selected = false;
                    this.$set(this.roleList[index], 'indeterminate', false);
                }
                if (countSelectedTrue < countSelect && countSelectedTrue > 0) {
                    this.$set(this.roleList[index], 'indeterminate', true);
                }
            },
            checkAllGroupChange (index, index2, index3) { // 子级选择
                let raction = this.roleList[index].controller[index2].action;
                this.roleList[index].controller[index2].action[index3].selected = raction[index3].selected ? false : true;
                this.checkChildSelectAll(index, index2);
                this.checkSelectAll(index);
            },
            checkChildSelectAll (index, index2) { // 检查二级全选/反选
                const controller = this.roleList[index].controller[index2];
                let countSelectedTrue = 0;
                controller.action.forEach(function (act) {
                    if (act.selected) {
                        countSelectedTrue++;
                    }
                });
                if (countSelectedTrue > 0) {
                    this.roleList[index].controller[index2].selected = true;
                } else if (countSelectedTrue === 0) {
                    this.roleList[index].controller[index2].selected = false;
                }
            }
        }
    };
</script>

<style scoped>
    .tooltips-custom {
        padding-top: 5px;
    }

    .checkAll {
        color: #000;
        background-color: #d2d6de !important;
        margin: 10px;
        padding: 5px;
    }

    .checkAllChild {
        margin: 0px 10px 10px;
        padding: 5px;
        border-bottom: 1px solid #f4f4f4;
    }

    .checkbox-second {
        margin-left: 10px;
    }

    .cus-checkbox-group {
        display: inline-block;
        margin-left: 30px;
    }
</style>
