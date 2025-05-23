import {Box, Container, Grid, styled, Typography } from "@mui/material"

import Avatar from "../../assets/images/avatar.jpg"
import CV from "../../assets/pdfs/VitoriaEmanueleCV.docx.pdf"

import StyledButton from "../../components/StyledButton"
import Typewriter from "../../components/Typewriter"

import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';



const HeroSection: React.FC = () => {


    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        width: "100%",
        [theme.breakpoints.up('xs')]: {
            display: "block",
            padding: "20px",
            paddingTop: "100px",
            paddingBottom: "40px",
        },
        [theme.breakpoints.up('md')]: {
            display: "flex",
            alignItems: "center",
            paddingTop: "100px",
            height: "100vh"
        },
  
  
    }))

    const StyledImg = styled("img")(({ theme }) => ({
        width: "70%",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "50%",
        position: "relative"
    }));

    const handleDownload = () => {
        console.log("download")
        const link = document.createElement('a');
        link.href = CV
        link.download = 'VitoriaEmanueleCV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    

    const handleEmail = () => {
        const emailAddress = 'vitoriaemanueledesousa@gmail.com';
        const subject = 'Subject';
        const body = 'Hello! I saw your portfolio...';

        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink);
    }


    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                 
                        <Grid size={{ xs:12, md:5}}>
                            <Box position="relative" pb={3}>
                                <Box textAlign="center">
                                    <StyledImg src={Avatar} />
                                </Box>
                            </Box>
                        </Grid>

                        <Grid size={{ xs:12, md:7}}>
                            <Typography color="primary.contrastText" variant="h1" pb={2} textAlign="center">Vitória Emanuele</Typography>
                            <Typewriter text="Graduanda em Ciência de Dados" delay={120} variant="h4" color="primary.contrastText" />

                            <Box mt={3}>
                                <Grid container spacing={3} display="flex" justifyContent="center">
                                    
                                    <Grid size={{ xs:10, md:4}}>
                                        <StyledButton onClick={() => handleDownload()}>
                                            <DownloadIcon />
                                            <Typography>Download CV</Typography>
                                        </StyledButton>
                                    </Grid>
                                    
                                    <Grid size={{ xs:10, md:4}}>
                                        <StyledButton onClick={() => handleEmail()}>
                                            <EmailIcon />
                                            <Typography>Contato</Typography>
                                        </StyledButton>
                                    </Grid>


                                </Grid>
                            </Box>

                        </Grid>

                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}
export default HeroSection