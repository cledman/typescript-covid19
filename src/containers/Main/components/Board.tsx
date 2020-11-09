import React from 'react';
//import { getByDisplayValue } from '@testing-library/react';
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
                <Grid item xs={12} md={3} >
                    <Card value={getValue(todayDeaths ? todayDeaths:0)} label="Óbitos hoje" color="#f7bb29" />               
                </Grid>                
                <Grid item xs={12} md={3} >
                    <Card value={getValue(todayCases ? todayCases:0)} label="Casos hoje" color="#000" />               
                </Grid>                    
                <Grid item xs={12} md={3} >
                    <Card value={getValue(deaths ? deaths:0)} label="Total de mortos" color="#e95878" />               
                </Grid>                    
                <Grid item xs={12} md={3} >
                    <Card value={getValue(recovered ? recovered:0)} label="Total de recuperados" color="#67c887" />               
                </Grid>                                    
            </Grid>
        ) 
    }


export default Board;