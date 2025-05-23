import { Box, Container, Grid, styled, Typography } from "@mui/material";
import type { ProjectCardProps } from "../../components/ProjectCard";
import AnimationComponent from "../../components/AnimationComponet";
import ProjectCard from "../../components/ProjectCard";


const ProjectsSection: React.FC = () => {

  const StyledExperience = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,

  }));

  const projects = [
    {
        title: "Project Exemple",
        subtitle: "Jul 2023 - Dez 2023",
        srcImg: "/src/assets/images/project-trello.png",
        description: "trabalhando nisso",
        technologies: "Technologies: Python",
        websiteURL: "none",
        codeURL: "https://github.com/Vitoria-Emanuele/RedesDeComputadores",
    },
  ]
  
  return (
    <>
      <StyledExperience>
        < Container maxWidth="lg">
          <Box id="projects" pt={5} pb={3}>
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