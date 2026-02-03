import {
  AppBar,
  Toolbar,
  Box,
  TextField,
  IconButton,
  Badge,
  Avatar,
  InputAdornment,
  Typography,
  Divider,
  Button
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';

export default function Navbar() {
  return (
    <AppBar position="sticky" color="inherit" elevation={1}>
      <Toolbar sx={{ gap: { xs: 1, md: 2 }, minHeight: 52, px: { xs: 1, md: 2 } }}>
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            sx={{
              width: 34,
              height: 34,
              bgcolor: 'primary.main',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 1
            }}
          >
            <span style={{ color: 'white', fontWeight: 'bold', fontSize: '20px' }}>in</span>
          </Box>
        </Box>

        {/* Search */}
        <TextField
          size="small"
          placeholder="Search"
          sx={{
            width: { xs: 150, sm: 280 },
            '& .MuiOutlinedInput-root': {
              height: 34
            }
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
        />

        <Box sx={{ flexGrow: 1 }} />

        {/* Navigation Icons */}
        <Box sx={{ display: 'flex', gap: { xs: 0.5, md: 1 }, alignItems: 'center' }}>
          {/* Home */}
          <IconButton sx={{ flexDirection: 'column', borderRadius: 0, px: { xs: 1, md: 1.5 } }}>
            <HomeIcon sx={{ fontSize: 24 }} />
            <Typography variant="caption" sx={{ fontSize: 10, mt: 0.25 }}>
              Home
            </Typography>
          </IconButton>

          {/* My Network */}
          <IconButton sx={{ flexDirection: 'column', borderRadius: 0, px: { xs: 1, md: 1.5 } }}>
            <PeopleIcon sx={{ fontSize: 24 }} />
            <Typography variant="caption" sx={{ fontSize: 10, mt: 0.25 }}>
              My Network
            </Typography>
          </IconButton>

          {/* Jobs */}
          <IconButton sx={{ flexDirection: 'column', borderRadius: 0, px: { xs: 1, md: 1.5 } }}>
            <WorkIcon sx={{ fontSize: 24 }} />
            <Typography variant="caption" sx={{ fontSize: 10, mt: 0.25 }}>
              Jobs
            </Typography>
          </IconButton>

          {/* Messaging */}
          <IconButton sx={{ flexDirection: 'column', borderRadius: 0, px: { xs: 1, md: 1.5 } }}>
            <Badge badgeContent={4} color="error" sx={{ '& .MuiBadge-badge': { fontSize: 9, minWidth: 16, height: 16 } }}>
              <ChatBubbleIcon sx={{ fontSize: 24 }} />
            </Badge>
            <Typography variant="caption" sx={{ fontSize: 10, mt: 0.25 }}>
              Messaging
            </Typography>
          </IconButton>

          {/* Notifications */}
          <IconButton sx={{ flexDirection: 'column', borderRadius: 0, px: { xs: 1, md: 1.5 } }}>
            <Badge badgeContent={12} color="error" sx={{ '& .MuiBadge-badge': { fontSize: 9, minWidth: 16, height: 16 } }}>
              <NotificationsIcon sx={{ fontSize: 24 }} />
            </Badge>
            <Typography variant="caption" sx={{ fontSize: 10, mt: 0.25 }}>
              Notifications
            </Typography>
          </IconButton>

          {/* Me */}
          <IconButton sx={{ flexDirection: 'column', borderRadius: 0, px: { xs: 1, md: 1.5 } }}>
            <Avatar sx={{ width: 24, height: 24 }}>U</Avatar>
            <Typography variant="caption" sx={{ fontSize: 10, mt: 0.25 }}>
              Me
            </Typography>
          </IconButton>

          <Divider orientation="vertical" flexItem sx={{ mx: 1, display: { xs: 'none', md: 'block' } }} />

          {/* Work */}
          <IconButton sx={{ flexDirection: 'column', borderRadius: 0, px: { xs: 1, md: 1.5 }, display: { xs: 'none', md: 'flex' } }}>
            <AppsIcon sx={{ fontSize: 24 }} />
            <Typography variant="caption" sx={{ fontSize: 10, mt: 0.25 }}>
              Work
            </Typography>
          </IconButton>

          {/* Try Premium */}
          <Button
            sx={{
              flexDirection: 'column',
              borderRadius: 0,
              px: { xs: 1, md: 1.5 },
              textTransform: 'none',
              display: { xs: 'none', lg: 'flex' },
              color: 'text.primary'
            }}
          >
            <Box
              sx={{
                fontSize: 12,
                fontWeight: 600,
                color: '#915907',
                textDecoration: 'underline'
              }}
            >
              Try Premium for
            </Box>
            <Typography variant="caption" sx={{ fontSize: 10, color: '#915907', fontWeight: 600 }}>
              free
            </Typography>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
