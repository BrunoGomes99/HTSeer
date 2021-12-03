import React, { useState } from 'react';
import {
    Grid, Paper, Radio, Typography, FormControl, FormControlLabel, FormLabel, RadioGroup,
    TableBody, TableRow, TableCell, TableContainer, Table, TableHead, Divider, Button, Container
} from '@mui/material';
import TreeChart from '../components/TreeChart';
import LineChart from '../components/LineChart';
import LineChart2 from '../components/LineChart2';
import BarChart from '../components/BarChart';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const reconciliation = [
    'Ordinary Least Squares',
    'Structurally Weighted Least Squares',
    'Variance Weighted Least Squares',
    'Forcasted Proportions',
    'Proportions of Historical Averages',
    'Average Historical Proportions',
    'Bottom-up',
];

const errorMetrics = [
    'RMSE',
    'MAPE',
];

const columns = [
    { id: 'modelo', label: 'Modelo', minWidth: 170 },
    { id: 'tecnica', label: 'Técnica', minWidth: 100 },
    {
        id: 'recorte',
        label: 'Recorte Temporal',
        //   minWidth: 170,
        align: 'right',
        //   format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'treinamento',
        label: '% Treinamento',
        //   minWidth: 170,
        align: 'right',
        //   format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'processamento',
        label: 'Pré-processamento',
        //   minWidth: 170,
        align: 'right',
        //   format: (value) => value.toFixed(2),
    },
    {
        id: 'previsao',
        label: 'Dias Previsão',
        //   minWidth: 170,
        align: 'right',
        //   format: (value) => value.toFixed(2),
    },
    {
        id: 'rmse',
        label: 'RMSE',
        // minWidth: 170,
        align: 'right',
        //   format: (value) => value.toFixed(2),
    },
    {
        id: 'mape',
        label: 'MAPE',
        // minWidth: 170,
        align: 'right',
        //   format: (value) => value.toFixed(2),
    },
];

function createData(modelo, tecnica, recorte, treinamento, processamento, previsao, rmse, mape) {
    // const density = population / size;
    return { modelo, tecnica, recorte, treinamento, processamento, previsao, rmse, mape };
}

const rows = [
    createData('Auto-Arima', 'FP', '03/2017 - 09/2018', '70%', 'Normalização', 28, 0.96, 0.96),
    createData('Amortecimento', 'SWLS', '03/2017 - 09/2018', '82%', '-', 15, 0.89, 0.89),
    createData('Amortecimento', 'FP', '03/2017 - 09/2018', '65%', '-', 5, 0.96, 0.96),
];

export default function Report() {
    const [valueReconciliation, setValueReconciliation] = useState("Ordinary Least Squares");

    const handleChangeReconciliation = (event, valueReconciliation) => {
        setValueReconciliation(valueReconciliation)
    };

    const [valueErrorMetrics, setValueErrorMetrics] = useState("RMSE");

    const handleChangeErrorMetrics = (event, valueErrorMetrics) => {
        setValueErrorMetrics(valueErrorMetrics)
    };


    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Paper
                sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                }}
                elevation={4}
            >
                <Typography style={{ marginBottom: "15px" }}>Visualização dos ajustes dos modelos com a série original</Typography>
                <Grid container spacing={3} maxWidth="lg" direction={"row"}>

                    <Grid item xs={12} md={5} lg={4}>

                        <Paper
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                            elevation={4}
                        >
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Técnicas de Reconciliação</FormLabel>
                                <RadioGroup
                                    aria-label="técnicas de reconciliação"
                                    name="radio-buttons-group"
                                    value={valueReconciliation}
                                    onChange={handleChangeReconciliation}

                                >
                                    {reconciliation.map((name) => (
                                        <FormControlLabel value={name} control={<Radio />} label={name} size="small" />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                            <TreeChart />
                        </Paper>
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
                            <LineChart />
                            <LineChart2 />
                            <LineChart2 />

                        </Paper>
                    </Grid>

                </Grid>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        marginTop: '15px'
                    }}
                    elevation={4}
                >
                    <Typography style={{ marginBottom: "15px" }}>Comparação entre métricas e modelos</Typography>
                    <Grid container spacing={3} maxWidth="lg" direction={"row"}>
                        <Grid item xs={12} md={5} lg={4}>

                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                                elevation={4}
                            >
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Métricas de Erro</FormLabel>
                                    <RadioGroup
                                        aria-label="técnicas de reconciliação"
                                        name="radio-buttons-group"
                                        value={valueErrorMetrics}
                                        onChange={handleChangeErrorMetrics}

                                    >
                                        {errorMetrics.map((name) => (
                                            <FormControlLabel value={name} control={<Radio />} label={name} size="small" />
                                        ))}
                                    </RadioGroup>
                                </FormControl>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={7} lg={8}>
                            <BarChart />
                        </Grid>
                    </Grid>
                </Paper>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        marginTop: '15px'
                    }}
                    elevation={4}
                >
                    {/* <Typography style={{ marginBottom: "15px" }}>Comparação entre métricas e modelos</Typography> */}
                    <Grid container spacing={3} maxWidth="lg" direction={"row"}>
                        <Grid item xs={12}>
                            <Typography>Modelos Selecionados</Typography>
                            <Divider />
                            <TableContainer sx={{ maxHeight: 440 }}>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            {columns.map((column) => (
                                                <TableCell
                                                    key={column.id}
                                                    align={column.align}
                                                    style={{ minWidth: column.minWidth }}
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
                                                            return (
                                                                <TableCell key={column.id} align={column.align}>
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
            </Paper>
            <Grid item xs={12} textAlign={"end"} style={{ marginTop: "15px" }}>
                <Button variant="contained" startIcon={<ArrowRightIcon />} >
                    Fazer previsão
                </Button>
            </Grid>
        </Container>
    )
}