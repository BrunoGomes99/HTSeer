import React from 'react';
import { Container, Grid, Paper, Typography, Divider, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import ActionsModeling from '../components/ActionsModeling';

const columns = [
    { id: 'modeloTecnica', label: 'Modelo/Técnica',  align: 'left' },
    { id: 'autoArima', label: 'Auto-Arima', align: 'left' },
    { id: 'amortecimento', label: 'Amortecimento Exponencial', align: 'left' },
    { id: 'prophet', label: 'Prophet', align: 'left' },
];

function createData(modeloTecnica, autoArima, amortecimento, prophet) {
    return { modeloTecnica, autoArima, amortecimento, prophet };
}

const rows = [
    createData('OLS', 0.96, 0.96, 0.96),
    createData('SWLS', 0.89, 0.89, 0.85),
    createData('FP', 0.96, 0.96, 0.89),
    createData('BU', 0.96, 0.96, 0.85),
];

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
                        elevation={4}
                    >
                        <Grid item xs={8} md={4} lg={4}>
                            <Typography>Métricas de Avaliação</Typography>
                        </Grid>
                        {/* <Grid item xs={4} md={3} lg={4}>
                            <Button variant="outlined" size="small" padding="10px">
                                Ver modelos ajustados
                            </Button>
                        </Grid> */}
                        <Grid container spacing={3} maxWidth="lg" direction={"row"} style={{marginTop: "15px"}}>
                            <Grid item xs={12}>
                                <Typography style={{color: "#686868"}}>RMSE</Typography>
                                <Divider />
                                <TableContainer sx={{ maxHeight: 440 }}>
                                    <Table stickyHeader aria-label="sticky table">
                                        <TableHead>
                                            <TableRow>
                                                {columns.map((column) => (
                                                    <TableCell
                                                        key={column.id}
                                                        align={column.align}
                                                        style={{ minWidth: column.minWidth, fontWeight: "bold", color: column.id === "modeloTecnica" ? "#006298" : "#000"}}
                                                    >
                                                        {column.label}
                                                    </TableCell>
                                                ))}
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows
                                                // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                .map((row) => {
                                                    return (
                                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                            {columns.map((column) => {
                                                                const value = row[column.id];
                                                                console.log(column.format)
                                                                return (
                                                                    <TableCell key={column.id} align={column.align} style={{fontWeight: column.id === "modeloTecnica" ?  "bold" : "" }}>
                                                                        {column.format && typeof value === 'number'
                                                                            ? column.format(value)
                                                                            : value}
                                                                        
                                                                    </TableCell>
                                                                );
                                                            })}
                                                        </TableRow>
                                                    );
                                                })}
                                        </TableBody>
                                    </Table>
                                </TableContainer>


                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}