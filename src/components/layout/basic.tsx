import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { Menu as MenuIcon} from '@material-ui/icons';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { NavDrawer } from '../advanced/nav-drawer';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar : {
      alignItems: 'center',
      color: '#4e454a',
      backgroundColor: '#e6e6fa',
      [theme.breakpoints.up('sm')]: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
      },
    },
    menuButton: {
      position: 'absolute',
      top: 5,
      left: 10,
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
  }))

 const Content: React.SFC = ({children}) => (
   <div>
     <>{children}</>
   </div>
 )

export const BasicLayout: React.FC = props => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => setOpen(true)
  const handleDrawerClose = () => setOpen(false)

  return(
    <div className={classes.root}>
      <AppBar 
        position="fixed" 
        className={classes.appBar}
      >
        <IconButton
          color="inherit"
          onClick={handleDrawerOpen}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>

        <Toolbar>
          <Typography variant="h6">
            React Protfolio
          </Typography>
        </Toolbar>
      </AppBar>

      <NavDrawer 
        onClose={handleDrawerClose}
        open={open}
      />

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Content children={props.children} />
      </main>
    </div>
  )
}
