import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Slider from 'material-ui/Slider';

import LoanTermComponent from '../components/loanterm.component.js';

class LoanWizardVerticalStepper extends React.Component {

  state = {
    finished: false,
    stepIndex: 0,
  };


  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  renderStepActions(step) {
    const {stepIndex} = this.state;

    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label={stepIndex === 2 ? 'Finish' : 'Next'}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onTouchTap={this.handleNext}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onTouchTap={this.handlePrev}
          />
        )}
      </div>
    );
  }

  render() {
    const {finished, stepIndex} = this.state;

    return (
      <div style={{maxWidth: 380, margin: 'auto'}}>

        <Stepper activeStep={stepIndex} orientation="vertical">

          <Step>
            <StepLabel>Your income</StepLabel>
            <StepContent>

              <h3>Number of applicants</h3>
              <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                  <MenuItem value={1} primaryText="1" />
                  <MenuItem value={2} primaryText="2" />
                </DropDownMenu>

              <h3>Salary:</h3>
              <DropDownMenu>
                  <MenuItem value={1} primaryText="Before tax" />
                  <MenuItem value={2} primaryText="After tax" />
                </DropDownMenu>
                <TextField hintText="$" style={{width: 150}} />
                <DropDownMenu>
                  <MenuItem value={1} primaryText="Week" />
                  <MenuItem value={2} primaryText="Fortnight" />
                  <MenuItem value={3} primaryText="Month" />
                  <MenuItem value={4} primaryText="Year" />
                </DropDownMenu>
                
                

              {this.renderStepActions(0)}
            </StepContent>
          </Step>
          
          <Step>
            <StepLabel>Your commitments</StepLabel>
            <StepContent>
              
              <h3>Rent/Mortgage</h3>
              <TextField hintText="$" /><span>per month</span>

              <h3>Loan repayments</h3>
              <TextField hintText="$" /><span>per month</span>

              <h3>Credit card limit/s</h3>
              <TextField hintText="$" /><span>total</span>

              <h3>Living expenses</h3>
              <TextField hintText="$" /><span>per month</span>

              {this.renderStepActions(1)}
            </StepContent>
          </Step>


          <Step>
            <StepLabel>Loan details</StepLabel>
            <StepContent>

              <h3>Type of loan</h3>
              <DropDownMenu>
                  <MenuItem value={1} primaryText="Variable Rate" />
                  <MenuItem value={2} primaryText="Fixed Rate" />
                  <MenuItem value={3} primaryText="Secure Car" />
                </DropDownMenu>

              <LoanTermComponent></LoanTermComponent>

              <h3>How often would you like to make your repayments?</h3>
              <DropDownMenu>
                  <MenuItem value={1} primaryText="Weekly" />
                  <MenuItem value={2} primaryText="Fortnightly" />
                  <MenuItem value={3} primaryText="Secure Car" />
                </DropDownMenu>

              {this.renderStepActions(2)}
            </StepContent>
          </Step>

        </Stepper>
        {finished && (
          <p style={{margin: '20px 0', textAlign: 'center'}}>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                this.setState({stepIndex: 0, finished: false});
              }}
            >
              Click here
            </a> to start again.
          </p>
        )}
      </div>
    );
  }
}

export default LoanWizardVerticalStepper;