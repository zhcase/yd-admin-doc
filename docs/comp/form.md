<!--
 * @Author: zeHua
 * @Date: 2021-08-18 17:24:36
 * @LastEditors: zeHua
 * @LastEditTime: 2021-08-25 14:21:23
 * @FilePath: /yd-admin-doc/docs/comp/form.md
-->

# Form

## 基础示例

```vue
<template>
  <div class="basic-form">
    <div class="title">
      <h1>基础表单</h1>
    </div>
    <el-card class="box-card" shadow="never">
      <BasicForm :schema="basicForm" @handleSubmit="handleSubmit" :span="8" />
    </el-card>
  </div>
</template>

<script>
import BasicForm from '@/components/Form/components/BasicForm.vue';
export default {
  components: {
    BasicForm,
  },
  data() {
    return {
      activeNames: '1',
      basicForm: [
        {
          field: 'field1',
          label: '字段1',
          component: 'Input',
          placeholder: '字段1',
        },
        {
          field: 'field2',
          label: '带后缀',
          component: 'Input',
          placeholder: '字段2',
          suffix: '天',
        },
        {
          field: 'field2',
          label: '字段3',
          component: 'DatePicker',
          placeholder: '请选择',
        },
        {
          field: 'field4',
          label: '字段4',
          component: 'Select',
          placeholder: '请选择',
          clearable: true,
          componentProps: {
            options: [
              {
                label: 'hello',
                value: 1,
              },
              {
                label: 'hello2',
                value: 2,
              },
            ],
          },
        },
        {
          field: 'field5',
          label: '字段5',
          component: 'Checkbox',
          componentProps: {
            options: [
              {
                label: '选项1',
                value: 1,
              },
              {
                label: '选项2',
                value: 2,
              },
            ],
          },
        },
        {
          field: 'field6',
          label: '字段6',
          component: 'Radio',
          componentProps: {
            options: [
              {
                label: '选项1',
                value: 1,
              },
              {
                label: '选项2',
                value: 2,
              },
            ],
          },
        },
        {
          field: 'field7',
          label: '字段7',
          component: 'Switch',
        },
        {
          field: 'field8',
          label: '字段8',
          component: 'RadioButton',
          componentProps: {
            options: [
              {
                label: '选项1',
                value: 1,
              },
              {
                label: '选项2',
                value: 2,
              },
            ],
          },
        },
        {
          field: 'field9',
          label: '字段7',
          marks: {
            0: '0°C',
            8: '8°C',
            37: '37°C',
            50: {
              style: {
                color: '#1989FA',
              },
              label: this.$createElement('strong', '50%'),
            },
          },
          component: 'Slider',
        },
        {
          field: 'field10',
          label: '字段7',
          component: 'Rate',
        },
      ],
    };
  },
  methods: {
    handleSubmit(val) {
      console.log(val);
    },
  },
};
</script>
```

## 验证示例

```vue
<template>
  <div class="basic-form">
    <div class="title">
      <h1>可验证表单</h1>
    </div>
    <el-card class="box-card" shadow="never">
      <BasicForm :schema="basicForm" @handleSubmit="handleSubmit" :span="8" />
    </el-card>
  </div>
</template>

<script>
import BasicForm from '@/components/Form/components/BasicForm.vue';
export default {
  components: {
    BasicForm,
  },
  data() {
    return {
      activeNames: '1',
      basicForm: [
        {
          field: 'field1',
          label: '字段1',
          component: 'Input',
          placeholder: '字段1',
          rules: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            {
              min: 3,
              max: 5,
              message: '长度在 3 到 5 个字符',
              trigger: 'blur',
            },
          ],
        },
        {
          field: 'field2',
          label: '带后缀',
          component: 'Input',
          placeholder: '字段2',
          suffix: '天',
        },
        {
          field: 'field2',
          label: '字段3',
          component: 'DatePicker',
          placeholder: '请选择',
        },
        {
          field: 'field4',
          label: '字段4',
          component: 'Select',
          placeholder: '请选择',
          clearable: true,
          componentProps: {
            options: [
              {
                label: 'hello',
                value: 1,
              },
              {
                label: 'hello2',
                value: 2,
              },
            ],
          },
        },
        {
          field: 'field5',
          label: '字段5',
          component: 'Checkbox',
          componentProps: {
            options: [
              {
                label: '选项1',
                value: 1,
              },
              {
                label: '选项2',
                value: 2,
              },
            ],
          },
        },
        {
          field: 'field6',
          label: '字段6',
          component: 'Radio',
          componentProps: {
            options: [
              {
                label: '选项1',
                value: 1,
              },
              {
                label: '选项2',
                value: 2,
              },
            ],
          },
        },
        {
          field: 'field7',
          label: '字段7',
          component: 'Switch',
        },
        {
          field: 'field8',
          label: '字段8',
          component: 'RadioButton',
          componentProps: {
            options: [
              {
                label: '选项1',
                value: 1,
              },
              {
                label: '选项2',
                value: 2,
              },
            ],
          },
        },
        {
          field: 'field9',
          label: '字段7',
          marks: {
            0: '0°C',
            8: '8°C',
            37: '37°C',
            50: {
              style: {
                color: '#1989FA',
              },
              label: this.$createElement('strong', '50%'),
            },
          },
          component: 'Slider',
        },
        {
          field: 'field10',
          label: '字段7',
          component: 'Rate',
        },
      ],
    };
  },
  methods: {
    handleSubmit(val) {
      console.log(val);
    },
  },
};
</script>
```
