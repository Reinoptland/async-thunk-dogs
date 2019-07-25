import React from 'react'
import { connect } from 'react-redux';
import { getDogs, createQuestion } from './actions'

// How to use redux thunk:
// 0.) npm install redux-thunk
// 1.) Change your store to use async actions (example is in the reader)
// 2.) Make a thunk (action creator return from a function)
// 3.) use getState to get access to the state of the store
// 4.) use dispatch to dispatch one or multiple actions


class Doglist extends React.Component {
    componentDidMount(){
        this.props.dispatch(getDogs())   
        
        setTimeout(() => this.props.dispatch(createQuestion()), 5000)
    }

    render(){
        return <div>
            <ul>
                { this.props.dogs.map(dog => {
                    return <li>{dog}</li>
                })}
            </ul>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        dogs: state
    }
}

export default connect(mapStateToProps)(Doglist)