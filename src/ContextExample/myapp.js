import React from 'react';
import {ThemeContext, themes} from './theme-context';
import ThemedButton from './themed-button';

// An intermediate component that uses the ThemedButton
function Toolbar(props) {
    // the onClick will be pass to the button itself and we should set that over there
  return (
    <ThemedButton onClick={props.changeTheme}> 
      Change Theme
    </ThemedButton>
  );
}

class MyAPP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));

      // set states should set the state as an object
    };
  }

  render() {
    // The ThemedButton button inside the ThemeProvider
    // uses the theme from state while the one outside uses
    // the default dark theme
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <br/>
        <ThemedButton /> {/* this will use the dark defualt theme */}
        
      </div>
    );
  }
}

export default MyAPP;


// we can use a consumer and function then after checking something we can return the component with the context provider and sending data



