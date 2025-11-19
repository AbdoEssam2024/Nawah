import { Container, Box, Typography, Button } from "@mui/material"
import "./landing.css"
export default function Landing() {
    return (
        <Container maxWidth="2xl" sx={{
            height: {
                xs: "60dvh",
                lg: "80dvh"
            }
        }} id="landing">
            <Box id="cover-color"></Box>

            <Typography variant="h1" fontSize={{ xs: "3rem", lg: "5rem" }} color="white" fontWeight="bold" sx={{ zIndex: 10 }}>
                Nawah <br />Project
            </Typography>

            <Button id="landing-btn" variant="contained" sx={{
                zIndex: 10, bottom: {
                    xs: "10%",
                    lg: "5%"
                },
                padding: {
                    xs: "2% 4%",
                    md: "1% 2%",
                    lg: "1% 3%"
                }
            }}>
                <Typography variant="h5" fontSize={{ xs: "1.5rem", lg: "2rem" }} fontWeight={700}>انضم الان</Typography>
            </Button>
        </Container>
    )
}