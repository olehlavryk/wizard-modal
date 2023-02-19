import { FC } from 'react';
import { Typography, FormControl, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { Controller, useFormContext } from 'react-hook-form';

const WizardSecondStep:FC = () => {
  const { control, formState: { errors } } = useFormContext();

  return (
    <Box sx={{display:'flex', flexDirection: 'column'}} >
      <Typography variant='h4' sx={{textAlign: 'center'}}>Your address</Typography>
      <Controller
        name="country"
        control={control}
        render={({ field }) => (
          <TextField
            id="country"
            {...field}
            error={!!errors?.country?.message}
            label="Country"
            helperText={errors?.country?.message ? `${errors?.country?.message}` : ''}
            variant="standard"
          />
        )}
      />
      <Controller
        name="city"
        control={control}
        render={({ field }) => (
          <TextField
            id="city"
            {...field}
            error={!!errors?.city?.message}
            label="City"
            helperText={errors?.city?.message ? `${errors?.city?.message}` : ''}
            variant="standard"
          />
        )}
      />
      <Controller
        name="zipCode"
        control={control}
        render={({ field }) => (
          <TextField
            id="zipCode"
            {...field}
            error={!!errors?.zipCode?.message}
            label="zipCode"
            helperText={errors?.zipCode?.message ? `${errors?.zipCode?.message}` : ''}
            variant="standard"
          />
        )}
      />
    </Box>
  )
}

export default WizardSecondStep;