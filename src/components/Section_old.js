import { List, Stack, Typography, Button, ListItem, ListItemIcon, ListItemText, SvgIcon } from "@mui/material";
import OpacityRoundedIcon from '@mui/icons-material/OpacityRounded';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import { lightBlue, lightGreen, red, yellow } from "@mui/material/colors";
import zIndex from "@mui/material/styles/zIndex";
import CatIcon from "../icons/CatIcon";
import BenefitsIcon from "../icons/BenefitsIcon";
import LightIcon from "../icons/LightIcon";
import WateringIcon from "../icons/WateringIcon";

function Section(){
    return(
        <Stack direction={"row"} sx={{height:"200vh", paddingTop: "80px"}}>
            <Stack sx={{ 
                width: '70%',
                alignItems: 'flex-start',
                backgroundImage: 'url(https://www.pngitem.com/pimgs/b/519-5192698_indoor-plants-png.png)', 
                backgroundSize: '50%', backgroundRepeat: 'no-repeat', backgroundPosition: 'right center', 
                pl: 12,
                zIndex: 0,
                justifyContent: "center"}}>
                <Typography variant="subtitle1">
                    ARECA DYPSIS LUTESCENS
                </Typography>
                <Typography variant="h5">
                    Areka Palmiyesi
                </Typography>
                <Typography variant="body2" sx={{width: "40%"}}>
                    Altın kamışı avuç içi, areca avuç içi, sarı palmiye veya kelebek avuç içi olarak da bilinen Dypsis lutescens, Madagaskar’a özgü ve Andaman Adaları, Réunion, El Salvador, Küba, Porto Riko’da doğallaştırılmış Arecaceae familyasındaki çiçekli bitki türüdür.
                </Typography>
                <Button variant="contained" sx={{marginTop: 2}}>
                    INCELE
                </Button>
            </Stack>
            <List sx={{width: '30%', bgcolor: 'white', p: 2, mt: '1px' }}>
                <ListItem>
                    <ListItemText>
                        <Typography variant="h5" gutterBottom> 
                        Bakım & Özellikler
                        </Typography>
                    </ListItemText>
                </ListItem>
                <ListItem alignItems="flex-start">
                    <ListItemIcon><WateringIcon width={40} height={40}/></ListItemIcon>
                    <ListItemText 
                    primary= "Sulama"
                    secondary= "Yaz günlerinin kavurucu sıcaklarında haftada 2 defa sulamanız önerilir. Eğer soğuk bir bölgede bu bitkiyi büyütmeye çalışıyorsanız haftada 1 kez sulama yeterli olacaktır. Areka palmiyesini sularken toprağı çürütmemeye dikkat ediniz."
                    ></ListItemText>
                </ListItem>
                <ListItem alignItems="flex-start">
                    <ListItemIcon><LightIcon width={40} height={40}/></ListItemIcon>
                    <ListItemText 
                    primary= "Işık"
                    secondary= "Gün içinde güneşi doğrudan gören bir konuma yerleştirmeniz önerilir. Sık sık saksının yönünü değiştirerek tüm yaprakların güneşten faydalanarak uzamasını sağlayabilirsiniz. Işığı seven areka palmiyesi, karanlık ortamları sevmez."
                    ></ListItemText>
                </ListItem>
                <ListItem alignItems="flex-start">
                    <ListItemIcon><BenefitsIcon width={40} height={40}/></ListItemIcon>
                    <ListItemText 
                    primary= "Faydalar"
                    secondary= "Bulunduğu odadaki kötü havayı emerek temizleme görevini üstlenir. Areka palmiyesi faydaları arasında iç ortamların havasını nemlendirmesi de vardır."
                    ></ListItemText>
                </ListItem>
                <ListItem alignItems="flex-start">
                    <ListItemIcon><CatIcon width={40} height={40}/></ListItemIcon>
                    <ListItemText 
                    primary= "Kedi Dostu"
                    secondary= "Evinize egzotik bir hava katan areka palmiyesi canlı görüntüsü ve sarkan yapraklarıyla özellikle de kedilerin oynamaya bayıldığı bir bitki. Tamamen zararsız bir olan areka palmiyesini hem siz hem de evcil hayvanlarınız çok sevecek."
                    ></ListItemText>
                </ListItem>
                
            </List>

        </Stack>

    );
}

export default Section;