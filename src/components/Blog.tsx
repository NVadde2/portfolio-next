
import { Link } from 'react-router-dom';
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import data from "../assets/data.json";
import Chip from '@mui/material/Chip';

function Blog() {
    const theme = useTheme();
    return (
        <div className="static-contain">
            <section className="section top">
                <div className="text-contain">
                    <h1>Blog</h1>
                    <h1>Professional Posts</h1>
                    <p>My thoughts about tech, design, automation and entrepreneurship.</p>
                </div>
            </section>
            <section className="section">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        gap: 1,
                        height: '100%',
                    }}
                >
                    {data.articleInfo.map((post) => (
                        <Card key={post.id}>
                            <CardActionArea sx={{ display: 'flex' }}>
                                <CardMedia
                                    component="img"
                                    sx={{ maxHeight: 250, width: 250 }}
                                    image={require(`../assets/${post.image}`)}
                                    alt="Blog Post Image"
                                />
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1, justifyContent: 'flex-end' }}>
                                            <Chip label={post.tag} size="small" />
                                        </Box>
                                        <Typography component="div" variant="h4">
                                            {post.title}
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            component="div"
                                            sx={{ color: 'text.secondary' }}
                                        >
                                            {post.description}
                                        </Typography>
                                        <Button size="small" color="primary" sx={{ padding: 0 }}>Read More</Button>
                                    </CardContent>
                                    {/* <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            <Link to={`/blog/${post.id}`}>Read More</Link>
                                        </Button>
                                    </CardActions>
                                </Box> */}
                                </Box>
                            </CardActionArea>
                        </Card>
                    ))}
                </Box>
            </section>
        </div>
    );
};

export default Blog;