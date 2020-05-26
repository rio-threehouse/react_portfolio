import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
 createStyles({
   root: {
     display: 'flex',
   },
   toolbar: theme.mixins.toolbar,
 }))

export const HeaderBar: React.FC = () => {
  const classes = useStyles()
  return(
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">
            React Protfolio
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar} />
    </div>
  )
}
