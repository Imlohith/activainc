import { makeStyles } from '@material-ui/core'


export default makeStyles(theme => ({
    root: {
      width: 'fit-content',
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.secondary,
      '& svg': {
        margin: theme.spacing(2),
      },
      '& hr': {
        margin: theme.spacing(0, 0.5),
      },
    },
    container: {
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        flexDirection: 'column',
        alignItems: "center",
        position: "absolute",
        top: 0,
        left: 0,
      },
      card: {
        display:'block',
        width: '80vh'
      },
      signInButton: {
        margin: theme.spacing(2, 0)
      },
      textField: {
        borderBottomColor: theme.palette.background.light,
      },
      root: {
        flexWrap: 1
      },
      formButtons: {
        width: "100%",
        marginTop: theme.spacing(4),
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      },
      forgetButton: {
        textTransform: "none",
        fontWeight: 400,
      },
      loginLoader: {
        marginLeft: theme.spacing(20),
      },
      copyright: {
        marginTop: theme.spacing(4),
        whiteSpace: "nowrap",
        [theme.breakpoints.up("md")]: {
          position: "absolute",
          bottom: theme.spacing(2),
        },
      },
      paper: {
          padding:  theme.spacing.unit,
          paddingTop: '30px',
          paddingBottom: '30px',
          paddingRight: '30px',
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(5),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
      appBar: {
        alignItems: 'center',
        backgroundColor: "rgb(25, 123, 189)"
      },
      row: {
         display: 'flex',
      },
      divider : {
          height: "62vh",
      },
}))