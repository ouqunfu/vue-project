<style lang="less">
    @import './styles/shortcut-key-item.less';
</style>

<template>
    <i-row :gutter="5" class="shortcut-key-row">
        <i-row :gutter="5">
            <i-col :xs="24" :sm="12" :md="6":style="{paddingLeft: '12.5px',paddingRight: '12.5px'}">
                <a class="shortcut-key-item" href="javascript:void(0)">
                    <i-card class="shortcut-key-item-card">
                        <i-icon type="gear-a"></i-icon>
                        <p>网站设置</p>
                    </i-card>
                </a>
            </i-col>
            <i-col :xs="24" :sm="12" :md="6":style="{paddingLeft: '12.5px',paddingRight: '12.5px'}">
                <a class="shortcut-key-item" href="javascript:void(0)">
                    <i-card class="shortcut-key-item-card">
                        <i-icon type="compose"></i-icon>
                        <p>添加内容</p>
                    </i-card>
                </a>
            </i-col>
            <i-col :xs="24" :sm="12" :md="6":style="{paddingLeft: '12.5px',paddingRight: '12.5px'}">
                <a class="shortcut-key-item" href="javascript:void(0)">
                    <i-card class="shortcut-key-item-card">
                        <i-icon type="folder"></i-icon>
                        <p>专题管理</p>
                    </i-card>
                </a>
            </i-col>
            <i-col :xs="24" :sm="12" :md="6":style="{paddingLeft: '12.5px',paddingRight: '12.5px'}">
                <a class="shortcut-key-item" href="javascript:void(0)">
                    <i-card class="shortcut-key-item-card">
                        <i-icon type="document-text"></i-icon>
                        <p>生成HTML</p>
                    </i-card>
                </a>
            </i-col>
        </i-row>
        <i-row :gutter="5" class="margin-top-20">
            <i-col :xs="24" :sm="12" :md="6":style="{paddingLeft: '12.5px',paddingRight: '12.5px'}">
                <a class="shortcut-key-item" href="javascript:void(0)">
                    <i-card class="shortcut-key-item-card">
                        <i-icon type="refresh"></i-icon>
                        <p>更新缓存</p>
                    </i-card>
                </a>
            </i-col>
            <i-col :xs="24" :sm="12" :md="6":style="{paddingLeft: '12.5px',paddingRight: '12.5px'}">
                <a class="shortcut-key-item" href="javascript:void(0)">
                    <i-card class="shortcut-key-item-card">
                        <i-icon type="ios-list"></i-icon>
                        <p>栏目管理</p>
                    </i-card>
                </a>
            </i-col>
            <i-col :xs="24" :sm="12" :md="6":style="{paddingLeft: '12.5px',paddingRight: '12.5px'}">
                <a class="shortcut-key-item" href="javascript:void(0)">
                    <i-card class="shortcut-key-item-card">
                        <i-icon type="ios-list"></i-icon>
                        <p>分类管理</p>
                    </i-card>
                </a>
            </i-col>
            <i-col :xs="24" :sm="12" :md="6":style="{paddingLeft: '12.5px',paddingRight: '12.5px'}">
                <a class="shortcut-key-item" href="javascript:void(0)">
                    <i-card class="shortcut-key-item-card">
                        <i-icon type="person-stalker"></i-icon>
                        <p>角色管理</p>
                    </i-card>
                </a>
            </i-col>
        </i-row>
    </i-row>
</template>

<script>
    export default {
        name: 'shortcut-key-list-item'
    };
</script>

