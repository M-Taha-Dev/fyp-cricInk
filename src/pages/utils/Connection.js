import { MongoClient } from 'mongodb';

async function connectToMongoDB() {
  // Connection to the MongoDB server running on the default port
  const uri = 'mongodb://localhost:27017';
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('fyp');
    
    const collection = db.collection('cricink');
    return collection; // Return the collection object
  } catch (err) {
    console.error('Error:', err);
    throw err;
  }
}


export { connectToMongoDB }
