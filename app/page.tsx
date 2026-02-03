'use client';

import { Container, Box, Grid2 } from '@mui/material';
import Navbar from '@/components/Navbar';
import LeftSidebar from '@/components/LeftSidebar';
import CenterFeed from '@/components/CenterFeed';
import RightSidebar from '@/components/RightSidebar';

export default function Home() {
  return (
    <Box sx={{ bgcolor: '#f3f2ef', minHeight: '100vh' }}>
      <Navbar />

      <Container maxWidth="xl" sx={{ py: 3, px: { xs: 2, md: 3 } }}>
        <Grid2 container spacing={2}>
          {/* Left Sidebar - Profile & Navigation */}
          <Grid2
            size={{ xs: 12, sm: 12, md: 2.5 }}
            sx={{
              display: { xs: 'none', md: 'block' }
            }}
          >
            <LeftSidebar />
          </Grid2>

          {/* Center Feed - Main Content */}
          <Grid2
            size={{ xs: 12, sm: 12, md: 6 }}
            sx={{
              pl: { md: 2 }
            }}
          >
            <CenterFeed />
          </Grid2>

          {/* Right Sidebar - News & Suggestions */}
          <Grid2
            size={{ xs: 12, sm: 12, md: 4 }}
            sx={{
              display: { xs: 'none', md: 'block' },
              ml: 'auto'
            }}
          >
            <RightSidebar />
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
