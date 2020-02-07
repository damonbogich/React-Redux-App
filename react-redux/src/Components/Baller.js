import React from 'react';
import { connect } from 'react-redux';
import {fetchBaller} from '../actions';
import Loader from 'react-loader-spinner';

const Baller = props => {
    return (
        <div>
            <h1>Baller Page</h1>
            <button onClick= {props.fetchBaller}>Get baller</button>
            {!props.baller && !props.isLoading && <h2>Get a baller!</h2>}
            {props.isLoading && (
                <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
              />
            )}
            {props.baller && !props.isLoading && <h2>{props.baller.first_name && props.baller.last_name}</h2> }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading, 
        baller: state.baller,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    {fetchBaller}
) (Baller);