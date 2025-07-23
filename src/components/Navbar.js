import React, { useState } from "react";
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box, 
  Button, 
  Switch, 
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const navLinks = ["home", "about", "skills", "projects", "contact"];

const Navbar = ({ mode, setMode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', width: 250 }}>
      <List>
        {navLinks.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton 
              href={`#${item}`}
              sx={{ 
                textAlign: 'center',
                textTransform: 'capitalize',
                fontWeight: 500,
                color: 'text.primary'
              }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" color="default" elevation={3} sx={{ zIndex: theme.zIndex.drawer + 1 }}>
      <Toolbar sx={{ 
        justifyContent: "space-between",
        px: { xs: 1, sm: 2 }
      }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            background: "linear-gradient(90deg,#3b82f6,#8b5cf6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: { xs: '1.25rem', sm: '1.5rem' }
          }}
        >
          MERN Portfolio
        </Typography>
        
        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 1 }}>
            {navLinks.map((link) => (
              <Button
                key={link}
                href={`#${link}`}
                color="primary"
                sx={{ 
                  textTransform: "capitalize", 
                  fontWeight: 500,
                  fontSize: { sm: '0.875rem', md: '1rem' }
                }}
              >
                {link}
              </Button>
            ))}
          </Box>
        )}
        
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Switch
            checked={mode === "dark"}
            onChange={() => setMode(mode === "dark" ? "light" : "dark")}
            color="secondary"
            inputProps={{ "aria-label": "toggle dark mode" }}
          />
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ ml: 1 }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </Toolbar>
      
      {isMobile && (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: 250,
              backgroundColor: mode === 'dark' ? '#121212' : '#fff'
            },
          }}
        >
          {drawer}
        </Drawer>
      )}
    </AppBar>
  );
};

export default Navbar;