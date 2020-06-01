import React from 'react';
import { NavList } from '../advanced/nav-list';
import { AppBar, Toolbar, Typography, Drawer, Hidden, IconButton } from '@material-ui/core';
import { Menu as MenuIcon} from '@material-ui/icons';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar : {
      [theme.breakpoints.up('sm')]: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
      },
      alignItems: 'center',
      color: '#4e454a',
      backgroundColor: '#e6e6fa',
    },
    menuButton: {
      position: 'absolute',
      top: 5,
      left: 10,
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: '#4e454a',
      color: '#ffffff'
    },
    toolbar: theme.mixins.toolbar,
    content: {
      // 要素の余白がある場合の伸び率
      flexGrow: 1,
      height: '100vh',
      // スクロール表示
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

  const handleDrawerOppen = () => setOpen(true)
  const handleDrawerClose = () => setOpen(false)

  return(
    <div className={classes.root}>
      <AppBar 
        position="fixed" 
        className={classes.appBar}
      >
        <IconButton
          color="inherit"
          onClick={handleDrawerOppen}
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

      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          onClose={handleDrawerClose}
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
          <NavList />
        </Drawer>
      </Hidden>

      <Hidden xsDown implementation="css">
        <Drawer
          variant="permanent"
          open={true}
          className={classes.drawer}
          classes={{ paper: classes.drawerPaper }}
        >
          <div className={classes.toolbar} />
          <NavList />
        </Drawer>
      </Hidden>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Content children={props.children} />
      </main>
    </div>
  )
}
