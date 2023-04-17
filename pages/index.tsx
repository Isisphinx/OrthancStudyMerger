// HorizontalStepper.js
import React, { useState } from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Paper,
  Grid,
} from "@mui/material";

const steps = ["Source", "Target", "Merge", "Result"];

const HorizontalStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={1}
        sx={{
          padding: 2,
          minWidth: "50%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {/* Add your content related to each step */}
        <Box sx={{ flexGrow: 1, marginTop: 2 }}>
          {activeStep === steps.length ? (
            <div>
              {/* Add your final step content */}
              <h1>All steps completed</h1>
            </div>
          ) : (
            <div>
              {/* Add your content based on the active step */}
              <h1>{steps[activeStep]}</h1>
              <Grid container justifyContent="space-between">
                <Button
                  variant="outlined"
                  color="primary"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  disabled={activeStep === steps.length - 1}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </Grid>
            </div>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default HorizontalStepper;
