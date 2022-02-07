import { Button, Card, Checkbox, Container, TextField } from "@mui/material";
import React from "react";
import "../css/register.css";
import LockOpen from "@material-ui/icons/LockOpen";
import img from '../image/register-img.png';


const Register = () => {
  return (
    <div className="register-background">
      <Container>
        <Card style={{ background: "white", marginBottom:"10rem"}} className="card card1">
          <div className="row">
            <div className="col-md-4 col-sm-12 register-row1">
                <img className="register-illu" src={img} alt="img" />
            </div>
            <div className="col-md-8 col-sm-12 register-row1">
              {/* <h3>left</h3> */}
              <p className="register">Register</p>
              <div className="icon">
                <LockOpen style={{ fontSize: "5rem" }} />
              </div>
              <div className="name-text-field" style={{padding: "0"}}>
                <TextField
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  style={{ width: "30%", marginRight: "10px" }}
                />
                <TextField
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  style={{ width: "30%" }}
                />
              </div>
              <div className="register-text-field">
                <TextField
                  id="outlined-basic"
                  label="College Name"
                  variant="outlined"
                  style={{ width: "61%" }}
                />
              </div>
              <div className="register-text-field">
                <TextField
                  id="outlined-basic"
                  label="Contact Number"
                  variant="outlined"
                  style={{ width: "61%" }}
                />
              </div>
              <div className="register-text-field">
                <TextField
                  name="someDate"
                  label="Date of Birth"
                  InputLabelProps={{ shrink: true, required: true }}
                  type="date"
                  style={{ width: "61%" }}
                />
              </div>
              <div className="dropdown" style={{ textAlign: "center" }}>
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ width: "61%" }}
                >
                  Choose Events
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" to="#">
                      Event 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" to="#">
                      Event 2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" to="#">
                      Event 3
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <Checkbox defaultChecked color="primary" style={{marginLeft: "18%"}} />
                <label>I Agree to recieve further updates from Enigma</label>
              </div>
              <div className="register-btn" style={{textAlign: "center", margin: "30px auto 15px auto"}}>
                <Button className="register-submit-btn" variant="contained" style={{width: "61%", backgroundColor: "#060b26"}}>Submit</Button>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Register;
