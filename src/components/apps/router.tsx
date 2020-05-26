import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HeaderBar } from '../molecules/header-bar';
import { PageList } from '../pages/page-list';
import { HooksTutorial } from '../pages/hooks-tutorial';

export const Router: React.FC = () => {
  return(
    <BrowserRouter>
      <HeaderBar />
      <Switch>
        <Route exact path="/" component={PageList} />
        <Route exact path="/hooks-tutorial" component={HooksTutorial} />
      </Switch>
    </BrowserRouter>
  )
}
