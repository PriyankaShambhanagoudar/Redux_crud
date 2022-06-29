import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableData from "./table"
import Grid from '@material-ui/core/Grid';
import FormData from './FormData'
import { deleteUser, loadUser, getSingleUser, addUserData, updateUser } from "../redux/action"
import { useDispatch, useSelector } from "react-redux"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const defaultData = {
    name: "",
    email: "",
    contact: "",
    address: "",
};

const User = (props) => {
    const classes = useStyles();
    //stats
    const [falg, setFlag] = useState("")

    let dispatch = useDispatch();
    //form
    const [state, setstate] = useState(defaultData);

    //single obj
    let { user } = useSelector((state) => state.data);

    useEffect(() => {
        if (user) {
            setstate({ ...user })
        }
    }, [user])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setstate({
            ...state,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setstate(defaultData);

        if (falg) {
            dispatch(updateUser(state));
        } else {
            dispatch(addUserData(state));
        }
    }

    //table
    const { users } = useSelector(state => state.data)


    useEffect(() => {
        dispatch(loadUser())
    }, [])

    //delete
    const deleteId = (id) => {
        console.log(id);
        if (window.confirm("Are you sure  wanted  to delete  the user?")) {
            dispatch(deleteUser(id))
        }
    }

    //edit
    const editUserData = (id) => {
        console.log(id);
        dispatch(getSingleUser(id))
        setFlag(true)
    }


    return (
        <div>
            <div className={classes.root}>
                <Grid container spacing={3}>

                    <Grid item xs={6}>
                        <FormData state={state} handleChange={handleChange} handleSubmit={handleSubmit} />
                    </Grid>
                    <Grid item xs={6}>
                        <TableData deleteId={deleteId} users={users} editUserData={editUserData} />
                    </Grid>

                </Grid>
            </div>
        </div>
    );
}

export default User;
