<template>
    <div class="home-main">
        <i-card dis-hover>
            <i-form :model="formItem" :label-width="100">
                <i-row :style="{marginLeft: '100px'}">
                    <i-row :gutter="10">
                        <i-col :xs="24" :sm="12" :md="9">
                            <i-form-item label="字段名">
                                <i-input name="name" placeholder=""></i-input>
                            </i-form-item>
                        </i-col>
                        <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                            <i-tooltip placement="left">
                                <i-icon type="information-circled"></i-icon>
                                <div slot="content">
                                    <p>请填写字段名，只能由英文字母、数字和<br/>下划线组成，
                                        并且仅能字母开头，不以下<br/>划线结尾！</p>
                                </div>
                            </i-tooltip>
                        </i-col>
                    </i-row>
                    <i-row :gutter="10">
                        <i-col :xs="24" :sm="12" :md="9">
                            <i-form-item label="字段说明">
                                <i-input name="des" placeholder=""></i-input>
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
                            <i-form-item label="字段提示信息">
                                <i-input name="tips" placeholder=""></i-input>
                            </i-form-item>
                        </i-col>
                        <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                            <i-tooltip placement="left">
                                <i-icon type="information-circled"></i-icon>
                                <div slot="content">
                                    <p>“ 输入框右侧说明文字！”</p>
                                </div>
                            </i-tooltip>
                        </i-col>
                    </i-row>
                    <i-row :gutter="10">
                        <i-col :xs="24" :sm="12" :md="9">
                            <i-form-item label="是否必填">
                                <i-radio-group>
                                    <i-radio label="0">否</i-radio>
                                    <i-radio label="1">是</i-radio>
                                </i-radio-group>
                            </i-form-item>
                        </i-col>
                        <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                            <i-tooltip placement="left">
                                <i-icon type="information-circled"></i-icon>
                                <div slot="content">
                                    是否必填项！
                                </div>
                            </i-tooltip>
                        </i-col>
                    </i-row>
                    <i-row :gutter="10">
                        <i-col :xs="24" :sm="12" :md="9">
                            <i-form-item label="是否唯一">
                                <i-radio-group>
                                    <i-radio label="0">否</i-radio>
                                    <i-radio label="1">是</i-radio>
                                </i-radio-group>
                            </i-form-item>
                        </i-col>
                        <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                            <i-tooltip placement="left">
                                <i-icon type="information-circled"></i-icon>
                                <div slot="content">
                                    是否唯一项！
                                </div>
                            </i-tooltip>
                        </i-col>
                    </i-row>
                    <i-row :gutter="10">
                        <i-col :xs="24" :sm="12" :md="9">
                            <i-form-item label="类型">
                                <i-select v-model="type" transfer>
                                    <i-option value="int">整数</i-option>
                                    <i-option value="varchar">单行文本</i-option>
                                    <i-option value="text">多行文本</i-option>
                                    <i-option value="mediumtext">超文本</i-option>
                                    <i-option value="datetime">日期</i-option>
                                    <i-option value="_image">图片</i-option>
                                    <i-option value="_file">附件</i-option>
                                </i-select>
                            </i-form-item>
                        </i-col>
                        <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                            <i-tooltip placement="left">
                                <i-icon type="information-circled"></i-icon>
                                <div slot="content">
                                    请选择字段类型！
                                </div>
                            </i-tooltip>
                        </i-col>
                    </i-row>
                    <i-row :gutter="10">
                        <i-col :xs="24" :sm="12" :md="9">
                            <i-form-item label="长度">
                                <i-input name="length" placeholder=""></i-input>
                            </i-form-item>
                        </i-col>
                        <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                            <i-tooltip placement="left">
                                <i-icon type="information-circled"></i-icon>
                                <div slot="content">
                                    <p>请输入数字！</p>
                                </div>
                            </i-tooltip>
                        </i-col>
                    </i-row>
                    <i-row :gutter="10">
                        <i-col :xs="24" :sm="12" :md="9">
                            <i-form-item label="是否注册页显示">
                                <i-radio-group>
                                    <i-radio label="0">否</i-radio>
                                    <i-radio label="1">是</i-radio>
                                </i-radio-group>
                            </i-form-item>
                        </i-col>
                        <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                            <i-tooltip placement="left">
                                <i-icon type="information-circled"></i-icon>
                                <div slot="content">
                                    用户自定义字段是否在注册页面显示！
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
        name: 'add-user-field',
        data () {
            return {
                formItem: {
                    parent: '0',
                    isNav: '1',
                    isShow: '0'
                },
                type: 'int'
            };
        }
    };
</script>

<style scoped>

</style>
