/* eslint-disable react/display-name */
import { FC, ReactNode, ForwardedRef, forwardRef } from 'react'
import { styled } from '@mui/material/styles';
import { Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ModalContentStyled = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: theme.palette.background.paper,
  borderRadius: 10,
  boxShadow: '1px 25px 45px -28px rgba(0,0,0,0.75)'
}));

const ModalBoxStyled = styled(Box) ({
  position: 'relative',
  padding: '30px 20px 30px'
});

const IconButtonStyled = styled(IconButton) ({
  position: 'absolute',
  top: 0,
  right: 0
});

interface IModalContentProps {
  handleClose: () => void,
  ref: ForwardedRef<unknown>
  children: ReactNode,
}

const ModalContent:FC<IModalContentProps> = forwardRef((props, ref) => {
  const {handleClose, children} = props;

  return(
    <ModalContentStyled ref={ref} tabIndex={-1}>
      <ModalBoxStyled>
        <IconButtonStyled onClick={handleClose}>
          <CloseIcon />
        </IconButtonStyled>
        {children}
      </ModalBoxStyled>
    </ModalContentStyled>
  )
})


export default ModalContent;