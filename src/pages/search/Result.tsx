import { Pagination } from 'antd'
import React, { FC } from 'react'
import styles from './index.module.scss'


const demo = [
    {
        url: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        txt: 'X1 TURBO 相关ID产品图片X1 TURBO 相关ID产品图片',
        time: '2023-02-26 19:34:43',
        tags: [
            { t: 'X1 TURBO' },
            { t: '产品ZAHA图' }
        ]
    },
    {
        url: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        txt: 'X1 TURBO 相关ID产品图片X1 TURBO 相关ID产品图片',
        time: '2023-02-26 19:34:43',
        tags: [
            { t: 'X1 TURBO' },
        ]
    },
    {
        url: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        txt: 'X1 TURBO 相关ID产品图片X1 TURBO 相关ID产品图片',
        time: '2023-02-26 19:34:43',
        tags: [
            { t: 'X1 TURBO' },
            { t: 'X1 TURBO' }
        ]
    }
]

const Tag: FC<{ t: string }> = ({ t }) => {
    return (
        <div className={styles.tag}>
            <p>{t}</p>
        </div>
    )
}

export const Result: FC<{ list: any[] }> = ({ list }) => {
    return (
        <div className={styles.result}>
            {demo.map((item, index) => (
                <div key={index}>
                    <div className={styles.li} >
                        <div className={styles.left}>
                            <img src={item.url} alt="" />
                        </div>
                        <div className={styles.right}>
                            <div className={styles.title}>
                                {item.txt}
                            </div>
                            <div className={styles.context}>
                                <div className={styles.tagdiv}>
                                    {item.tags?.map((i, key) => <Tag key={key} t={i.t} />)}
                                </div>
                                <div className={styles.time}>
                                    <p>
                                        {item.time}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.line}>
                    </div>
                </div>
            ))}

            {/* 分页 */}
            <div className={styles.pagination}>
                <Pagination defaultCurrent={1} total={200} showSizeChanger={false} />
            </div>

        </div>
    )
}
