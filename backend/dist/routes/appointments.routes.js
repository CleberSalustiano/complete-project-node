"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const typeorm_1 = require("typeorm");
const date_fns_1 = require("date-fns");
const AppointmentsRepository_1 = __importDefault(require("../repositories/AppointmentsRepository"));
const CreateAppointmentService_1 = __importDefault(require("../services/CreateAppointmentService"));
const appointmentsRouter = (0, express_1.Router)();
appointmentsRouter.get('/', async (request, response) => {
    const appointmentsRepository = (0, typeorm_1.getCustomRepository)(AppointmentsRepository_1.default);
    const appointments = await appointmentsRepository.find();
    return response.json(appointments);
});
appointmentsRouter.post("/", async (request, response) => {
    try {
        const { provider, date } = request.body;
        const parsedDate = (0, date_fns_1.parseISO)(date);
        const createAppointment = new CreateAppointmentService_1.default();
        const appointment = await createAppointment.execute({
            date: parsedDate,
            provider,
        });
        return response.json(appointment);
    }
    catch (error) {
        return response.status(400).json({ error: error.message });
    }
});
exports.default = appointmentsRouter;
