import React, { useState } from 'react';
import {
    Grid, Paper, Radio, Typography, FormControl, FormControlLabel, FormLabel, RadioGroup,
    TableBody, TableRow, TableCell, TableContainer, Table, TableHead, Divider, Button, Container
} from '@mui/material';
import TreeChart from '../components/TreeChart';
import LineChart3 from '../components/LineChart3';
import BarChart from '../components/BarChart';
import BarChartLabelRMSE from '../components/BarChartLabelRMSE';
import BarChartLabelMAPE from '../components/BarChartLabelMAPE';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
<<<<<<< HEAD
//import makeStyles from '@mui/core/styles'; //novo
//import datalc from '../components/data/data_lineChart.json'
//import datalc from '../components/data/result2.json'
//import datalc from '../components/data/new_result.json'
import datalc from '../components/data/new_result_ca_tx.json'
import { ClassNames } from '@emotion/react';

=======
import datalc from '../components/data/data_lineChart.json';
// import barJson from '../components/data/grafBarError.json';
>>>>>>> c7a2ca3b0c682fe8e8e9e9a348cbdacc864147de

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
        align: 'right',
    },
    {
        id: 'treinamento',
        label: '% Treinamento',
        align: 'right',
    },
    {
        id: 'processamento',
        label: 'Pré-processamento',
        align: 'right',
    },
    {
        id: 'previsao',
        label: 'Dias Previsão',
        align: 'right',
    },
    {
        id: 'rmse',
        label: 'RMSE',
        align: 'right',
    },
    {
        id: 'mape',
        label: 'MAPE',
        align: 'right',
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
//para pegar as lojas
    const stores = datalc.nivel
    const recorte = datalc.recorte        
    const storeList = stores.map(function(item){
            return (
                //<div style={{weight:300,height:450}}> 
                <LineChart3 
                    nomeloja={item.name}
                    valuesloja={item.values}
                    recorte={recorte}
                /> 
                //</div>                                  
            )           
        }
        );


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
                            {/* <LineChart3 />
                            <LineChart2 /> */}
                            {
                                storeList
                            }

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
                        {/* <Grid item xs={12} md={5} lg={4}>

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
                        </Grid> */}
                        <Grid item xs={12} md={12} lg={12}>
                            <BarChartLabelRMSE  />
                            <BarChartLabelMAPE  />
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
                            <Typography style={{color: "#686868"}}>MODELOS SELECIONADOS</Typography>
                            <Divider />
                            <TableContainer sx={{ maxHeight: 440 }}>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            {columns.map((column) => (
                                                <TableCell
                                                    key={column.id}
                                                    align={column.align}
                                                    style={{ minWidth: column.minWidth, fontWeight:"bold" }}
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