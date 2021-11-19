
import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { Button, Slider, Select, MenuItem, FormControl, InputLabel, FormHelperText, Typography, Paper } from '@mui/material';

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

const reconciliacao = [
    'Todos',
    'Ordinary Least Squares',
    'Structurally Weighted Least Squares',
    'Variance Weighted Least Squares',
    'Forcasted Proportions',
    'Proportions of Historical Averages',
    'Average Historical Proportions',
    'Bottom-up',
  ];

function DropDownContent(props) {
    const [personName, setPersonName] = React.useState([]);

  const handleChangePerson = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


    return (
        <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-checkbox-label">{props.title}</InputLabel>
            <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={personName}
                onChange={handleChangePerson}
                input={<OutlinedInput label="Técnicas de reconciliação" />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
            >
                {reconciliacao.map((name) => (
                    <MenuItem key={name} value={name}>
                        <Checkbox checked={personName.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default function DropDown() {
    return <DropDownContent />;
}