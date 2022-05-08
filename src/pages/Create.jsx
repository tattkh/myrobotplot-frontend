import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useEffect, useState } from 'react';

function Create() {
    const [state, setState] = useState({
        title: '',
        genre: '',
        tone: '',
        characters: [],
        length: 0,
        iterations: 0
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    useEffect(() => {
        console.log(state);
    }, [state]);


    return (
        <>
            <FormControl fullWidth>
                <InputLabel id='genre-select-label'>Genre</InputLabel>
                <Select
                    labelId='genre-select-label'
                    id='genre-select'
                    value={state.genre}
                    onChange={handleChange}
                    label='Genre'
                    name='genre'

                >
                    <MenuItem value="action">Action</MenuItem>
                    <MenuItem value="comedy">Comedy</MenuItem>
                    <MenuItem value="drama">Drama</MenuItem>
                    <MenuItem value="fantasy">Fantasy</MenuItem>
                    <MenuItem value="horror">Horror</MenuItem>
                    <MenuItem value="mystery">Mystery</MenuItem>
                    <MenuItem value="romance">Romance</MenuItem>
                    <MenuItem value="thriller">Thriller</MenuItem>
                    <MenuItem value="western">Western</MenuItem>
                </Select>
            </FormControl> 
        </>
    );
}

export default Create