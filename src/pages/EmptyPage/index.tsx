import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import styles from './index.less';
import todoApp from '../../redux/reducers';
import App from '../../redux/components/App';
import TableBasic from './TableBasic';
let store = createStore(todoApp);
export default () => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <PageHeaderWrapper content="这是一个新页面，从这里进行开发！" className={styles.main}>
      <TableBasic />
      <Spin spinning={loading}></Spin>
      <Provider store={store}>
        <App />
      </Provider>
    </PageHeaderWrapper>
  );
};
