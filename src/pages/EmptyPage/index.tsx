import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import styles from './index.less';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from '../../redux/reducers'
import App from '../../redux/components/App'

let store = createStore(todoApp)

export default () => {
    //   const [loading, setLoading] = useState<boolean>(true);
    //   useEffect(() => {
    //     setTimeout(() => {
    //       setLoading(false);
    //     }, 3000);
    //   }, []);

    return (
        <PageHeaderWrapper content="这是一个新页面，从这里进行开发！" className={styles.main}>
            <Provider store={store}>
                <App />
            </Provider>
        </PageHeaderWrapper>
    );
};
