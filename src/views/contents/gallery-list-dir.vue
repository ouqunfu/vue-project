<template>
    <div class="home-main">
        <i-card dis-hover>
            <i-row :gutter="10">
                <i-col :md="4" :lg="4">
                    <a href="#/contents/gallery-list-img" class="thumbnail">
                        <img src="../../images/new-gallery-img.jpg" />
                    </a>
                    <p>201709</p>
                </i-col>
                <i-col :md="4" :lg="4">
                    <a href="javascript:void(0);" class="thumbnail">
                        <img src="../../images/new-gallery-img.jpg" />
                    </a>
                    <p>201710</p>
                </i-col>
                <i-col :md="4" :lg="4">
                    <a href="javascript:void(0);" class="thumbnail">
                        <img src="../../images/new-gallery-img.jpg" />
                    </a>
                    <p>201711</p>
                </i-col>
                <i-col :md="4" :lg="4">
                    <a href="javascript:void(0);" class="thumbnail">
                        <img src="../../images/new-gallery-img.jpg" />
                    </a>
                    <p>201712</p>
                </i-col>
            </i-row>
        </i-card>
    </div>
</template>

<script>
    export default {
        name: 'gallery-list-dir'
    };
</script>

<style scoped>
    .thumbnail{
        cursor: pointer;
        display: block;
        padding: 4px;
        line-height: 1.42857143;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 4px;
    }
    .thumbnail img{
        width: 100%;
        height: 100%;
    }
    a:hover{
        border-color: #337ab7;
    }
    .ivu-col{
        text-align: center;
    }
</style>
