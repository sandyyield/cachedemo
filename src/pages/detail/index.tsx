import { Button } from 'antd'
import styles from './index.module.scss'


/**
 * 模拟一个下载底部组件
 */
const Bottom = () => {
    return (
        <div className={styles.bottom}>
            <Button className={styles.btn}>下载源文件</Button>
            <Button className={styles.btn} type='primary'>下载原图</Button>
        </div>
    )
}


export const Detial = () => {
    return (
        <div className={styles.box}>
            <div className={styles.module}>
                <p className={styles.title}>标题</p>
                <p className={styles.txt}>X1 TURBO ZAHA产品图-不带背景-不带效果X1 TURBO ZAHA产品图-不带背景-不带效果</p>
            </div>
            <div className={styles.module}>
                <p className={styles.title}>缩略图</p>
                <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" alt="" />
            </div>
            <div className={styles.module}>
                <p className={styles.title}>更新时间</p>
                <p className={styles.txt}>2023-02-27 19:34:43</p>
            </div>
            <div className={styles.module}>
                <p className={styles.title}>标题</p>
                <div>
                    这里插个html即可
                </div>
            </div>
            <Bottom />
        </div>
    )
}
