import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

import axios from 'axios';

import { useForm, SubmitHandler } from "react-hook-form";

import { Song } from "../../models/song"
import { useState } from 'react';

type Inputs = {
    searchText: string,
};


const Searchbar = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

    const [error, setError] = useState("");

    const onSubmit: SubmitHandler<Inputs> = data => {
        console.log(data);
        fetchData(data.searchText);
    }


    const fetchData = (query: string) => {
        axios
            .get<Song[]>(`https://itunes.apple.com/search?term=${query}&entity=song`)
            .then(response => {
                console.log(`risultati per ${query}: `, response.data)
                //setBeers(response.data);

            }).catch(ex => {
                const error =
                    ex.response.status === 404
                        ? "404"
                        : "Errore generico";
                setError(error);
            });
    }



    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>


            <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField id="input-with-sx" label="Cerca un qualcosa" variant="standard" {...register("searchText")} />


                    <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                </form>

            </Box>

        </Box>
    );
}

export default Searchbar;