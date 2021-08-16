import React from 'react';
import Navigation from './components/Navigation';
import CardsSection from './components/CardsSection';
import OperationsTable from './components/OperationsTable';
import { Toggle, ThemeProvider } from '@fluentui/react';
import { useState } from 'react';
import { AzureThemeLight, AzureThemeDark } from '@fluentui/azure-themes';
import '@fluentui/react/dist/css/fabric.css';

function App() {
    const [isDarkTheme, setDarkTheme] = useState(false);

    const setUseDarkMode = (mode) => {
        setDarkTheme(mode);
    };
    return (
        <ThemeProvider applyTo='body' theme={isDarkTheme ? AzureThemeDark : AzureThemeLight}>
            <div>
                <div className='ms-Grid' dir='ltr'>
                    <div className='ms-Grid-row'>
                        <div className='ms-Grid-col ms-sm1 ms-smPush11'>
                            <Toggle
                                label='Change themes'
                                onText='Dark Mode'
                                offText='Light Mode'
                                onChange={() => setUseDarkMode(!isDarkTheme)}
                            />
                        </div>
                    </div>
                    <div className='ms-Grid-row'>
                        <div className='ms-Grid-col ms-hiddenSm ms-md3 ms-lg3'><Navigation /></div>
                        <div className='ms-Grid-col ms-sm12 ms-md9 ms-lg9'>
                            <div className='ms-Grid-row'><CardsSection /></div>
                            <div className='ms-Grid-row'><OperationsTable /></div>
                        </div>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
