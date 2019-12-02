import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LayersIcon from '@material-ui/icons/Layers';
import {Link} from 'react-router-dom'

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
        <Link to={'/find-hacks'}>
            <ListItemText primary="Hack Ideas" />
        </Link>
    </ListItem>
      <ListItem button>
          <ListItemIcon>
              <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Submissions" />
      </ListItem>

  </div>
);
