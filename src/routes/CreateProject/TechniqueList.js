import { Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const TechniqueList = ({ state, errorMessage }) => {

    const [techniques, setTechniques] = state

    const handleClick = (e) => {
        setTechniques(prevState => ([
            ...prevState.filter(x => x.value !== e.target.name),
            {
                ...prevState.find(x => x.value === e.target.name),
                selected: e.target.checked
            }
        ]))

    }

    return (
        <Box>
            <FormControl
                error={errorMessage}
            >
                <FormLabel>Choose study techniques</FormLabel>
                <FormGroup>
                    {techniques.map((x) => (
                        <FormControlLabel control={
                            <Checkbox checked={x.selected} name={x.value} onChange={handleClick} />
                        }
                            label={x.name}
                        />
                    ))}
                </FormGroup>
                <FormHelperText>{errorMessage}</FormHelperText>
            </FormControl>
        </Box>
    );
}

export default TechniqueList;