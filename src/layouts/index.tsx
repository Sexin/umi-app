import React from 'react';
import BasicLayout from './BasicLayout';
import BlankLayout from './BlankLayout';
import UserLayout from './UserLayout';
import { RouteChildrenProps } from 'react-router';
import { setLocale } from 'umi';

setLocale('zh-CN');
export default (props: RouteChildrenProps) => {
    if (props.location.pathname.startsWith('/user')) {
        return <UserLayout {...props} />;
    }
    if (
        props.location.pathname.startsWith('/blank') ||
        props.location.pathname == '/' || 
        props.location.pathname == '/index'
    ) {
        return <BlankLayout {...props} />;
    }
    return <BasicLayout {...props} />;
};