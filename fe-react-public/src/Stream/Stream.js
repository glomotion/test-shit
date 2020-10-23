import React from 'react';
import ReactHlsPlayer  from 'react-hls-player';


const stream = (props) => {
    return   <ReactHlsPlayer
                url={props.url}
                autoplay={false}
                controls={true}
                width="80%"
                height="auto"/>
}

export default stream;