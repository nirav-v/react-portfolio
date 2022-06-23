import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { TextField, TextareaAutosize } from "@mui/material";
import { Button } from "@mui/material";
import { List, ListItem } from '@mui/material';
import { Paper } from "@mui/material";
import { color, fontSize, textAlign } from "@mui/system";
import EmailForm from "../contactForm";

const styles = {
list: {
  listStyle: 'none',
  margin: 5,
  textAlign: "center",
  color: "black",
  fontSize: 20,
  display: 'block'
}
}

function Contact() {
  return (

<div>      

<Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
  style={styles.list}
>
<Typography style={styles.list}>
  You can contact me via email (preferred) or phone
</Typography>
  <ul className="contact-info" style={styles.list}>
        <ListItem style={styles.list}>
          Email: niravvenkatesan@gmail.com
        </ListItem>
        <ListItem style={styles.list}>Phone: 408-425-2694</ListItem>
      </ul>
  <Typography style={styles.list}>
  Or send a message with the form below
</Typography>
    </Grid>

<EmailForm/>

    </div>
  );
}

export default Contact;
