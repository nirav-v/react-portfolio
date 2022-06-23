import { useState } from "react";
import { send } from "emailjs-com";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { TextField, TextareaAutosize } from "@mui/material";
import { Button } from "@mui/material";

const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_USER_ID } =
  process.env;

function EmailForm() {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, toSend, REACT_APP_USER_ID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="EmailForm">
    
      <form onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid xs={12} item>
            <Typography
              gutterBottom
              variant="body2"
              component="p"
              color="textSecondary"
            >
              Your Name
            </Typography>
            <TextField
              placeholder="Your name"
              required
              autoFocus
              name="from_name"
              value={toSend.from_name}
              onChange={handleChange}
            />
          </Grid>
          <Grid xs={12} item>
            <Typography
              gutterBottom
              variant="body2"
              component="p"
              color="textSecondary"
            >
              Email
            </Typography>
            <TextField
              placeholder="You Email Address"
              required
              type="email"
              name="reply_to"
              value={toSend.reply_to}
              onChange={handleChange}
            />
          </Grid>
          <Grid xs={12} item>
            <Typography
              gutterBottom
              variant="body2"
              component="p"
              color="textSecondary"
            >
              Message
            </Typography>
            <TextField
              placeholder="Write a message"
              fullWidth
              required
              type="message"
              name="message"
              value={toSend.message}
              onChange={handleChange}
            />
          </Grid>
          <Grid xs={12} item>
            <Button
              size="small"
              variant="contained"
              color="primary"
              type="submit"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default EmailForm;
