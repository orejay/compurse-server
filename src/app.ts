import express from 'express';
import healthRoutes from './routes/health.routes';
import waitingListRoutes from './routes/waiting-list.routes';
import surveyRoutes from './routes/survey.routes';

const app = express();
app.use(express.json());

app.use('/api/v1', healthRoutes);
app.use('/api/v1', waitingListRoutes);
app.use('/api/v1', surveyRoutes);

export default app;
