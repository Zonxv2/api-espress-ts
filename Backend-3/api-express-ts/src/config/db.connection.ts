import { connect } from "mongoose";
import config from "./index";

export const initMongoDB = async (): Promise<void> => {
  try {
    await connect(config.MONGO_URL as string);
  } catch (error: unknown) {
    throw new Error((error as Error).message);
  }
};
