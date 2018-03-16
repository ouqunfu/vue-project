<template>
    <div class="home-main">
        <i-card dis-hover>
            <i-form :model="formItem" :label-width="100">
                <i-tabs :animated="false" :style="{paddingBottom: '40px'}">
                    <i-tab-pane label="附件设置">
                        <i-row :gutter="10" :style="{marginLeft: '50px'}">
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="附件类型">
                                        <i-input name="name" type="textarea" :autosize="{minRows: 8,maxRows: 12}"
                                                 :placeholder="attachment_type"></i-input>
                                    </i-form-item>
                                </i-col>
                            </i-row>
                            <i-row :gutter="10">
                                <i-col :xs="24" :sm="12" :md="9">
                                    <i-form-item label="附件大小">
                                        <i-input name="name" placeholder="" value="2"></i-input>
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
        name: 'attachment',
        data () {
            return {
                formItem: {
                    parent: '0',
                    isNav: '1',
                    isShow: '1'
                },
                attachment_type: 'jpg,gif,bmp,jpeg,png,doc,docx,xls,xlsx,zip,rar,7z,txt,pdf,JPG,GIF,BMP,JPEG,PNG,ZIP,RAR,7Z,TXT,PDF,DOC,DOCX,XLS,XLSX'
            };
        }
    };
</script>

<style scoped>

</style>
