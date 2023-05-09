import { Typography } from "@mui/material";
import { alpha, styled } from '@mui/material/styles';

const Logo = styled(Typography)(({theme}) => ({
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold,
    "& span": {
        color: theme.palette.secondary.main,
        fontWeight: theme.typography.fontWeightMedium
    }
}));

function HeaderLogo() {

    return (
        <Logo variant='h1'
            sx={{
                textAlign: 'center',
            }}
            >
                Currency<span>Pal</span>
        </Logo>
    )
}

export default HeaderLogo;