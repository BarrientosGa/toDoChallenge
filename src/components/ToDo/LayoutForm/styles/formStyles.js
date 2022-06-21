import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    paper: {
        [theme.breakpoints.up('md')]: {
            width: '50%',
            margin: '25px auto'
        },
        [theme.breakpoints.down('lg')]: {
            marginTop:'25px'
        }
    },
    textField: {
        '& .css-1wc848c-MuiFormHelperText-root': {
            color: '#d32f2f'
        }
    }
}))