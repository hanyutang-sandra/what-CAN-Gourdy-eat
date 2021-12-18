import React from 'react';
import { Button, Container, Card, CardContent, CardActions, CardMedia, Typography, Stack } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';

const levelToColor = {
    0: "#4caf50",
    1: "#ffeb3b",
    2: "#ff9800",
    3: "#f44336"
}

function ResultCard({data, result, image}) {
    return (
        <Container>
            <Card
                sx={{marginLeft: 'auto', marginRight: 'auto'}}
                maxwidth="md"
            >
                <CardMedia component="img" height="200" image={image.link} src={result.name}></CardMedia>
                <CardContent>
                    <Typography variant="h4" gutterBottom>{result}</Typography>
                    <Typography variant="subtitle2" sx={{color: 'gray'}} gutterBottom>{data[result]["type"]}</Typography>
                    <Stack direction='row' spacing={0.5}>
                        <PetsIcon sx={{color: levelToColor[data[result]["level"]]}}/>
                        <Typography>{data[result]["details"][0].toUpperCase() + data[result]["details"].substring(1)}</Typography>
                    </Stack>
                </CardContent>
                <CardActions>
                    <Button>What's that</Button>
                </CardActions>
          </Card>
        </Container>
    )
}

export default ResultCard