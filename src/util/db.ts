import mongodb from "mongodb";
import config from "../configs/config";

const mongoClient = mongodb.MongoClient;
let _db: any;

export const mongoConnect = (callback: () => void) => {
  mongoClient
    .connect(config.mongoDB)
    .then((client: any) => {
      console.log("connected");
      _db = client.db();
      callback();
    })
    .catch((err: any) => {
      throw err;
    });
};

export const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found";
};
