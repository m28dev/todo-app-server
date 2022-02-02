import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import todoRouter from './routes/todoRouter.mjs';

const app = express();
const port = process.env.PORT || 3100;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Router
app.use('/todos', todoRouter);

// Catch 404
app.use((req, res) => {
    res.status(404).json({
        message: 'Sorry cant find that!'
    });
})

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);

    res.status(500).json({
        message: 'Something broke!'
    });
});

const server = app.listen(port, () => console.log(`todo-app-server listening on port ${port}`));

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM signal received: closing HTTP server')
    server.close(() => {
        console.log('HTTP server closed')
    })
});
