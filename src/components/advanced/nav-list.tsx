import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { 
  FolderOpen as FolderIcon,
  Code as CodeIcon,
 } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
}

const navList: NavItem[] = [
  {
    icon: 'FolderIcon',
    label: 'Hooksチュートリアル'
  },
  {
    icon: 'CodeIcon',
    label: 'サンプルラベル1'
  },
  {
    icon: 'CodeIcon',
    label: 'サンプルラベル2'
  },
  {
    icon: 'CodeIcon',
    label: 'サンプルラベル3'
  }
]

export const NavList: React.FC = () => {
  const classes = useStyles()

  return(
    <List component="nav">
      {navList.map((item, index) => (
        <ListItem 
          button 
          key={index}
        >
          <ListItemIcon className={classes.listItemIcon}>{React.createElement(icons[item.icon])}</ListItemIcon>
          <ListItemText primary={item.label} />
        </ListItem>
      ))}
    </List>
  )
}
