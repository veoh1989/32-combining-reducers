import React from 'react';
import {connect} from 'react-redux';
import {renderIf} from '../../../lib/utils';
import CategoryForm from '../category-form/category-form';
import {categoryUpdate} from '../../../actions/category-actions';
import {categoryDelete} from '../../../actions/category-actions';
import ExpenseList from '../../expense/expense-list/expense-list';


class CategoryItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      updating: false,
    };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleUpdate () {
    this.setState({updating: !this.state.updating});
  }

  handleOnClick () {
    this.props.itemCategoryDelete(this.props.category);
  }
  render(){
    return(
      <section >
        <h4 onDoubleClick={this.handleUpdate}>Category: {this.props.category.title}</h4>
        <div onDoubleClick={this.handleUpdate}>Budget: ${this.props.category.budget}</div>
        <button onClick={this.handleOnClick}>delete</button>
        <div className='expense-list'>
          {renderIf(this.state.updating,
            <CategoryForm
              category={this.props.category}
              buttonText='update'
              onComplete={this.props.itemCategoryUpdate}
            />)}
          <ExpenseList catId={this.props.category._id}/>
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => ({
  categories: state,
});

const mapDispatchToProps = (dispatch, getState) => ({
  itemCategoryUpdate: category => dispatch(categoryUpdate(category)),
  itemCategoryDelete: category => dispatch(categoryDelete(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
