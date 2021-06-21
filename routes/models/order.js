const mongoose = require('mongoose')


const orderSchema = new mongoose.Schema(
    {
        items: [
            {
                item: {
                    type: Object
                },
                quantity: {
                    type: Number
                }
            }
        ],
        user: {
            username: {
                type: String,
            },
        }
    },
    { timestamps: true }
);
const Order = mongoose.model("Order", orderSchema);
module.exports = Order