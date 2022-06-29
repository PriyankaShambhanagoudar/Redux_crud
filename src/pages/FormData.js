import React from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const FormData = (props) => {

    return (
        <div>
            <h1 align="center">Form</h1>
            <form align="center" onSubmit={props.handleSubmit}>
                <TextField
                    id="standard-basic"
                    label="Name"
                    name="name"
                    type="text"
                    width="400px"
                    style={{ width: "400px" }}
                    value={props.state.name || ""}
                    onChange={props.handleChange}
                />
                <br />
                <TextField
                    id="standard-basic"
                    label="email"
                    name="email"
                    type="email"
                    style={{ width: "400px" }}
                    value={props.state.email || ""}
                    onChange={props.handleChange}
                />
                <br />
                <TextField
                    id="standard-basic"
                    label="Contact"
                    name="contact"
                    type="number"
                    style={{ width: "400px" }}
                    value={props.state.contact || ""}
                    onChange={props.handleChange}
                />
                <br />
                <TextField
                    id="standard-basic"
                    label="Address"
                    name="address"
                    type="text"
                    style={{ width: "400px" }}
                    value={props.state.address || ""}
                    onChange={props.handleChange}
                />
                <br />
                <Button
                    style={{ width: "418px", marginTop: "20px" }}
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default FormData;
