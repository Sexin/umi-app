import React from 'react'
import PropTypes from 'prop-types'

const addTodoView = ({ onAddTodoClick }) => {
    let input;
    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    onAddTodoClick(input.value)
                    input.value = ''
                }}
            >
                <input
                    ref={node => {
                        input = node
                    }}
                />
                <button type="submit">
                    Add Todo
            </button>
            </form>
        </div>
    )
}

addTodoView.propTypes = {
    onAddTodoClick: PropTypes.func.isRequired
}

export default addTodoView;