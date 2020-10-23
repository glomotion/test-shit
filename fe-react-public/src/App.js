import React from 'react';
import './App.css';
import Stream from './Stream/Stream';
import Chat from './Chat/Chat';
import Navbar from './Navbar/Navbar';

const App = props => {
  return (<div className="App">
  <Navbar></Navbar>
    <div className="StreamChat">
      <Stream url="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"></Stream>
      <Chat></Chat>
    </div>
</div>);
}

export default App;
