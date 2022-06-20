import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    boxFirst: {
        display: 'flex', 
        flexDirection: 'column' 
    },
    boxShared: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    avatar :{
        '&.MuiAvatar-root':{
            width: '25px', 
            height: '25px',
            fontSize: '0.7rem',
            lineHeight: '0px'
        }
    }
})