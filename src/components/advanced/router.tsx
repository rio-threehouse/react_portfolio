import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { BasicLayout } from '../layout/basic';
import { TopPage } from '../pages/top-page';
import { HooksTutorial } from '../pages/hooks-tutorial';

export const Router: React.FC = () => {

  return(
    <BrowserRouter>
      <BasicLayout>
        <Switch>
          <Route exact path="/" component={TopPage} />
          <Route exact path="/hooks-tutorial" component={HooksTutorial} />
        </Switch>
      </BasicLayout>
    </BrowserRouter>
  )
}
