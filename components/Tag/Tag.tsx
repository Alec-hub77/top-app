import React from 'react'
import styles from './Tag.module.scss'
import { TagProps } from './Tag.props'
import cn from 'classnames'
import Link from 'next/link'


export const Tag = ({size = 'm', children, color = 'ghost', className, href, ...props}:TagProps) => { 
    return (
        <div className={cn(styles.tag, className, {
            [styles.s]: size == 's',
            [styles.m]: size == 'm',
            [styles.ghost]: color == 'ghost',
            [styles.red]: color == 'red',
            [styles.gray]: color == 'gray',
            [styles.primary]: color == 'primary',
            [styles.green]: color == 'green',
        })}
        {...props}
        >
            {
                href
                ? <Link href={href}><a>{children}</a></Link>
                : <>{children}</>
            }
        </div>
    )
}