import { createTheme } from '@mui/material/styles'

const Inter = 'Inter, sans-serif'
const Roboto = 'Roboto, sans-serif'

export const theme = createTheme({
    palette: {
        secondary: {
            main: '#f5222d',
            contrastText: '#ffffff',
        },
        header: {
            main: '#ffffff',
        }
    },
    typography: {
        h1: {
            fontFamily: Inter,
            fontWeight: 600,
            color: 'rgba(0, 0, 0, 0.85)'
        },
        h2: {
            fontFamily: Inter,
            fontWeight: 600,
            color: 'rgba(0, 0, 0, 0.85)'
        },
        h3: {
            fontFamily: Inter,
            fontWeight: 600,
            color: 'rgba(0, 0, 0, 0.85)'
        },
        h4: {
            fontFamily: Inter,
            fontWeight: 600,
            color: 'rgba(0, 0, 0, 0.85)'
        },
        h5: {
            fontFamily: Inter,
            fontWeight: 600,
            color: 'rgba(0, 0, 0, 0.85)'
        },
        h6: {
            fontFamily: Inter,
            fontWeight: 600,
            color: 'rgba(0, 0, 0, 0.85)'
        },
        subtitle1: {
            fontFamily: Roboto,
            fontWeight: 400,
            fontSize: '0.875em'
        },
        subtitle2: {
            width: '165px',
            height: '16px',
            fontFamily: Roboto,
            fontWeight: 400,
            fontSize: '0.625em',
            color: 'rgba(0, 0, 0, 0.45)'
        },
    },
})