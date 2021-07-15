import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import NamedItemsEditor from "./NamedItemsEditor";
import SummaryOfChangesPage from "./SummaryOfChangesPage";
import PaymentPage from "./PaymentPage";
import ConfirmationPage from "./ConfirmationPage";

const AmendmentsRouter = () => {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route exact path="/policy/:id/amend" component={NamedItemsEditor} />
        <Route path="/policy/:id/amend/summary" component={SummaryOfChangesPage} />
        <Route path="/policy/:id/amend/pay/" component={PaymentPage} />
        <Route path="/policy/:id/amend/confirm" component={ConfirmationPage} />
      </Switch>
    </Suspense>
  );
};

export default AmendmentsRouter;