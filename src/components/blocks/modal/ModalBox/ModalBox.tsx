import { FC, ReactNode, createRef } from 'react';
import { Modal } from '@mui/material';
import ModalContent from '@/src/components/blocks/modal/ModalContent';

interface IModalBoxProps {
  isOpen: boolean,
  handleClose: () => void,
  children: ReactNode
}

const ModalBox:FC<IModalBoxProps> = ({isOpen, handleClose, children}) => {
  const ref = createRef();

  return (
    <Modal
        open={isOpen}
      >
        <ModalContent handleClose={handleClose} ref={ref}>
          {children}
        </ModalContent>
    </Modal>
  )
}

export default ModalBox;