import { createTheme } from '@mui/material/styles'

const Inter = 'Inter, sans-serif'
const Roboto = 'Roboto, sans-serif'

export const theme = createTheme({
    pallete: {
        button: {
            main: '#f5222d'
        },
        header: {
            main: '#ffffff'
        }
    },
    typography: {
        h1: {
            fontFamily: Inter,
            fontWeight: 600
        },
        h2: {
            fontFamily: Inter,
            fontWeight: 600
        },
        h3: {
            fontFamily: Inter,
            fontWeight: 600
        },
        h4: {
            fontFamily: Inter,
            fontWeight: 600
        },
        h5: {
            fontFamily: Inter,
            fontWeight: 600
        },
        h6: {
            fontFamily: Inter,
            fontWeight: 600
        },
        subtitle1: {
            width: '84px',
            height: '20px',
            fontFamily: Roboto,
            fontWeight: 400,
            fontSize: '0.875rem'
        },
        subtitle2: {
            width: '165px',
            height: '16px',
            fontFamily: Roboto,
            fontWeight: 400,
            fontSize: '0.625rem',
            color: 'rgba(0, 0, 0, 0.45)'
        },
    },
})