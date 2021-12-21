import React from 'react'
import '../../css/cssGeral.css';
import Home from '../home/Home';
import Typography from "@material-ui/core/Typography";


const Dashboard = () => {
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

                {/* <GraficoVeiculos
                    data={data}

                /> */}



            </div>

            <div id='usersList'>


            </div>

        </div>
    )
}

export default Dashboard
