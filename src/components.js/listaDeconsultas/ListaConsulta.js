
import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import useFetch from '../useFetch';
import { Avatar, Grid } from '@material-ui/core';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Spinner from 'react-bootstrap/Spinner';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Link } from 'react-router-dom'
import Typography from "@material-ui/core/Typography";
import axios from 'axios';
import { Form, Row, Col, Card, InputGroup, Container, FormControl, Label } from 'react-bootstrap';


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));





const ListaConsulta = () => {

    const classes = useStyles();

    const [show, setShow] = useState(false);
    const [nomePaciente, setnomePaciente] = useState('');
    const [nomeMedico, setnomeMedico] = useState('');
    const [nomeServico, setnomeServico] = useState('');


    const { dbData: consultas, error, loading } = useFetch('http://127.0.0.1:8000/api/getconsulta');


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getNomeMedico = async (idMedico) => {

        try {

            const response = await axios.get(`http://127.0.0.1:8000/api/getmedico/${idMedico}`);
            setnomeMedico(response.data.nome);
        } catch (error) {
        }

    };

    const getNomePaciente = async (idPaciente) => {

        try {

            const response = await axios.get(`http://127.0.0.1:8000/api/getpaciente/${idPaciente}`);
            setnomePaciente(response.data.nome);
        } catch (error) {

        }
    };

    const getNomeServico = async (servicoId) => {

        try {

            const response = await axios.get(`http://127.0.0.1:8000/api/getservico/${servicoId}`);
            setnomeServico(response?.data?.nome);
            console.log("dados ", response?.data)
        } catch (error) {

        }
    };


    var consultasArry = [];

    consultas?.map((item, index) => {

        getNomeMedico(item?.medicoId);
        getNomePaciente(item?.pacienteId);
        getNomeServico(item?.servicoId);

        consultasArry.push(
            {
                id: item?.id,

                tipo: item?.tipo,

                Hora: item?.Hora,

                data: item?.data,

                medicoId: nomeMedico,

                pacienteId: nomePaciente,

                servicoId: nomeServico,

                status: item?.status
            }

        )
    })

    console.log(consultasArry)


    const columns = [

        { field: 'id', headerName: 'ID', width: 100 },

        { field: 'tipo', headerName: 'Tipo de consulta', width: 150, editable: true },

        { field: 'Hora', headerName: 'Hora', width: 180, editable: true },

        { field: 'data', headerName: 'Data da consulta', width: 200, editable: true },

        { field: 'medicoId', headerName: 'Medico', width: 200, editable: true },

        { field: 'pacienteId', headerName: 'Paciente', width: 200, editable: true },

        { field: 'servicoId', headerName: 'servicoId', width: 200, editable: true },

        { field: 'status', headerName: 'status', width: 200, editable: true },


        {
            field: 'action',
            headerName: 'Actions',
            width: 200,
            renderCell: (params) => {
                return (
                    <div>
                        <Button
                            variant="outlined"
                            size="small"
                            className={classes.button}
                            startIcon={<VisibilityIcon />}
                        >
                            Detalhes
                        </Button>
                    </div>

                )
            }
        }
    ];



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

        <div>

            <Typography color="primary" gutterBottom>
                <h4 style={{ marginTop: '30px' }}>Historico de consultas</h4>
            </Typography>


            <Card style={{ margin: "5px 5px 5px 5px" }}>
                <Card.Header as="h6"></Card.Header>
                <Card.Body>


                    <div style={{ height: 400, width: '100%' }}>

                        {
                            consultas &&
                            <DataGrid
                                rows={consultasArry}
                                columns={columns}
                                pageSize={5}
                                options={{
                                    search: true,
                                    exportButton: true
                                }}
                                filterModel={{
                                    items: [{ columnField: 'commodity', operatorValue: 'contains', value: 'rice' }],
                                }}

                            />
                        }

                    </div>



                </Card.Body>
            </Card>



        </div>
    );
}

export default ListaConsulta









