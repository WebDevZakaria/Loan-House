"use client"
import * as React from 'react';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';

export default function ControlledOpenSelect() {
    
  const [age, setAge] = useState<string | number>('');
  const [open, setOpen] = useState(false);

  const handleChange = (event: SelectChangeEvent<typeof age>) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className='mx-[70px] mb-28'>
      <Button sx={{ display: 'block', mt: 2 ,ml:3 }} onClick={handleOpen}>
         Select
      </Button>
      <FormControl sx={{ m: 1, minWidth: 170 }}>
        <InputLabel id="demo-controlled-open-select-label">duration</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>6 months</MenuItem>
          <MenuItem value={20}>1 year</MenuItem>
          <MenuItem value={30}>1 year and 6 months</MenuItem>
          <MenuItem value={40}>2 years</MenuItem>
          <MenuItem value={50}>2 year and 6 months</MenuItem>
          <MenuItem value={60}>3 years </MenuItem>

        </Select>
      </FormControl>
    </div>
  );
}