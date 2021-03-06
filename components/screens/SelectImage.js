
import React, { Component } from 'react';
import { View, Text, Button, ScrollView, Image, CameraRoll } from 'react-native';

export default class SelectImage extends Component {
    constructor(props) {
        super(props);
        this.state = { photos: [] };
    }
    _handleButtonPress = () => {
        CameraRoll.getPhotos({
            first: 20,
            assetType: 'Photos',
        }).then(r => {
            this.setState({ photos: r.edges });
        }).catch((err) => {
            //Error Loading Images
        });
    };
    render() {
        return (
            <View>
                <Button title="Load Images" onPress={this._handleButtonPress} />
                <ScrollView>
                    {this.state.photos.map((p, i) => {
                        return (<Image key={i}
                            style={{ width: 300, height: 100, }}
                            source={{ uri: p.node.image.uri }}
                        />
                        );
                    })}
                </ScrollView>
            </View>
        );
    }
}