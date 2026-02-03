import {
  Card,
  CardHeader,
  CardContent,
  List,
  ListItem,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  Box,
  Chip,
  Button
} from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const news = [
  { id: 1, title: 'Tech layoffs continue in 2026', time: '2d ago', readers: '5,234' },
  { id: 2, title: 'AI adoption reaches new high', time: '3d ago', readers: '8,192' },
  { id: 3, title: 'Remote work trends evolving', time: '4d ago', readers: '3,456' },
  { id: 4, title: 'Startups raising record funding', time: '5d ago', readers: '6,789' },
  { id: 5, title: 'New regulations for tech firms', time: '6d ago', readers: '4,321' }
];

const suggestions = [
  { id: 1, name: 'Alex', title: 'DevOps Engineer at CloudTech', mutual: 12 },
  { id: 2, name: 'Jessica Lee', title: 'Data Scientist | ML Expert', mutual: 8 },
  { id: 3, name: 'David Park', title: 'Full Stack Developer', mutual: 15 }
];

export default function RightSidebar() {
  return (
    <Box sx={{ position: 'sticky', top: 80 }}>
      {/* News Card */}
      <Card>
        <CardHeader
          title={
            <Typography variant="subtitle1" fontWeight={600}>
              LinkedIn News
            </Typography>
          }
          action={<InfoOutlinedIcon fontSize="small" />}
        />
        <CardContent sx={{ pt: 0 }}>
          <List disablePadding>
            {news.map((item, index) => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary={
                      <Typography variant="body2" fontWeight={500}>
                        • {item.title}
                      </Typography>
                    }
                    secondary={
                      <Typography variant="caption" color="text.secondary">
                        {item.time} • {item.readers} readers
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>

      {/* People to Follow */}
      <Card sx={{ mt: 2 }}>
        <CardHeader
          title={
            <Typography variant="subtitle1" fontWeight={600}>
              Add to your feed
            </Typography>
          }
        />
        <CardContent sx={{ pt: 0 }}>
          <List disablePadding>
            {suggestions.map((person) => (
              <ListItem
                key={person.id}
                disablePadding
                sx={{ mb: 2, alignItems: 'flex-start' }}
                secondaryAction={
                  <Button size="small" variant="outlined" sx={{ mt: -6.5 }}>
                    Follow
                  </Button>
                }
              >
                <ListItemAvatar>
                  <Avatar>{person.name[0]}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="body2" fontWeight={500}>
                      {person.name}
                    </Typography>
                  }
                  secondary={
                    <>
                      <Typography variant="caption" color="text.secondary" component="span" display="block">
                        {person.title}
                      </Typography>
                      <Typography variant="caption" color="text.secondary" component="span" display="block">
                        {person.mutual} mutual connections
                      </Typography>
                    </>
                  }
                  secondaryTypographyProps={{ component: 'div' }}
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>

      {/* Ad/Promoted Content */}
      <Card sx={{ mt: 2 }}>
        <CardContent>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="caption" color="text.secondary" gutterBottom>
              Promoted
            </Typography>
            <Typography variant="body2" fontWeight={500} sx={{ mt: 1 }}>
              Master Full-Stack Development
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.5 }}>
              Learn Next.js, React, and more
            </Typography>
            <Button size="small" variant="contained" sx={{ mt: 2 }}>
              Learn More
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
