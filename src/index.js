const express = require("express")
const app = express();
const dotenv = require("dotenv")
const cors = require("cors")
const moment = require("moment")
const fs = require("fs")

dotenv.config();

app.use(cors())
app.use(express.json())
app.use((req,res,next) => {
  const httpMethod = req.method
  const route = req.path
  const logFormat = `<${httpMethod}> <${route}> TIME: ${moment().format("hh:mm DD/MM/YYYY")}`;

  fs.appendFileSync(`${__dirname}/../.logs`, logFormat + "\n")
  console.log(logFormat);
  next()
})

const PORT = process.env.PORT

const { todoListRoutes } = require("./routes");

app.use("/todoLists", todoListRoutes)


app.listen(PORT, () => {
  console.log("Running in port", PORT)
})