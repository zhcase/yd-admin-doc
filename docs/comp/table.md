# Table

对 element-ui 的 table 组件进行封装

## 基础示例

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
        apiFormat: 'data.items', // 调用table的数据格式
        paginationFormat: 'data.total', // 调用table的数据格式总页数
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

::: tip
所有的字段里面都继承了 element-ui 组件原本的所有属性
:::
::: warning
options 里面的参数 apiFormat（ table 数据 接口 返回的对象索引） 与 paginationFormat ( 分页 table 数据 接口 返回的对象索引)
:::

## 分页示例

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
        apiFormat: 'data.items', // 调用table的数据格式
        paginationFormat: 'data.total', // 调用table的数据格式总页数
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

::: warning
如上代码所示 添加 paginationProps 对象 分页栏将会出现。paginationFormat(总页数字段) 此字段将必不可少
:::

## Action 固定列

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
        apiFormat: 'data.items', // 调用table的数据格式
        paginationFormat: 'data.total', // 调用table的数据格式总页数
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
        apiFormat: 'data.items', // 调用table的数据格式
        paginationFormat: 'data.total', // 调用table的数据格式总页数
      },
      // 头部表单配置生成
      schemas: [
        {
          field: 'field',
          component: 'Input',
          label: '字段1',
          placeholder: '自定义placeholder',
          colProps: {
            span: 8,
          },
          defaultValue: '1',
          componentProps: {},
        },
        // ],
        {
          slot: 'form1', // 传给后台的value 是你命名的值
        },
        {
          field: 'field1',
          component: 'Select',
          label: '字段1',
          placeholder: '自定义placeholder',
          colProps: {
            span: 8,
          },
          defaultValue: '1',
          componentProps: {
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
          placeholder: '自定义placeholder',
          colProps: {
            span: 8,
          },
          defaultValue: '1',
          componentProps: {},
        },
        {
          field: 'field3',
          component: 'Input',
          label: '字段1',
          placeholder: '自定义placeholder',
          colProps: {
            span: 8,
          },
          defaultValue: '1',
          componentProps: {
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

|       属性        |    类型    | 默认值 | 可选值 | 说明                                                                                                                                              |
| :---------------: | :--------: | :----: | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
|   registerTable   | table 索引 | Array  |        | 里面的对象包括 label 标题,value 索引值，继承了所有 element-ui 的所有属性                                                                          |
| basicTableOptions | table 配置 | Object |        | 里面包括 api 的属性 api 代表接口地址，paginationProps 为分页,包含 basicTableProps 对象属性继承了 table 所有的属性                                 |
|    formSchema     | form 配置  | Array  |        | 里面的对象包括 field 传给后端的索引值 component 组件值里面包目目前包含 elment-ui 所有的组件 都以 Element-ui 组件命名 如需要 input component:Input |
