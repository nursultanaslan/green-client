import { Stack, Grid, Box, Container, Typography, Divider, ButtonBase } from "@mui/material";
import categoryList from "../constant/categoryList";

//yazıyı ve çizgi bir arada dursun diye bir box'un içine ekledik. box'u da bir grid item içine ekledik. grid container diğer itemlar ile sıralasın diye
function Categories() {
    return (
        <Container sx={{ width: '50%', paddingTop: 24 }}>
            <Grid container spacing={{ md: 4 }} columns={{ md: 12 }}>
                {categoryList.map(category =>
                    <Grid item md={4}>
                        <ButtonBase>
                        <Box
                            sx={{
                                backgroundImage: category.bg_src,
                                width: 200, height: 200, backgroundSize: '200px 200px','&:hover': { backgroundSize: '220px 220px' }, transition: "ease-in .5s", backgroundPosition: 'center',  
                                display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',alignItems: 'start'
                            }}>
                            <Typography gutterBottom ml={3} fontWeight={600}>{category.title}</Typography>
                            <Divider sx={{ borderColor: '#000', borderBottomWidth: 2, mb: 3, ml: 3, width: 50 }} />
                        </Box>
                        </ButtonBase>
                    </Grid>
                )}
            </Grid>
        </Container>
    );
}

export default Categories;