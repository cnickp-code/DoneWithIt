import React from 'react';
import { useState } from 'react';
import { 
    View,
    FlatList, 
    StyleSheet
 } from 'react-native';
import ListItem from '../components/ListItem/ListItem';
import Screen from '../components/Screen/Screen';
import ListItemSeparator from '../components/ListItemSeparator/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction/ListItemDeleteAction';

const initialMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/mosh.jpg')
    }
]

function MessagesScreen(props) {

    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (message) => {
        // Delete message from messages
        let newMessages = messages.filter(m => m.id !== message.id)
        setMessages(newMessages)

        // Call the server to delete message from backend
    }

    return (
        <Screen>
            <FlatList 
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => 
                    <ListItem 
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        onPress={() => console.log('Tapped', item)}
                        renderRightActions={() => 
                            <ListItemDeleteAction onPress={() => handleDelete(item)} />}
                    /> }
                ItemSeparatorComponent={() => <ListItemSeparator />}
                refreshing={refreshing}
                onRefresh={() => 
                    setMessages([
                        {
                            id: 2,
                            title: 'T2',
                            description: 'D2',
                            image: require('../assets/mosh.jpg')
                        }
                    ])
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    
})

export default MessagesScreen;