import React, { useState } from 'react';
import { Icon } from '@alifd/next';
import CustomForm from '../CustomForm';
import styles from './index.module.scss';

const initFields = {
  base: {
    id: '',
    archiveId: '',
    applyCode: '',
    name: '',
    otherCompany: '',
    principal: '',
  },
  advanced: {
    createTime: [],
    signTime: [],
    endTime: [],
    state: '',
    type: '',
    checkbox: 'false',
  },
};

function SearchFilter(props) {

  const [showAdvancedFields, setShowAdvancedFields] = useState(false);
  const [value, setValue] = useState({...initFields.base, ...initFields.advanced});

  /**
   * handler submit
   */
  function handleSubmit(errors) {
    if (errors) {
      console.log({ errors });
      return;
    }
    props.fetchData();
  }

  /**
   * 重置表单
   */
  async function handleReset() {
    await setValue(Object.assign(
      {},
      initFields.base,
      initFields.advanced
    ));
    props.fetchData();
  }

  /**
   * advance search
   */
  function handleAdvancedSearch() {
    setShowAdvancedFields(!showAdvancedFields);
  }

  /**
   * render button
   */
  function renderExtraContent() {
    return (
      <div className={styles.extraContent} onClick={handleAdvancedSearch}>
        高级搜索{' '}
        <Icon
          size="xs"
          type={showAdvancedFields ? 'arrow-up' : 'arrow-down'}
        />
      </div>
    );
  }

  /**
   * get form render field
   */
  function getFormFiled(initConfig) {
    if (showAdvancedFields) {
      return {
        config: initConfig,
        fields: Object.assign({}, initFields.base, initFields.advanced),
      };
    }

    const config = initConfig.filter((item) => {
      const keys = Object.keys(initFields.base);
      return keys.includes(item.formBinderProps.name);
    });

    return {
      config,
      fields: initFields.base,
    };
  }

  const config = [
    {
      label: "合同编号",
      component: 'Input',
      componentProps: {
        placeholder: '请输入合同编号',
      },
      formBinderProps: {
        name: 'id',
        required: false,
        message: '请输入正确的合同编号',
      },
    },
    {
      label: "归档号",
      component: 'Input',
      componentProps: {
        placeholder: '请输入归档号',
      },
      formBinderProps: {
        name: 'archiveId',
        required: false,
        message: '请输入正确的归档号',
      },
    },
    {
      label: "申请单号",
      component: 'Input',
      componentProps: {
        placeholder: '请输入申请单号',
      },
      formBinderProps: {
        name: 'applyCode',
      },
    },
    {
      label:"合同名称",
      component: 'Input',
      componentProps: {
        placeholder: '请输入合同名称',
      },
      formBinderProps: {
        name: 'name',
      },
    },
    {
      label: "对方公司",
      component: 'Select',
      componentProps: {
        placeholder: '请选择',

        dataSource: [
          { label: '杭州xxx科技公司', value: 'option1' },
          { label: '上海xxx科技公司', value: 'option2' },
        ],
      },
      formBinderProps: {
        name: 'otherCompany',
      },
    },
    {
      label: "负责人",
      component: 'Select',
      componentProps: {
        placeholder: '请选择',

        dataSource: [
          { label: '淘小宝', value: 'taoxiaobao' },
          { label: '淘二宝', value: 'taoerbao' },
        ],
      },
      formBinderProps: {
        name: 'principal',
      },
    },
    {
      label: "创建时间",
      component: 'RangePicker',
      componentProps: {
        placeholder: '请选择日期',

        defaultValue: [],
      },
      formBinderProps: {
        name: 'createTime',
      },
    },
    {
      label: "签订时间",
      component: 'RangePicker',
      componentProps: {
        placeholder: '请选择日期',

        defaultValue: [],
      },
      formBinderProps: {
        name: 'signTime',
      },
    },
    {
      label: "终止时间",
      component: 'RangePicker',
      componentProps: {
        placeholder: '请选择日期',

        defaultValue: [],
      },
      formBinderProps: {
        name: 'endTime',
      },
    },
    {
      label: "合同状态",
      component: 'Select',
      componentProps: {
        placeholder: '请选择',

        dataSource: [
          { value: 'draft', label: '起草中' },
          { value: 'approval', label: '审批中' },
          { value: 'effective', label: '待生效' },
          { value: 'abort', label: '终止' },
        ],
      },
      formBinderProps: {
        name: 'state',
      },
    },
    {
      label: "合同类型",
      component: 'Select',
      componentProps: {
        placeholder: '请选择',

        dataSource: [
          { label: '主合同', value: 'primary' },
          { label: '变更合同', value: 'change' },
        ],
      },
      formBinderProps: {
        name: 'type',
      },
    },
    {
      label: "查询我批准的合同",
      component: 'Checkbox',
      componentProps: {},
      formBinderProps: {
        name: 'checkbox',
      },
    },
  ];

  const formFiled = getFormFiled(config);
  return (
    <CustomForm
      value={value}
      config={formFiled.config}
      handleSubmit={handleSubmit}
      handleReset={handleReset}
      extraContent={renderExtraContent()}
    />
  );
}

export default SearchFilter;
