import client from './client';

const endpoint = '/listings';

const getListings = () => client.get(endpoint);

// const getListings = (a, b, c) => client.get(endpoint); , DEMO FOR PARAMETERS (headers, auths, etc)

const addListing = (listing, onUploadProgress) => {
    // content-type
    // for images: multipart/form-data

    const data = new FormData() // Automatically set to multipart/form-data by Axios/ApiSauce

    data.append('title', listing.title);
    data.append('price', listing.price);
    data.append('categoryId', listing.category.value);
    data.append('description', listing.description);

    listing.images.forEach((image, idx) => data.append('images', {
        name: 'image' + idx,
        type: 'image/jpeg',
        uri: image
    }));

    if (listing.location) {
        data.append('location', JSON.stringify(listing.location));
    }

    return client.post(endpoint, data, {
        onUploadProgress: (progress) => onUploadProgress(progress.loaded / progress.total)
    }); // returns a promise. Callback prop used to log progress. In onSubmit handler in ListingEditScreen

}


export default {
    getListings,
    addListing
}