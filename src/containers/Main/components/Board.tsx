import React, { memo } from 'react';
import { getByDisplayValue } from '@testing-library/react';
import {Grid, Skeleton} from '../../../components';
import Card from './Card';

interface Data {
    cases?:Number,
    todayDeaths?:Number,
    recovered?:Number,
    deaths?:Number,
    todayCases?:Number
    }


    function Board({data} : { data: Data}){
        const{ cases, todayDeaths, recovered, deaths, todayCases } = data;
        const getValue = (value:Number) => value ? value : <Skeleton variant="text" width={182} height={60} />
        return (
            
            <Grid container spacing={4}>
                <Grid item xs={12} md={3} >
                    <Card value={getValue(cases ? cases:0)} label="total de casos" color="#5d78ff" />               
                </Grid>
            </Grid>
        ) 
    }


export default Board;