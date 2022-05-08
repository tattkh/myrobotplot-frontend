import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Navigation() {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (e) => {
        setAnchorElNav(e.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <AppBar position='static'>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <Link to="/">MyRobotPlot</Link>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                            onClick={handleOpenNavMenu}
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
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign='center'>Page 1</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign='center'>
                                    <Link to="create">Create Movie Plot</Link>
                                </Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
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
                        <Link to="/">MyRobotPlot</Link>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Page 1
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Link to="create">Create Movie Plot</Link>
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navigation