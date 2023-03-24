import { Pagination } from 'antd'
import React, { FC } from 'react'
import styles from './index.module.scss'


const demo: any[] = []
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
                                    {item.tags?.map((i: { t: string }, key: React.Key | null | undefined) => <Tag key={key} t={i.t} />)}
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
