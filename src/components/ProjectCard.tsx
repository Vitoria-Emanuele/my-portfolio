import { Grid, Typography, styled } from "@mui/material";
import StyledButton from "../components/StyledButton";

export interface ProjectCardProps {
    title: string;
    subtitle: string;
    srcImg: string;
    description: string
    technologies: string
    websiteURL: string;
    codeURL: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    subtitle,
    srcImg,
    description,
    technologies,
    websiteURL,
    codeURL
}) => {

    const StyledImg = styled("img")(({ theme }) => ({
        width: "100%",
        objectFit: "contain",
        height: "80vw",
        padding: "10px 0",
        [theme.breakpoints.up('md')]: {
            height: "45vh",
        },
    }));
    

    const StyledCard = styled("div")(({ theme}) => ({
        borderRadius: "3px",
        border: `0.10px solid  ${theme.palette.secondary.dark}`,
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.secondary.contrastText,
        padding: "20px",
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        '&:active': { 
            transform: 'translateY(2px)',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
        },
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.primary.contrastText,
        }
    }));

    return (
        <StyledCard>
            <Typography variant="h5">
                {title}
            </Typography>
            <Typography >
                {subtitle}
            </Typography>
            <StyledImg src={srcImg} />
            <Typography>
                {description}
            </Typography>
            <Typography fontWeight={600} pt={2}>
                {technologies}
            </Typography>
            <Grid container spacing={1} pt={2}>
                <Grid size={{ xs:6}}>
                    <StyledButton onClick={() => window.open(websiteURL)}>View Project</StyledButton>
                </Grid>
                <Grid size={{ xs:6}}>
                    <StyledButton onClick={() => window.open(codeURL)}>View Code</StyledButton>
                </Grid>
            </Grid>
        </StyledCard>
    )
}

export default ProjectCard