
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Breadcrumbs, Link } from '@mui/material';

function Navbar() {
  return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Student Register
                </Typography>
                <Link href="#">Link</Link>
                <Link href="#" color="inherit">
                 Home
                </Link>
                <Link href="#" variant="body2">
                {'variant="body2"'}
                </Link>
                </Toolbar>
            </AppBar>
            {/* breadcrumb  */}
                    <Breadcrumbs aria-label="breadcrumb" separator=">" >
        <Link underline="hover" color="inherit" href="">
            MUI
        </Link>
        <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
        >
            Core
        </Link>
        <Typography sx={{ color: 'text.primary' }}>Breadcrumbs</Typography>
        </Breadcrumbs>
                </Box>
        );
        }

export default Navbar

