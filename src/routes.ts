import express from 'express';
import ScheduleController from './controllers/ScheduleController';
// import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
// const classesController = new ClassesController();
// const connectionsController = new ConnectionsController;

routes.get('/api/schedule', ScheduleController().getSchedule);
routes.get('/api/categories', ScheduleController().getCategories);
routes.get('/api/categorie/:id', ScheduleController().getCategorieById);
// routes.post('/schedule', ScheduleController.create);

// routes.get('/connections', connectionsController.index);
// routes.post('/connections', connectionsController.create);

routes.get('/', function(req, res) {
  res.send('Rota Principal');
});

export default routes;