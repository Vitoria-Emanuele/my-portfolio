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
    
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"/>,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg"/>,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecolab/googlecolab-original.svg" />,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-plain.svg" />,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" />,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" />,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" />,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" />
          
  ]

  const skillsSetDev = [
    
    
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg" />,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" />,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />,
          
  ]

  return (
    <>

        <StyledAbout>
          <Container maxWidth="lg">

            <Box id="about" pt={1} pb={2} mb={3}>
              <Typography sx={{ color: (theme) => theme.palette.primary.contrastText}} variant="h2" textAlign="center" >Sobre mim</Typography>
            </Box>
            <hr />
            <Box pt={3} pb={5} >
              <Typography sx={{ color: (theme) => theme.palette.primary.contrastText}} variant="subtitle1" textAlign="center">
              Olá! Meu nome é Vitória Emanuele sou acadêmica de Ciência de Dados e Inteligência Artificial pela UFPB. Meu interesse pela tecnologia começou ainda no ensino médio, quando cursei o técnico em Informática integrado. Desde então, me encantei com a capacidade que a tecnologia tem de resolver problemas, gerar impacto e transformar realidades.
              
              Sou uma pessoa naturalmente curiosa, apaixonada por aprender, não só na minha área, mas em diferentes campos, culturas e conhecimentos. Valorizo muito a organização, o trabalho bem feito e sou extremamente comprometida com tudo que me proponho a fazer. Tenho facilidade em trabalhar em equipe, sou colaborativa, gosto de ajudar e também assumo posições de liderança com naturalidade, sempre buscando organizar, planejar e entregar o melhor resultado possível.

              A área de Dados e Inteligência Artificial me encanta especialmente pela oportunidade de gerar valor, tomar decisões mais inteligentes e, acima de tudo, impactar positivamente a vida das pessoas através da tecnologia.

              </Typography>
            </Box>

            <Grid container spacing={4} justifyContent="center" pb={6} >
              
              <Grid size={{ xs:12, md:6}}>
                <AnimationComponent moveDirection="left">
                  < StyledCard>
                    <SchoolIcon/>
                    <Typography textAlign="center" fontWeight={600} mb={2}>Educação</Typography>
                    <Typography textAlign="center" variant="subtitle1" >Técnica em Informática</Typography>
                    <Typography textAlign="center" sx={{ color: (theme) => theme.palette.secondary.contrastText}} variant="subtitle2">IFPI</Typography>
                    <Typography textAlign="center" sx={{ color: (theme) => theme.palette.secondary.contrastText}} variant="caption"> 2019 - 2021</Typography>
                  </StyledCard>
                </AnimationComponent>
              </Grid>

              <Grid size={{ xs:12, md:6}}>
                <AnimationComponent moveDirection="right">
                  < StyledCard>
                    <SchoolIcon/>
                    <Typography textAlign="center" fontWeight={600} mb={2}>Educação</Typography>
                    <Typography textAlign="center" variant="subtitle1">Graduanda em Ciência de Dados e IA</Typography>
                    <Typography textAlign="center" sx={{ color: (theme) => theme.palette.secondary.contrastText}} variant="subtitle2">UFPB</Typography>
                    <Typography textAlign="center" sx={{ color: (theme) => theme.palette.secondary.contrastText}} variant="caption"> 2022 - Em andamento</Typography>
                  </StyledCard>
                </AnimationComponent>
              </Grid>
              
            </Grid>

            <Box pt={1} pb={5} mb={5}>
              <Typography sx={{ color: (theme) => theme.palette.primary.contrastText}} variant="h4" textAlign="center" fontWeight={200}>Formação Complementar</Typography>
            </Box>

            <Grid container spacing={4} justifyContent="center" pb={6}>
              <Grid size={{ xs:12, md:3}}>
                <AnimationComponent moveDirection="left">
                  < StyledCard>
                    <SchoolIcon/>
                    <Typography textAlign="center" fontWeight={600} mb={2}>Treinamento</Typography>
                    <Typography textAlign="center">Cyber Academy 2024</Typography>
                    <Typography textAlign="center" sx={{ color: (theme) => theme.palette.secondary.contrastText}} variant="caption">FEBRABAN</Typography>
                  </StyledCard>
                </AnimationComponent>
              </Grid>

              <Grid size={{ xs:12, md:3}}>
                <StyledCard>
                  <SchoolIcon/>
                  <Typography textAlign="center" fontWeight={600} mb={2}>Curso</Typography>
                  <Typography textAlign="center">Introdução à segurança cibernetica</Typography>
                  <Typography textAlign="center" sx={{ color: (theme) => theme.palette.secondary.contrastText}} variant="caption">CISCO</Typography>
                </StyledCard>
              </Grid>

              <Grid size={{ xs:12, md:3}}>
                <AnimationComponent moveDirection="right">
                  < StyledCard>
                    <SchoolIcon/>
                    <Typography textAlign="center" fontWeight={600} mb={2}>Maratona</Typography>
                    <Typography textAlign="center">Azure Infra Girls 2024</Typography>
                    <Typography textAlign="center" sx={{ color: (theme) => theme.palette.secondary.contrastText}} variant="caption">Mais Mulheres em Tech</Typography>
                  </StyledCard>
                </AnimationComponent>
              </Grid>

            </Grid> 

            <Grid container spacing={4} justifyContent="center" pb={6}>
              <Grid size={{ xs:12, md:3}}>
                <AnimationComponent moveDirection="left">
                  < StyledCard>
                    <SchoolIcon/>
                    <Typography textAlign="center" fontWeight={600} mb={2}>Curso</Typography>
                    <Typography textAlign="center">Blockchain</Typography>
                    <Typography textAlign="center" sx={{ color: (theme) => theme.palette.secondary.contrastText}} variant="caption">FIAP</Typography>
                  </StyledCard>
                </AnimationComponent>
              </Grid>

              <Grid size={{ xs:12, md:3}}>
                < StyledCard>
                  <SchoolIcon/>
                  <Typography textAlign="center" fontWeight={600} mb={2}>Curso</Typography>
                  <Typography textAlign="center">Inteligência Artificial e Computacional</Typography>
                  <Typography textAlign="center" sx={{ color: (theme) => theme.palette.secondary.contrastText}} variant="caption">FIAP</Typography>
                  </StyledCard>
              </Grid>

              <Grid size={{ xs:12, md:3}}>
                <AnimationComponent moveDirection="right">
                  < StyledCard>
                    <SchoolIcon/>
                    <Typography textAlign="center" fontWeight={600} mb={2}>Curso</Typography>
                    <Typography textAlign="center">Big Data e Analytics</Typography>
                    <Typography textAlign="center" sx={{ color: (theme) => theme.palette.secondary.contrastText}} variant="caption">FIAP</Typography>
                  </StyledCard>
                </AnimationComponent>
              </Grid>

            </Grid>

          </Container>
        </ StyledAbout>
        

        <StyledSkill>
          <Container maxWidth="lg">
            <Box id="skills" pt={1} pb={5} mb={5}>
              <Typography sx={{ color: (theme) => theme.palette.primary.contrastText}} variant="h3" textAlign="center" fontWeight={300}>Habilidades</Typography>
            </Box>
            <Box mb={5}>
              <Grid container spacing={8} justifyContent="center" pb = {6}>
                {skillsSet.map((skill, index) => (
                  <Grid size={{ xs:3, sm:3, md:2, lg:1.5}} key={index}>
                    <StyledCard sx={{backgroundColor: (theme) => theme.palette.primary.light}}>
                      {skill}
                    </StyledCard>
                    
                  </Grid>
                ))}
              </Grid>

              <Grid container spacing={8} justifyContent="center" pb = {8}>
                {skillsSetDev.map((skill, index) => (
                  <Grid size={{ xs:3, sm:3, md:2, lg:1.5}} key={index}>
                    <StyledCard sx={{backgroundColor: (theme) => theme.palette.primary.light}}>
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