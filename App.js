import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image, FlatList, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

export default function App() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [size, setSize] = useState('');
    const [location, setLocation] = useState('');
    const [laundryStatus, setLaundryStatus] = useState(false);
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [dresses, setDresses] = useState([]);

    const fetchDresses = async () => {
        try {
            const res = await axios.get('http://<your-backend-url>/api/dresses');
            setDresses(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleAddDress = async () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('category', category);
        formData.append('size', size);
        formData.append('location', location);
        formData.append('laundryStatus', laundryStatus);
        formData.append('description', description);
        if (image) {
            formData.append('image', {
                uri: image.uri,
                type: 'image/jpeg',
                name: 'dress.jpg',
            });
        }

        try {
            await axios.post('http://<your-backend-url>/api/dresses', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            fetchDresses();
        } catch (err) {
            console.error(err);
        }
    };

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });
        if (!result.canceled) setImage(result.assets[0]);
    };

    useEffect(() => {
        fetchDresses();
    }, []);

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
            <TextInput style={styles.input} placeholder="Category" value={category} onChangeText={setCategory} />
            <TextInput style={styles.input} placeholder="Size" value={size} onChangeText={setSize} />
            <TextInput style={styles.input} placeholder="Location" value={location} onChangeText={setLocation} />
            <TextInput style={styles.input} placeholder="Description" value={description} onChangeText={setDescription} />
            <Button title="Pick an Image" onPress={pickImage} />
            {image && <Image source={{ uri: image.uri }} style={styles.image} />}
            <Button title="Add Dress" onPress={handleAddDress} />

            <FlatList
                data={dresses}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <View style={styles.dress}>
                        <Text>{item.name}</Text>
                        <Text>{item.category}</Text>
                        <Text>{item.size}</Text>
                        <Text>{item.location}</Text>
                        <Text>{item.description}</Text>
                        <Text>{item.laundryStatus ? 'Clean' : 'Dirty'}</Text>
                        {item.imageUrl && <Image source={{ uri: `http://<your-backend-url>/${item.imageUrl}` }} style={styles.image} />}
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    input: { borderWidth: 1, padding: 10, marginVertical: 10 },
    image: { width: 100, height: 100, marginVertical: 10 },
    dress: { padding: 10, borderBottomWidth: 1 },
});

