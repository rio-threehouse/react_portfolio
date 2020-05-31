import React from 'react';
import { AppBar, Toolbar, Typography, List, ListItem, ListItemIcon, ListItemText, Drawer } from '@material-ui/core';
import { FolderOpen as FolderIcon } from '@material-ui/icons';
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
    listItemIcon: {
      color: '#ffffff',
      minWidth: 45,
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

 const sampleListData = [
   'Hooksチュートリアル',
   'sample_title_2',
   'sample_title_3',
   'sample_title_4',
 ]

 const Content: React.SFC = ({children}) => (
   <div>
     <>{children}</>
   </div>
 )

export const BasicLayout: React.FC = props => {
  const classes = useStyles()

  const navList = (
    <div>
      <div className={classes.toolbar} />
      <List >
        {sampleListData.map((text, index) => (
          <ListItem 
            button 
            key={index}
          >
            <ListItemIcon className={classes.listItemIcon}><FolderIcon /></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  )

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
        {navList}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Content children={props.children} />
      </main>
    </div>
  )
}
