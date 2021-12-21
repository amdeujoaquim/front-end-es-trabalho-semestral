import React, { useState, useEffect, useRef } from "react";

import emailjs from 'emailjs-com';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Grid } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import { Redirect } from 'react-router';
import Spinner from 'react-bootstrap/Spinner';
import SaveIcon from '@material-ui/icons/Save';

import { Form, Row, Col, Card, InputGroup, Container, FormControl, Label } from 'react-bootstrap';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import cssGeral from '../../css/cssGeral.css'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import uuid from 'react-uuid';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));



function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const AdicionarMedico = () => {
    const form = useRef();

    const classes = useStyles();
    const [nomeUser, setNomeUser] = useState("");
    const [apelidoUser, setApelidoUser] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [senhaUser, setSenhaUser] = useState(uuid().substring(1, 7));
    const [senhaUserConfrim, setSenhaUserConfrim] = useState(uuid().substring(1, 7));
    const [contacto, setContacto] = useState("");
    const [tipoUser, setTipoUser] = useState("Normal");
    const [emailUser, setEmailUser] = useState("");
    const [loadingStatus, setLoadingStatus] = useState(true);


    // validação de form ststes
    const [nomeUserInvalida, setNomeUserInvalida] = useState({ status: false, message: "" });
    const [apelidoUserInvalida, setApelidoUserInvalida] = useState({ status: false, message: "" });
    const [dataNascimentoInvalida, setDataNascimentoInvalida] = useState({ status: false, message: "" });
    const [senhaUserInvalida, setSenhaUserInvalida] = useState({ status: false, message: "" });
    const [contactoInvalida, setContactoInvalida] = useState({ status: false, message: "" });
    const [tipoUserInvalida, setTipoUserInvalida] = useState({ status: false, message: "" });
    const [emailUserInvalida, setEmailUserInvalida] = useState({ status: false, message: "" });

    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [idGerado, setidGerado] = useState(uuid().substring(1, 6));


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    const handleClose2 = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen2(false);
    };




    const calculate_age = (dateOfConstrution) => {
        var today = new Date();
        var dateOfConst = new Date(dateOfConstrution);
        var age_now = today.getFullYear() - dateOfConst.getFullYear();
        var m = today.getMonth() - dateOfConst.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < dateOfConst.getDate())) {
            age_now--;
        }

        if (age_now < 0) {
            setOpen2(true);
            setDataNascimentoInvalida({ status: true, message: "A data de construção é inválida" });
        }
        else {
            setDataNascimentoInvalida({ status: false, message: "" });
        }
    }

    const validateForm = (e) => {

        e.preventDefault();

        setLoadingStatus(false)

        console.log('condicoes satisfeitas')


        emailjs.sendForm('service_5qb91qf', 'template_idbl20k', form.current, 'user_EZVBmVQDPKgN6R899VI8W')
            .then((result) => {
                console.log("result.text :", result.text);
            }, (error) => {
                console.log("error: ", error.text);
            });


        const medico = {
            nome: nomeUser,
            Especialidade: apelidoUser,
            contacto: contacto,
            email: emailUser,

        }

        fetch('http://localhost:8000/api/savemedico', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(medico)
        }).then(() => {
            console.log("dados guardados com sucesso")
            setNomeUser("");
            setApelidoUser("");
            setDataNascimento("");
            setSenhaUser("");
            setSenhaUserConfrim("");
            setContacto("");
            setTipoUser("Normal");
            setEmailUser("")
            setOpen(true);
            setLoadingStatus(true)

        })

        console.log('user', medico)


    }

    return (
        <div>

            <Typography color="primary" gutterBottom>
                <h4 style={{ marginTop: '30px' }}>Formulário de Registo do Médico</h4>
            </Typography>

            <form ref={form} className="" autoComplete="off" onSubmit={validateForm} >

                <Card style={{ margin: "5px 5px 5px 5px" }}>
                    <Card.Header as="h6">Dados do Médico</Card.Header>
                    <Card.Body>
                        <div className='div-flexEnd-style'>
                            <PersonAddIcon
                                color="primary"
                                style={{ fontSize: 80, margin: '20px 20px 20px 20px', display: 'flex', alignItems: 'center', justifyContent: 'right' }}
                            />
                        </div>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="Carta">
                                <Form.Label>Nome </Form.Label>
                                <input
                                    className="form-control"
                                    type="text"
                                    required
                                    name='nome'
                                    value={nomeUser}
                                    onChange={(e) => { setNomeUser(e.target.value) }}
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="local_Emissao">
                                <Form.Label>Especialidade </Form.Label>
                                <input
                                    className="form-control"
                                    type="text"
                                    required
                                    name='apelido'
                                    value={apelidoUser}
                                    onChange={(e) => { setApelidoUser(e.target.value) }}

                                />
                            </Form.Group>
                            {/* <Form.Group as={Col} controlId="data_nacimento">
                                <Form.Label>Data de Nascimento</Form.Label>
                                <input
                                    id="date"
                                    className="form-control"
                                    type="date"
                                    onChange={(e) => {
                                        setDataNascimento(e.target.value)
                                        calculate_age(e.target.value)
                                    }}
                                />
                            </Form.Group> */}
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="Carta">
                                <Form.Label>Email </Form.Label>
                                <input
                                    className="form-control"
                                    type="email"
                                    name='email'

                                    required
                                    value={emailUser}
                                    onChange={(e) => { setEmailUser(e.target.value) }}
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="local_Emissao">
                                <Form.Label>Contacto </Form.Label>
                                <input
                                    className="form-control"
                                    type="number" required
                                    value={contacto}

                                    onChange={(e) => { setContacto(e.target.value) }}

                                />
                            </Form.Group>

                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGroupPassword">
                                <Form.Label></Form.Label>
                                <input
                                    className="form-control"

                                    type="password"
                                    value={senhaUser}
                                    name='senhaUser'
                                    hidden

                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGroupPassword">
                                <Form.Label></Form.Label>
                                <input
                                    className="form-control"
                                    type="password"
                                    value={idGerado}
                                    hidden

                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="local_Emissao">
                                <Form.Label> </Form.Label>
                                <input
                                    className="form-control"
                                    type="number"
                                    name='idGerado'
                                    value={idGerado}
                                    hidden

                                />
                            </Form.Group>
                        </Row>
                        <div className='div-flexEnd-style'>

                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                type='submit'
                                disabled={!loadingStatus}
                                startIcon={
                                    loadingStatus
                                        ? (<SaveIcon />)
                                        : (<Spinner animation="border" />)
                                }
                            >
                                Salvar
                            </Button>
                        </div>

                        <div>
                            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                                <Alert onClose={handleClose} >
                                    Dados guardados com sucesso
                                </Alert>
                            </Snackbar>

                        </div>

                        <div>
                            <Snackbar open={open2} autoHideDuration={4000} onClose={handleClose2}>
                                <Alert onClose={handleClose2} severity='error'>
                                    Data  de nascimento invalida
                                </Alert>
                            </Snackbar>
                        </div>

                    </Card.Body>
                </Card>
            </form>


        </div>
    )
}

export default AdicionarMedico
