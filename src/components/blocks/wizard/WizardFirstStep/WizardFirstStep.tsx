import { FC } from 'react';
import { Typography, FormControl, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { Controller, useFormContext } from 'react-hook-form';

const WizardFirstStep:FC = () => {
  const { control, formState: { errors } } = useFormContext();

  return (
    <Box sx={{display:'flex', flexDirection: 'column'}} >
      <Typography variant='h4' sx={{textAlign: 'center'}}>About you</Typography>
      <Controller
        name="firstName"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <FormControl variant="standard">
            <TextField
              id="first-name"
              {...field}
              error={!!errors?.firstName?.message}
              label="First name"
              helperText={errors?.firstName?.message ? `${errors?.firstName?.message}` : ''}
              variant="standard"
            />
          </FormControl>
        )}
      />

      <Controller
        name="lastName"
        control={control}
        render={({ field }) => (
          <FormControl variant="standard">
            <TextField
                id="last-name"
                {...field}
                error={!!errors?.lastName?.message}
                label="Last name"
                helperText={errors?.lastName?.message ? `${errors?.lastName?.message}` : ''}
                variant="standard"
              />
          </FormControl>
        )}
      />
    </Box>
  )
}

export default WizardFirstStep;