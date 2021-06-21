const mongoose = require('mongoose')
const Schema = require("mongoose");

// item schema and model

const itemSchema = new mongoose.Schema({
        name: {
            type: String,
        },
        price: {
            type: Number,
        },
        image: {
            type: String,
        },
        description: {
            type: String,
        },
        category: String,
        reviews:[{
            name: String,
            comment: String,
            stars: Number,
        }],
        reduction: {
            type: Number
        }
    }, {timestamps: true}
)
const Item = mongoose.model('Items', itemSchema)


// Menu Item
// const imgPath = '/images/menu/'
// const fruit_de_mer = new Item({
//     name: "Fruits de mer",
//     price: 1500,
//     description: "fruit de mer",
//     category: "Menu",
//     image: imgPath + '48.jpeg'
// })
// const legumes_sauter = new Item({
//     name: "Légumes Sauté",
//     price: 700,
//     description: "légumes sauter",
//     category: "Menu",
//     image: imgPath + '49.png'
// })
//
// const filet_capitain = new Item({
//     name: "Filet de capitain",
//     price: 2000,
//     description: "Filet de capitain",
//     category: "Menu",
//     image: imgPath + '49.jpg'
// })
// const poulet_panne = new Item({
//     name: "Poulet Panne",
//     price: 2000,
//     description: "Poulet Panne",
//     category: "Menu",
//     image: imgPath + '12.jpg'
// })
// // Dessert Item
//
// const crepes = new Item({
//     name: "crêpes",
//     price: 1500,
//     description: "Crêpes au chocolat",
//     category: "Dessert",
//     image: imgPath + '39.jpg'
// })
// const glace = new Item({
//     name: "Glaces",
//     price: 1000,
//     description: "Glaces",
//     category: "Dessert",
//     image: imgPath + '44.jpg'
// })
// const salade_de_fruits = new Item({
//     name: "Salade de fruits",
//     price: 1500,
//     description: "Salades de fruits",
//     category: "Dessert",
//     image: imgPath + '46.jpg'
// })
// const pancake = new Item({
//     name: "Pancake",
//     price: 2000,
//     description: "Pancake",
//     category: "Dessert",
//     image: imgPath + '43.jpg'
// })
//
// //Drinks Item
// const vin_blanc = new Item({
//     name: "Vin blanc",
//     price: 5000,
//     description: "Vin Blanc",
//     category: "Drinks",
//     image: imgPath + '30.jpg'
// })
// const vin_rouge = new Item({
//     name: "Vin rouge",
//     price: "3500",
//     description: "Vin rouge",
//     category: "Drinks",
//     image: imgPath + '31.jpg'
// })
// const beer = new Item({
//     name: "Beer",
//     price: 1000,
//     description: "Beer",
//     category: "Drinks",
//     image: imgPath + '54.jpg'
// })
// const champagne = new Item({
//     name: "Champagne",
//     price: 15000,
//     description: "Champagne",
//     category: "Drinks",
//     image: imgPath + '29.jpg'
// })
//
// // Breakfast Item
// const cappucion = new Item({
//     name: "Cappucion",
//     price: 1500,
//     description: "Cappucion",
//     category: "Breakfast",
//     image: imgPath + '8.jpg'
// })
// const cafe = new Item({
//     name: "Cafe",
//     price: 500,
//     description: "Café",
//     category: "Breakfast",
//     image: imgPath + '51.jpg'
// })
// const oeuf_farcie = new Item({
//     name: "Oeufs farcis",
//     price: 500,
//     description: "Oeufs farcis",
//     category: "Breakfast",
//     image: imgPath + '7.jpg'
// })
// const BBH = new Item({
//     name: "BBH",
//     price: 500,
//     description: "Beignets Bouilli Haricots",
//     category: "Breakfast",
//     image: imgPath + '53.jpg'
// })
// // save all items in database
// Item.insertMany([
//     fruit_de_mer,
//     legumes_sauter,
//     filet_capitain,
//     poulet_panne,
//     crepes,
//     glace,
//     salade_de_fruits,
//     pancake,
//     vin_blanc,
//     vin_rouge,
//     beer,
//     champagne,
//     cappucion,
//     cafe,
//     oeuf_farcie,
//     BBH
// ], {rawResult: true}, function (err) {
//     if (err){
//         console.log(err)
//     }else{
//         console.log("Successful save items!!!!!")
//     }
// })
module.exports = Item