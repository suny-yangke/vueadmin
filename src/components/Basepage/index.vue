/**
 * @description:基础页面模板 囊括条件选择区域 数据展示区域
 * @author: 杨科
 * @date: 2020-06-03 15:41:26
 * @version: V1.0.0
 */
<template>
  <div style="height: 100%;">
    <!-- 内容美化右侧纵向滚动条 -->
    <el-scrollbar style="height:100%">
      <el-card shadow="hover" class="el-card">
        <slot name="header" />
      </el-card>
      <el-card shadow="hover" class="el-card">
        <slot name="main" />
      </el-card>
    </el-scrollbar>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  created() {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.el-card{
    margin: 5px;
}
// 取消显示横向滚动条
/deep/.el-scrollbar__wrap {
    overflow-x: hidden;
}
</style>
