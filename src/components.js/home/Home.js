import React from 'react';
import { Grid } from '@material-ui/core';
import '../../css/home.css';
import HomeCard from './HomeCard';
import HomeList from './HomeList';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div >
            <Grid item lg={4} xs={6} md={6} className="home-grid-item" >
                {
                    HomeList.map((item) =>
                        <Link to={item.url}>
                            <HomeCard
                                cardText={item.title}
                                iconUrl={item.icon}
                            />

                        </Link>
                    )
                }
            </Grid>

        </div>
    )
}

export default Home
