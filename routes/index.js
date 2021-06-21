require('dotenv').config()
const express = require('express')
const Item = require("./models/items");
const bodyParser =require("body-parser")
const multer = require("multer");
const path = require('path')
const Order = require("./models/order");
require('./models/db')


const router = express.Router()

router.use(bodyParser.urlencoded({extended: true}))

router.use('/images', express.static(path.join(__dirname, '/images/menu/')));


//upload image
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "/images/menu/"));
  },
  filename: (req, file, cb) => {
    cb(null, path.extname(file.originalname));
  }
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype === ("image/png" || "image/jpg" || "image/jpeg")) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const images = multer({ storage: fileStorage, fileFilter });
/* GET pages */

router.get('/', function (req, res) {
  res.render('index')
})
router.get('/commande', function (req, res) {
  Order.find({}, function (err, order) {
    if (!err)
        // console.log(order)
      order.map((orders) => {
        console.log(orders)
      })
    // console.log(orders.items)
    res.render('commande', {order: order})

  })
})
router.get('/reservation', function (req, res) {
  res.render('reservation')
})
router.get('/statistiques', function (req, res) {
  res.render('statistiques')

})
router.get('/items', function (req, res) {
  Item.find({}, function (err, allItems) {
    if (!err){
      res.render('./gestion/items', {items: allItems})
    }else {
      console.log(err)
    }

  })
})
router.get('/views/:item_id', function (req, res) {
  const id = req.params.item_id
  Item.findById(id, function (err, item) {
    if (!err){
      res.render('./gestion/views', {item: item})
    }else {
      console.log(err)
    }
  })
})
//for the next
router.route('/update/:item_id')
    .get(function (req, res) {
      Item.findById(req.params.item_id, function (err, item) {
        if (!err){
          res.render('./gestion/update', {item: item})
        }else{
          console.log(err)
        }
      })
    })
    .post(images.single('image'), function(req, res){
      console.log(req.body)
      // Item.findById(req.params.item_id, function (err, item) {
      //     if (!err){
      //         console.log(item)
      //             item.name = req.body.name
      //             item.description = req.body.description
      //             item.price = req.body.price
      //             item.category = req.body.category
      //         item.save()
      //         res.redirect('/dashboard/items')
      //     }else{
      //         console.log(err)
      //     }
      // })
      Item.findByIdAndUpdate(
          req.params.item_id,
          {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: '/images/menu/'+ req.body.image
          },
          {overwrite: true},
          function(err){
            if(!err){
              res.redirect("/items");
            }else {
              console.log(err)
            }
          }
      );
    })

router.route('/insert')
    .get( function (req, res) {
      res.render('./gestion/insert')
    })
    .post(images.single('image'), function (req, res) {
      console.log(req.body)
      const newItem = new Item({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: '/images/menu/'+ req.body.image
      })
      newItem.save(function (err) {
          if (!err) {
          }
          console.log(err)
          res.redirect('/items')
       }).then(r => console.log(r)
      )
    })


router.route('/delete/:item_id')
    .get(function (req, res) {
      Item.findById(req.params.item_id, function (err, item) {
        if (!err)
          res.render('./gestion/delete', {item: item})
      })
    })
    .post(function (req, res) {
      const id = req.params.item_id
      Item.findByIdAndRemove(id, function (err) {
        if (!err){
          console.log("successfully Delete item "+ id)
          res.redirect('/items')
        }else {
          console.log(err)
        }
      })
    })


module.exports = router;
