import { Box, Container, IconButton, Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer: React.FC = () => {

    return (
        <>
            <Box pt={10} pb={10}>
                <Container maxWidth="sm">
                    <Box display="flex" alignItems="center" justifyContent="space-around" pb={1}>
                        <IconButton onClick={() => window.open("https://github.com/Vitoria-Emanuele")}>
                            <GitHubIcon />
                        </IconButton>
                        <IconButton onClick={() => window.open("https://www.linkedin.com/in/vit%C3%B3ria-emanuele/")}>
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton href="mailto:vitoriaemanueledesousa@gmail.com" target="_blank">
                            <EmailIcon />
                        </IconButton>
                    </Box>
                    <Typography textAlign="center" pt={5}>
                        © 2025 Vitória Emanuele - All rights reserved
                    </Typography>
                </Container>
            </Box>
        </>
    )
}

export default Footer