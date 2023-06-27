const express = require("express")
const cors = require("cors")
const Razorpay = require("razorpay");
const userRouter = require("./routes/users.route")
const productRouter = require("./routes/product.route")
const cartRouter = require("./routes/cart.route")
const app = express()
require("dotenv").config()

const connect = require("./config/db")
const addressRouter = require("./routes/address.route")
// const P = process.env.PORT;

app.use(cors())
app.use(express.json());
app.use("/users", userRouter)
app.use("/products", productRouter)
app.use("/carts", cartRouter)
app.use("/admin", addressRouter)

app.get("/", (req, res) => {
    res.send("Home page")
})

var instance = new Razorpay({
    key_id: process.env.key_id,
    key_secret: process.env.key_secret ,
});

app.post("/rozar-order", async (req, res) => {
    var options = {
        amount: req.body.amount,
        currency: "INR",
        receipt: "order_rcptid_11",
    };

    try {
        const order = await instance.orders.create(options);
        res.send(order);
    } catch (error) {
        console.log(error.message);
    }
});



app.listen(5501, async () => {
    await connect()
    console.log(`server is started on http://localhost:${5501}`)
})