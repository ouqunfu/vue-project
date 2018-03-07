<template>
    <div class="home-main">
        <i-card dis-hover>
            <i-form :model="formItem" :label-width="100">
                <i-row :style="{marginLeft: '100px'}">
                    <!--名称-->
                    <i-row :gutter="10">
                        <i-col :xs="24" :sm="12" :md="9">
                            <i-form-item label="分类名称">
                                <i-input name="name" placeholder=""></i-input>
                            </i-form-item>
                        </i-col>
                        <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                            <i-tooltip content="请填写分类名称！" placement="left">
                                <i-icon type="information-circled"></i-icon>
                            </i-tooltip>
                        </i-col>
                    </i-row>
                    <!--描述-->
                    <i-row :gutter="10">
                        <i-col :xs="24" :sm="12" :md="9">
                            <i-form-item label="分类描述">
                                <i-input type="textarea"
                                         :autosize="{minRows: 5,maxRows: 8}"></i-input>
                            </i-form-item>
                        </i-col>
                        <i-col :xs="3" :sm="2" :md="1" class="tooltips-custom">
                            <i-tooltip placement="left">
                                <i-icon type="information-circled"></i-icon>
                                <div slot="content">
                                    请填写分类描述！
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
        name: 'add-links-cato',
        data () {
            return {
                formItem: {
                    parent: '0',
                    isNav: '1',
                    isShow: '0'
                }
            };
        }
    };
</script>

<style scoped>

</style>
