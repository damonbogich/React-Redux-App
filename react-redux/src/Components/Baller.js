import React from 'react';
import { connect } from 'react-redux';
import {fetchBaller} from '../actions';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';


const StyledH2 = styled.h2 `
    color: blue;
    font-size: 2rem;
`

const Baller = props => {
    return (
        <div>
            <StyledH2>Baller Page</StyledH2>
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