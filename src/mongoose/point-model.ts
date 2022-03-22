import mongoose from "mongoose";

const { Schema } = mongoose;

export interface IPoint {
    name_place: string,
    filter: string,
    coordinats: string,
    discription: string,
    adress: string,
    timework_1: string,
    timework_2: string,
}

const PointSchema = new Schema<IPoint>({
    name_place: String,
    filter: String,
    coordinats: String,
    discription: String,
    adress: String,
    timework_1: String,
    timework_2: String,
});

export const Point = mongoose.model("Point", PointSchema);

// module.exports = Point;

export default Point;
