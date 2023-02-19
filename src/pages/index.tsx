import { useState } from "react";
import ModalBox from '@/src/components/blocks/modal/ModalBox'
import WizardModal from "@/src/components/blocks/wizard/WizardModal";
import { Box } from '@mui/system';
import { Container, Typography, Button } from '@mui/material';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  return (
    <Container>
      <Box>
        <Typography variant="h1">Wizard Modal</Typography>
        <Button variant="contained" onClick={handleOpen}>Start</Button>
      </Box>
      <ModalBox
        isOpen={isModalOpen}
        handleClose={handleClose}
      >
        <WizardModal handleClose={handleClose} />
      </ModalBox>
    </Container>
  )
}
