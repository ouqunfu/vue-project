<template>
    <div class="home-main">
        <i-card dis-hover>
            <i-form :model="formItem" :label-width="100">
                <i-tabs :animated="false" :style="{paddingBottom: '40px'}">
                    <i-tab-pane label="单条添加">
                        <i-row :gutter="10" :style="{marginLeft: '50px'}">
                            <!--敏感词-->
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="敏感词">
                                        <i-input name="name" placeholder=""></i-input>
                                    </i-form-item>
                                </i-col>
                                <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                                    <i-tooltip content="请填写敏感词！" placement="left">
                                        <i-icon type="information-circled"></i-icon>
                                    </i-tooltip>
                                </i-col>
                            </i-row>
                            <!--替换词-->
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="替换词">
                                        <i-input name="nickName" placeholder=""></i-input>
                                    </i-form-item>
                                </i-col>
                                <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                                    <i-tooltip placement="left">
                                        <i-icon type="information-circled"></i-icon>
                                        <div slot="content">
                                            <p>请填写替换词！</p>
                                        </div>
                                    </i-tooltip>
                                </i-col>
                            </i-row>
                            <!--敏感级别-->
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="敏感级别">
                                        <i-select v-model="formItem.isShow" transfer>
                                            <i-option value="1">一般</i-option>
                                            <i-option value="2">危险</i-option>
                                        </i-select>
                                    </i-form-item>
                                </i-col>
                                <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                                    <i-tooltip placement="left">
                                        <i-icon type="information-circled"></i-icon>
                                        <div slot="content">
                                            <p>一般: 用替换词替换 , 危险: 直接去除。</p>
                                        </div>
                                    </i-tooltip>
                                </i-col>
                            </i-row>
                        </i-row>
                    </i-tab-pane>
                    <i-tab-pane label="批量添加">
                        <i-row :gutter="10" :style="{marginLeft: '50px'}">
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="敏感词">
                                        <i-input name="name" type="textarea" :autosize="{minRows: 8,maxRows: 12}"
                                                 placeholder="test,测试,1"></i-input>
                                    </i-form-item>
                                </i-col>
                            </i-row>
                        </i-row>
                        <i-row :gutter="10" :style="{marginLeft: '50px'}">
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="规则说明">
                                        1.内容要求每行一个敏感词条目；<br/>
                                        2.请使用英文标点，参数之间用英文","隔开；<br/>
                                        3.敏感级别由数字 1,2代替，1--一般；2--敏感。
                                    </i-form-item>
                                </i-col>
                            </i-row>
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
        name: 'add-str-filter',
        data () {
            return {
                formItem: {
                    parent: '0',
                    isNav: '1',
                    isShow: '1'
                }
            };
        }
    };
</script>

<style scoped>

</style>
