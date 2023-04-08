import { TableCellProps } from '@mui/material'

export interface ColumnType<T> {
    title: string
    key: string
    width?: number | string
    columnProps?: TableCellProps
    render?: (value: any, record: T, index: number) => React.ReactNode
}
