import { ListItem, Paper, List, Button, Stack, ListItemText } from "@mui/material";
import ErrorIcon from '@mui/icons-material/Error';

function DialogBox() {
    return (
        <Stack top={0} sx={{ paddingTop: 24, width: '100%', alignItems: "center", position: 'absolute'}}>
            <Paper sx={{ width: '35%', height: 150, paddingRight: 2, borderRadius: '15px'}}>
                <List>
                    <ListItem>
                        <ErrorIcon color="warning" sx={{ marginRight: 2, fontSize: 50}} />
                        <ListItemText primary="Değişiklikler kaydedilemedi. Yine de sayfayı kapatmak istiyor musunuz?"></ListItemText>
                    </ListItem>
                </List>
                <Stack direction='row' spacing={2} justifyContent= "flex-end">
                    <Button variant="outlined" color="error">
                        İPTAL
                    </Button>
                    <Button variant="outlined" color="primary">
                        ONAYLA
                    </Button>
                </Stack>
            </Paper>
        </Stack>
    );
}

export default DialogBox;