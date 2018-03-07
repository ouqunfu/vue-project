<template>
    <div class="home-main">
        <i-card dis-hover>
            <i-form :model="formItem" :label-width="100">
                <i-row :style="{marginLeft: '100px'}">
                    <!--所属分类-->
                    <i-row :gutter="10">
                        <i-col :xs="24" :sm="12" :md="9">
                            <i-form-item label="所属分类">
                                <i-select v-model="formItem.parent" transfer>
                                    <i-option value="0">请选择...</i-option>
                                    <i-option value="1">默认分类</i-option>
                                </i-select>
                            </i-form-item>
                        </i-col>
                        <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                            <i-tooltip placement="left">
                                <i-icon type="information-circled"></i-icon>
                                <div slot="content">
                                    <p>请选择友链所属分类！</p>
                                </div>
                            </i-tooltip>
                        </i-col>
                    </i-row>
                    <i-row :gutter="10">
                        <i-col :xs="24" :sm="12" :md="9">
                            <i-form-item label="链接类型">
                                <i-radio-group v-model="formItem.isShow">
                                    <i-radio label="0">Logo链接</i-radio>
                                    <i-radio label="1">文字链接</i-radio>
                                </i-radio-group>
                            </i-form-item>
                        </i-col>
                        <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                            <i-tooltip placement="left">
                                <i-icon type="information-circled"></i-icon>
                                <div slot="content">
                                    请选择链接类型！
                                </div>
                            </i-tooltip>
                        </i-col>
                    </i-row>
                    <i-row :gutter="10">
                        <i-col :xs="24" :sm="12" :md="9">
                            <i-form-item label="网站名称">
                                <i-input name="name" placeholder=""></i-input>
                            </i-form-item>
                        </i-col>
                        <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                            <i-tooltip content="请填写网站名称！" placement="left">
                                <i-icon type="information-circled"></i-icon>
                            </i-tooltip>
                        </i-col>
                    </i-row>
                    <i-row :gutter="10">
                        <i-col :xs="24" :sm="12" :md="9">
                            <i-form-item label="网站地址">
                                <i-input name="alias" placeholder=""></i-input>
                            </i-form-item>
                        </i-col>
                        <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                            <i-tooltip placement="left">
                                <i-icon type="information-circled"></i-icon>
                                <div slot="content">
                                    <p>请填写网站名称！</p>
                                </div>
                            </i-tooltip>
                        </i-col>
                    </i-row>
                    <i-row :gutter="10">
                        <i-col :xs="24" :sm="12" :md="9">
                            <i-form-item label="图片logo">
                                <i-upload action="http://" accept="image/*">
                                    <i-button type="ghost" icon="ios-cloud-upload-outline">点击上传</i-button>
                                </i-upload>
                            </i-form-item>
                        </i-col>
                        <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                            <i-tooltip placement="left">
                                <i-icon type="information-circled"></i-icon>
                                <div slot="content">
                                    请上传图片logo！
                                </div>
                            </i-tooltip>
                        </i-col>
                    </i-row>
                    <i-row :gutter="10">
                        <i-col :xs="24" :sm="12" :md="9">
                            <i-form-item label="网站联系人">
                                <i-input name="alias" placeholder=""></i-input>
                            </i-form-item>
                        </i-col>
                        <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                            <i-tooltip placement="left">
                                <i-icon type="information-circled"></i-icon>
                                <div slot="content">
                                    <p>请填写网站联系人！</p>
                                </div>
                            </i-tooltip>
                        </i-col>
                    </i-row>
                    <i-row :gutter="10">
                        <i-col :xs="24" :sm="12" :md="9">
                            <i-form-item label="网站简介">
                                <i-input type="textarea" :autosize="{minRows: 5,maxRows: 8}" placeholder=""></i-input>
                            </i-form-item>
                        </i-col>
                        <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                            <i-tooltip placement="left">
                                <i-icon type="information-circled"></i-icon>
                                <div slot="content">
                                    <p>请填写网站简介！</p>
                                </div>
                            </i-tooltip>
                        </i-col>
                    </i-row>
                    <i-row :gutter="10">
                        <i-col :xs="24" :sm="12" :md="9">
                            <i-form-item label="状态">
                                <i-radio-group v-model="formItem.status">
                                    <i-radio label="1">审核</i-radio>
                                    <i-radio label="2">禁止</i-radio>
                                </i-radio-group>
                            </i-form-item>
                        </i-col>
                        <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                            <i-tooltip placement="left">
                                <i-icon type="information-circled"></i-icon>
                                <div slot="content">
                                    请选择链接状态！
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
        name: 'add-link',
        data () {
            return {
                formItem: {
                    parent: '1',
                    isNav: '1',
                    isShow: '0',
                    status: '1'
                }
            };
        }
    };
</script>

<style scoped>

</style>
