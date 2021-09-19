const { google } = require('googleapis');
const calendar = google.calendar({
    version: 'v3',
    auth: process.env.GOOGLE_API_KEY, // specify your API key here
});

class eventController {
    static async getAll(req, res, next) {
        try {
            console.log(calendar);
            const calendarData = await calendar.events.list({
                calendarId: 'primary',
                timeMin: new Date().toISOString(),
                maxResults: 10,
                singleEvents: true,
                orderBy: 'startTime',
            });
            res.status(200).json(calendarData);
        } catch (err) {
            next(err);
        }
    }
    static async create(req, res, next) {
        try {} catch (err) {
            next(err);
        }
    }
}

module.exports = eventController;