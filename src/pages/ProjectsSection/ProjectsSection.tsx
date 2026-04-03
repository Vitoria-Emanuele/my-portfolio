import { Box, Container, Grid, styled, Typography } from "@mui/material";
import type { ProjectCardProps } from "../../components/ProjectCard";
import AnimationComponent from "../../components/AnimationComponet";
import ProjectCard from "../../components/ProjectCard";

import MCC from "../../assets/images/MCCfoto.jpg"
import livraria from "../../assets/images/livraria.png"
import login from "../../assets/images/login.png" 
import imgeeg from "../../assets/images/eeg.png"
import imgML from "../../assets/images/projetoML.png" 

const ProjectsSection: React.FC = () => {

  const StyledExperience = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,

  }));

  const projects = [
    {
        title: "Meninas na Ciência da Computação-MCC",
        subtitle: "Ago 2024 - Até o momento",
        srcImg: MCC,
        description: "O MCC é um projeto de extensão do Centro de Informática da Univeridade Federal da Paraíba formado por um grupo de professoras e alunas que tem como missão estimular o interesse de alunas de ensino médio para a área de Ciência da Computação.",
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

  {
    title: "Classificação de crises epilépticas via EEG:",
    subtitle: "Otimização Não Linear aplicada à classificação binária de sinais cerebrais.",
    srcImg: imgeeg,
    description:"Este projeto aplica aprendizado de máquina para a classificação binária de sinais de EEG, distinguindo estados de crise epiléptica de estados normais. O modelo de Regressão Logística foi implementado do zero utilizando os métodos de Gradiente Descendente (Batch e SGD) e o Método de Newton. Os resultados demonstraram alta precisão, desempenho equivalente a bibliotecas industriais. A solução foca na mitigação de falsos negativos, critério essencial para a segurança em aplicações reais de saúde.",
    technologies: "Python, Regressão Logística, Scikit-learn e mais",
    websiteURL: "https://github.com/Gabyzera/ufpb_nonlinear_optimization/blob/main/project/classification_epileptic_seizures.ipynb",
    codeURL: "https://github.com/Gabyzera/ufpb_nonlinear_optimization/blob/main/project/classification_epileptic_seizures.ipynb",
},

{
  title: "Detecção de Estresse Energético via Machine Learning",
  subtitle: "(Dados ONS 2020-2025)",
  srcImg: imgML,
  description:"Desenvolvimento de uma arquitetura de classificação para o subsistema elétrico do Nordeste, transformando séries temporais horárias do ONS em diagnósticos de segurança operativa. A metodologia envolveu uma engenharia de atributos estatística para modelar a volatilidade das fontes eólica e solar. O fluxo de trabalho comparou três métodos de Aprendizagem de Máquina — Redes Neurais, SVM e Árvores de Decisão/Random Forest — todos submetidos a processos rigorosos de regularização e validação via Stratified K-Fold e Grid Search.",
  technologies: "Python, Scikit-learn, Keras/TensorFlow e mais",
  websiteURL: "https://github.com/Vitoria-Emanuele/AM_ProjetoFinal/blob/main/AM_Aplicacao.ipynb",
  codeURL: "https://github.com/Vitoria-Emanuele/AM_ProjetoFinal/blob/main/AM_Aplicacao.ipynb",
},

  ]
  
  return (
    <>
      <StyledExperience>
        < Container maxWidth="lg">
          <Box id="projects" pt={5} pb={5} >
            <Typography variant="h2" textAlign="center" color="primary.contrastText">Projetos</Typography>
          </Box>
          < Grid container spacing={5} pb={5} alignItems="stretch">
            {projects.map((project: ProjectCardProps, index: number) => (
              < Grid size={{md:4}} key={index} sx={{ display: 'flex' }}>
                < AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                
                  < ProjectCard
                    title={project.title}
                    subtitle={project.subtitle}
                    srcImg={project.srcImg}
                    srcImg2={project.srcImg2} 
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