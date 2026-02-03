import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import GroupsIcon from '@mui/icons-material/Groups';
import EventIcon from '@mui/icons-material/Event';
import TagIcon from '@mui/icons-material/Tag';
import AddIcon from '@mui/icons-material/Add';

export default function LeftSidebar() {
  return (
    <Box sx={{ position: 'sticky', top: 80 }}>
      {/* Profile Card */}
      <Card sx={{ overflow: 'visible' }}>
        {/* Cover Photo */}
        <Box
          sx={{
            height: 54,
            background: 'linear-gradient(to right, #0073b1, #005885)',
            borderRadius: '4px 4px 0 0'
          }}
        />

        {/* Profile Section */}
        <Box sx={{ textAlign: 'center', position: 'relative', pt: 0 }}>
          <Avatar
            sx={{
              width: 72,
              height: 72,
              margin: '-36px auto 0',
              border: '2px solid white',
              bgcolor: '#6a5acd'
            }}
          >
            JD
          </Avatar>

          <Box sx={{ px: 2, pt: 1, pb: 0 }}>
            <Typography variant="subtitle1" fontWeight={600} sx={{ fontSize: 16 }}>
              John Doe
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: 12, mb: 1 }}>
              Software Developer | Tech Enthusiast
            </Typography>
          </Box>
        </Box>

        <Divider />

        {/* Stats Section */}
        <List disablePadding dense>
          <ListItem disablePadding>
            <ListItemButton sx={{ py: 0.75 }}>
              <Box sx={{ width: '100%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="caption" color="text.secondary" sx={{ fontSize: 12 }}>
                    Profile viewers
                  </Typography>
                  <Typography variant="caption" color="primary" fontWeight={600} sx={{ fontSize: 12 }}>
                    142
                  </Typography>
                </Box>
              </Box>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton sx={{ py: 0.75 }}>
              <Box sx={{ width: '100%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="caption" color="text.secondary" sx={{ fontSize: 12 }}>
                    Post impressions
                  </Typography>
                  <Typography variant="caption" color="primary" fontWeight={600} sx={{ fontSize: 12 }}>
                    1,248
                  </Typography>
                </Box>
              </Box>
            </ListItemButton>
          </ListItem>
        </List>

        <Divider />

        {/* Premium Section */}
        <ListItem disablePadding>
          <ListItemButton sx={{ py: 1 }}>
            <ListItemText
              primary={
                <Typography variant="caption" color="text.secondary" sx={{ fontSize: 11 }}>
                  Access exclusive tools & insights
                </Typography>
              }
              secondary={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5 }}>
                  <Box
                    sx={{
                      width: 12,
                      height: 12,
                      bgcolor: '#915907',
                      borderRadius: '2px'
                    }}
                  />
                  <Typography variant="caption" fontWeight={600} sx={{ fontSize: 12 }}>
                    Try Premium for free
                  </Typography>
                </Box>
              }
            />
          </ListItemButton>
        </ListItem>

        <Divider />

        {/* My Items */}
        <ListItem disablePadding>
          <ListItemButton sx={{ py: 1 }}>
            <ListItemIcon sx={{ minWidth: 32 }}>
              <BookmarkIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body2" fontWeight={500} sx={{ fontSize: 14 }}>
                  My items
                </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
      </Card>

      {/* Recent / Groups / Events Card */}
      <Card sx={{ mt: 2 }}>
        <List disablePadding dense>
          {/* Recent Section */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary={
                  <Typography variant="caption" color="primary" fontWeight={600} sx={{ fontSize: 12 }}>
                    Recent
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton sx={{ pl: 3 }}>
              <ListItemIcon sx={{ minWidth: 28 }}>
                <GroupsIcon fontSize="small" sx={{ fontSize: 18 }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body2" sx={{ fontSize: 13 }}>
                    React Developers
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton sx={{ pl: 3 }}>
              <ListItemIcon sx={{ minWidth: 28 }}>
                <GroupsIcon fontSize="small" sx={{ fontSize: 18 }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body2" sx={{ fontSize: 13 }}>
                    JavaScript Community
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>

          <Divider sx={{ my: 1 }} />

          {/* Groups */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <GroupsIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body2" fontWeight={500} sx={{ fontSize: 14 }}>
                    Groups
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>

          {/* Events */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <EventIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body2" fontWeight={500} sx={{ fontSize: 14 }}>
                    Events
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>

          {/* Followed Hashtags */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <TagIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body2" fontWeight={500} sx={{ fontSize: 14 }}>
                    Followed Hashtags
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>

          <Divider sx={{ my: 1 }} />

          {/* Discover More */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: 14 }}>
                      Discover more
                    </Typography>
                  </Box>
                }
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Card>
    </Box>
  );
}
