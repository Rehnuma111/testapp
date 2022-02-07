import React from "react";
import "../css/contact.css";
import { Box, Button, Card } from "@mui/material";
import { Container, TextField } from "@material-ui/core";
import Contacts from "@mui/icons-material/Contacts";
import contact from "../image/contact.png";

const Contact = () => {
  return (
    <div>
      {/* <h1>Contact Component</h1> */}
      <Container>
        <Card className="card">
          {/* <h1>cards</h1> */}
          <div className="row">
            <div className="col-md-6 col-sm-12 row1">
              {/* <h3>right</h3> */}
              <img className="img" src={contact} alt="img" />
            </div>
            <div className="col-md-6 col-sm-12 row1">
              <h3 className="contactUs-txt">Contact Us</h3>
              <div style={{textAlign: "center"}}>
              <Contacts id="contact-icon" />
              </div><br />
              <div className="text-field">
              <TextField id="filled-basic" style={{width: "80%"}} label="Full Name" variant="filled" required/>
              </div>
              <div className="text-field">
              <TextField id="filled-basic" style={{width: "80%"}} label="Phone" variant="filled" required/>
              </div>
              <div className="text-field">
              <TextField id="filled-basic" style={{width: "80%"}} label="Email" variant="filled" required/>
              </div>
              <div className="text-field">
              <TextField id="filled-basic" style={{width: "80%"}} label="Message" variant="filled" required/><br />
              </div>

              <div className="submit-btn">
                <Button variant="contained" style={{width: "80%"  }} type="submit">Submit</Button>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Contact;
