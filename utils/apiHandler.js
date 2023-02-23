const apiHandler = (req, methodAllowed, callback) => {
  const { method } = req;
  switch (method) {
    case methodAllowed:
      callback();
      break;
    default:
      res.setHeader("Allow", [methodAllowed]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
};

export default apiHandler;
