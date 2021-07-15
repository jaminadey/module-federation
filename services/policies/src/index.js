const express = require("express");
const policies = require("./policies");
const app = express();
const port = 7500;

app.use(require("body-parser").json());
app.use(require("cors")());

app.get("/api/policies/:id?", function (req, res) {
  const policyId = parseInt(req.params.id || 0);
  if (policyId > 0)
    res.send(policies.find(({ id }) => id === policyId) || null);
  else
    res.send(policies);
});

app.listen(port, () =>
  console.log(`Policies service listening at http://localhost:${port}`)
);
