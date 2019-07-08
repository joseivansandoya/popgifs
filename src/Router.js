import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// Import App screens
import ImagesList from './components/ImagesList';
import ImageDetail from './components/ImageDetail';

function Router () {
  return (
    <BrowserRouter>
      <Route path='/' exact component={ImagesList} />
      <Route path='/detail/:id' component={ImageDetail} />
    </BrowserRouter>
  )
}

export default Router;
