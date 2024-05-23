import express from "express";
import { connectDB } from "./utils/features.js";
import { errorMiddleware } from "./middlewares/error.js";
import NodeCache from "node-cache";
import {config} from "dotenv"
import morgan from "morgan"
import cors from "cors"

import userRoute from './routes/user.js'
import productRoute from './routes/products.js'
import orderRoute from './routes/order.js'
import paymentRoute from './routes/payment.js'
import dashboardRoute from './routes/stats.js'
import Stripe from "stripe";

config({
    path:"./.env"
})

const port=process.env.PORT || 3000
const mongoURI=process.env.MONGO_URI || "";
const stripeKey=process.env.STRIPE_KEY || "";

connectDB(mongoURI)

export const stripe=new Stripe(stripeKey)
export const myCache=new NodeCache()

const app=express()

app.use(express.json())
app.use(morgan("dev"))
app.use(cors())

app.get("/",(req,res)=>{
    res.send("API WORKING WITH /api/v1")
})

app.use("/api/v1/user",userRoute)
app.use("/api/v1/product",productRoute)
app.use("/api/v1/order",orderRoute)
app.use("/api/v1/payment",paymentRoute)
app.use("/api/v1/dashboard",dashboardRoute)

app.use("/uploads",express.static("uploads"))
app.use(errorMiddleware)

app.listen(port,()=>{
    console.log("Server is running on http://localhost",port);
    
})