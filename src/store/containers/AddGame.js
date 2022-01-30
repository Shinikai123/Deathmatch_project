import React from 'react'
import { connect } from 'react-redux'
import { addGame } from '../actions'

const AddGame = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addGame(input.value))
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <input ref={node => input = node} />
        <input ref={node => input = node} />
        <input ref={node => input = node} />
        <button type="submit">
          Add Game
        </button>
      </form>
    </div>
  )
}

export default connect()(AddGame)
