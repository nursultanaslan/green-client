import { Stack, Box, Typography, Button } from "@mui/material";

function Section(){
    return(
        <div>
            <Stack direction="row" height="100vh">
                <Box m="auto" width="40%">  
                    <Typography variant="h4" color="#2a8a1c">Doğanın mucizesi her evde</Typography>
                    <Typography variant="h4">Green ile yeşile yakın ol!</Typography>
                    <Typography variant="body1" mt={1}>Green; doğa sevgisini paylaşan ve bitki bakımına önem veren kişiler için bir buluşma noktasıdır. Bitkilerle ilgili çeşitli bilgilere, bakım önerilerine, bitki satın alma seçeneklerine ve bitki dostu ürünlere kolayca erişebilirsiniz.</Typography>
                    
                    <Stack direction="row" spacing={2} mt={3}>
                    <Button variant="contained">Satın Al</Button>
                    <Button variant="outlined">Bitki Bakımı</Button>
                    </Stack>
                </Box>
                <Box component="img" src="https://images.unsplash.com/photo-1597211057963-3806e96714c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1928&q=80">

                </Box>
            </Stack>

        </div>
    );
}

export default Section;