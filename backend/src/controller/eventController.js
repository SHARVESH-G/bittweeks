import { Event } from "../models/Event.js";

const addEvent = async (req, res) => {
    try {
        const { eventName, eventDescription, eventDate, eventVenue = "College", eventImage, eventAuthor } = req.body;

        if (!eventName || !eventDate) {
            return res.status(200).json({ message: "All Fields Required" })
        }

        const newEvent = new Event({ eventName, description: eventDescription, eventDate, venue: eventVenue, image: eventImage, author: eventAuthor })

        await newEvent.save();
        return res.status(200).json({ message: "Event Posted Successfully" })
    }
    catch (err) {
        return res.status(500).json({ message: "Something Went Wrong While Creating Event" })
    }
}

const getAllEvents = async (req, res) => {
    try {
        const fetchedEvents = await Event.find({}).populate("author", "name profilePic allFollowers").sort({ createdAt: -1 })
        return res.status(200).json({ fetchedEvents })
    } catch (err) {
        return res.status(500).json({ message: "Something Went Wrong While Fetching Event" })
    }
}




export { addEvent, getAllEvents };