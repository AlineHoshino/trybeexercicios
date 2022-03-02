// ./index.ts
import express from 'express';
import BooksRoutes from "./routes/books";

const PORT = 8000;

const app = express();
app.use(express.json())

app.use(BooksRoutes);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});