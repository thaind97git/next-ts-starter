import React, { useState } from 'react'
import { FormHelperText, MenuItem, Select as MSelect, SelectChangeEvent, SelectProps } from '@mui/material'

type OptionValue = string | number

type Option = {
    label: string | React.ReactNode
    value: OptionValue
}

interface Props extends Omit<SelectProps, 'onChange'> {
    options: Option[]
    placeholder?: string
    errorMessage?: string
    onChange?: (event: SelectChangeEvent<any>) => void
}

export const Select: React.FC<Props> = React.forwardRef(({ options, placeholder, defaultValue, errorMessage, name, ...rest }, ref) => {
    const [selectValue, setSelectValue] = useState(!!placeholder ? placeholder : defaultValue)

    const handleChangeSelect = (event: SelectChangeEvent<any>) => {
        setSelectValue(event.target.value as OptionValue)
        rest.onChange?.(event)
    }

    return (
        <>
            <MSelect
                renderValue={(selected) => {
                    if (placeholder && selected === placeholder) {
                        return <em>{placeholder}</em>
                    }
                    return options.find((option) => option.value === selected)?.label
                }}
                name={name}
                defaultValue={!!placeholder ? placeholder : defaultValue}
                {...rest}
                onChange={handleChangeSelect}
                ref={ref}
                value={selectValue}
            >
                {placeholder && (
                    <MenuItem disabled value={placeholder}>
                        <em>{placeholder}</em>
                    </MenuItem>
                )}
                {options.map(({ label, value }) => (
                    <MenuItem key={value} value={value}>
                        {label}
                    </MenuItem>
                ))}
            </MSelect>
            {!!errorMessage && (
                <FormHelperText error id={`${name}-error`}>
                    {errorMessage}
                </FormHelperText>
            )}
        </>
    )
})
