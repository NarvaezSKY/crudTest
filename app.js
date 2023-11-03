import Express from "express";
import multer from "multer";
import morgan from "morgan";

const app = Express();

app.listen(3000, () => {
    console.log('Server on port 3000');
});

app.use(Express.json());
app.use(morgan('dev'))

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './images');
    },
    filename: (req, file, cb) => {
        const ext = file.originalname.split('.').pop();
        cb(null, `${Date.now()}.${ext}`);
    }
});

const upload = multer({ storage });

app.post('/upload', upload.single('file'), (req, res) => {
    res.send({ message: "Archivo guardado con éxito" });
});
