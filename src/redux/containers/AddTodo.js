import { connect } from 'react-redux'
import { addTodo } from '../actions'
import AddTodoView from '../components/AddTodoView'


const mapStateToProps = state => {
    return state
  }

const mapDispatchToProps = dispatch => {
    return {
        onAddTodoClick: value => {
            dispatch(addTodo(value))
        }
    }
}

const AddTodo = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodoView)

export default AddTodo