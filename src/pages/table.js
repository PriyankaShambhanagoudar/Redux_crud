import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    table: {
        minWidth: 700,
    },
}));

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
}))(TableRow);

const FormDataTable = (props) => {
    const classes = useStyles();

    return (
        <div >
            <h1 align="center">Form-Table</h1>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">ID</StyledTableCell>
                            <StyledTableCell>Name </StyledTableCell>
                            <StyledTableCell align="center">E-mail</StyledTableCell>
                            <StyledTableCell align="center">Contact</StyledTableCell>
                            <StyledTableCell align="center">Address </StyledTableCell>
                            <StyledTableCell align="center"> Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.users.map((userData, i) => (
                            <StyledTableRow key={userData.id}>
                                <StyledTableCell align="center">{i + 1}</StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    {userData.name}
                                </StyledTableCell>

                                <StyledTableCell align="center">{userData.email}</StyledTableCell>
                                <StyledTableCell align="center">{userData.contact}</StyledTableCell>
                                <StyledTableCell align="center">{userData.address}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <Button
                                        style={{ marginRight: "5px" }}
                                        variant="contained"
                                        color="primary"
                                        onClick={() => props.editUserData(userData.id)}
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={() => props.deleteId(userData.id)}
                                    >
                                        Delete
                                    </Button>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default FormDataTable;
