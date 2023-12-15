const MONGO_URI="mongodb+srv://paulsholter:Elias2012@cluster0.ietvzou.mongodb.net/?retryWrites=true&w=majority"
import mongoose from'mongoose';

const connectMongo= async()=>{
    try{
        
        const {connection}= await mongoose.connect(MONGO_URI)

        if(connection.readyState ==1){
            console.log("Database Connected")
        }
    
    }catch(errors){
      return Promise.reject(errors) 
    }
}

export default connectMongo;
//This needs to be looked at as i couldn't get it to link properly//