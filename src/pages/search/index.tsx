import { useState } from 'react';
import styles from './index.module.scss'
import { Button, DatePicker } from 'antd';
import { Container } from '@mui/material';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Result } from './Result';

export const SearchPage = () => {

    const [txt, setTxt] = useState('');
    const [searchResult, setSearchResult] = useState([1])

    const handleSearch = async () => {
        console.log('ser:', txt)
        //todo...
    }

    return (
        <Container className={styles.box}>
            <Space.Compact style={{ width: '100%', height: '44px' }}>
                <Input className={styles.input} bordered={false} value={txt} onChange={e => setTxt(e.target.value)} />
                <Button className={styles.btn} type="primary" icon={<SearchOutlined />} onClick={handleSearch}>
                    搜索
                </Button>
            </Space.Compact>
            {searchResult && <Result list={searchResult} />}
        </Container>
    )
}
