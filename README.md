# Zing Lite

### A full-stack music application - [Live](https://bismuth1991.github.io/zing-lite/)


# Main Features:

### Test-driven-development, fully tested standalone back-end in Ruby on Rails, PostgreSQL - [Github](https://github.com/bismuth1991/zing-lite-rails-api)

### React/Redux front-end, code base strictly follows AirBNB JavaScript style guide, propTypes checked, highly semantic, maintainable and easy to follow.

  ```javascript
  // example of propTypes check in SongIndex component
  import { func, arrayOf, shape, number, string, bool } from 'prop-types';

  // ...
  SongIndex.propTypes = {
    fetchSomeSongs: func.isRequired,
    userClickPlay: func.isRequired,
    forward: func.isRequired,
    loading: bool.isRequired,
    songs: arrayOf(shape({
      id: number,
      title: string,
      url: string,
      artist: string,
      artistAvatar: string,
      album: string,
      coverImage: string,
    })).isRequired,
  };
  ```

### Custom-made audio player with playlist functionality, leveraging HTML5 audio API.

```javascript
class AudioPlayer extends React.Component {
  // ...

  render() {
    return (
      <>
        <Audio
          audioRef={this.audioRef}
          url={url}
          forward={forward}
          shuffle={shuffle}
          isPlaying={isPlaying}
          isEndOfLoop={isEndOfLoop}
          isOnLoop={isOnLoop}
          isOnShuffle={isOnShuffle}
          getTotalAudioTime={this.getTotalAudioTime}
          updateCurrentAudioTime={this.updateCurrentAudioTime}
          updateVolume={this.updateVolume}
          handlePause={this.handlePause}
          handlePlay={this.handlePlay}
          playAudio={this.playAudio}
        />
        // ...
      </>
    )
  }
}
```

### Responsive, mobile-first design, utilizing latest CSS3 grid system and flexbox.


# Other noteworthy features:
### Proper Timeout management to avoid memory leak
```javascript
class Modal extends React.Component {
  // ...
  componentDidUpdate() {
    const { modal, closeModal } = this.props;

    if (this.closeModalTimeout) {
      clearTimeout(this.closeModalTimeout);
    }
    if (modal.type !== 'hidden') {
      this.closeModalTimeout = setTimeout(() => closeModal(), 2000);
    }
  }

  componentWillUnmount() {
    if (this.closeModalTimeout) clearTimeout(this.closeModalTimeout);
  }

  handleClick() {
    const { closeModal } = this.props;
    if (this.closeModalTimeout) clearTimeout(this.closeModalTimeout);
    closeModal();
  }
  // ...
}
```

### Integrate debounce with live search to prevent repeated queries to database
```javascript
class SearchBar extends React.Component {
  constructor(props) {
    // ...
    this.debounceSearch = debounce(query => props.fetchQueryData(query), 500);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.debounceSearch.flush();
    this.setState({ query: '' });
  }

  handleChange(e) {
    this.setState({
      query: e.target.value,
    });

    const { clearSearchResults } = this.props;
    const query = e.target.value;

    if (query && query !== '') {
      this.debounceSearch(query);
    } else {
      this.debounceSearch.clear();
      clearSearchResults();
    }
  }
  //...
}
```