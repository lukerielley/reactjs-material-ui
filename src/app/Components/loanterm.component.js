import React, {Component} from 'react'
import Slider from 'material-ui/Slider';

class LoanTermComponent extends Component {

 constructor(props, context) {
    super(props, context);
      this.handleChange = (event, index, value) => this.setState({value});
  }

  state = {
    loanTerm: 5
  }

  updateLoanTerm(event, value) {
    this.setState({loanTerm: value});
  }

    render () {
        return (
            <div>
                <h3>Loan term: {this.state.loanTerm} Years</h3>
                <Slider 
                    style={{
                        width: '300px',
                        margin: '0 auto'
                        }}
                    min={3}
                    max={10}
                    step={1}
                    value={this.state.loanTerm}
                    onChange={this.updateLoanTerm.bind(this)}
                    />
            </div>
        )
    }
}

export default LoanTermComponent