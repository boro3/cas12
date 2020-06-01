import React from 'react'
import { connect } from 'react-redux';
import { SayHello } from './../actions/SayHelloAction'

class Hello extends React.Component {

    componentDidMount() {
        this.props.sayHello()
    }

    render() {
        return (
            <div id='hello'>
                <h2>{this.props.greeting}</h2>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        greeting: state.SayHelloReducer.greeting
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sayHello: () => {
            dispatch(SayHello())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);