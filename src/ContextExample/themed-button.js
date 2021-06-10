import React from 'react';
import { ThemeContext } from './theme-context';

class ThemedButton extends React.Component {
    static contextType = ThemeContext;

    render() {
        let props = this.props;
        let theme = this.context; 
        // using multiple let theme = this.context.theme
        return (
            /* here it gonna use the onclik option */
            <button
                {...props} 
                // onClick={props.onClick}
                style={{ backgroundColor: theme.background }}
            />
        );
    }
}

export default ThemedButton;