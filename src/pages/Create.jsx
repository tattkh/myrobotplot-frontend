import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';

function Create() {
    const [state, setSState] = useState({
        title: '',
        genre: '',
        tone: '',
        characters: [],
        length: 0,
        iterations: 0
    });


    return (
        <>
            <FormControl fullWidth>
                <InputLabel id='genre-select-label'>Genre</InputLabel>
                <Select
                    labelId='genre-select-label'
                    id='genre-select'
                    value={state.genre}
                    label='Genre'

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