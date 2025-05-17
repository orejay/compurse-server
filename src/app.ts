import express from 'express';
import cors from 'cors';
import healthRoutes from './routes/health.routes';
import waitingListRoutes from './routes/waiting-list.routes';
import surveyRoutes from './routes/survey.routes';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/v1', healthRoutes);
app.use('/api/v1', waitingListRoutes);
app.use('/api/v1', surveyRoutes);

export default app;
