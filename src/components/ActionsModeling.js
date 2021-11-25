import * as React from 'react';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Button, Select, MenuItem, FormControl, InputLabel, Typography, Paper, Grid, Box, FormControlLabel, Zoom, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import TreeChart from './TreeChart';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';

const useStyles = makeStyles((theme) => ({
    button: {
        width: "300px",
        alignSelf: "center"
    },
    treeChart: {
        marginTop: "15px",
        marginLeft: "10px",
    }
}));



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

function ActionsModelingContent() {
    const classes = useStyles();

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

    const [onclick, setOnclick] = React.useState(false);

    const handleChange = () => {
        console.log("Aqui");
        setOnclick((prev) => !prev);
        const height = this.imgRef.current.clientHeight
        const width = this.imgRef.current.clientWidth
        console.log(height);

        // Increase dimension(Zooming)
        this.setState({
            height: height + 10,
            width: width + 10,
        })
    };

    return (
        <Paper
            sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
            }}
            elevation={4}
        >
            {/* <Button variant="outlined" size="small" className={classes.button} >
                Importação dos dados
            </Button> */}
            <TextField sx={{ m: 1, width: 300 }}
                disabled
                id="filled-disabled"
                label="Importação dos dados"
                defaultValue="Arquivo.json"
                variant="filled"
            />
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
            <Grid item className={classes.treeChart}>
                <Box sx={{ display: 'flex' }}>
                    <Typography>Análise da Hierarquia</Typography>
                    {/* <FormControlLabel
                        control={<ZoomOutMapIcon onClick={handleChange} />}
                        label=""
                    /> */}
                </Box>
                <Zoom in={onclick}>
                    <TreeChart />
                </Zoom>
            </Grid>
        </Paper>
    );
}

export default function ActionsModeling() {
    return <ActionsModelingContent />;
}