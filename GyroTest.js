import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, PixelRatio, Image } from 'react-native';
import { Gyroscope, DeviceMotion } from 'expo-sensors';

const window = Dimensions.get('window');
const deviceWidth = window.width;
const deviceHeight = window.height;

const imageWidth = 8 * deviceWidth;
const imageHeight = 3 * deviceHeight;

export default function GyroTest() {
    const [data, setData] = useState({});
    const [yVal, setYVal] = useState(0);
    const [xVal, setXVal] = useState(0);
    const [image, setImage] = useState(`https://placeimg.com/${PixelRatio.getPixelSizeForLayoutSize(imageWidth)}/${PixelRatio.getPixelSizeForLayoutSize(imageHeight)}/any`)


    useEffect(() => {
        _subscribe();
    }, []);

    useEffect(() => {
        return () => {
            _unsubscribe();
        };
    }, []);

    //   const _toggle = () => {
    //     if (this._subscription) {
    //       _unsubscribe();
    //     } else {
    //       _subscribe();
    //     }
    //   };

    const _slow = () => {
        Gyroscope.setUpdateInterval(1000);
    };

    const _fast = () => {
        Gyroscope.setUpdateInterval(16);
    };

    const _subscribe = () => {
        this._subscription = DeviceMotion.addListener(gyroscopeData => {
            //   setData(gyroscopeData);
            setYVal(yVal + gyroscopeData.rotation.gamma);
            setXVal(xVal + gyroscopeData.rotation.beta);
            console.log('BETA: ', gyroscopeData.rotation.beta);
            console.log('GAMMA: ', gyroscopeData.rotation.gamma);
        });
    };

    const _unsubscribe = () => {
        this._subscription && this._subscription.remove();
        this._subscription = null;
    };

    // let { x, y, z } = data;

    const positionOnScreenX = -imageWidth / 2;
    const positionOnScreenY = -imageHeight;
    // The y axis of the sensor data resembles what we need for the x axis
    // in the image
    const movementX = yVal / 1.5 * imageWidth;
    const movementY = xVal / 1.5 * imageHeight;

    // console.log(positionOnScreenY);

    return (
        <View style={styles.sensor}>
            {/* <Text style={styles.text}>Gyroscope:</Text>
            <Text style={styles.text}>
                x: {round(x)} y: {round(y)} z: {round(z)}
            </Text> */}
            <View style={styles.container}>
                {/* <TouchableOpacity onPress={_toggle} style={styles.button}>
          <Text>Toggle</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={_slow} style={[styles.button, styles.middleButton]}>
          <Text>Slow</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={_fast} style={styles.button}>
          <Text>Fast</Text>
        </TouchableOpacity> */}

                <Image
                    translateX={positionOnScreenX + movementX}
                    translateY={positionOnScreenY + movementY}
                    style={styles.image}
                    source={require('./app/assets/yosemite.jpg')}
                />
            </View>
        </View>
    );
}

function round(n) {
    if (!n) {
        return 0;
    }

    return Math.floor(n * 100) / 100;
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'stretch',
        marginTop: 15,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee',
        padding: 10,
    },
    middleButton: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#ccc',
    },
    sensor: {
        marginTop: 45,
        paddingHorizontal: 10,
    },
    text: {
        textAlign: 'center',
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    image: {
        position: "absolute",
        top: 0,
        left: 0,
        height: imageHeight,
        width: imageWidth
    }
});