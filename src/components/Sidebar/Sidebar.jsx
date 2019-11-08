import React from 'react'
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SidebarLink from '../Sidebar/SidebarLink'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { withRouter } from 'react-router-dom';


//menus
import { menus } from './menus'

//styles
import useStyles from './styles'

function Sidebar(props) {
    console.log(props)

    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleLogout = () => {
      localStorage.removeItem('authToken')
      props.history.push('/login')
    }

    return (
        <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
          style={{ background: 'rgba(25,123,189)' }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              CAR DEALER
            </Typography>
            <div className={classes.toolbarButtons}>
                <IconButton color="inherit"><PowerSettingsNewIcon onClick={handleLogout} /></IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.paper] : "rgba(25,123,189)",
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
          open={open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon style={{ color: "#fff" }} /> : <ChevronLeftIcon style={{ color: "#fff" }} />}
            </IconButton>
          </div>
          <Divider />
          <List>
            {menus.map((link, index) => (
              <SidebarLink
                key={link.id} 
                {...link}
             />
            ))}
          </List>
          <Divider />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
            { props.children }
        </main>
      </div>
    )
}

export default withRouter(Sidebar)
