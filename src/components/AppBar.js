import { Avatar, Box, Button, ButtonBase, IconButton, ListItem, ListItemIcon, Paper, Stack, Typography, Popper, Fade, Grow, Slide, Divider, Backdrop } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useRef, useState } from "react";
import { all_plants, pots, plant_care, gifts } from "../constant/menuList";
import service from "../services/http-common";
function AppBar() {

  const [currentMenu, setMenu] = useState();     //menunün durumunu güncelleyen degisken.
  const anchorRef = useRef();                    // Button bileşeninin referansı (nesnesi-kopyası), bunu popper a göndercez, böylece popper button'in altında açılacak
  
 
  return (
    <>
      {/* ref özelliği ile anchorRef değişkenine <Stack> bileşenini atadık, ikisini eşleştirdik */}
      <Stack ref={anchorRef} direction="row" alignItems="center" justifyContent="space-between" spacing={1} px="25%" sx={{
        height: 60, zIndex: 2,
        boxSizing: 'border-box',
        width: '100%', boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;',
        bgcolor: "rgba(255, 255, 255, 0.8)", position: "fixed", backdropFilter: 'blur(2px)'
      }}>

        <img src="/assets/logo.png" sx={{ height: 50, width: 100 }} />

        <Stack direction="row" spacing={3} alignItems="center">
          {/**button bileşeninin ref ozelligine anchorRef degişkenini atadık, anchorRef artık bitkiler butonunun bellek adresini tutuyor */}
          <Button onMouseEnter={e => setMenu(all_plants)} color="inherit" sx={{ textTransform: 'none' }}>Bitkiler</Button>
          <Button onMouseEnter={e => setMenu(pots)} color="inherit" sx={{ textTransform: 'none' }}>Saksılar</Button>
          <Button onMouseEnter={e => setMenu(plant_care)} color="inherit" sx={{ textTransform: 'none' }}>Bitki Bakımı</Button>
          <Button onMouseEnter={e => setMenu(gifts)} color="inherit" sx={{ textTransform: 'none' }}>Hediyeler</Button>
        </Stack>

        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
        <IconButton><FavoriteBorderOutlinedIcon/></IconButton>
          
          <IconButton><ShoppingBagOutlinedIcon /></IconButton>
          <IconButton><SearchOutlinedIcon /></IconButton>
          
          <Avatar component={ButtonBase} sx={{ height: 26, width: 26 }} />
        </Stack>

      </Stack>
      <Backdrop open={currentMenu} sx={{zIndex: 1, marginTop: 15}}>
      <Popper sx={{zIndex: 2}} onMouseLeave={e => setMenu(null)} open={currentMenu} anchorEl={anchorRef.current} placement='bottom' transition>
        {({ TransitionProps }) => (
          <Grow {...TransitionProps} timeout={350}>
            <div>
              <Slide {...TransitionProps} timeout={350}>
                <Paper>
                  <Stack direction="row" minWidth="100vw">

                    <Box mt={4} ml="auto" mr={4}>
                      <Typography variant="h6">{currentMenu?.title}</Typography>
                    </Box>

                    <Divider orientation="vertical" flexItem />

                    <Box mt={4} ml={4} mr="auto">

                      {currentMenu?.subheaders.map(header =>
                        <Typography variant="subtitle2">{header.title}</Typography>
                      )}

                      {currentMenu?.explore && <Typography variant="body2">Ayrıca:</Typography>}

                      {currentMenu?.explore?.map(header =>
                        <Typography variant="subtitle2">{header.title}</Typography>
                      )}

                    </Box>

                    <Box component="img" src={currentMenu?.photoUrl}
                      height='40vh' width='30%' ml={-8}>
                    </Box>
                  </Stack>
                </Paper>
              </Slide>
            </div>
          </Grow>
        )}
      </Popper>
      </Backdrop>
    </>

  );
}
export default AppBar;

// popup menu- open parametresi popup'ın açık mı(true) kapalı mı(false) olduğunu tutuyor

// stackRef parametresi, popper'ın hangi bileşenin altında gözükmesini istiyorsak o bileşenin referansını tutuyor

// TransitionProps, Popper bileşenindeki TransitionProps değerlerini Fade bileşenine parametre olarak gönderiyor, Fade bileşeni Popper bileşenindeki
// TransitionProps değişkenini miras alıyor

// Fade, hazır animasyon bileşeni