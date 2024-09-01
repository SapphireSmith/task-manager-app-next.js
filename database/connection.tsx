import mongoose from 'mongoose';

let isConnected = false;
const DB_URL: string = process.env.MONGO_CONNECTION_URI as string;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);
    if (isConnected) {
        console.log('DB is already connected');
    }

    try {

        await mongoose.connect(DB_URL);

        isConnected = true;
        console.log("MongoDb Connected");

    } catch (error) {
        console.log(error);
    }
}