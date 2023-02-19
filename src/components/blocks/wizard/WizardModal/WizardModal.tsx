import { FC, useState, useEffect, MouseEvent } from 'react';
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { Button, Box } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import WizardFirstStep from '@/src/components/blocks/wizard/WizardFirstStep';
import WizardSecondStep from '@/src/components/blocks/wizard/WizardSecondStep';
import { wizardFormSchema } from '@/src/schemas/wizard';
import { WizardFormData } from '@/src/types/wizard';

const WizardModal:FC<{handleClose: () => void}> = ({handleClose}) => {
  const wizardInitialValues = {
    firstName: '',
    lastName: '',
    country: '',
    city: '',
    zipCode: ''
  }

  const methods = useForm<WizardFormData>({
    defaultValues: wizardInitialValues,
    resolver: yupResolver(wizardFormSchema),
    mode: 'onBlur'
  });

  const { handleSubmit, watch, formState: {errors}, reset } = methods;

  const [firstName, lastName] = watch(['firstName', 'lastName']);
  const [steps, setSteps] = useState([
    {
      key: 0,
      isDone: true,
      component: <WizardFirstStep />
    },
    {
      key: 1,
      isDone: false,
      component: <WizardSecondStep />
    }
  ]);
  const [activeStep, setActiveStep] = useState(steps[0]);
  const [isDisabled, setIsDisabled] = useState(true);
  const isNotFirstStep = steps[0].key !== activeStep.key;
  const hasNextStep = steps[steps.length - 1].key !== activeStep.key;

  useEffect(() => {
    switch (activeStep.key) {
      case 0:
        setIsDisabled(
          (!firstName || !lastName) ||
          (!!errors?.firstName?.message || !!errors?.lastName?.message)
        )
        break;
      case 1:
        // TODO: For more then 2 steps
        break;
      default:
        setIsDisabled(false);
        break;
    }
  },[
    activeStep.key,
    firstName,
    lastName,
    errors?.firstName?.message,
    errors?.lastName?.message
  ]);

  const prevStepHandle = (evt:MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();

    const index = steps.findIndex(x => x.key === activeStep.key);
    if (index === 0) return;

    setSteps(prevStep => prevStep.map(x => {
      if (x.key === activeStep.key) x.isDone = false;
      return x;
    }))
    setActiveStep(steps[index - 1]);
  }

  const nextStepHandle = (evt:MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();

    const index = steps.findIndex(x => x.key === activeStep.key);
    setSteps(prevStep => prevStep.map(x => {
      if (x.key === activeStep.key) x.isDone = true;
      return x;
    }))
    setActiveStep(steps[index + 1]);
  }

  const onSubmit: SubmitHandler<WizardFormData> = (data) => {
    console.log(data);

    reset(wizardInitialValues);
    handleClose();
  };

  return (
    <FormProvider {...methods}>
      <form>
        <Box>
          {activeStep.component}
        </Box>
        <Box sx={{mt: '20px'}}>
          {isNotFirstStep && (
            <Button variant="text" onClick={prevStepHandle}>Back</Button>
          )}
          {
            hasNextStep ? (
              <Button
                variant="contained"
                onClick={nextStepHandle}
                disabled={isDisabled}
              >
                Next
              </Button>
            ) : (
              <Button
                type="submit"
                variant="contained"
                onClick={handleSubmit(onSubmit)}
              >
                Finish
              </Button>
            )
          }
        </Box>
      </form>
    </FormProvider>
  )
}

export default WizardModal;