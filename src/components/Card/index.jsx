import { useEffect } from 'react';
import React from 'react';
import './Card.scss';
import err404 from '../../assets/404.png';

function Card(props) {

    /* useEffect(() => {
        console.log('@termino de montar ItemList');
        const api = fetch(API_STARWARS).then(data => {
            console.log('@data: ', data);

        }).catch(error => {
            console.log('@error: ', error);
        });
        console.log('@api: ', api);
      }, []); */

    /* useEffect(() => {
        console.log('@termino de montar ItemList Funcional');
        fetch(API_STARWARS).then(body => body.json())
            .then(data => {
                console.log('@data: ', data);
                const results = data.results;
                setDataList(results);
            })
            .catch(error => {
                console.log('@error: ', error);
            });
            
    }, []); */

    useEffect(() => {
        console.log('@termino de montar Card');
        async function fetchData() {
            try {
                
            } catch(error) {
                console.log('@error: ', error);
            }            
        }
        fetchData();
    }, []);

    return (        
        <div key={props.index} className="card">
            {console.log(props.image)}
            <img src={err404} className="cardImage" alt="imgCharacter" />
            <h2>{props.name}</h2>
        </div>
    );
}

export default Card;
/* <img src={props.image} className="cardImage" alt="imgCharacter" /> */