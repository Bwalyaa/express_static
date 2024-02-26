import express from "express"
import fs from "fs/promises"

const PORT = 3000
const app = express()

app.use(express.static("public"))

app.listen(PORT, () => {
    console.log(`server läuft auf http://localhost:${PORT}`);
})