import React from 'react';
import { Container, Grid, Paper, Typography, Button } from '@mui/material';
import ActionsModeling from '../components/ActionsModeling';
import TreeChart from '../components/TreeChart';

export default function Modeling() {
    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={5} lg={4}>
                    <ActionsModeling />
                </Grid>
                <Grid item xs={12} md={7} lg={8}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                        elevation= {4}
                    >
                        <Grid item xs={8} md={4} lg={4}>
                            <Typography>Métricas de Avaliação</Typography>
                        </Grid>
                        {/* <Grid item xs={4} md={3} lg={4}>
                            <Button variant="outlined" size="small" padding="10px">
                                Ver modelos ajustados
                            </Button>
                        </Grid> */}
                    </Paper> 
                    </Grid>
            </Grid>
        </Container>
    )
}