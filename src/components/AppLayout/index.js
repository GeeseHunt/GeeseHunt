import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Drawer,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  Button,
  Avatar,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SpellcheckIcon from '@material-ui/icons/Spellcheck';
import ExploreIcon from '@material-ui/icons/Explore';
import { connect } from 'react-redux';
import Link from '../Link/Link';
import useStyles from './styles/AppLayoutStyles';
import LoginDialog from '../LoginDialog';
import { selectUser } from '../../selectors/user';

export function AppLayout({ children, user }) {
  const classes = useStyles();
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [showLogin, setShowLogin] = React.useState(false);
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const isLoggedIn = Boolean(user.id);

  const sideBarMenuItems = [
    { text: 'Explorer Course', icon: <ExploreIcon />, link: '/explore' },
    { text: 'My GPA', icon: <SpellcheckIcon />, link: '/' },
  ];

  const appBar = (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: drawerOpen,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: drawerOpen,
          })}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap className={classes.appTitle}>
          GeeseHunt
        </Typography>
        {isLoggedIn ? (
          <IconButton size="small">
            <Avatar
              alt={user.displayName}
              src={user.avatarUrl}
              className={classes.avatar}
            />
          </IconButton>
        ) : (
          <Button color="inherit" onClick={() => setShowLogin(true)}>
            Login
          </Button>
        )}
        <LoginDialog open={showLogin} onClose={() => setShowLogin(false)} />
      </Toolbar>
    </AppBar>
  );

  const sideBar = (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: drawerOpen,
        [classes.drawerClose]: !drawerOpen,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: drawerOpen,
          [classes.drawerClose]: !drawerOpen,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        {sideBarMenuItems.map(({ text, link, icon }) => (
          <Link key={text} to={link} className={classes.listItemLink}>
            <ListItem button>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      {appBar}
      {sideBar}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  user: selectUser(state),
});

export default connect(mapStateToProps)(AppLayout);
