'use client';

import { Container, Box, Grid } from '@mui/material';
import Navbar from '@/components/Navbar';
import LeftSidebar from '@/components/LeftSidebar';
import CenterFeed from '@/components/CenterFeed';
import RightSidebar from '@/components/RightSidebar';

export default function Home() {
  return (
    <Box sx={{ bgcolor: '#f3f2ef', minHeight: '100vh' }}>
      <Navbar />

      <Container maxWidth="xl" sx={{ py: 3, px: { xs: 2, md: 3 } }}>
        <Grid container spacing={2}>
          {/* Left Sidebar - Profile & Navigation */}
          <Grid
            size={{ xs: 12, sm: 12, md: 2.5 }}
            sx={{
              display: { xs: 'none', md: 'block' }
            }}
          >
            <LeftSidebar />
          </Grid>

          {/* Center Feed - Main Content */}
          <Grid
            size={{ xs: 12, sm: 12, md: 6 }}
            sx={{
              pl: { md: 2 }
            }}
          >
            <CenterFeed />
          </Grid>

          {/* Right Sidebar - News & Suggestions */}
          <Grid
            size={{ xs: 12, sm: 12, md: 3 }}
            sx={{
              display: { xs: 'none', md: 'block' },
              ml: 'auto'
            }}
          >
            <RightSidebar />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
