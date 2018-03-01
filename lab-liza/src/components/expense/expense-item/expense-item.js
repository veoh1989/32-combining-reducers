import React from 'react';
import {connect} from 'react-redux';
import {renderIf} from '../../../lib/utils.js';
import ExpenseForm from '../expense-form/expense-form';
import {expenseUpdate, expenseDelete} from '../../../actions/expense-actions';

class ExpenseItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      updating: false,
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleEditComplete = this.handleEditComplete.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleEdit () {
    this.setState({editing: !this.state.editing});
  }

  handleEditComplete (state) {
    this.props.expenseUpdateExpense(state);
    this.setState({editing: false});
  }

  handleDelete() {
    this.props.expenseDeleteExpense(this.props.expense);
  }

  render() {
    return (
      <li className='expense-list-item'>
        <section onDoubleClick={this.handleEdit}>
          <h4>{this.props.expense.name}</h4>
          <p>{this.props.expense.cost}</p>
          <button onClick={this.handleDelete}>Delete</button>
        </section>
        {renderIf(this.state.editing,
          <ExpenseForm
            buttonText='Update'
            expense={this.props.expense}
            onComplete={this.handleEditComplete}
            onCancel={this.handleEdit}/>)}
      </li>
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

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);
