// Write your Character component here
import React from 'react';
import styled from "styled-components";

const Title = styled.p`
font-family: "Lucida Console";
font-size: 2rem;
color: lightslategray;
text-align: center;
text-decoration: underline;
`;


const DescWell = styled.div`
background-color: chartreuse;
border-style: groove;
border-color: rgb(0, 0, 102);
border-radius: 8px;
`;





const Character = props => {

    return (
        <div>
            <Title>Name: {props.name}</Title>
            <hr></hr>
            <img src={props.image}/>
            <DescWell>
                <h2>Fugitive Description</h2>
                <p>------------------------</p>
                <p>Status: {props.status}</p> 
                <p>Gender: {props.gender}</p>
            </DescWell>
        </div>
      );
}

export default Character;