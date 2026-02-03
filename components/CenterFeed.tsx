'use client';

import { useState } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  Box,
  Button,
  Divider,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField
} from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import SendIcon from '@mui/icons-material/Send';
import ImageIcon from '@mui/icons-material/Image';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArticleIcon from '@mui/icons-material/Article';
import PublicIcon from '@mui/icons-material/Public';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const initialPosts = [
  {
    id: 1,
    author: 'Sarah Johnson',
    title: 'Product Manager at TechCorp',
    time: '2h',
    content: 'Excited to announce that our team just launched a new feature! Check it out and let me know what you think. #ProductLaunch #Innovation',
    likes: 234,
    comments: 45,
    reposts: 12,
    liked: false
  },
  {
    id: 2,
    author: 'Michael Chen',
    title: 'Senior Software Engineer',
    time: '5h',
    content: 'Just finished reading "Clean Code" by Robert Martin. Highly recommend it to all developers! What\'s your favorite tech book?',
    likes: 189,
    comments: 67,
    reposts: 23,
    liked: false
  }
];

export default function CenterFeed() {
  const [posts, setPosts] = useState(initialPosts);
  const [openPostDialog, setOpenPostDialog] = useState(false);
  const [newPostContent, setNewPostContent] = useState('');
  const [commentDialogOpen, setCommentDialogOpen] = useState(false);
  const [activePostId, setActivePostId] = useState<number | null>(null);
  const [comment, setComment] = useState('');

  const handleLike = (postId: number) => {
    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
        : post
    ));
  };

  const handleRepost = (postId: number) => {
    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, reposts: post.reposts + 1 }
        : post
    ));
  };

  const handleComment = (postId: number) => {
    setActivePostId(postId);
    setCommentDialogOpen(true);
  };

  const submitComment = () => {
    if (activePostId && comment.trim()) {
      setPosts(posts.map(post =>
        post.id === activePostId
          ? { ...post, comments: post.comments + 1 }
          : post
      ));
      setComment('');
      setCommentDialogOpen(false);
    }
  };

  const handleCreatePost = () => {
    if (newPostContent.trim()) {
      const newPost = {
        id: posts.length + 1,
        author: 'John Doe',
        title: 'Software Developer | Tech Enthusiast',
        time: 'Just now',
        content: newPostContent,
        likes: 0,
        comments: 0,
        reposts: 0,
        liked: false
      };
      setPosts([newPost, ...posts]);
      setNewPostContent('');
      setOpenPostDialog(false);
    }
  };

  return (
    <Box>
      {/* Post Creation Card */}
      <Card sx={{ maxWidth: 900 }}>
        <CardContent sx={{ px: 2, py: 1.5 }}>
          <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center', mb: 1.5 }}>
            <Avatar sx={{ width: 48, height: 48 }}>JD</Avatar>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => setOpenPostDialog(true)}
              sx={{
                justifyContent: 'flex-start',
                textTransform: 'none',
                color: 'text.secondary',
                borderColor: 'divider',
                borderRadius: 28,
                py: 1.5,
                fontSize: 14,
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)'
                }
              }}
            >
              Start a post
            </Button>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 0.5 }}>
            <Button
              startIcon={<ImageIcon sx={{ color: '#378FE9' }} />}
              onClick={() => setOpenPostDialog(true)}
              sx={{
                textTransform: 'none',
                color: 'text.secondary',
                fontWeight: 600,
                fontSize: 14,
                flex: 1,
                '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' }
              }}
            >
              Photo
            </Button>
            <Button
              startIcon={<VideoLibraryIcon sx={{ color: '#5F9B41' }} />}
              onClick={() => setOpenPostDialog(true)}
              sx={{
                textTransform: 'none',
                color: 'text.secondary',
                fontWeight: 600,
                fontSize: 14,
                flex: 1,
                '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' }
              }}
            >
              Video
            </Button>
            <Button
              startIcon={<CalendarTodayIcon sx={{ color: '#C37D16' }} />}
              onClick={() => setOpenPostDialog(true)}
              sx={{
                textTransform: 'none',
                color: 'text.secondary',
                fontWeight: 600,
                fontSize: 14,
                flex: 1,
                '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' }
              }}
            >
              Event
            </Button>
            <Button
              startIcon={<ArticleIcon sx={{ color: '#E16745' }} />}
              onClick={() => setOpenPostDialog(true)}
              sx={{
                textTransform: 'none',
                color: 'text.secondary',
                fontWeight: 600,
                fontSize: 14,
                flex: 1,
                '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' }
              }}
            >
              Write article
            </Button>
          </Box>
        </CardContent>
      </Card>

      {/* Feed Posts */}
      {posts.map((post) => (
        <Card key={post.id} sx={{ mt: 2, maxWidth: 900 }}>
          <CardHeader
            avatar={<Avatar sx={{ width: 48, height: 48 }}>{post.author[0]}</Avatar>}
            action={
              <IconButton size="small">
                <MoreHorizIcon />
              </IconButton>
            }
            title={
              <Typography variant="body1" fontWeight={600} sx={{ fontSize: 14 }}>
                {post.author}
              </Typography>
            }
            subheader={
              <Box>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: 12 }}>
                  {post.title}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.25 }}>
                  <Typography variant="caption" color="text.secondary" sx={{ fontSize: 12 }}>
                    {post.time}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    •
                  </Typography>
                  <PublicIcon sx={{ fontSize: 12, color: 'text.secondary' }} />
                </Box>
              </Box>
            }
            sx={{ pb: 0 }}
          />

          <CardContent sx={{ px: 2, py: 1.5, pt: 0 }}>
            <Typography variant="body2" sx={{ fontSize: 14, lineHeight: 1.4 }}>
              {post.content}
            </Typography>
          </CardContent>

          {/* Engagement Stats */}
          <Box sx={{ px: 2, py: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  sx={{
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    bgcolor: '#378FE9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 0.5
                  }}
                >
                  <ThumbUpIcon sx={{ fontSize: 10, color: 'white' }} />
                </Box>
              </Box>
              <Typography variant="caption" color="text.secondary" sx={{ fontSize: 12 }}>
                {post.likes}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <Typography variant="caption" color="text.secondary" sx={{ fontSize: 12, cursor: 'pointer' }}>
                {post.comments} comments
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ fontSize: 12 }}>
                {post.reposts} reposts
              </Typography>
            </Box>
          </Box>

          <Divider />

          {/* Action Buttons */}
          <CardActions sx={{ px: 1, py: 0.5 }}>
            <Button
              fullWidth
              startIcon={post.liked ? <ThumbUpIcon /> : <ThumbUpOffAltIcon />}
              onClick={() => handleLike(post.id)}
              sx={{
                color: post.liked ? '#0a66c2' : 'text.secondary',
                textTransform: 'none',
                fontWeight: 600,
                fontSize: 14,
                py: 1.5,
                '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' }
              }}
            >
              Like
            </Button>
            <Button
              fullWidth
              startIcon={<ChatBubbleOutlineIcon />}
              onClick={() => handleComment(post.id)}
              sx={{
                color: 'text.secondary',
                textTransform: 'none',
                fontWeight: 600,
                fontSize: 14,
                py: 1.5,
                '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' }
              }}
            >
              Comment
            </Button>
            <Button
              fullWidth
              startIcon={<RepeatIcon />}
              onClick={() => handleRepost(post.id)}
              sx={{
                color: 'text.secondary',
                textTransform: 'none',
                fontWeight: 600,
                fontSize: 14,
                py: 1.5,
                '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' }
              }}
            >
              Repost
            </Button>
            <Button
              fullWidth
              startIcon={<SendIcon />}
              sx={{
                color: 'text.secondary',
                textTransform: 'none',
                fontWeight: 600,
                fontSize: 14,
                py: 1.5,
                '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' }
              }}
            >
              Send
            </Button>
          </CardActions>
        </Card>
      ))}

      {/* Create Post Dialog */}
      <Dialog open={openPostDialog} onClose={() => setOpenPostDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Create a post</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            multiline
            rows={4}
            fullWidth
            placeholder="What do you want to talk about?"
            value={newPostContent}
            onChange={(e) => setNewPostContent(e.target.value)}
            variant="standard"
            sx={{ mt: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenPostDialog(false)}>Cancel</Button>
          <Button
            onClick={handleCreatePost}
            variant="contained"
            disabled={!newPostContent.trim()}
          >
            Post
          </Button>
        </DialogActions>
      </Dialog>

      {/* Comment Dialog */}
      <Dialog open={commentDialogOpen} onClose={() => setCommentDialogOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Add a comment</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            multiline
            rows={3}
            fullWidth
            placeholder="Add a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            variant="standard"
            sx={{ mt: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setCommentDialogOpen(false)}>Cancel</Button>
          <Button
            onClick={submitComment}
            variant="contained"
            disabled={!comment.trim()}
          >
            Comment
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
