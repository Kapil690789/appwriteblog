const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}
// there was a name issue with the import.meta.env.VITE_APPWRITE_URL, it was later fixed in debugging video

export default conf;

// const conf = {
//     appwriteUrl: 'https://cloud.appwrite.io/v1',  // Ensure this is correctly set
//     appwriteProjectId: '6703d6b2000517c63907',
//     appwriteDatabaseId: '6703e396003347351948',
//     appwriteCollectionId: '6703e3ba0022e4e753e5',
//     appwriteBucketId: '6703e59100067c0fbac6'
// };

// export default conf;
