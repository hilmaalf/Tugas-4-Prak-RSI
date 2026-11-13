import { Router } from 'express';
import { DomainController } from '../controllers/domainController.ts';
import { authenticate } from '../middlewares/auth.ts';
import { authorize } from '../middlewares/authorize.ts';

const domainRouter = Router();
const controller = new DomainController();

domainRouter.use(authenticate, authorize('admin'));

domainRouter.get('/users', (req, res) => {
	// #swagger.security = [{ "BearerAuth": [] }]
	return controller.getUsers(req, res);
});
domainRouter.post('/users', (req, res) => {
	// #swagger.security = [{ "BearerAuth": [] }]
	// #swagger.parameters['body'] = { in: 'body', required: true, schema: { $ref: '#/definitions/UserInput' } }
	return controller.createUser(req, res);
});

domainRouter.get('/menu-items', (req, res) => {
	// #swagger.security = [{ "BearerAuth": [] }]
	return controller.getMenuItems(req, res);
});
domainRouter.post('/menu-items', (req, res) => {
	// #swagger.security = [{ "BearerAuth": [] }]
	// #swagger.parameters['body'] = { in: 'body', required: true, schema: { $ref: '#/definitions/MenuItemInput' } }
	return controller.createMenuItem(req, res);
});
domainRouter.get('/menu-items/:id', (req, res) => {
	// #swagger.security = [{ "BearerAuth": [] }]
	return controller.getMenuItem(req, res);
});
domainRouter.put('/menu-items/:id', (req, res) => {
	// #swagger.security = [{ "BearerAuth": [] }]
	// #swagger.parameters['body'] = { in: 'body', required: true, schema: { $ref: '#/definitions/MenuItemInput' } }
	return controller.updateMenuItem(req, res);
});
domainRouter.delete('/menu-items/:id', (req, res) => {
	// #swagger.security = [{ "BearerAuth": [] }]
	return controller.deleteMenuItem(req, res);
});

domainRouter.get('/reviews', (req, res) => {
	// #swagger.security = [{ "BearerAuth": [] }]
	return controller.getReviews(req, res);
});
domainRouter.post('/reviews', (req, res) => {
	// #swagger.security = [{ "BearerAuth": [] }]
	// #swagger.parameters['body'] = { in: 'body', required: true, schema: { $ref: '#/definitions/ReviewInput' } }
	return controller.createReview(req, res);
});
domainRouter.get('/reviews/:id', (req, res) => {
	// #swagger.security = [{ "BearerAuth": [] }]
	return controller.getReview(req, res);
});
domainRouter.delete('/reviews/:id', (req, res) => {
	// #swagger.security = [{ "BearerAuth": [] }]
	return controller.deleteReview(req, res);
});

domainRouter.post('/likes', (req, res) => {
	// #swagger.security = [{ "BearerAuth": [] }]
	// #swagger.parameters['body'] = { in: 'body', required: true, schema: { $ref: '#/definitions/LikeInput' } }
	return controller.createLike(req, res);
});
domainRouter.delete('/likes/:id', (req, res) => {
	// #swagger.security = [{ "BearerAuth": [] }]
	return controller.deleteLike(req, res);
});

domainRouter.get('/flags', (req, res) => {
	// #swagger.security = [{ "BearerAuth": [] }]
	return controller.getFlags(req, res);
});
domainRouter.put('/flags/:id', (req, res) => {
	// #swagger.security = [{ "BearerAuth": [] }]
	// #swagger.parameters['body'] = { in: 'body', required: true, schema: { $ref: '#/definitions/FlagUpdate' } }
	return controller.updateFlag(req, res);
});

domainRouter.get('/audit', (req, res) => {
	// #swagger.security = [{ "BearerAuth": [] }]
	return controller.getAuditLogs(req, res);
});
domainRouter.post('/audit', (req, res) => {
	// #swagger.security = [{ "BearerAuth": [] }]
	// #swagger.parameters['body'] = { in: 'body', required: true, schema: { $ref: '#/definitions/AuditInput' } }
	return controller.createAuditLog(req, res);
});

export { domainRouter };