import express from "express";
import multer from "multer";
import { addFood,listFood, removeFood} from "../controllers/foodController.js";

const foodRouter = express.Router();

// Image storing engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`); // Unique filename
    }
});

const upload = multer({ storage: storage });  // Middleware function for file upload

// Route for adding food with image upload
foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list",listFood)

foodRouter.post("/remove",removeFood)

export default foodRouter;
