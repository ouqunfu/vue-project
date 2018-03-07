<template>
    <div class="home-main">
        <i-card dis-hover>
            <i-form :model="formItem" :label-width="100">
                <i-tabs :animated="false" :style="{paddingBottom: '40px'}">
                    <i-tab-pane label="网站信息">
                        <i-row :gutter="10" :style="{marginLeft: '50px'}">
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="网站地址">
                                        <i-input name="name" placeholder=""></i-input>
                                    </i-form-item>
                                </i-col>
                            </i-row>
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="网站名称">
                                        <i-input name="alias" placeholder=""></i-input>
                                    </i-form-item>
                                </i-col>
                            </i-row>
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="网站标题">
                                        <i-input name="name" placeholder=""></i-input>
                                    </i-form-item>
                                </i-col>
                            </i-row>
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="网站关键字">
                                        <i-input name="alias" placeholder=""></i-input>
                                    </i-form-item>
                                </i-col>
                            </i-row>
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="网站描述">
                                        <i-input name="name" placeholder=""></i-input>
                                    </i-form-item>
                                </i-col>
                            </i-row>
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="网站logo">
                                        <i-upload action="http://" accept="image/*">
                                            <i-button type="ghost" icon="ios-cloud-upload-outline">点击上传</i-button>
                                        </i-upload>
                                    </i-form-item>
                                </i-col>
                            </i-row>
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="logo宽度">
                                        <i-input name="name" placeholder=""></i-input>
                                    </i-form-item>
                                </i-col>
                            </i-row>
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="logo高度">
                                        <i-input name="alias" placeholder=""></i-input>
                                    </i-form-item>
                                </i-col>
                            </i-row>
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="公网安备号">
                                        <i-input name="name" placeholder=""></i-input>
                                    </i-form-item>
                                </i-col>
                            </i-row>
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="ICP备案号">
                                        <i-input name="alias" placeholder=""></i-input>
                                    </i-form-item>
                                </i-col>
                            </i-row>
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="联系地址">
                                        <i-input name="name" placeholder=""></i-input>
                                    </i-form-item>
                                </i-col>
                            </i-row>
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="联系电话">
                                        <i-input name="alias" placeholder=""></i-input>
                                    </i-form-item>
                                </i-col>
                            </i-row>
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="联系邮箱">
                                        <i-input name="name" placeholder=""></i-input>
                                    </i-form-item>
                                </i-col>
                            </i-row>
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="邮政编码">
                                        <i-input name="alias" placeholder=""></i-input>
                                    </i-form-item>
                                </i-col>
                            </i-row>
                        </i-row>
                    </i-tab-pane>
                    <i-tab-pane label="站点设置">
                        <i-row :gutter="10" :style="{marginLeft: '50px'}">
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="15" :md="9">
                                    <i-form-item label="站点状态">
                                        <i-select v-model="formItem.parent" transfer>
                                            <i-option value="0">开启</i-option>
                                            <i-option value="1">关闭</i-option>
                                            <i-option value="2">挂起</i-option>
                                        </i-select>
                                    </i-form-item>
                                </i-col>
                            </i-row>
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="语言设置">
                                        <i-select v-model="formItem.isNav" transfer>
                                            <i-option value="0">中文</i-option>
                                            <i-option value="1">英文</i-option>
                                        </i-select>
                                    </i-form-item>
                                </i-col>
                            </i-row>
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="网站导航">
                                        <i-select v-model="formItem.isNav" transfer>
                                            <i-option value="0">是</i-option>
                                            <i-option value="1">否</i-option>
                                        </i-select>
                                    </i-form-item>
                                </i-col>
                            </i-row>
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="前台分页数量">
                                        <i-input name="name" placeholder=""></i-input>
                                    </i-form-item>
                                </i-col>
                            </i-row>
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="后台分页数量">
                                        <i-input name="name" placeholder=""></i-input>
                                    </i-form-item>
                                </i-col>
                            </i-row>
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="登录过期时间">
                                        <i-input name="name" placeholder=""></i-input>
                                    </i-form-item>
                                </i-col>
                            </i-row>
                        </i-row>
                    </i-tab-pane>
                    <i-tab-pane label="手机版">
                        <i-row :gutter="10" :style="{marginLeft: '50px'}">
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="手机版开关">
                                        <i-select v-model="formItem.isNav" transfer>
                                            <i-option value="0">开</i-option>
                                            <i-option value="1">关</i-option>
                                        </i-select>
                                    </i-form-item>
                                </i-col>
                            </i-row>
                        </i-row>
                    </i-tab-pane>
                    <i-tab-pane label="动静态设置">
                        <i-row :gutter="10" :style="{marginLeft: '50px'}">
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="15" :md="18">
                                    <i-form-item label="封面内容">

                                    </i-form-item>
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
                            </i-row>
                        </i-row>
                    </i-tab-pane>
                    <i-tab-pane label="客服设置">
                    </i-tab-pane>
                    <i-tab-pane label="开关设置">
                    </i-tab-pane>
                </i-tabs>
                <i-button type="primary" size="large">提交</i-button>
            </i-form>
        </i-card>
    </div>
</template>

<script>
    export default {
        name: 'site',
        data () {
            return {
                formItem: {
                    parent: '0',
                    isNav: '0',
                    isShow: ''
                }
            };
        }
    };
</script>

<style scoped>

</style>
