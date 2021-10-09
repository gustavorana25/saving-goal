import { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const CreateGoalPage = lazy(() => import('../pages/CreateGoal/CreateGoal'));

function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Switch>
          <Route path="/" component={CreateGoalPage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default Router;
