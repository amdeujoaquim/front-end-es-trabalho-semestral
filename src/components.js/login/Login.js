import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Card } from 'react-bootstrap';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import useFetch from '../useFetch';
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Login = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [userTyped, setUserTyped] = useState("");
    const [passwordTyped, setpasswordTyped] = useState("");
    const [open, setOpen] = useState(false);

    const { dbData: usersList, error, loading } = useFetch('http://127.0.0.1:8000/api/getusuario');

    console.log('userlist', usersList)


    const validarUser = () => {

        for (let i = 0; i < usersList?.length; i++) {

            if (usersList[i]?.senha == passwordTyped
                && usersList[i]?.userName == userTyped) {
                navigate('/home');
            }

        }
    };


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };


    if (error) {
        return <span>ERROR: {error.message}</span>
    }
    if (loading) {
        return (
            <div style={{ paddingTop: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Spinner animation="border" variant="primary" />
            </div>
        )
    }

    return (

        <Container component="main" maxWidth="xs" style={{ marginTop: '50px' }}>
            <CssBaseline />
            <Card>
                <Card.Header style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Avatar className={classes.avatar}>
                        <LockOpenIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                </Card.Header>
                <Card.Body>
                    <div className={classes.paper}>

                        <form className={classes.form} noValidate>
                            <TextField

                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="text"
                                autoComplete="text"
                                autoFocus
                                onChange={(e) => {
                                    setUserTyped(e.target.value)
                                }}
                            />
                            <TextField

                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={(e) => {
                                    setpasswordTyped(e.target.value)
                                }}
                            />

                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={() => validarUser()}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>

                            </Grid>
                        </form>


                    </div>
                </Card.Body>
            </Card>
            <div>
                <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity='error'>
                        Dados de login incorectos
                    </Alert>
                </Snackbar>

            </div>

        </Container>
    );
}

export default Login
