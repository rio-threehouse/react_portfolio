import React from 'react';
import { Hidden, Drawer, makeStyles, Theme, createStyles } from '@material-ui/core';
import { NavList } from './nav-list';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      }
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: '#4e454a',
    },
    toolbar: theme.mixins.toolbar,
  }
))

export type Props = {
  drawerClose: () => void,
  open: boolean
}

export const NavDrawer: React.FC<Props> = ({
  drawerClose,
  open,
}) => {
  const classes = useStyles()
  
  return(
    <>
      <Hidden smUp implementation="css">
      <Drawer
        variant="temporary"
        onClose={drawerClose}
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <NavList onClick={drawerClose} />
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
  </>
  )
}
