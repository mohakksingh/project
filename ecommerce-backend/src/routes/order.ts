import express from "express";

import { adminOnly } from "../middlewares/auth.js";
import { allOrders, myOrders, newOrder } from "../controllers/order.js";

const app=express.Router()


app.post("/new",newOrder)

app.get("/my",myOrders)

app.get("/all",allOrders)


export default app;