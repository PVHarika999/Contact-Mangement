// DELETE a contact by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id)
    if (!deletedContact)
      return res.status(404).json({message: 'Contact not found'})
    res.status(200).json({message: 'Contact deleted'})
  } catch (err) {
    res.status(500).json({message: 'Error deleting contact'})
  }
})
