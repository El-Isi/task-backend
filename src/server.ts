// src/server.ts
import app from './app';

const PORT = 3001;

app.use((req, res, next) => {
    console.log(`Ruta no encontrada: ${req.originalUrl}`);
    res.status(404).json({ message: 'Ruta no encontrada' });
});
  
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
