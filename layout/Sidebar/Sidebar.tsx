import React from 'react'
import styles from './Sidebar.module.scss'
import { SidebarProps } from './Sidebar.props'


export const Sidebar = ({...props}: SidebarProps) => {
    return (
        <div {...props}>
            sidebar
        </div>
    )
}