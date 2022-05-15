import React from 'react'
import styles from './Ptag.module.scss'
import { PtagProps } from './Ptag.props'


export const Ptag = ({size, children}: PtagProps) => {

    switch(size) {
        case 'sm':
            return <p className={styles.p_sm}>{children}</p>
        case 'md':
            return <p className={styles.p_md}>{children}</p>
        case 'lg':
            return <p className={styles.p_lg}>{children}</p>
        default:
            return <></>
    }
}

