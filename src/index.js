import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { teamsHighContrastTheme as selectedTheme } from '@fluentui/react-components'
import { ThemeProvider } from '@fluentui/react'
import { webLightTheme } from '@fluentui/react-theme'
import {
    AzureThemeLight,
    AzureThemeDark,
    AzureThemeHighContrastLight,
    AzureThemeHighContrastDark,
} from '@fluentui/azure-themes'
import { initializeIcons } from '@fluentui/react/lib/Icons'

initializeIcons(undefined, { disableWarnings: true })
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={webLightTheme}>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('app')
)
// hot reloading. It works by replacing a module of the application
// during runtime with an updated one so that it’s available for instant use.
module.hot.accept()
