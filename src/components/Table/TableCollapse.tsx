import React from 'react'
import { TableContainer, Table as MTable, TableHead, TableRow, TableCell, TableBody, IconButton, Collapse, TableProps } from '@mui/material'
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import { ColumnType } from './type'

interface Props<T> extends TableProps {
    columns: ColumnType<T>[]
    dataSource: T[]
    collapseRender?: (row: T) => JSX.Element
    collapseTitle?: string
    noBorderLastRow?: boolean
}
interface RowProps<T> extends Pick<Props<T>, 'columns' | 'collapseRender'> {
    row: T
}

const Row = <T,>({ columns, row, collapseRender }: RowProps<T>) => {
    const [open, setOpen] = React.useState(false)
    return (
        <>
            <TableRow sx={{ '& > td': { borderBottom: 'unset' } }}>
                {columns.map((column, index) => {
                    const value = (row as any)[column.key]
                    return <TableCell key={column.key}>{column.render ? column.render(value, row, index) : value}</TableCell>
                })}
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                    </IconButton>
                </TableCell>
            </TableRow>
            {collapseRender && (
                <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            {collapseRender?.(row)}
                        </Collapse>
                    </TableCell>
                </TableRow>
            )}
        </>
    )
}

export function TableCollapse<T>({
    dataSource,
    columns,
    collapseRender,
    collapseTitle = '',
    noBorderLastRow,
    ...rest
}: Props<T>): JSX.Element {
    return (
        <TableContainer>
            <MTable
                {...rest}
                sx={{
                    ...rest.sx,
                    '& tr:last-child td': {
                        borderBottom: (theme) => (noBorderLastRow ? 'unset' : `1px solid ${theme.palette.divider}`)
                    }
                }}
            >
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell key={column.key} sx={{ width: column.width }} {...column.columnProps}>
                                {column.title}
                            </TableCell>
                        ))}
                        <TableCell sx={{ width: 6 }}>{collapseTitle}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dataSource.map((row, index) => (
                        <Row key={index} row={row} collapseRender={collapseRender} columns={columns} />
                    ))}
                </TableBody>
            </MTable>
        </TableContainer>
    )
}
