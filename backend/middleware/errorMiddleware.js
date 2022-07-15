const notFound = (req, res, next) => {
  res.status(404).send("<h1>No Route for this API Path!</h1>");
};

export default notFound;
