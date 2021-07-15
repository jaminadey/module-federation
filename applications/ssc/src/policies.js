const getPolicies = () =>
  fetch(`http://localhost:7500/api/policies`).then((resp) =>
    resp.json()
  );

const getPolicyById = (_, { id }) =>
  fetch(`http://localhost:7500/api/policies/${id}`).then((resp) =>
    resp.json()
  );

module.exports = {
  getPolicies,
  getPolicyById,
};
