import React, { SyntheticEvent } from 'react'
import { Box, Menu, MenuItem, MenuProps } from '@mui/material'

type Option = {
    label: JSX.Element | string
    onClick: () => void
}

interface Props extends Omit<MenuProps, 'open'> {
    children: JSX.Element
    options: Option[]
    open?: boolean
}

export const Dropdown: React.FC<Props> = ({ children, options, ...rest }) => {
    const [anchorEl, setAnchorEl] = React.useState<Element | null>(null)

    const handleDropdownOpen = (event: SyntheticEvent) => {
        setAnchorEl(event.currentTarget)
    }

    const handleDropdownClose = () => {
        setAnchorEl(null)
    }
    return (
        <>
            <Box onClick={handleDropdownOpen}>{children}</Box>
            <Menu
                anchorEl={anchorEl}
                onClose={handleDropdownClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                {...rest}
                open={Boolean(anchorEl)}
            >
                {options.map((opt, index) => {
                    return (
                        <MenuItem
                            key={index}
                            onClick={() => {
                                handleDropdownClose()
                                opt.onClick()
                            }}
                        >
                            {opt.label}
                        </MenuItem>
                    )
                })}
            </Menu>
        </>
    )
}
