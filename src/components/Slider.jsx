import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { Modal, Box, MobileStepper, Button, Typography, Backdrop } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

function ImageSlider({ images }) {
    const [activeStep, setActiveStep] = useState(0);
    const [openModal, setOpenModal] = useState(false);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep + 1) % images.length);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep - 1 + images.length) % images.length);
    };

    const toggleModal = () => {
        setOpenModal(!openModal);
    };

    const handleClose = () => {
        setOpenModal(false);
    };

    // This function stops propagation when the image is clicked.
    const handleImageClick = (event) => {
        event.stopPropagation();
        toggleModal();
    };

    return (
        <div>
            <SwipeableViews
                axis={'x'}
                index={activeStep}
                onChangeIndex={setActiveStep}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <div key={step.label} style={{ height: 255, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img 
                            src={step.imgPath} 
                            alt={step.label} 
                            style={{ width: '100%', height: '100%', objectFit: 'contain', cursor: 'pointer' }}
                            onClick={handleImageClick} // Manage opening modal here
                        />
                    </div>
                ))}
            </SwipeableViews>
            <MobileStepper
                steps={images.length}
                position="static"
                variant="text"
                activeStep={activeStep}
                nextButton={<Button size="small" onClick={handleNext} disabled={activeStep === images.length - 1}><KeyboardArrowRight /></Button>}
                backButton={<Button size="small" onClick={handleBack} disabled={activeStep === 0}><KeyboardArrowLeft /></Button>}
            />
            <Modal
                open={openModal}
                onClose={handleClose} // This should trigger when clicking away
                closeAfterTransition
                BackdropProps={{
                    style: { backgroundColor: 'rgba(0, 0, 0, 0.5)' }
                }}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Box
                    sx={{ outline: 'none' }}
                    onClick={(e) => e.stopPropagation()} // Stop propagation here to keep the modal open when the box is clicked
                >
                    <img
                        src={images[activeStep].imgPath}
                        alt={images[activeStep].label}
                        style={{ width: '100vw', height: '100vh', objectFit: 'contain' }}
                    />
                </Box>
            </Modal>
        </div>
    );
}

export default ImageSlider;
