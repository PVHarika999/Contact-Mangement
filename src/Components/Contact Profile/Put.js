// PUT update contact by ID
router.put('/:id', async (req, res) => {
  const {error} = validateContact(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new: true},
    )
    if (!updatedContact)
      return res.status(404).json({message: 'Contact not found'})
    res.status(200).json(updatedContact)
  } catch (err) {
    res.status(500).json({message: 'Error updating contact'})
  }
})
