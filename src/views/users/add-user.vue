<template>
    <div class="home-main">
        <i-card dis-hover>
            <i-form :model="formItem" :label-width="100">
                <i-tabs :animated="false" :style="{paddingBottom: '40px'}">
                    <i-tab-pane label="基本信息">
                        <i-row :gutter="10" :style="{marginLeft: '50px'}">
                            <!--用户名-->
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="用户名">
                                        <i-input name="name" placeholder=""></i-input>
                                    </i-form-item>
                                </i-col>
                                <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                                    <i-tooltip content="请填写用户名！" placement="left">
                                        <i-icon type="information-circled"></i-icon>
                                    </i-tooltip>
                                </i-col>
                            </i-row>
                            <!--昵称-->
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="昵称">
                                        <i-input name="nickName" placeholder=""></i-input>
                                    </i-form-item>
                                </i-col>
                                <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                                    <i-tooltip placement="left">
                                        <i-icon type="information-circled"></i-icon>
                                        <div slot="content">
                                            <p>请填写昵称！</p>
                                        </div>
                                    </i-tooltip>
                                </i-col>
                            </i-row>
                            <!--密码-->
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="密码">
                                        <i-input name="password" type="password" placeholder=""></i-input>
                                    </i-form-item>
                                </i-col>
                                <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                                    <i-tooltip placement="left">
                                        <i-icon type="information-circled"></i-icon>
                                        <div slot="content">
                                            <p>请填写密码！</p>
                                        </div>
                                    </i-tooltip>
                                </i-col>
                            </i-row>
                            <!--安全问题-->
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="安全问题">
                                        <i-input name="question" placeholder=""></i-input>
                                    </i-form-item>
                                </i-col>
                                <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                                    <i-tooltip placement="left">
                                        <i-icon type="information-circled"></i-icon>
                                        <div slot="content">
                                            <p>请填写安全问题！</p>
                                        </div>
                                    </i-tooltip>
                                </i-col>
                            </i-row>
                            <!--安全问题答案-->
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="您的答案">
                                        <i-input name="answer" placeholder=""></i-input>
                                    </i-form-item>
                                </i-col>
                                <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                                    <i-tooltip placement="left">
                                        <i-icon type="information-circled"></i-icon>
                                        <div slot="content">
                                            <p>请填写安全问题的答案！</p>
                                        </div>
                                    </i-tooltip>
                                </i-col>
                            </i-row>
                            <!--用户组-->
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="用户组">
                                        <i-select transfer>
                                            <i-option value="0">请选择</i-option>
                                        </i-select>
                                    </i-form-item>
                                </i-col>
                                <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                                    <i-tooltip content="是否在导航栏中显示！" placement="left">
                                        <i-icon type="information-circled"></i-icon>
                                    </i-tooltip>
                                </i-col>
                            </i-row>
                            <!--邮箱账号-->
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="Email">
                                        <i-input name="email" placeholder=""></i-input>
                                    </i-form-item>
                                </i-col>
                                <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                                    <i-tooltip placement="left">
                                        <i-icon type="information-circled"></i-icon>
                                        <div slot="content">
                                            <p>请填写邮箱账号！</p>
                                        </div>
                                    </i-tooltip>
                                </i-col>
                            </i-row>
                        </i-row>
                    </i-tab-pane>
                    <i-tab-pane label="自定义信息">

                    </i-tab-pane>
                </i-tabs>
                <i-button type="primary" size="large">提交</i-button>
            </i-form>
        </i-card>
    </div>
</template>

<script>
    export default {
        name: 'add-user',
        data () {
            return {
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
    .tooltips-custom {
        padding-top: 5px;
    }
</style>
