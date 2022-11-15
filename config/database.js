import mongoose from "mongoose";

var username = encodeURIComponent(process.env.DB_USERNAME);
var password = encodeURIComponent(process.env.DB_PASSWORD);

var connectionString = `mongodb://${username}:${password}@cloth-managment-app.15vujdr.mongodb.net/?retryWrites=true&w=majority`;

const connectDatababse = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`mongodb connected with server ${data.connection.host}`);
    });
};

export default connectDatababse;
