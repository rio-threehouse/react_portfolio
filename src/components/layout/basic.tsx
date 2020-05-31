import React from 'react';
import { NavList } from '../advanced/nav-list';
import { AppBar, Toolbar, Typography, Drawer } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar : {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      alignItems: 'center',
      color: '#4e454a',
      backgroundColor: '#e6e6fa',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
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

  return(
    <div className={classes.root}>
      <AppBar 
        position="fixed" 
        className={classes.appBar}
      >
        <Toolbar>
          <Typography variant="h6">
            React Protfolio
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer 
        variant="permanent" 
        open={true}
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.toolbar} />
        <NavList />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Content children={props.children} />
      </main>
    </div>
  )
}
