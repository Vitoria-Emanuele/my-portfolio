import { Box, Card, Container, Grid, styled, Typography } from "@mui/material";

import AnimationComponent from "../../components/AnimationComponet"

import SchoolIcon from '@mui/icons-material/School';

const AboutSection: React.FC = () => {

  const StyledAbout = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    width: "100%",
    [theme.breakpoints.up('xs')]: {
        display: "block",
        padding: "20px",
        paddingTop: "80px",
        paddingBottom: "40px",
    },
    [theme.breakpoints.up('md')]: {
        display: "flex",
        alignItems: "center",
        paddingTop: "80px",
        minHeight: "100vh",
        flexDirection:"column",
        justifyContent: "flex-start"
    },


  }))

  const StyledSkill = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.dark,
    width: "100%",
    [theme.breakpoints.up('xs')]: {
        padding: "20px",
        paddingTop: "80px",
        paddingBottom: "40px",
    },
    [theme.breakpoints.up('md')]: {
        display: "flex",
        alignItems: "center",
        paddingTop: "80px",
        minHeight: "70vh",
        flexDirection: "column",
        justifyContent: "flex-start",
    },


  }))

  const StyledCard = styled(Card)(({ theme }) => ({
    padding: "10px 10px",
    textAlign: "center",
    marginBottom: "10px",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.contrastText
    }
  }));

  const skillsSet = [
    "Python", "C", "C++", "SQL", "Git", "HTML", "CSS"
  ]

  return (
    <>

        <StyledAbout>
          <Container maxWidth="lg">
            <Box id="about" pt={1} pb={2} mb={3}>
              <Typography sx={{ color: (theme) => theme.palette.primary.contrastText}} variant="h2" textAlign="center" >Sobre</Typography>
            </Box>

            <Grid container spacing={4} display="flex" justifyContent="center" pb={6} >
              <Grid size={{ xs:12, md:4}}>

                <AnimationComponent moveDirection="left">
                  < StyledCard>
                    <SchoolIcon/>
                    <Typography textAlign="center" fontWeight={600} mb={2}>Educação</Typography>
                    <Typography textAlign="center">Técnica em Informática</Typography>
                    <Typography textAlign="center">Graduanda em Ciência de Dados e IA</Typography>
                  </StyledCard>
                </AnimationComponent>
                
              </Grid>
            </Grid>
            <hr />
            <Box pt={3} pb={5} >
              <Typography textAlign="center"> Olá! Meu nome é Viória Emanuele, tenho 21 anos. </Typography>
            </Box>
          </Container>
        </ StyledAbout>
        

        <StyledSkill>
          <Container maxWidth="lg">
            <Box id="skills" pt={1} pb={5} mb={5}>
              <Typography sx={{ color: (theme) => theme.palette.primary.contrastText}} variant="h3" textAlign="center" fontWeight={300}>Skills</Typography>
            </Box>
            <Box mb={5}>
              <Grid container spacing={3} justifyContent="center">
                {skillsSet.map((skill, index) => (
                  <Grid size={{ xs:5, sm:4, md:2, lg:2}} key={index}>
                    <StyledCard variant="outlined">
                      {skill}
                    </StyledCard>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Container>
        </StyledSkill>  
    </>
  )
}
  
export default AboutSection