import React from 'react'

import { ModeToggle } from 'components/ModeToggle'
import { useThemeSettings } from 'hooks/useThemeSetting'
import { Box } from '@mui/material'

const Dashboard = () => {
    const { themeSettings, saveThemeSettings } = useThemeSettings()
    return <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw'
    }}>
        <ModeToggle theme={themeSettings} saveTheme={saveThemeSettings} />
    </Box>
}

export default Dashboard
