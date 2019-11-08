import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
    root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }, 
      section : {
        height: '88vh',
        padding: theme.spacing(4),
      },
      space : {
        padding: theme.spacing(3),
      },
      pen: { 
        padding: theme.spacing(2, 2),
        marginBottom: theme.spacing(3),
        cursor: "pointer"
      },
      title: {
          marginBottom: '5px',
          color: "#fff"
      },
      notis: {
        height: '20vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
      },
      notiColor: {
        borderLeft: '3px solid rgba(25,123,189)',
        padding: '4px',
      },
      scrolly: {
        overflowY: "scroll",
      }

}))