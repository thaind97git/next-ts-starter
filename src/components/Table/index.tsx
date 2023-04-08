import React from 'react'
import { TableContainer, Table as MTable, TableHead, TableRow, TableCell, TableBody, TableProps as MTableProps, Box } from '@mui/material'
import { ColumnType } from './type'

interface TableProps<T> extends MTableProps {
    columns: ColumnType<T>[]
    dataSource: T[]
    noBorderLastRow?: boolean
    emptyElement?: JSX.Element
    headersGroup?: {
        start?: JSX.Element
        end?: JSX.Element
    }
}

export function Table<T>({ dataSource, columns, noBorderLastRow, emptyElement, headersGroup, ...rest }: TableProps<T>): JSX.Element {
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
                    {headersGroup?.start && <TableRow>{headersGroup.start}</TableRow>}
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell key={column.key} sx={{ width: column.width }} {...column.columnProps}>
                                {column.title}
                            </TableCell>
                        ))}
                    </TableRow>
                    {headersGroup?.end && <TableRow>{headersGroup.end}</TableRow>}
                </TableHead>
                <TableBody>
                    {dataSource.map((row, index) => (
                        <TableRow key={index}>
                            {columns.map((column, index) => {
                                const value = (row as any)[column.key]
                                return <TableCell key={column.key}>{column.render ? column.render(value, row, index) : value}</TableCell>
                            })}
                        </TableRow>
                    ))}
                </TableBody>
            </MTable>
            {dataSource.length === 0 && emptyElement && <Box sx={{ textAlign: 'center' }}>{emptyElement}</Box>}
        </TableContainer>
    )
}
