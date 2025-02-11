// Add a new contact
router.post('/', async (req, res) => {
    const { name, phone } = req.body;
    try {
        const newContact = new Contact({ name, phone });
        await newContact.save();
        res.status(201).json(newContact);
    } catch (error) {
        res.status(500).json({ message: 'Error adding contact', error });
    }
});

