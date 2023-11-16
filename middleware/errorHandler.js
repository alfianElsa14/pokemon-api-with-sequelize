exports.handleValidationError = (res, error) => {
    res.status(400).json({ status: 'Validation Failed', message: error.details[0].message });
};

exports.handleNotFoundError = (res, data) => {
    res.status(404).json({ status: 'Error', message: `${data} tidak ditemukan` });
};

exports.handleExistingRecordError = (res, message) => {
    res.status(400).json({ status: 'Error', message });
};

exports.handleInternalError = (res) => {
    res.status(500).json({ message: 'Internal server Error' });
};
