import React from 'react';
import { Grid } from '@material-ui/core';
import { Card } from 'react-bootstrap';
import '../../css/home.css';


const HomeCard = (props) => {
    return (
        <div style={{ color: 'blue' }}>

            <Card variant='Info' border='secondary' className='homeCard-card' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                <Card.Body>

                    <Card.Text className='homeCard-card-text'   >
                        <Grid container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Grid item lg={12} xs={12} md={12} className='homeCard-card-img' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                {props.iconUrl}
                            </Grid>

                        </Grid>

                    </Card.Text>
                    <hr />
                    <Card.Title className='homeCard-card-titte' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} > {props.cardText}</Card.Title>

                </Card.Body>


            </Card>

        </div>
    )
}

export default HomeCard
