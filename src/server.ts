// src/server.ts
import app from './app';

const PORT = 3001;

app.use((req, res, next) => {
    console.log(`Route not found: ${req.originalUrl}`);
    res.status(404).json({ message: 'Ruta no encontrada' });
});
  
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
