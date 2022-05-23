import React from 'react';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const stateIndex = (props) => {
    const [states, setStates] = useState(null)

    const url = ''

    const getStates = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setStates(data)
    }

    useEffect(() => {
        getStates()
    }, [])

    
    
    
    const loaded = () => {
        states.sort((a, b) => a.name.common.localeCompare(b.name.common))
        return (
            <div className="state-index">
                <div className="letter-category">A</div>
                <div className="first-letter-organizer">
                    {state.map((state, idx) => {
                        if (state.name.common[0] === 'A') {
                            return (
                                
                                <div className="state">
                                    <Link key={idx} to={`/${state.name.common}`} >
                                        <p>{state.name.common}</p>
                                    </Link>
                                </div>
                            )
                        } 
                        return null
                    })}

                </div>
                <div className="letter-category">C</div>
                <div className="first-letter-organizer">
                    {states.map((state, idx) => {
                        
                        if (state.name.common[0] === 'C') {
                            return (
                                
                                <div className="state">
                                    <Link key={idx} to={`/${state.name.common}`} >
                                        <p>{state.name.common}</p>
                                    </Link>
                                </div>
                            )
                        } 
                        return null
                    })}

                </div>
                <div className="letter-category">D</div>
                <div className="first-letter-organizer">
                    {states.map((state, idx) => {
                        
                        if (state.name.common[0] === 'D') {
                            return (
                                
                                <div className="state">
                                    <Link key={idx} to={`/${state.name.common}`} >
                                        <p>{state.name.common}</p>
                                    </Link>
                                </div>
                            )
                        } 
                        return null
                    })}

                </div>
                <div className="letter-category">F</div>
                <div className="first-letter-organizer">
                    {states.map((state, idx) => {
                        
                        if (state.name.common[0] === 'F') {
                            return (
                                
                                <div className="state">
                                    <Link key={idx} to={`/${state.name.common}`} >
                                        <p>{state.name.common}</p>
                                    </Link>
                                </div>
                            )
                        } 
                        return null
                    })}

                </div>
                <div className="letter-category">G</div>
                <div className="first-letter-organizer">
                    {states.map((state, idx) => {
                        
                        if (state.name.common[0] === 'G') {
                            return (
                                
                                <div className="state">
                                    <Link key={idx} to={`/${state.name.common}`} >
                                        <p>{state.name.common}</p>
                                    </Link>
                                </div>
                            )
                        } 
                        return null
                    })}

                </div>
                <div className="letter-category">H</div>
                <div className="first-letter-organizer">
                    {states.map((state, idx) => {
                        
                        if (state.name.common[0] === 'H') {
                            return (
                                
                                <div className="state">
                                    <Link key={idx} to={`/${state.name.common}`} >
                                        <p>{state.name.common}</p>
                                    </Link>
                                </div>
                            )
                        } 
                        return null
                    })}

                </div>
                <div className="letter-category">I</div>
                <div className="first-letter-organizer">
                    {states.map((state, idx) => {
                        
                        if (state.name.common[0] === 'I') {
                            return (
                                
                                <div className="state">
                                    <Link key={idx} to={`/${state.name.common}`} >
                                        <p>{state.name.common}</p>
                                    </Link>
                                </div>
                            )
                        } 
                        return null
                    })}

                </div>
                <div className="letter-category">K</div>
                <div className="first-letter-organizer">
                    {states.map((state, idx) => {
                        
                        if (state.name.common[0] === 'K') {
                            return (
                                
                                <div className="state">
                                    <Link key={idx} to={`/${state.name.common}`} >
                                        <p>{state.name.common}</p>
                                    </Link>
                                </div>
                            )
                        } 
                        return null
                    })}

                </div>
                <div className="letter-category">L</div>
                <div className="first-letter-organizer">
                    {states.map((state, idx) => {
                        
                        if (state.name.common[0] === 'L') {
                            return (
                                
                                <div className="state">
                                    <Link key={idx} to={`/${state.name.common}`} >
                                        <p>{state.name.common}</p>
                                    </Link>
                                </div>
                            )
                        } 
                        return null
                    })}

                </div>
                <div className="letter-category">M</div>
                <div className="first-letter-organizer">
                    {states.map((state, idx) => {
                        
                        if (state.name.common[0] === 'M') {
                            return (
                                
                                <div className="state">
                                    <Link key={idx} to={`/${state.name.common}`} >
                                        <p>{state.name.common}</p>
                                    </Link>
                                </div>
                            )
                        } 
                        return null
                    })}

                </div>
                <div className="letter-category">N</div>
                <div className="first-letter-organizer">
                    {states.map((state, idx) => {
                        
                        if (state.name.common[0] === 'N') {
                            return (
                                
                                <div className="state">
                                    <Link key={idx} to={`/${state.name.common}`} >
                                        <p>{state.name.common}</p>
                                    </Link>
                                </div>
                            )
                        } 
                        return null
                    })}

                </div>
                <div className="letter-category">O</div>
                <div className="first-letter-organizer">
                    {states.map((state, idx) => {
                        
                        if (state.name.common[0] === 'O') {
                            return (
                                
                                <div className="state">
                                    <Link key={idx} to={`/${state.name.common}`} >
                                        <p>{state.name.common}</p>
                                    </Link>
                                </div>
                            )
                        } 
                        return null
                    })}

                </div>
                <div className="letter-category">P</div>
                <div className="first-letter-organizer">
                    {states.map((state, idx) => {
                        
                        if (state.name.common[0] === 'P') {
                            return (
                                
                                <div className="state">
                                    <Link key={idx} to={`/${state.name.common}`} >
                                        <p>{state.name.common}</p>
                                    </Link>
                                </div>
                            )
                        } 
                        return null
                    })}

                </div>
                <div className="letter-category">R</div>
                <div className="first-letter-organizer">
                    {states.map((state, idx) => {
                        
                        if (state.name.common[0] === 'R') {
                            return (
                                
                                <div className="state">
                                    <Link key={idx} to={`/${state.name.common}`} >
                                        <p>{state.name.common}</p>
                                    </Link>
                                </div>
                            )
                        } 
                        return null
                    })}

                </div>
                <div className="letter-category">S</div>
                <div className="first-letter-organizer">
                    {states.map((state, idx) => {
                        
                        if (state.name.common[0] === 'S') {
                            return (
                                
                                <div className="state">
                                    <Link key={idx} to={`/${state.name.common}`} >
                                        <p>{state.name.common}</p>
                                    </Link>
                                </div>
                            )
                        } 
                        return null
                    })}

                </div>
                <div className="letter-category">W</div>
                <div className="first-letter-organizer">
                    {states.map((state, idx) => {
                        
                        if (state.name.common[0] === 'W') {
                            return (
                                
                                <div className="state">
                                    <Link key={idx} to={`/${state.name.common}`} >
                                        <p>{state.name.common}</p>
                                    </Link>
                                </div>
                            )
                        } 
                        return null
                    })}

                </div>
                <div className="letter-category">T</div>
                <div className="first-letter-organizer">
                    {states.map((state, idx) => {
                        
                        if (state.name.common[0] === 'T') {
                            return (
                                
                                <div className="state">
                                    <Link key={idx} to={`/${state.name.common}`} >
                                        <p>{state.name.common}</p>
                                    </Link>
                                </div>
                            )
                        } 
                        return null
                    })}

                </div>
                <div className="letter-category">U</div>
                <div className="first-letter-organizer">
                    {states.map((state, idx) => {
                        
                        if (state.name.common[0] === 'U') {
                            return (
                                
                                <div className="state">
                                    <Link key={idx} to={`/${state.name.common}`} >
                                        <p>{state.name.common}</p>
                                    </Link>
                                </div>
                            )
                        } 
                        return null
                })}

                </div>
                <div className="letter-category">V</div>
                <div className="first-letter-organizer">
                    {states.map((state, idx) => {
                        
                        if (state.name.common[0] === 'V') {
                            return (
                                
                                <div className="state">
                                    <Link key={idx} to={`/${state.name.common}`} >
                                        <p>{state.name.common}</p>
                                    </Link>
                                </div>
                            )
                        } 
                        return null
                })}

                </div>
                <div className="letter-category">W</div>
                <div className="first-letter-organizer">
                    {states.map((state, idx) => {
                        
                        if (state.name.common[0] === 'W') {
                            return (
                                
                                <div className="state">
                                    <Link key={idx} to={`/${state.name.common}`} >
                                        <p>{state.name.common}</p>
                                    </Link>
                                </div>
                            )
                        } 
                        return null
                })}

                </div>
            </div>
        )
    }

    return states ? loaded() : loading()
}

export default stateIndex;