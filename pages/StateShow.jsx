import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

const StateShow = (props) => {
    const [states, setStates] = useState(null)
    // eslint-disable-next-line max-len

    const params = useParams()

    const url = 'https://api.census.gov/data/2019/pep/charagegroups?get=NAME,POP&for=state'
    

   const  KEY = process.env.REACT_APP_EMBED_API_KEY
    
    useEffect(() => {
        const getStates = async () => {
            const response = await fetch(`${url}${params.id}?fullText=true`)
            const data = await response.json()
            setStates(data)
        };
        getStates();
                
        
        
        
    }, [params.id, url] )
    
    
    
    
    const loaded = () => {
        
        const state = states[0]

        let lat 
        let lng 
        
    
     

        let population
        
       if (!state.population) {
           population = <p>{state.name.common}</p>;
           
        } else {
            population = <p>The population of {state.name.common} is <strong>{state.population}</strong>  </p>
            lat = state.populationInfo.latlng[0]
            lng = state.populationInfo.latlng[1]
            
        }
        
        
        if (state.name.common === 'Mississippi') {
            lat = 33;
            lng = -90
            
        }

        return (
            <div className="state">
                <h2>{state.name.common}</h2>
                <h3>Official Name: {state.name.official}</h3>
                <img className="show-page-flag" src={state.flags.svg} alt={`Flag of ${state.name.common}`} />
                <p>The population of {state.name.common} is <strong>{state.population}</strong>  </p>
                {capital}
                <iframe
                    style={
                        {width:"40vh",
                        height:"40vh",
                        style:"border:0",
                        alignSelf: 'center',
                        marginBottom: '10vh'
                    }
                    }
                    title="US State Map"
                    loading="wait"
                    allowFullScreen
                    referrerpolicy="no-referrer-when-downgrade"
                    src='https://api.census.gov/data/2019/pep/charagegroups?get=NAME,POP&for=state:01&key=2c4b15293556d37fedd431599362146b8e6e0f7e'>
                </iframe>
                
                
            </div>
        )
    }

    return states ? loaded() : loading()
}

export default StateShow;