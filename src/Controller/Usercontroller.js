exports.createuser = (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        res.status(201).send({ message: 'data created successfully', data: data });
    } catch (error) {
        res.status(500).send({ message: 'data create failed', error: error.message });
      }
}