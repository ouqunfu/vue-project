<template>
    <div class="home-main">
        <i-card dis-hover>
            <i-row :gutter="10" :style="{marginBottom: '10px'}">
                <a href="#/contents/gallery-list-dir">
                    <i-button type="info">返回图片库</i-button>
                </a>
                <div style="margin: 10px 0 10px 0;overflow: hidden">
                    <div style="float: left;">
                        <i-page :total="6" :current="1"></i-page>
                    </div>
                </div>
            </i-row>
            <i-row :gutter="10" :style="{marginBottom: '10px'}">
                <i-col :md="4" :lg="4">
                    <a href="#/contents/gallery-list-img" class="thumbnail">
                        <img src="../../images/new-gallery-img.jpg"/>
                    </a>
                    <p>credit</p>
                </i-col>
            </i-row>
            <i-row :gutter="10">
                <i-col :md="4" :lg="4">
                    <div class="img-list">
                        <img src="../../images/cropper-test.png"/>
                        <div class="img-list-cover">
                            <Icon type="ios-eye-outline"
                                  @click.native="handleView('@/../../images/cropper-test.png')"></Icon>
                            <Icon type="ios-trash-outline" @click.native="handleRemove()"></Icon>
                        </div>
                    </div>
                    <p>分辨率225x255</p>
                </i-col>
                <i-col :md="4" :lg="4">
                    <div class="img-list">
                        <img src="../../images/logo.jpg"/>
                        <div class="img-list-cover">
                            <Icon type="ios-eye-outline" @click.native="handleView('../../images/logo.jpg')"></Icon>
                            <Icon type="ios-trash-outline" @click.native="handleRemove('')"></Icon>
                        </div>
                    </div>
                    <p>分辨率225x255</p>
                </i-col>
                <i-col :md="4" :lg="4">
                    <div class="img-list">
                        <img src="../../images/logo-min.jpg"/>
                        <div class="img-list-cover">
                            <Icon type="ios-eye-outline" @click.native="handleView('../../images/logo-min.jpg')"></Icon>
                            <Icon type="ios-trash-outline" @click.native="handleRemove('')"></Icon>
                        </div>
                    </div>
                    <p>分辨率225x255</p>
                </i-col>
            </i-row>
            <i-row :gutter="10" :style="{marginTop: '10px'}">
                <div style="margin: 10px 0 10px 0;overflow: hidden">
                    <div style="float: left;">
                        <i-page :total="6" :current="1"></i-page>
                    </div>
                </div>
            </i-row>
        </i-card>
        <i-modal title="查看图片" v-model="visible">
            <img :src="imgName" v-if="visible" style="width: 100%">
        </i-modal>
    </div>
</template>

<script>
    export default {
        name: 'gallery-list-img',
        data () {
            return {
                imgName: '',
                visible: false,
            };
        },
        methods: {
            handleView (name) {
                this.imgName = name;
                this.visible = true;
            },
            handleRemove (file) {
                // const fileList = this.$refs.upload.fileList;
                // this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
            },
        }
    };
</script>

<style scoped>
    .thumbnail {
        cursor: pointer;
        display: block;
        padding: 4px;
        line-height: 1.42857143;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 4px;
    }

    img {
        width: 100%;
        height: 100%;
    }

    a:hover {
        border-color: #337ab7;
    }

    .ivu-col {
        text-align: center;
    }

    .img-list {
        display: inline-block;
        text-align: center;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
        margin-right: 4px;
    }

    .img-list img {
        width: 100%;
        height: 100%;
    }

    .img-list-cover {
        display: none;
        position: absolute;
        cursor: pointer;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, .6);
    }

    .img-list:hover .img-list-cover {
        display: block;
    }

    .img-list-cover i {
        color: #fff;
        font-size: 35px;
        cursor: pointer;
        margin-right: 20px;
        position: relative;
        top: 36%;
    }
</style>
