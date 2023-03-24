import React from 'react'
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import styles from './index.module.scss'


const onChange = (key: string) => {
    console.log(key);
};

const items: TabsProps['items'] = [
    {
        key: '1',
        label: `Tab 1`,
        children: `Content of Tab Pane 1`,
    },
    {
        key: '2',
        label: `Tab 2`,
        children: <div>{`Content of Tab Pane 2`}</div>,
    },
    {
        key: '3',
        label: `Tab 3`,
        children: `Content of Tab Pane 3`,
    },
];
export const List = () => {
    return (
        <div>
            <div>title todo...</div>
            <Tabs className={styles.tagbox} defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
    )
}
