const { google } = require('googleapis');
const { Event } = require('../models');
const { OAuth2Client } = require('google-auth-library');

const calendar = google.calendar({
    version: 'v3',
    auth: process.env.GOOGLE_API_KEY, // specify your API key here
});

class eventController {
    static async getAll(req, res, next) {
        try {
            const UserId = req.user.id;
            const events = await Event.findAll({ where: UserId });
            res.status(200).json(events);
        } catch (err) {
            next(err);
        }
    }
    static async create(req, res, next) {
        try {
            const { start, end, status, summary } = req.body;
            const UserId = req.user.id;
            const createdEvent = await Event.create({
                start,
                end,
                status,
                summary,
                UserId,
            });
            res.status(201).json(createdEvent);
        } catch (err) {
            next(err);
        }
    }

    static async update(req, res, next) {
        try {
            const { id } = req.params;
            const { start, end, status, summary } = req.body;
            const updatedEvent = await Event.update({ start, end, status, summary }, { where: { id } });
            res.status(201).json(updatedEvent);
        } catch (err) {
            next(err);
        }
    }

    static async updateStatus(req, res, next) {
        try {
            const { id } = req.params;
            const { status } = req.body;
            const updatedEvent = await Event.update({ status }, { where: { id } });
            res.status(200).json(updatedEvent);
        } catch (err) {
            next(err);
        }
    }

    static async delete(req, res, next) {
        try {
            const { id } = req.params;
            await Event.destroy({ where: { id } });
            res.status(200).json('Event Deleted');
        } catch (err) {
            next(err);
        }
    }
}

module.exports = eventController;