import React from 'react';
import {connect} from 'react-redux';
import {renderIf} from '../../../lib/utils.js';
import ExpenseForm from '../expense-form/expense-form';
import {expenseUpdate} from '../../../actions/expense-actions';
import {expenseDelete} from '../../../actions/expense-actions';

class expenseItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      expense: this.props.expense ? this.props.expense : undefined,
      updating: false,
    };
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleDoubleClick () {
    this.setState({updating: !this.state.updating});
  }

  handleOnClick () {
    this.props.itemExpenseDelete(this.state);
  }
  render(){
    return(
      <section >
        <h4 onDoubleClick={this.handleDoubleClick}>expense: {this.props.expense.title}</h4>
        <div onDoubleClick={this.handleDoubleClick}>Budget: ${this.props.expense.budget}</div>
        <button onClick={this.handleOnClick}>delete</button>
        {renderIf(this.state.updating,
          <expenseForm
            expense={this.props.expense}
            buttonText='update'
            onComplete={this.props.itemExpenseUpdate}/>
        )}
      </section>
    );
  }
}
const mapStateToProps = state => ({
  categories: state,
});

const mapDispatchToProps = (dispatch, getState) => ({
  itemExpenseUpdate: expense => dispatch(expenseUpdate(expense)),
  itemExpenseDelete: expense => dispatch(expenseDelete(expense)),
});

//export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
