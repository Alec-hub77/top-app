import React from 'react'
import styles from './Htag.module.scss'
import { HtagProps } from './Htag.props'

export const Htag = ({tag, children}: HtagProps) => {

    switch(tag) {
        case 'h1':
            return <h1 className={styles.h1}>{children}</h1>
        case 'h2':
            return <h2>{children}</h2>
        case 'h3':
            return <h3>{children}</h3>
        default:
            return <></>
    }
}

