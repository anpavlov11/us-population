import { useState, useEffect } from 'react';

function App() {
    const [name, setName] = useState([]);
    useEffect(() => {
        names()
    }, [])
    const names = async () => {
        const res = await fetch('https://api.census.gov/data/2019/pep/charagegroups?get=NAME,POP&for=state:01&key=2c4b15293556d37fedd431599362146b8e6e0f7e');
        setName(await res.json())
    }
    return (
        <label>
            <h3> {data.name} </h3>
            <ul className = 'State'>
                {name.map((data) => {
                    return (
                        <li className = 'State Demographics' key = {data.pop}> {data.name} </li>
                    ) 
                })}
            </ul>
        </label>
    );
}