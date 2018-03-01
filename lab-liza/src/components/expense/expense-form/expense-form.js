import React from 'react';
import {renderIf} from '../../../lib/utils';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.expense
      ? this.props.expense
      : {
        name: '',
        price: 0,
        catId: this.props.catId,
      };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);
    this.setState({name: '', price: 0});
  }

  render() {
    return  (
      <form className="expense-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="expense name"/>

        <input
          type="number"
          name="price"
          value={this.state.price}
          onChange={this.handleChange}
          placeholder="expense price"/>

        <button type="submit">{this.props.buttonText}</button>
      </form>
    );
  }
}

export default ExpenseForm;
