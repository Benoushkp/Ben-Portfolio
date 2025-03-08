import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import '../styles/Button.css'; // Optional: for additional custom styles

// Wrap Material-UI Button with Framer Motion for animations
const MotionButton = motion(MuiButton);

const Button = ({ children, onClick, variant, color, className, sx, ...props }) => {
  const defaultSx = {
    padding: { xs: '8px 16px', sm: '10px 20px', md: '12px 24px' },
    fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
    borderRadius: '50px',
    textTransform: 'none',
  };

  return (
    <MotionButton
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      variant={variant}
      color={color}
      className={`custom-button ${className || ''}`}
      sx={{ ...defaultSx, ...sx }}
      {...props}
    >
      {children}
    </MotionButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  sx: PropTypes.object,
};

Button.defaultProps = {
  variant: 'contained',
  color: 'primary',
  onClick: () => {},
  sx: {},
};

export default Button;
