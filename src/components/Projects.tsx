import Masonry from '@mui/lab/Masonry';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import MainContent from './MainContent';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkIcon from '@mui/icons-material/Link';
import data from "../assets/data.json";
import Tooltip from '@mui/material/Tooltip';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

// Function to generate a color based on a string
// Function to cycle through colors for tags
const allowedColors: Array<"default" | "primary" | "secondary" | "success" | "error" | "info" | "warning"> = [
    "default", "primary", "secondary", "success", "error", "info", "warning"
];

const tagColorMap: { [key: string]: "default" | "primary" | "secondary" | "success" | "error" | "info" | "warning" } = {};
let colorIndex = 0;

const getColorForTag = (tag: string) => {
    if (!tagColorMap[tag]) {
        // Assign the next color from the allowedColors array in a cycle
        tagColorMap[tag] = allowedColors[colorIndex];
        colorIndex = (colorIndex + 1) % allowedColors.length;
    }
    return tagColorMap[tag];
};

export function Search() {
    return (
        <FormControl sx={{ width: { xs: '100%', md: '25ch' } }} variant="outlined">
            <OutlinedInput
                size="small"
                id="search"
                placeholder="Search…"
                sx={{ flexGrow: 1 }}
                startAdornment={
                    <InputAdornment position="start" sx={{ color: 'text.primary' }}>
                        <SearchRoundedIcon fontSize="small" />
                    </InputAdornment>
                }
                inputProps={{
                    'aria-label': 'search',
                }}
            />
        </FormControl>
    );
}

function Projects() {
    const [projects, setProjects] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    function calculateDuration(date: string | undefined): React.ReactNode {
        if (!date) {
            return null;
        }

        const currentDate = new Date();
        const projectDate = new Date(date);
        const duration = Math.abs(currentDate.getTime() - projectDate.getTime());
        const years = Math.floor(duration / (1000 * 60 * 60 * 24 * 365));

        return `${years} year${years > 1 ? 's' : ''} ago`;
    }

    // Function to filter projects based on search term
    // const filteredProjects = projects.filter((project) =>
    //     project.title.toLowerCase().includes(searchTerm.toLowerCase())
    // );

    const handleClick = () => {
        console.info('You clicked the filter chip.');
    };

    // Latest projects first
    return (
        <div className="static-contain">
            <section className="section top work-about">
                <div className="text-contain">
                    <h1>Projects</h1>
                    <p>Stay in the loop with the latest about our products</p>
                </div>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column-reverse', md: 'row' },
                        width: '100%',
                        justifyContent: 'space-between',
                        alignItems: { xs: 'start', md: 'center' },
                        gap: 4,
                        overflow: 'auto',
                    }}
                >
                    <Box
                        sx={{
                            display: 'inline-flex',
                            flexDirection: 'row',
                            gap: 3,
                            overflow: 'auto',
                        }}
                    >
                        <Chip onClick={handleClick} size="medium" label="All categories" />
                        <Chip
                            onClick={handleClick}
                            size="medium"
                            label="Company"
                            sx={{
                                backgroundColor: 'transparent',
                                border: 'none',
                            }}
                        />
                        <Chip
                            onClick={handleClick}
                            size="medium"
                            label="Product"
                            sx={{
                                backgroundColor: 'transparent',
                                border: 'none',
                            }}
                        />
                        <Chip
                            onClick={handleClick}
                            size="medium"
                            label="Design"
                            sx={{
                                backgroundColor: 'transparent',
                                border: 'none',
                            }}
                        />
                        <Chip
                            onClick={handleClick}
                            size="medium"
                            label="Engineering"
                            sx={{
                                backgroundColor: 'transparent',
                                border: 'none',
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            display: { xs: 'none', sm: 'flex' },
                            flexDirection: 'row',
                            gap: 1,
                            width: { xs: '100%', md: 'fit-content' },
                            overflow: 'auto',
                        }}
                    >
                        <Search />
                    </Box>
                </Box>
            </section>
            <Masonry columns={3} spacing={2}>
                {data.projects.map((item, index) => (
                    <div key={index}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                {/* <img
                                    srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                                    src={`${item.img}?w=162&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                    style={{
                                        borderBottomLeftRadius: 4,
                                        borderBottomRightRadius: 4,
                                        display: 'block',
                                        width: '100%',
                                    }}
                                /> */}
                                <CardMedia
                                    component="img"
                                    // height="140"
                                    image={require(`../assets/${item.img}`)}
                                    alt={item.title}
                                />
                                <CardContent>
                                    <Stack direction="column" spacing={1} >
                                        <Box sx={{ display: 'flex', flexDirection: 'row', flex: '1 0 auto', justifyContent: 'space-between' }}>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ wordBreak: 'break-word' }}>
                                                {item.title}
                                            </Typography>
                                            <Chip
                                                label={item.tag}
                                                size="small"
                                                color={getColorForTag(item.tag)}
                                                sx={{ ml: 1 }}
                                            />
                                        </Box>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            {item.description}
                                        </Typography>
                                        <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap', mb: 2 }}>
                                            {item.tech_stack && item.tech_stack.map((tech, index) => (
                                                <Chip key={index} label={tech} />
                                            ))}
                                        </Stack>
                                    </Stack>
                                </CardContent>
                            </CardActionArea>
                            <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                {/* <Button size="small" variant="outlined" startIcon={<GitHubIcon />}>
                                    Code
                                </Button>
                                <Button size="small" variant="contained" startIcon={<YouTubeIcon />}>
                                    Demo
                                </Button> */}
                                <Stack direction="column" spacing={0} alignItems="flex-end">
                                    <Stack direction="row" spacing={0}>
                                        <Tooltip title="Code">
                                            <IconButton aria-label="code" size="small" onClick={() => window.open(item.code_link, '_blank')}>
                                                <GitHubIcon />
                                            </IconButton>
                                        </Tooltip>
                                        {item.demo_link ? (
                                            <Tooltip title="Demo">
                                                <IconButton aria-label="demo" size="small" onClick={() => window.open(item.demo_link, '_blank')}>
                                                    <YouTubeIcon />
                                                </IconButton>
                                            </Tooltip>
                                        ) : (
                                            <Tooltip title="Blog">
                                                <IconButton aria-label="report" size="small" onClick={() => window.open(item.deploy_link, '_blank')}>
                                                    <LinkIcon />
                                                </IconButton>
                                            </Tooltip>
                                        )}
                                    </Stack>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.date}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {calculateDuration(item.date)}
                                    </Typography>
                                </Stack>
                            </CardActions>
                        </Card>
                    </div>
                ))}
            </Masonry>
        </div>
    );
};

// 1–4 bullet points describing your responsibilities and achievements for the projectin the blog


export default Projects;