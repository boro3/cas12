import React from 'react'
import { connect } from 'react-redux'
import { buyCake, restockCake } from './../actions/CakeActions'

class Cake extends React.Component {

    render() {
        return (
            <div id='cake'>
                <h2>The number of cakes: {this.props.cakes}</h2>
                <button onClick={() => { this.props.buyCake(1) }}
                    disabled={this.props.cakes > 0 ? null : 'disabled'}>
                    -1
                </button> &nbsp;

                <button onClick={() => { this.props.buyCake(2) }}
                    disabled={this.props.cakes > 1 ? null : 'disabled'}>
                    -2
                </button> &nbsp;

                <button onClick={() => { this.props.buyCake(3) }}
                    disabled={this.props.cakes > 2 ? null : 'disabled'}>
                    -3
                </button> &nbsp;

                <br />                
                {this.props.error !== undefined
                    ?
                    <h2>{this.props.error}</h2>
                    :
                    null
                } 

                {!this.props.cakes && <button onClick={() => { this.props.restockCake(10) }}>Restock</button>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cakes: state.CakeReducer.cakes,
        error: state.CakeReducer.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: (cake) => {
            dispatch(buyCake(cake))
        },
        restockCake: (cake) => {
            dispatch(restockCake(cake))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cake)