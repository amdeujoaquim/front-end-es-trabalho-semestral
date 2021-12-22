import React from 'react'
import '../../css/cssGeral.css';
import Home from '../home/Home';
import Typography from "@material-ui/core/Typography";
import useFetch from '../useFetch';
import GraficoVeiculos from './GraficoVeiculos'


const Dashboard = () => {

    const { dbData: consultas, error, loading } = useFetch('http://127.0.0.1:8000/api/getconsulta');


    var qntJan = 0;
    var qntFev = 0;
    var qntMar = 0;
    var qntAbr = 0;
    var qntMai = 0;
    var qntJun = 0;
    var qntJul = 0;
    var qntAgo = 0;
    var qntSet = 0;
    var qntOut = 0;
    var qntNov = 0;
    var qntDez = 0;

    consultas?.map(item => {
        console.log(" mes pretendido", item?.data.substring(5, 7))

        if (item?.data.substring(5, 7) == '01') {
            qntJan = qntJan + 1;
        }
        if (item?.data.substring(5, 7) == '02') {
            qntFev = qntFev + 1;
        }
        if (item?.data.substring(5, 7) == '03') {
            qntMar = qntMar + 1;
        }
        if (item?.data.substring(5, 7) == '04') {
            qntAbr = qntAbr + 1;
        }
        if (item?.data.substring(5, 7) == '05') {
            qntMai = qntMai + 1;
        }
        if (item?.data.substring(5, 7) == '06') {
            qntJun = qntJun + 1;
        }
        if (item?.data.substring(5, 7) == '07') {
            qntJul = qntJul + 1;
        }

        if (item?.data.substring(5, 7) == '08') {
            qntAgo = qntAgo + 1;
        }
        if (item?.data.substring(5, 7) == '09') {
            qntSet = qntSet + 1;
        }
        if (item?.data.substring(5, 7) == '10') {
            qntOut = qntOut + 1;
        }
        if (item?.data.substring(5, 7) == '11') {
            qntNov = qntNov + 1;
        }
        if (item?.data.substring(5, 7) == '12') {
            qntDez = qntDez + 1;
        }
    }
    );





    const data = [
        {
            name: 'Jan',
            Entradas: qntJan
        },
        {
            name: 'Fev',
            Entradas: qntFev
        },
        {
            name: 'Mar',
            Entradas: qntMar

        },
        {
            name: 'Abr',
            Entradas: qntAbr

        },
        {
            name: 'Mai',
            Entradas: qntMai

        },
        {
            name: 'Jun',
            Entradas: qntJun

        },
        {
            name: 'Jul',
            Entradas: qntJul


        },
        {
            name: 'Ago',
            Entradas: qntAgo


        },
        {
            name: 'Set',
            Entradas: qntSet


        },
        {
            name: 'Out',
            Entradas: qntOut

        },
        {
            name: 'Nov',
            Entradas: qntNov

        },
        {
            name: 'Dez',
            Entradas: qntDez

        }
    ];



    return (
        <div className='container2'>

            <div id='userLogin' >
                <Home />
            </div>

            <div id='titulo'>
                <Typography color="primary" gutterBottom>
                    <h6 style={{ paddingTop: "10px" }} >Quantidade de consultas por mês</h6>
                </Typography>
            </div>
            <div id='titulo2'>
                <Typography color="primary" gutterBottom>
                    <h6 style={{ paddingTop: "10px" }} >Lista de Médicos</h6>
                </Typography>
            </div>
            <div id='graphic'>

                <GraficoVeiculos
                    data={data}

                />



            </div>

            <div id='usersList'>


            </div>

        </div>
    )
}

export default Dashboard
