import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { NavDrawer } from '../advanced/nav-drawer'
import { HeaderBar } from '../advanced/header-bar';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
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
  const location = useLocation()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => setOpen(true)
  const handleDrawerClose = () => setOpen(false)

  return(
    <div className={classes.root}>
      {location.pathname === "/" && (
        <HeaderBar drawerOpen={handleDrawerOpen} title="React Portfolio" backPath="" />
      )}
      <NavDrawer 
        drawerClose={handleDrawerClose}
        open={open}
      />

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Content children={props.children} />
      </main>
    </div>
  )
}
