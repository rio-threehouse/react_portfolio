import React from 'react';
import { AppBar, IconButton, Toolbar, Typography, makeStyles, createStyles, Theme } from '@material-ui/core';

import { Menu as MenuIcon, ArrowBackRounded as ArrowBack } from '@material-ui/icons';
import { useLocation, NavLink } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
    backButton: {
      position: 'absolute',
      top: 5,
      left: 10,
    },
  })
)

type Props = {
  drawerOpen?: () => void
  backPath: string
  title?: string
}

export const HeaderBar: React.FC<Props> = ({
  drawerOpen,
  backPath,
  title
}) => {
  const classes = useStyles()
  const location = useLocation()

  return(
    <AppBar 
      position="fixed" 
      className={classes.appBar}
    >
      {location.pathname === "/" ? (
        <IconButton
          onClick={drawerOpen}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
      ) : (
        <NavLink to={backPath} exact >
          <IconButton
            className={classes.backButton}
          >
            <ArrowBack />
          </IconButton>
        </NavLink>
      )}
      
      <Toolbar>
        <Typography variant="h6">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}