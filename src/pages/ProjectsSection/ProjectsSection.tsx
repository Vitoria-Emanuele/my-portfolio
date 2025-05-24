import { Box, Container, Grid, styled, Typography } from "@mui/material";
import type { ProjectCardProps } from "../../components/ProjectCard";
import AnimationComponent from "../../components/AnimationComponet";
import ProjectCard from "../../components/ProjectCard";

import MCC from "../../assets/images/mcc.jpg"


const ProjectsSection: React.FC = () => {

  const StyledExperience = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,

  }));

  const projects = [
    {
        title: "Meninas na Ciência da Computação-MCC",
        subtitle: "Ago 2024 - Até o momento",
        srcImg: MCC,
        description: "O MCC é um projeto de extensão do Centro de Informática da Univeridade Federal da Paraíba formado por um grupo de professoras e alunas que tem como missão estimular alunas de escolas públicas, despertando a sua vocação para a área de Ciência da Computação através de capacitação, debates, palestras, encontros e rodas de conversa",
        technologies: "Scratch, MIT App Invetor, Ferramentas Google e mais.",
        websiteURL: "https://mcc.ci.ufpb.br/",
        codeURL: "https://mcc.ci.ufpb.br/",
    },
  ]
  
  return (
    <>
      <StyledExperience>
        < Container maxWidth="lg">
          <Box id="projects" pt={10} pb={5}>
            <Typography variant="h2" textAlign="center" color="primary.contrastText">Projetos</Typography>
          </Box>
          < Grid  container spacing={5} pb={3}>
            {projects.map((project: ProjectCardProps, index: number) => (
              < Grid size={{ md:6}} key={index}>
                < AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                
                  < ProjectCard
                    title={project.title}
                    subtitle={project.subtitle}
                    srcImg={project.srcImg}
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