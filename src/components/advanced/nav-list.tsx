import React from 'react';
import { NavLink } from 'react-router-dom'; 
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { 
  FolderOpen as FolderIcon,
  Code as CodeIcon,
 } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navLink: {
      color: '#ffffff',
      textDecoration: 'none',
    },
    listItemIcon: {
      color: '#ffffff',
      minWidth: 45,
    },
  }))

const icons = {
  FolderIcon,
  CodeIcon,
}

type NavItem = {
  icon: keyof typeof icons
  label: string
  path: string
}

type Props = {
  onClick?: () => void
}

const navList: NavItem[] = [
  {
    icon: 'CodeIcon',
    label: 'トップページ',
    path: '/'
  },
  {
    icon: 'FolderIcon',
    label: 'Hooksチュートリアル',
    path: '/hooks-tutorial'
  },
]

export const NavList: React.FC<Props> = props => {
  const classes = useStyles()

  return(
    <List component="nav">
      {navList.map((item, index) => (
        <NavLink 
          to={item.path}
          exact
          className={classes.navLink}
          onClick={props.onClick}
          key={index}
        >
          <ListItem button key={index} >
            <ListItemIcon className={classes.listItemIcon}>{React.createElement(icons[item.icon])}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        </NavLink>
      ))}
    </List>
  )
}
