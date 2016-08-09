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
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import HeaderComponent from './Components/header.component.js';
import FooterComponent from './Components/footer.component.js';

const styles = {
  container: {
    textAlign: 'center'
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

        <AppBar
          title="Loans and Borrowing"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />

        <div className="pageContent">

              <h1>How much can I borrow?</h1>
              <p>Find out your estimated personal loan repayments as well as ways to pay off your personal loan faster</p>
              
              <LoanWizardVerticalStepper></LoanWizardVerticalStepper>

              <h1>Loan Repayment Calculator</h1>
              <p>Estimate how much you can borrow and how much the repayments will be at the current interest rate.</p>
              
              
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
                
              </div>

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

          <FooterComponent></FooterComponent>

        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
