const express = require("express");
const adminMiddleware = require("../middleware/admin.middleware");
const Product = require("../models/product.model");
const app = express.Router();

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (e) {
    res.send(e.message);
  }
});



app.get("/title", async (req, res) => {
  try {
    let search = req.query.search;
    console.log(search);
    if (search == "") {
      return res.send("No Products found");
    }
    let product = await Product.find({
      title: { $regex: ".*" + search + ".*", $options: "i" },
    });
    if (product.length > 0) {
      return res.send(product);
    } else {
      return res.send("No Products found");
    }
  } catch (e) {
    res.send(e.message);
  }
});

app.post("/addproduct", adminMiddleware, async (req, res) => {
  try {
    const products = await Product.create({ ...req.body });
    res.send(products);
  } catch (e) {
    res.send(e.message);
  }
});

app.get("/mobile", async (req, res) => {
  try {
    let { price, brand } = req.query;
    // console.log(price,brand,rating)
    let mobileProducts = await Product.find({ category: "Mobile" });
    if (price) {
      if (price == "0-20000") {
        mobileProducts = await Product.find({
          $and: [{ category: "Mobile" }, { price2: { $lte: 20000 } }],
        });
      } else if (price == "20000-40000") {
        mobileProducts = await Product.find({
          $and: [
            { price2: { $lte: 40000 } },
            { price2: { $gte: 20000 } },
            { category: "Mobile" },
          ],
        });
      } else if (price == "40000-60000") {
        mobileProducts = await Product.find({
          $and: [
            { price2: { $lte: 60000 } },
            { price2: { $gte: 40000 } },
            { category: "Mobile" },
          ],
        });
      } else if (price == "morethan60000") {
        mobileProducts = await Product.find({
          $and: [{ price2: { $gte: 60000 } }, { category: "Mobile" }],
        });
      }
    } else if (brand) {
      mobileProducts = await Product.find({
        $and: [{ category: "Mobile" }, { brand: brand }],
      });
    }
    res.send(mobileProducts);
  } catch (e) {
    res.send(e.message);
  }
});
app.get("/grocery", async (req, res) => {
  try {
    let { price, brand } = req.query;
    console.log(price);
    let groceryProducts = await Product.find({ category: "Grocery" });
    if (price) {
      if (price == "0-100") {
        groceryProducts = await Product.find({
          $and: [{ category: "Grocery" }, { price2: { $lte: 100 } }],
        });
      } else if (price == "100-200") {
        groceryProducts = await Product.find({
          $and: [
            { price2: { $lte: 200 } },
            { price2: { $gte: 100 } },
            { category: "Grocery" },
          ],
        });
      } else if (price == "200-400") {
        groceryProducts = await Product.find({
          $and: [
            { price2: { $lte: 400 } },
            { price2: { $gte: 200 } },
            { category: "Grocery" },
          ],
        });
      } else if (price == "400-600") {
        groceryProducts = await Product.find({
          $and: [{ price2: { $gte: 400 } }, { category: "Grocery" }],
        });
      }
    } else if (brand) {
      groceryProducts = await Product.find({
        $and: [{ category: "Grocery" }, { brand: brand }],
      });
    }
    res.send(groceryProducts);
  } catch (e) {
    res.send(e.message);
  }
});
app.get("/electronic&appliances", async (req, res) => {
  try {
    let { price, brand } = req.query;
    let electronicProducts = await Product.find({
      category: "Electronic&Appliances",
    });
    if (price) {
      if (price == "0-4000") {
        electronicProducts = await Product.find({
          $and: [
            { category: "Electronic&Appliances" },
            { price2: { $lte: 4000 } },
          ],
        });
      } else if (price == "4000-30000") {
        electronicProducts = await Product.find({
          $and: [
            { price2: { $lte: 30000 } },
            { price2: { $gte: 4000 } },
            { category: "Electronic&Appliances" },
          ],
        });
      } else if (price == "30000-50000") {
        electronicProducts = await Product.find({
          $and: [
            { price2: { $lte: 50000 } },
            { price2: { $gte: 30000 } },
            { category: "Electronic&Appliances" },
          ],
        });
      } else if (price == "morethan50000") {
        electronicProducts = await Product.find({
          $and: [
            { price2: { $gte: 50000 } },
            { category: "Electronic&Appliances" },
          ],
        });
      }
    } else if (brand) {
      electronicProducts = await Product.find({
        $and: [{ category: "Electronic&Appliances" }, { brand: brand }],
      });
    }
    res.send(electronicProducts);
  } catch (e) {
    res.send(e.message);
  }
});

app.get("/home", async (req, res) => {
  try {
    let { price, brand } = req.query;
    let homeProducts = await Product.find({ category: "Home" });
    if (price) {
      if (price == "0-500") {
        homeProducts = await Product.find({
          $and: [{ category: "Home" }, { price2: { $lte: 500 } }],
        });
      } else if (price == "500-1000") {
        homeProducts = await Product.find({
          $and: [
            { price2: { $lte: 1000 } },
            { price2: { $gte: 500 } },
            { category: "Home" },
          ],
        });
      }
    } else if (brand) {
      homeProducts = await Product.find({
        $and: [{ category: "Home" }, { brand: brand }],
      });
    }
    res.send(homeProducts);
  } catch (e) {
    res.send(e.message);
  }
});

app.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.find();
    let singleProduct = product.find((item) => item.id == id);
    res.send(singleProduct);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.delete("/:id", adminMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Product.findByIdAndDelete({ _id: id });
    res.send("Item is Deleted successfully");
  } catch (e) {
    res.send(e.message);
  }
});

app.put("/:id", adminMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, price } = req.body;
    const updatedItem = await Product.findByIdAndUpdate(
      id,
      { title, description, price },
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).send("Item not found");
    }

    res.send("Item updated successfully");
  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = app;
