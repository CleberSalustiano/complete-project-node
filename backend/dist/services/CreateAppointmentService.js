"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
const typeorm_1 = require("typeorm");
const AppointmentsRepository_1 = __importDefault(require("../repositories/AppointmentsRepository"));
class CreateAppointmentsService {
    async execute({ date, provider }) {
        const appointmentsRepository = (0, typeorm_1.getCustomRepository)(AppointmentsRepository_1.default);
        const appointmentDate = (0, date_fns_1.startOfHour)(date);
        const findAppointmentInSameDate = appointmentsRepository.findByDate(appointmentDate);
        if (findAppointmentInSameDate) {
            throw Error("This appointment is already booked");
        }
        const appointment = appointmentsRepository.create({
            provider,
            date: appointmentDate,
        });
        await appointmentsRepository.save(appointment);
        return appointment;
    }
}
exports.default = CreateAppointmentsService;
