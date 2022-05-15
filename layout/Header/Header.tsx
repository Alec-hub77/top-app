import React, { FC } from 'react'
import styles from './Header.module.scss'
import { HeaderProps } from './Header.props'

export const Header = ({...props}:HeaderProps) => {
    return (
        <div {...props}>
            Header
        </div>
    )
}