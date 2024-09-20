/**
 * Represents the experience data for the timeline.
 */
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import React from 'react';
import data from "../assets/data.json";
import './Experience.css';

function MyExperience() {
    const [expanded, setExpanded] = React.useState(false);
    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );
    const experience = data.workHistory;

    return (
        <div>
            <h1 className="mb-0">Experience</h1>
            {/* TODO: Add animations if possible */}
            {experience.map((item, index) => (
                <Timeline key={index}
                    sx={{
                        [`& .${timelineItemClasses.root}:before`]: {
                            flex: 0,
                            padding: 10,
                        },
                    }}
                >
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" />
                            {index !== experience.length - 1 && <TimelineConnector />}
                        </TimelineSeparator>
                        <TimelineContent>
                            <Card className='card-body'>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                        <CardMedia
                                            className='company-logo'
                                            component="img"
                                            image={require(`../assets/${item.logo}`)}
                                            alt="company-logo"
                                        />
                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <Typography variant="h6">
                                                {item.jobTitle}
                                            </Typography>
                                            <Typography variant="body2">
                                                {item.employerName} {bull} {item.jobType}
                                            </Typography>
                                            <Typography variant="body2">
                                                {item.startDate} - {item.endDate} {bull} {calculateDuration(item.startDate, item.endDate)}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {item.workLocation}
                                            </Typography>
                                        </Box>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography variant="body2" color="text.secondary" className='experience-description'>
                                            {item.description.length === 1 ?
                                                item.description[0] :
                                                item.description.map((desc, index) => (
                                                    <ul>
                                                        <li key={index}>{desc}</li>
                                                    </ul>
                                                ))}
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', py: 1, justifyContent: 'center' }}>
                                            {item.skills.map((skill, index) => (
                                                <Chip key={index} label={skill} sx={{ m: 0.5, p: 0.5 }} />
                                            ))}
                                        </Box>
                                    </AccordionDetails>
                                </Accordion>
                            </Card>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            ))}
        </div>
    );
}

export default MyExperience;

function calculateDuration(startDate: string, endDate: string) {
    const start = new Date(startDate);
    const end = endDate === 'Present' ? new Date() : new Date(endDate);

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth() + 1;

    let duration = '';

    if (months === 12) {
        years++;
        months = 0;
    }

    if (years > 0) {
        duration += `${years} year${years > 1 ? 's' : ''}`;
    }

    if (months > 0) {
        if (duration !== '') {
            duration += ' ';
        }
        duration += `${months} month${months > 1 ? 's' : ''}`;
    }

    return duration;
}

// TODO: Jan 2023 - Dec 2023 11 months ? 1 year ?
// Mar 2024 - Present ? blank ?
