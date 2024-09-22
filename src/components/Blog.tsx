
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Pagination from '@mui/material/Pagination';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link } from 'react-router-dom';
import data from "../assets/data.json";

function Blog() {
    const theme = useTheme();
    const [page, setPage] = React.useState(1);
    const postsPerPage = 1;
    const totalPages = Math.ceil(data.articleInfo.length / postsPerPage);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    const paginatedPosts = data.articleInfo.slice(
        (page - 1) * postsPerPage,
        page * postsPerPage
    );

    return (
        <div className="static-contain">
            <section className="section top">
                <div className="text-contain">
                    <h3>BLOG</h3>
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
                    {paginatedPosts.map((post) => (
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
                                        <Button size="small" color="primary" sx={{ padding: 0, marginTop: 2 }}>Read More</Button>
                                        <Box sx={{ display: 'flex', pl: 1, pb: 1, justifyContent: 'flex-end' }}>
                                            <Typography variant="caption">{post.date}</Typography>
                                        </Box>
                                    </CardContent>
                                </Box>
                            </CardActionArea>
                        </Card>
                    ))}
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 4, justifyContent: 'flex-end' }}>
                    <Pagination count={totalPages} page={page} onChange={handleChange} boundaryCount={10} />
                </Box>
            </section>
        </div>
    );
};

export default Blog;