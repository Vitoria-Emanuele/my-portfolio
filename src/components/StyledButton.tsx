import { styled } from "@mui/material";
import type { ReactNode } from "react";

interface StyledButtonProps {
    children: ReactNode;
    onClick?: () => void;
}

const StyledButton: React.FC<StyledButtonProps> = ({ children, onClick }) => {
    const StyledButton = styled("button")(({ theme }) => ({
        backgroundColor: "transparent",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        verticalAlign: "middle",
        gap: "10px",
        borderRadius: "3px",
        padding: "5px 15px",
        width: "100%",
        border: `1px solid  ${theme.palette.primary.contrastText}`,
        color: theme.palette.primary.contrastText,
        cursor: "pointer",
        transition: "all 250ms cubic-bezier(0.4, 0, 0.2, 1)",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
        },
        '&:active': {  // Estilo durante o clique
            backgroundColor: theme.palette.secondary.dark, // Cor mais escura
            transform: "scale(0.98)", // Efeito de "afundar"
            borderColor: theme.palette.primary.main, // Opcional: muda a borda
        },
        '&:focus': {  // Melhora acessibilidade (teclado)
            outline: `2px solid ${theme.palette.primary.main}`,
        },
    }));

    return (
        <>
            <StyledButton onClick={onClick}>{children}</StyledButton>
        </>
    )
}

export default StyledButton