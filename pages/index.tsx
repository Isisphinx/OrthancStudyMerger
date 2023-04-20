// pages/index.tsx
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
import {
  SourceStep,
  TargetStep,
  MergeStep,
  ResultStep,
} from "../components/steps/Steps";

const steps = [
  { label: "Source", component: <SourceStep /> },
  { label: "Target", component: <TargetStep /> },
  { label: "Merge", component: <MergeStep /> },
  { label: "Result", component: <ResultStep /> },
];

const HorizontalStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  type StepActions = {
    [key in typeof steps[number]["label"]]: () => void;
  };

  const handleNext = () => {
    const actions: StepActions = {
      "Source": () => console.log("Source step next action"),
      "Target": () => console.log("Target step next action"),
      "Merge": () => console.log("Merge step next action"),
      "Result": () => console.log("Result step next action"),
    };

    const stepName = steps[activeStep].label;
    actions[stepName]();
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
          {steps.map((step) => (
            <Step key={step.label}>
              <StepLabel>{step.label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {/* Add your content related to each step */}
        <Box sx={{ flexGrow: 1, marginTop: 2 }}>
          {steps[activeStep].component}
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
        </Box>
      </Paper>
    </Box>
  );
};

export default HorizontalStepper;
