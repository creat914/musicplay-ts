<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="歌手">
      <el-input
        v-model="formInline.user"
        placeholder="请输入歌手名称"
      ></el-input>
    </el-form-item>
    <el-form-item label="歌名">
      <el-input v-model="formInline.region" placeholder="请输入歌名"></el-input>
    </el-form-item>
    <el-form-item label="创建时间">
      <el-form-item prop="date1">
        <el-date-picker
          type="date"
          placeholder="请选择创建时间"
          v-model="formInline.date1"
          style="width: 100%"
        ></el-date-picker>
      </el-form-item>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
  </el-form>
  <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    stripe
    border
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" width="60"></el-table-column>
    <el-table-column label="封面图" width="120">
      <template #default="scope">
        <el-image
          style="width: 100px; height: 100px"
          :src="scope.row.coverImg"
          fit="cover"
        ></el-image>
      </template>
    </el-table-column>
    <el-table-column label="歌名" prop="singName"></el-table-column>
    <el-table-column prop="author" label="作者"></el-table-column>
    <el-table-column prop="mv" label="Mv"></el-table-column>
    <el-table-column
      prop="CommentCount"
      label="评论数"
      width="100"
    ></el-table-column>
    <el-table-column fixed="right" label="操作" width="100">
      <template #default="scope">
        <el-button
          @click="handleClick(scope.row)"
          type="text"
          size="small"
          class="detailColor"
          >查看</el-button
        >
        <el-button type="text" size="small" class="delColor">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script lang="ts">
let tableData = [
  {
    singName: "2016-05-03",
    name: "王小虎",
    coverImg: require("@/assets/musicDefault.jpg"),
    author: "王小虎",
    mv: "1",
    CommentCount: "1",
  },
  {
    singName: "2016-05-02",
    name: "王小虎",
    coverImg: require("@/assets/musicDefault.jpg"), 
    author: "王小虎",
    mv: "",
    CommentCount: "",
  },
  {
    singName: "2016-05-04",
    name: "王小虎",
    coverImg: require("@/assets/musicDefault.jpg"),
    author: "王小虎",
    mv: "",
    CommentCount: "",
  },
  {
    singName: "2016-05-01",
    name: "王小虎",
    coverImg: require("@/assets/musicDefault.jpg"),
    author: "王小虎",
    mv: "",
    CommentCount: "",
  },
  {
    singName: "2016-05-08",
    name: "王小虎",
    coverImg: require("@/assets/musicDefault.jpg"),
    author: "王小虎",
    mv: "",
    CommentCount: "",
  },
  {
    singName: "2016-05-06",
    name: "王小虎",
    coverImg: require("@/assets/musicDefault.jpg"),
    author: "王小虎",
    mv: "",
    CommentCount: "",
  },
  {
    singName: "2016-05-07",
    name: "王小虎",
    coverImg: require("@/assets/musicDefault.jpg"),
    author: "王小虎",
    mv: "",
    CommentCount: "",
  },
];
import { Row } from "element-ui";
import { ElTable, rowCallbackParams } from "element-ui/types/table";
import { defineComponent, reactive, toRefs, ToRefs, ref, Ref } from "vue";
import {useRouter} from 'vue-router'
export default defineComponent({
  setup() {
    let data: ToRefs = reactive({
      tableData: tableData,
      multipleSelection: [],
      formInline: {
        user: "",
        region: "",
        data1: "",
      },
    });
    let multipleTable: Ref<ElTable | null> = ref(null);
    let router = useRouter();
    const handleSelectionChange = (val: Array<rowCallbackParams>) => {
      console.log(val);
      data.multipleSelection = val;
    };
    const onSubmit = (): void => {
      console.log("submit!");
    };
    const handleClick = (row:rowCallbackParams):void => {
            router.push("/SongDetail")
    }
    return {
      ...toRefs(data),
      multipleTable,
      handleSelectionChange,
      onSubmit,
      handleClick
    };
  },
});
</script>
<style lang="less">
.el-table .show-other-color {
  background: rgb(226, 226, 226);
}
.el-table th {
  padding: 15px 0 !important;
}

.el-table td {
  padding: 8px !important;
}
.el-table_1_column_1 {
  text-align: center;
}
.el-table-column--selection .cell {
  padding: 0 !important;
  text-align: center;
}
.el-table td div {
  padding-left: 0 !important;
}

.el-form-item__content {
  height: 35px !important;
  line-height: 35px !important;
}
.el-input__inner {
  height: 35px !important;
  line-height: 35px !important;
}
.el-button {
  height: 35px !important;
  padding-top: 0 !important;
  padding-bottom: 0px !important;
}
.el-input__icon {
  line-height: 35px !important;
}
</style>