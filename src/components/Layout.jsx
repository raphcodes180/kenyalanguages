import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Box,
  CssBaseline,
  useTheme,
  useMediaQuery,
  Divider,
  Avatar,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';
import TranslateIcon from '@mui/icons-material/Translate';
import ChatIcon from '@mui/icons-material/Chat';
import AbcIcon from '@mui/icons-material/Abc';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SchoolIcon from '@mui/icons-material/School';
import FavoriteIcon from '@mui/icons-material/Favorite';

const drawerWidth = 240;

const navItems = [
  { text: 'Home', icon: <HomeIcon />, path: '/' },
  { text: 'Kikuyu Dictionary', icon: <BookIcon />, path: '/kikuyu-dictionary' },
  {
    text: 'Kiswahili Dictionary',
    icon: <TranslateIcon />,
    path: '/kiswahili-dictionary',
  },
  { text: 'Phrases', icon: <ChatIcon />, path: '/phrases' },
  { text: 'Alphabet', icon: <AbcIcon />, path: '/alphabet' },
  { text: 'Grammar', icon: <MenuBookIcon />, path: '/grammar' },
];

function Layout({ children }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = useState(!isSmallScreen);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  React.useEffect(() => {
    setOpen(!isSmallScreen);
  }, [isSmallScreen]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: theme.zIndex.drawer + 1,
          background: 'linear-gradient(90deg, #7b4397 0%, #dc2430 100%)',
        }}
        elevation={3}
      >
        <Toolbar>
          {isSmallScreen && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Avatar
            sx={{
              bgcolor: '#fff',
              color: '#dc2430',
              mr: 2,
              width: 40,
              height: 40,
              boxShadow: 2,
            }}
          >
            <SchoolIcon fontSize="large" />
          </Avatar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              fontWeight: 700,
              letterSpacing: 1,
              color: '#fff',
              textShadow: '1px 1px 4px #0002',
            }}
          >
            Kikuyu & Kiswahili Learning
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant={isSmallScreen ? 'temporary' : 'permanent'}
        open={open}
        onClose={handleDrawerToggle}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background: 'linear-gradient(135deg, #f5f0e1 80%, #e0c3a3 100%)',
            borderRight: 'none',
            boxShadow: 3,
          },
        }}
      >
        <Toolbar />
        <Box
          sx={{ px: 2, py: 1, display: 'flex', alignItems: 'center', gap: 1 }}
        >
          <Avatar sx={{ bgcolor: '#dc2430', width: 32, height: 32 }}>
            <SchoolIcon fontSize="small" />
          </Avatar>
          <Typography variant="subtitle1" fontWeight={600} color="#7b4397">
            Language Menu
          </Typography>
        </Box>
        <Divider sx={{ mb: 1 }} />
        <List>
          {navItems.map((item) => {
            const selected = location.pathname === item.path;
            return (
              <ListItem
                button
                key={item.text}
                component={Link}
                to={item.path}
                selected={selected}
                onClick={isSmallScreen ? handleDrawerToggle : undefined}
                sx={{
                  my: 0.5,
                  borderRadius: 2,
                  mx: 1,
                  background: selected
                    ? 'linear-gradient(90deg, #dc2430 0%, #7b4397 100%)'
                    : 'transparent',
                  color: selected ? '#fff' : '#7b4397',
                  boxShadow: selected ? 2 : 0,
                  fontWeight: selected ? 700 : 500,
                  '&:hover': {
                    background: selected
                      ? 'linear-gradient(90deg, #dc2430 0%, #7b4397 100%)'
                      : '#f3e5f5',
                    color: '#dc2430',
                  },
                  transition: 'all 0.2s',
                }}
              >
                <ListItemIcon
                  sx={{
                    color: selected ? '#fff' : '#7b4397',
                    minWidth: 36,
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontWeight: selected ? 700 : 500,
                    fontSize: 16,
                  }}
                />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          background: 'linear-gradient(135deg, #f5f0e1 80%, #e0c3a3 100%)',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Toolbar />
        <Box sx={{ flexGrow: 1 }}>{children}</Box>

        {/* Footer */}
        <Box
          component="footer"
          sx={{
            py: 3,
            mt: 4,
            borderTop: '1px solid #e0c3a3',
            textAlign: 'center',
          }}
        >
          <Container maxWidth="lg">
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} Nderitu. All rights reserved.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mt: 1,
              }}
            >
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                Made with{' '}
                <FavoriteIcon
                  sx={{ mx: 0.5, color: '#dc2430', fontSize: '1rem' }}
                />{' '}
                from Indiana
              </Typography>
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
