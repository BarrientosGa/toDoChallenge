import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    container: {
        '&.MuiContainer-root': {
            marginTop: '25px',
            background: '#ffffff',
            paddingTop: '10px',
            paddingBottom: '10px'
        }
    },
    itemColumn: {
            display:'flex', 
            flexDirection:'column !important', 
            flexGrow: 1
    },
    typography: {
        '&.MuiTypography-root': {
            fontSize:'0.813em', 
            marginLeft:'8px'
        }
    }
})