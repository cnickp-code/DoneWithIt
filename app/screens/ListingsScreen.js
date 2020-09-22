import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, ActivityIndicator } from 'react-native';

import Button from '../components/AppButton/AppButton';
import Screen from '../components/Screen/Screen';
import Card from '../components/Card/Card';
import colors from '../config/colors';
import routes from '../navigation/routes';
import listingsApi from '../api/listings';
import AppText from '../components/AppText/AppText';
import useApi from '../hooks/useApi';
import AppActivityIndicator from '../components/AppActivityIndicator/AppActivityIndicator';

function ListingsScreen({ navigation }) {
    // const { data: listings, error, loading, request: loadListings} = useApi(listingsApi.getListings);

    const getListingsApi = useApi(listingsApi.getListings);

    useEffect(() => {
        // loadListings();
        getListingsApi.request();
    }, [])



    return (
        <Screen style={styles.screen}>
            {getListingsApi.error && <>
                <AppText>Couldn't retrieve the listings</AppText>
                <Button title="Retry" onPress={loadListings} />
            </>}
            <AppActivityIndicator visible={getListingsApi.loading} />
            {/* {getListingsApi.loading && <ActivityIndicator animating={true} size="large" />} */}
            <FlatList
                data={getListingsApi.data}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) =>
                    <Card 
                        title={item.title}
                        subTitle={'$' + item.price}
                        imageUrl={item.images[0].url}
                        thumbnailUrl={item.images[0].thumbnailUrl}
                        onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                    />
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light
    }
})

export default ListingsScreen;