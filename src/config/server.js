import express from "express";
import bodyParser from "body-parser";
const app = express();

const port = 3000
try {
    app.use(
        express.urlencoded({
            extended: true
        }),
    );
    app.use(bodyParser.json());

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
} catch (error) {
    console.log(error);
}

export default app;