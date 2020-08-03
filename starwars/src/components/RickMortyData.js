import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Character.js';
import {Button, Container} from 'reactstrap';


const RickMortyData = () => {
    var pageVar = 1

    const [rNmData, setRnMData] = useState([]);
    const [pgNum, setPgNum] = useState(1);

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${pgNum}`)
            .then( r => {
               // console.log(r)
               setRnMData(r.data);
               console.log(r);
            })
            .catch( e => {console.log(e)})
    }, [pgNum])

    return (
        <Container>
            <Character name={rNmData.name } image={rNmData.image} status={rNmData.status} gender={rNmData.gender} />
            <Button onClick={() => setPgNum(rNmData.id === 1 ? rNmData.id : rNmData.id--)}>{`<<`}</Button>
            <Button onClick={() => setPgNum(rNmData.id++)}>{`>>`}</Button>
        </Container>

    );
}

export default RickMortyData;