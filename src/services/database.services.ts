import { MongoClient } from 'mongodb'
import { config } from 'dotenv'
config()
console.log()
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@twitter-dev.rfjmhxz.mongodb.net/?retryWrites=true&w=majority`
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);

console.log(process.env.DB_PASSWORD)
class DatabaseService {
 private client: MongoClient

constructor() {
    this.client = new MongoClient(uri)
}

 async connect() {
    try {
        // Send a ping to confirm a successful connection
      await client.db('admin').command({ ping: 1 })
      console.log('Pinged your deployment. You successfully connected to')
      } finally {
        // Ensures that the client will close when you finish/error
        await this.client.close()
      }
}
}
const databaseService= new DatabaseService()
export default databaseService
