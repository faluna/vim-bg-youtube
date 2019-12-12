/** @jsx jsx */
import React from 'react';
import { jsx, Global } from '@emotion/core';
import css from '@emotion/css/macro';
import Youtube from 'react-youtube';
import Fab from '@material-ui/core/Fab';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Link from '@material-ui/core/Link';

const globalStyles = css({
  'html, body': {
    height: '100%',
    width: '100%',
    margin: 0,
    padding: 0,
    position: 'relative'
  },
  '#root': {
    margin: 0,
    padding: 0,
    height: '100%',
    width: '100%'
  },
  '.youtube-container': {
    height: '100%',
    width: '100%',
    margin: 0,
    padding: 0
  }
});

const appStyle = css({
  height: '100%',
  width: '100%',
  margin: 0,
  padding: 0
});

const App = props => {
  //再生したいyoutubeの動画id
  // var vid = 'id of video';
  const opts = {
    playerVars: {
      listType: 'playlist',
      list: props.list,
      rel: 0,
      showinfo: 0,
      controls: 1,
      loop: 1,
      autoplay: 1
    }
  };
  const onPlayerReady = event => {
    // event.target.setShuffle(true);
    // e.target.setVolume(0);
    event.target.playVideo();
  };
  const onPlayerStateChange = event => {
    event.target.setShuffle(true);
  };

  return (
    <React.Fragment>
      <Global styles={globalStyles} />
      <Youtube
        containerClassName="youtube-container"
        css={appStyle}
        opts={opts}
        onReady={onPlayerReady}
        onStateChange={onPlayerStateChange}
      />
    </React.Fragment>
  );
};

export default App;
