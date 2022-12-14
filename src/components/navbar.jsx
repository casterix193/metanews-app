import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

const MENU_ITEMS = [
  {
    title: 'News',
    href: '/news',
  },
  {
    title: 'Articles',
    href: '/articles',
  },
  {
    title: 'Resources',
    href: '/resources',
  },
  {
    title: 'Trading Simulator',
    href: 'https://tradingsimulator.onrender.com',
  },
];

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'dark.darker',
        borderBottomColor: 'dark.darker',
        backgroundImage: 'linear-gradient(135deg, #0E0F0F, #121414)',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25)',
        // boxShadow: 'none',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box
            display="flex"
            alignItems="center"
            sx={{
              display: { xs: 'none', md: 'flex' },
              mr: 4,
            }}
          >
            <AcUnitRoundedIcon
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            />
            <Typography
              variant="h5"
              component={Link}
              fontWeight={700}
              to="/"
              sx={{ color: 'text.primary', textDecoration: 'none' }}
            >
              MetaNews
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {MENU_ITEMS.map((item) => (
                <MenuItem key={item.title} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{item.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
          >
            {MENU_ITEMS.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                style={{ textDecoration: 'none' }}
              >
                <Button
                  key={item.href}
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: 'text.secondary',
                    textTransform: 'capitalize',
                    fontWeight: 700,
                  }}
                >
                  {item.title}
                </Button>
              </Link>
            ))}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
