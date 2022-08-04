import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const URI = `mongodb+srv://${process.env.USERID}:${process.env.PASSWORD}@cluster0.oae2n.mongodb.net/GADGETOPIA?retryWrites=true&w=majority`;
    const conn = await mongoose.connect(URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.underline.bold);
    process.exit(1);
  }
};
export default connectDB;
