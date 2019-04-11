import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator, Text, FlatList, } from 'react-native';
import { List, ListItem, Card, Button, Image ,Icon} from 'react-native-elements';
import data from '../../data/posts.json';
const list = [
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    }
];
export default class Home extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            title: 'App name'
        }}

        keyExtractor = (item, index) => index.toString()

        renderItem = ({ item }) => (


            <Card>
                <ListItem

                    leftAvatar={{ source: { uri: 'https://placeimg.com/640/480/people' } }}
                    title="Jon Doe"
                    subtitle="Johannesburg"
                />
                {
                    item.imageUrl != null ? <Image
                        source={{ uri: item.imageUrl }}
                        style={{ width: '100%', height: 250 }}
                        PlaceholderContent={<ActivityIndicator />}
                    /> : null
                }

                <Text style={styles.text}>{item.text}</Text>
                <Text style={styles.text}>{item.likes.length} likes</Text>
                <View style={styles.iconContainer}>
                    <Icon name='heart' type="font-awesome" style={styles.icon} size={30} color='red' />
                    <Icon name='heart-o' type="font-awesome"  style={styles.icon} size={30} color='#333' solid />
                    <Icon name="comment-o" type="font-awesome" style={styles.icon} size={30} solid />
                </View>
            </Card>
        )

        render() {
            
            return (
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={data}
                    renderItem={this.renderItem}
                />
            )
        }
    }

    const styles = StyleSheet.create({
        iconContainer: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start'
        },
        icon: { margin: 5 },
        text: { marginBottom: 10, marginTop: 10, fontSize: 20 }
    })