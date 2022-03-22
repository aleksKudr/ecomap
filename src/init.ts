import Article from "./mongoose/article-model";
import Point, { IPoint } from "./mongoose/point-model";

const points:IPoint[] = [{
    coordinats: "56.19690433351169; 36.95694805333598",
    name_place: "Эльдорадо",
    discription: "Пункт приема электротехники и батареек в магазине Эльдорадо, Иное, Батарейки, Бытовая техника.",
    timework_1: "10:00",
    timework_2: "18:00",
    adress: "г. Солнечногорск, Красная улица 157",
    filter: ""
}]

const articles = [{
    title: "Четкий заголовок",
    content: "Здесь небольшая новость описанная кратким текстом...",
    author: "Брюс всемогущий",
    createdAt: new Date(),
    published: true,
    image: "img_1.jfif",
},{
    title: "Четкий заголовок",
    content: "Здесь небольшая новость описанная кратким текстом...",
    author: "Брюс всемогущий",
    createdAt: new Date(),
    published: true,
    image: "img_2.jfif",
},{
    title: "Четкий заголовок",
    content: "Здесь небольшая новость описанная кратким текстом...",
    author: "Брюс всемогущий",
    createdAt: new Date(),
    published: true,
    image: "img_3.jfif",
},{
    title: "Четкий заголовок",
    content: "Здесь небольшая новость описанная кратким текстом...",
    author: "Брюс всемогущий",
    createdAt: new Date(),
    published: true,
    image: "img_4.jfif",
},{
    title: "Четкий заголовок",
    content: "Здесь небольшая новость описанная кратким текстом...",
    author: "Брюс всемогущий",
    createdAt: new Date(),
    published: true,
    image: "img_5.jfif",
}]

async function init() {
    await Promise.all(points.map(point => Point.create(point)))
    await Promise.all(articles.map(article => Article.create(article)))
}

export default init;