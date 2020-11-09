import React from 'react';
//import RefreshIcon from '../../../assets/images/refresh.svg';
import {Card, Typography, Button, Select, MenuItem} from '../../../components';
import COUNTRIES from '../../../commons/constants/countries';
import {CardPanelContentStyled, ItemStyled} from './style';

interface Data {
    cases?:Number,
    todayDeaths?:Number,
    recovered?:Number,
    deaths?:Number,
    todayCases?:Number
}


interface Country{
    flag:string,
    label:string,
    value:string,
}
    let hasShare=false;
    if (navigator.share === null){
        hasShare=false;
    }



    function Panel({updatedAt, data, onChange, country,getCovidData} : { updatedAt: string, data:Data, onChange:any, country:string, getCovidData:any}){  
    
    const {recovered} = data;
    const renderCountries = (country:Country, index:Number) =>(
            <MenuItem key={`country-${index}`} value={country.value}>
                <ItemStyled>
                    <div>{country.label}</div>
                    <img src={country.flag} alt="flag"/>
                </ItemStyled>
            </MenuItem>
    )

    const textCovid19 = `País: ${country} - recuperados: ${recovered}`;

    const copyInfo = () =>{
        navigator.clipboard.writeText(textCovid19);
    }

    const shareInfo = () =>{
        navigator.share({
            title: `Dados do Covid 19 - ${country}`,
            text:   textCovid19,
            url: 'https://...'
        })
    }

    const renderShareButton = (
        <div>
            <Button variant="contained" color="primary" onClick={shareInfo}>
                Compartilhar
            </Button>
        </div>
    )

    const renderCopyButton = (
        <div>
            <Button variant="contained" color="primary" onClick={copyInfo}>
                Copiar
            </Button>
        </div>
    )

    return (
        <Card>
            <CardPanelContentStyled>
                <div>
                    <Typography variant="h5" component="span" color="primary">Covid-19</Typography>
                    <Typography variant="h6" component="span" color="primary">Painel Coronavirus</Typography>
                    <Typography variant="body2" component="span" color="primary">Atualizado em :{updatedAt}</Typography>                                        
                    <div className="pt-2">
                        <Select 
                        onChange={onChange}
                         value={country}>
                            {COUNTRIES.map(renderCountries)}
                        </Select>
                    </div>
                </div>
                {hasShare ? renderShareButton : renderCopyButton} 
            </CardPanelContentStyled>
        </Card>
    )
}

export default Panel;