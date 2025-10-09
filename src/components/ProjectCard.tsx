import { Grid, Typography, styled } from "@mui/material";
import StyledButton from "../components/StyledButton";
import { useState } from "react";

export interface ProjectCardProps {
    title: string;
    subtitle: string;
    srcImg: string;
    srcImg2?: string;
    description: string
    technologies: string
    websiteURL: string;
    codeURL: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    subtitle,
    srcImg,
    srcImg2,
    description,
    technologies,
    websiteURL,
    codeURL
}) => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [srcImg, srcImg2].filter(Boolean); // Filtra imagens válidas

    const StyledImg = styled("img")(({ theme }) => ({
        width: "100%",
        objectFit: "contain",
        height: "80vw",
        padding: "4px 0",
        cursor: images.length > 1 ? "pointer" : "default", // Cursor apenas se tiver mais de uma imagem
        [theme.breakpoints.up('md')]: {
            height: "45vh",
        },
    }));
    

    const StyledCard = styled("div")(({ theme}) => ({
        borderRadius: "3px",
        border: `0.10px solid  ${theme.palette.secondary.dark}`,
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.secondary.contrastText,
        padding: "12px",
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

    const handleImageClick = () => {
        if (images.length > 1) {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }
    };

    return (
        <StyledCard>
            <Typography variant="h5">
                {title}
            </Typography>
            <Typography >
                {subtitle}
            </Typography>
            
            {/* Carrossel de imagens - clica para trocar */}
            <div onClick={handleImageClick}>
                <StyledImg src={images[currentImage]} alt={`${title} - Imagem ${currentImage + 1}`} />
            </div>
            
            {/* Indicador de imagens (só aparece se tiver mais de uma) */}
            {images.length > 1 && (
                <Typography variant="body2" textAlign="center" sx={{ opacity: 0.7, fontSize: "0.8rem" }}>
                    {currentImage + 1} / {images.length} • Clique na imagem para trocar
                </Typography>
            )}
            
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