import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, TouchableOpacity , View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions';
import { CardSection }from './common';

class ListItem extends Component {
    componentWillUpdate(){
        LayoutAnimation.spring();
    }

    renderDescription() {
        const { library, expanded } = this.props;

        if ( expanded ) {
            return (
                <CardSection>
                    <Text style={styles.descriptionStyle}>
                        {library.description}
                    </Text>
                </CardSection>
            )
        }
    }

    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library;


        console.log(this.props)
        console.log('test log')
        return (
            <TouchableOpacity
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    },
    descriptionStyle: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15
    }
}

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded };
};

export default connect(mapStateToProps, actions )(ListItem);