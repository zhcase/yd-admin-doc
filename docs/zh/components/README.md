## Table 表格

对 element-ui 的 table 组件进行封装

### Usage

### 示例

```vue
<template>
  <div class="app-container">
    <BasicTable
      :registerTable="table1"
      :basicTableOptions="options"
      title="基础示例"
    >
    </BasicTable>
  </div>
</template>

<script>
import { getList } from '@/api/table';
import { BasicTable } from '@/components/Table/index';
export default {
  components: {
    BasicTable,
  },
  data() {
    return {
      options: {
        api: getList, // 调用接口地址
      },
      // table 索引
      table1: [
        {
          label: 'id',
          value: 'id',
          width: 200,
        },
        {
          label: '管理员账号',
          value: 'author',
          'show-overflow-tooltip': true,
          width: 200,
        },
        {
          label: 'title',
          value: 'title',
          'show-overflow-tooltip': true,
          width: 200,
        },

        {
          label: '用户状态',
          value: 'status',
          options: [
            {
              label: '删除',
              value: 'deleted',
            },
            { label: '发表', value: 'published' },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.app-container {
  height: 600px;
}
</style>
```

## 分页 示例

远程加载示例

```vue
<template>
  <div class="app-container">
    <BasicTable :registerTable="table1" :basicTableOptions="options">
    </BasicTable>
  </div>
</template>

<script>
import { getList } from '@/api/table';
import { BasicTable } from '@/components/Table/index';
export default {
  components: {
    BasicTable,
  },
  data() {
    return {
      options: {
        api: getList, // 调用接口地址
        paginationProps: {},
      },

      // table 索引
      table1: [
        {
          label: 'id',
          value: 'id',
          width: 200,
        },
        {
          label: '管理员账号',
          value: 'author',
          'show-overflow-tooltip': true,
          width: 200,
        },
        {
          label: 'title',
          value: 'title',
          'show-overflow-tooltip': true,
          width: 200,
        },

        {
          label: '用户状态',
          value: 'status',
          options: [
            {
              label: '删除',
              value: 'deleted',
            },
            { label: '发表', value: 'published' },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.app-container {
  height: 600px;
}
</style>
```

## tableAction 固定列

### 示例

```vue
<template>
  <div class="app-container">
    <BasicTable :registerTable="table1" :basicTableOptions="options">
      <template #action>
        <el-table-column align="center" label="操作" fixed="right" width="300">
          <template>
            <el-button type="text" icon="el-icon-edit">修改</el-button>
            <el-button type="text" icon="el-icon-delete">删除</el-button>
            <el-button type="text" icon="el-icon-plus">添加</el-button>
          </template>
        </el-table-column>
      </template>
    </BasicTable>
  </div>
</template>

<script>
import { getList } from '@/api/table';
import { BasicTable } from '@/components/Table/index';
export default {
  components: {
    BasicTable,
  },
  data() {
    return {
      options: {
        api: getList, // 调用接口地址
      },
      // table 索引
      table1: [
        {
          label: 'id',
          value: 'id',
          width: 200,
        },
        {
          label: '管理员账号',
          value: 'author',
          'show-overflow-tooltip': true,
          width: 500,
        },
        {
          label: 'title',
          value: 'title',
          'show-overflow-tooltip': true,
          width: 200,
        },

        {
          label: '用户状态',
          value: 'status',
          options: [
            {
              label: '删除',
              value: 'deleted',
            },
            { label: '发表', value: 'published' },
          ],
        },
        {
          label: '操作',
          slot: 'action',
        },
      ],
    };
  },
};
</script>

<style scoped>
.app-container {
  height: 600px;
}
</style>
```

## 搜索区域 Table

示例：

```vue
<template>
  <div class="app-container">
    <BasicTable
      :registerTable="table1"
      :basicTableOptions="options"
      :formSchema="schemas"
      @changeSwitch="changeSwitch"
    >
      <template #form1>
        <el-form-item label="自定义">
          <el-input v-model="form1" />
        </el-form-item>
      </template>
      <template #toolbarLeft>
        <el-button size="mini" @click="handleEdit([tableData[1], tableData[2]])"
          >Edit</el-button
        >
      </template>
    </BasicTable>
  </div>
</template>

<script>
import { getList } from '@/api/table';
import { BasicTable } from '@/components/Table/index';
export default {
  components: {
    BasicTable,
  },
  data() {
    return {
      // list: null,
      form1: '',
      // listLoading: true,
      options: {
        api: getList, // 调用接口地址
        paginationProps: {},
      },
      // 头部表单配置生成
      schemas: [
        {
          field: 'field',
          component: 'Input',
          label: '字段1',
          colProps: {
            span: 8,
          },
          defaultValue: '1',
          componentProps: {
            placeholder: '自定义placeholder',
          },
        },
        // ],
        {
          slot: 'form1',
          field: 'field11',
        },
        {
          field: 'field1',
          component: 'Select',
          label: '字段1',
          colProps: {
            span: 8,
          },
          defaultValue: '1',
          componentProps: {
            placeholder: '自定义placeholder',
            options: [
              {
                value: '选项1',
                label: '黄金糕',
              },
              {
                value: '选项2',
                label: '双皮奶',
              },
            ],
          },
        },
        {
          field: 'field2',
          component: 'Input',
          label: '字段1',
          colProps: {
            span: 8,
          },
          defaultValue: '1',
          componentProps: {
            placeholder: '自定义placeholder',
          },
        },
        {
          field: 'field3',
          component: 'Input',
          label: '字段1',
          colProps: {
            span: 8,
          },
          defaultValue: '1',
          componentProps: {
            placeholder: '自定义placeholder',
            onChange: (e) => {
              console.log(e);
            },
          },
        },
      ],

      // table 索引
      table1: [
        {
          label: 'id',
          value: 'id',
          width: 200,
        },
        {
          label: '管理员账号',
          value: 'author',
          'show-overflow-tooltip': true,
          width: 200,
        },
        {
          label: 'title',
          value: 'title',
          'show-overflow-tooltip': true,
          width: 200,
        },

        {
          label: '用户状态',
          value: 'status',
          options: [
            {
              label: '删除',
              value: 'deleted',
            },
            { label: '发表', value: 'published' },
          ],
        },
        {
          type: 'radio',
          label: '是否',
          options: [
            {
              label: '删除',
              value: 'deleted',
            },
            { label: '发表', value: 'published' },
          ],
        },
      ],
    };
  },
  methods: {
    //   switch
    changeSwitch(val, cb) {
      console.log(val);
      cb(true);
    },
  },
};
</script>

<style scoped>
.app-container {
  height: 600px;
}
</style>
```

## Props

|       属性        |    类型    | 默认值 | 可选值 | 说明                                                                                                              |
| :---------------: | :--------: | :----: | ------ | ----------------------------------------------------------------------------------------------------------------- |
|   registerTable   | table 索引 | Array  |        | 里面的对象包括 label 标题,value 索引值，继承了所有 element-ui 的所有属性                                          |
| basicTableOptions | table 配置 | Object |        | 里面包括 api 的属性 api 代表接口地址，paginationProps 为分页,包含 basicTableProps 对象属性继承了 table 所有的属性 |
|    formSchema     | form 配置  | Array  |        | 里面的对象包括 field 传给后端的索引值 component 组件值里面包目目前包含 Input,Select,Daterange 后续会新增          |
