import React from 'react'
import { Pagination as MPagination, PaginationProps } from '@mui/material'

interface Props extends PaginationProps {
    total: number
    pageSize: number
}

export const Pagination: React.FC<Props> = ({ total, pageSize, ...rest }) => {
    return <MPagination count={Math.ceil(total / pageSize)} {...rest} />
}
