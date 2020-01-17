import React from 'react';
import {  withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';



const LoadingSpinner = (props) => {

    const ColorCircularProgress = withStyles({
        root: {
            color: props.color,
        },
    })(CircularProgress);

    return <ColorCircularProgress size={props.size} thickness={props.thickness} />;
}

export default LoadingSpinner;