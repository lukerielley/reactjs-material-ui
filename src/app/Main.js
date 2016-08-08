/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import Checkbox from 'material-ui/Checkbox';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoanWizardVerticalStepper from './stepper/LoanWizardVerticalStepper.component.js';
import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import LinearProgress from 'material-ui/LinearProgress';
import Slider from 'material-ui/Slider';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 20,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

const paper_style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class Main extends Component {


  constructor(props, context) {
    super(props, context);

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleChange = (event, index, value) => this.setState({value});

    this.state = {
      open: false,
    };
  }

  state = {
    loanTerm: 50,
    loanAmount: 0
  }

  updateLoanTerm(event, value) {
    this.setState({loanTerm: value});
  }

  updateLoanAmount(event, value) {
    this.setState({loanAmount: value});
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }


  handleTouchTap() {
    this.setState({
      open: true,
    });
  }

  render() {
    const standardActions = (
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>

        <img src="/images/SmallLogo.png" width="200" />

        <Slider 
          style={{
              width: '300px',
              margin: '0 auto'
            }}
          min={3}
          max={10}
          step={1}
          defaultValue={5}
          value={this.state.loanTerm}
          onChange={this.updateLoanTerm.bind(this)}
        />
        <Slider 
          style={{
              width: '300px',
              margin: '0 auto'
            }}
          min={3000}
          max={55000}
          step={100}
          defaultValue={5000}
          value={this.state.loanAmount}
          onChange={this.updateLoanAmount.bind(this)}
        />

        <p>
          <h3>{this.state.loanTerm} Years</h3>
          <h3>${this.state.loanAmount}</h3>
        </p>

        <h1>Loan Repayment Calculator</h1>
        <p>Find out your estimated personal loan repayments as well as ways to pay off your personal loan faster</p>

          <Dialog
            open={this.state.open}
            title="Dialog Title"
            actions={standardActions}
            onRequestClose={this.handleRequestClose}
          >
            <p>This is the dialog content</p>
          </Dialog>


          <Checkbox
            id="checkboxId1"
            name="checkboxName1"
            value="checkboxValue1"
            label="I accept the terms and conditions"
            style={{
              width: '300px',
              margin: '0 auto'
            }}
            iconStyle={{
              fill: '#FF0000'
            }}/>

          <div>
            <DropDownMenu value={this.state.value} onChange={this.handleChange}>
              <MenuItem value={1} primaryText="4.75% - Variable Rate" />
              <MenuItem value={2} primaryText="3.99% - Fixed Rate 1 year" />
              <MenuItem value={3} primaryText="3.75% - Fixed Rate 2 years" />
              <MenuItem value={4} primaryText="3.89% - Fixed Rate 3 years" />
              <MenuItem value={5} primaryText="3.99% - Fixed Rate 4 years" />
            </DropDownMenu>
          </div>

          <LoanWizardVerticalStepper></LoanWizardVerticalStepper>

          <Paper style={paper_style} zDepth={4} circle={true} >
            <CircularProgress
             style={{
              padding: '15px'
            }}
             />
          </Paper>

          <br />
          <LinearProgress mode="indeterminate" />
          <br />

          <RaisedButton
            label="Show Dialog"
            secondary={true}
            onTouchTap={this.handleTouchTap}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
