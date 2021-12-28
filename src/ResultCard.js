import React from 'react';
import { Container, Card, CardContent, Typography, Stack } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';

const levelToColor = {
    0: "#4caf50",
    1: "#ffeb3b",
    2: "#ff9800",
    3: "#f44336"
}

function ResultCard({data, result}) {
    return (
        <Container>
            <Card
                sx={{marginLeft: 'auto', marginRight: 'auto'}}
                maxwidth="md"
            >
                <CardContent>
                    <Typography variant="h4" gutterBottom>{result}</Typography>
                    <Typography variant="subtitle2" sx={{color: 'gray'}} gutterBottom>{data[result]["type"]}</Typography>
                    <Stack direction='row' spacing={0.5} alignItems="flex-end">
                        <PetsIcon sx={{color: levelToColor[data[result]["level"]]}}/>
                        <Typography sx={{lineHeight: 1}}>{data[result]["details"][0].toUpperCase() + data[result]["details"].substring(1)}</Typography>
                    </Stack>
                </CardContent>
          </Card>
        </Container>
    )
}

export default ResultCard