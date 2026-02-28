import { Box, Container, Grid, styled, Typography } from "@mui/material";
import type { ProjectCardProps } from "../../components/ProjectCard";
import AnimationComponent from "../../components/AnimationComponet";
import ProjectCard from "../../components/ProjectCard";

import MCC from "../../assets/images/MCC.jfif"
import livraria from "../../assets/images/livraria.png"
import login from "../../assets/images/login.png" 


const ProjectsSection: React.FC = () => {

  const StyledExperience = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,

  }));

  const projects = [
    {
        title: "Meninas na Ciência da Computação-MCC",
        subtitle: "Ago 2024 - Até o momento",
        srcImg: MCC,
        description: "O MCC é um projeto de extensão do Centro de Informática da Univeridade Federal da Paraíba formado por um grupo de professoras e alunas que tem como missão estimular alunas de escolas públicas, despertando a sua vocação para a área de Ciência da Computação através de capacitação, palestras, encontros e rodas de conversa",
        technologies: "Scratch, MIT App Invetor, Ferramentas Google e mais.",
        websiteURL: "https://mcc.ci.ufpb.br/",
        codeURL: "https://mcc.ci.ufpb.br/",
    },

    {
      title: "Sistema de uma Livraria",
      subtitle: "-",
      srcImg: livraria,
      srcImg2: login,
      description:"Sistema full-stack para gestão de livraria, implementando controle de vendas e estoque integrados. Desenvolvido como projeto da disciplina de Banco de Dados, contempla arquitetura completa com backend robusto e interface frontend responsiva.",
      technologies: "PostgreSQl, Python, FastAPI, Typescript, MUI e mais",
      websiteURL: "https://github.com/Vitoria-Emanuele/Livraria",
      codeURL: "https://github.com/Vitoria-Emanuele/Livraria",
  },
  ]
  
  return (
    <>
      <StyledExperience>
        < Container maxWidth="lg">
          <Box id="projects" pt={5} pb={5}>
            <Typography variant="h2" textAlign="center" color="primary.contrastText">Projetos</Typography>
          </Box>
          < Grid  container spacing={5} pb={5}>
            {projects.map((project: ProjectCardProps, index: number) => (
              < Grid size={{ md:4}} key={index}>
                < AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                
                  < ProjectCard
                    title={project.title}
                    subtitle={project.subtitle}
                    srcImg={project.srcImg}
                    srcImg2={project.srcImg2} // Passa a segunda imagem (será undefined para o MCC)
                    description={project.description}
                    technologies={project.technologies}
                    websiteURL={project.websiteURL}
                    codeURL={project.codeURL}
                  />

                </AnimationComponent>
              </Grid>
              
            ))}
          </Grid>


        </Container>
      </StyledExperience>
    </>
  )
}

export default ProjectsSection