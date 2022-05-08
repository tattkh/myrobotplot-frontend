import { FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';

function Create() {
    const [state, setState] = useState({
        title: '',
        genre: '',
        tone: '',
        characters: '',
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
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
                spacing={2}
            >
                <TextField
                    required
                    id='title-input'
                    label='Title'
                    name='title'
                    value={state.title}
                    onChange={handleChange}
                />
                <FormControl fullWidth>
                    <InputLabel id='genre-select-label'>Genre</InputLabel>
                    <Select
                        labelId='genre-select-label'
                        id='genre-select'
                        value={state.genre}
                        onChange={handleChange}
                        label='Genre'
                        name='genre'
                        required

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
                <FormControl fullWidth>
                    <InputLabel id='tone-select-label'>Tone</InputLabel>
                    <Select
                        labelId='tone-select-label'
                        id='tone-select'
                        value={state.tone}
                        onChange={handleChange}
                        label='Tone'
                        name='tone'
                        required

                    >
                        <MenuItem value="happy">Happy</MenuItem>
                        <MenuItem value="sad">Sad</MenuItem>
                        <MenuItem value="serious">Serious</MenuItem>
                        <MenuItem value="humorous">Humorous</MenuItem>
                        <MenuItem value="threatening">Threatening</MenuItem>
                        <MenuItem value="pessimistic">Pessimistic</MenuItem>
                        <MenuItem value="optimistic">Optimistic</MenuItem>
                        <MenuItem value="anxious">Anxious</MenuItem>
                        <MenuItem value="depressing">Depressing</MenuItem>
                        <MenuItem value="excited">Excited</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    required
                    id='characters-input'
                    label='Characters'
                    name='characters'
                    value={state.characters}
                    onChange={handleChange}
                />
            </Stack>
        </>
    );
}

export default Create