import * as React from 'react';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Button, Slider, Select, MenuItem, FormControl, InputLabel, FormHelperText, Typography, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import OutlinedInput from '@mui/material/OutlinedInput';


import ListItemText from '@mui/material/ListItemText';

import Checkbox from '@mui/material/Checkbox';
import DropDown from './DropDown';

const useStyles = makeStyles((theme) => ({
    labelSliders: {
        marginTop: "15px"
    },
}));

function valuetext(value) {
    return `${value}`;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const preProcessing = [
    'Todos',
    'Normalização',
    'Modelagem de feriados',
    'Adição de variáveis exógenas'
]

const models = [
    'Todos',
    'Auto-Arima',
    'Amortecimento Exponencial',
    'Prophet'
]

const reconciliation = [
    'Todos',
    'Ordinary Least Squares',
    'Structurally Weighted Least Squares',
    'Variance Weighted Least Squares',
    'Forcasted Proportions',
    'Proportions of Historical Averages',
    'Average Historical Proportions',
    'Bottom-up',
];

function ActionsContent() {
    const classes = useStyles();

    const [value, setValue] = React.useState([2011, 2012]);
    const [valuePercent, setValuePercent] = React.useState(80);
    const [valueForecast, setValueForecast] = React.useState(28);
    const [age, setAge] = React.useState('');

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue);
    };

    const handleChangePercent = (event, newValue) => {
        setValuePercent(newValue)
    };

    const handleChangeForecast = (event, newValue) => {
        setValueForecast(newValue)
    };

    const handleChangeProcess = (event) => {
        setAge(event.target.value);
    };
    const [reconciliationOptions, setReconciliationOptions] = React.useState([]);

    const handleChangeReconciliation = (event) => {
        const {
            target: { value },
        } = event;
        setReconciliationOptions(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const [modelOptions, setModelOptions] = React.useState([]);

    const handleChangeModel = (event) => {
        const {
            target: { value },
        } = event;
        setModelOptions(
            typeof value === 'string' ? value.split(',') : value,
        );
    };


    const [preProcessingOptions, setPreProcessingOptions] = React.useState([]);

    const handleChangePreProcessing = (event) => {
        const {
            target: { value },
        } = event;
        setPreProcessingOptions(
            typeof value === 'string' ? value.split(',') : value,
        );
    };


    return (
        <Paper
            sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Button variant="outlined" size="small" startIcon={<FileDownloadIcon />} padding="10px">
                Importação dos dados
            </Button>
            <Typography variant="subtitle2" gutterBottom className={classes.labelSliders}>
                Recorte de dados temporais: {value[0] + " - " + value[1]}
            </Typography>
            <Slider
                getAriaLabel={() => 'Time range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                marks
                size="small"
                min={2010}
                max={2017}
            />
            <Typography variant="subtitle2" gutterBottom className={classes.labelSliders}>
                Percentual de Treinamento: {valuePercent + "%"}
            </Typography>
            <Slider
                getAriaLabel={() => 'Train percent'}
                value={valuePercent}
                onChange={handleChangePercent}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                step={10}
                size="small"
                marks
            // valueLabelDisplay="on"
            />
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-checkbox-label">Pré-processamento de dados</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={preProcessingOptions}
                    onChange={handleChangePreProcessing}
                    input={<OutlinedInput label="Pré-processamento de dados" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                    {preProcessing.map((name) => (
                        <MenuItem key={name} value={name}>
                            <Checkbox checked={preProcessingOptions.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-checkbox-label">Seleção de modelos</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={modelOptions}
                    onChange={handleChangeModel}
                    input={<OutlinedInput label="Seleção de modelos" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                    {models.map((name) => (
                        <MenuItem key={name} value={name}>
                            <Checkbox checked={modelOptions.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-checkbox-label">Técnicas de reconciliação</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={reconciliationOptions}
                    onChange={handleChangeReconciliation}
                    input={<OutlinedInput label="Técnicas de reconciliação" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                    {reconciliation.map((name) => (
                        <MenuItem key={name} value={name}>
                            <Checkbox checked={reconciliationOptions.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Typography variant="subtitle2" gutterBottom className={classes.labelSliders}>
                Números de dias para previsão: {valueForecast}
            </Typography>
            <Slider
                getAriaLabel={() => 'Forecast days'}
                value={valueForecast}
                onChange={handleChangeForecast}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                step={1}
                size="small"
                marks
                min={1}
                max={28}
            // valueLabelDisplay="on"
            />
        </Paper>
    );
}

export default function Actions() {
    return <ActionsContent />;
}