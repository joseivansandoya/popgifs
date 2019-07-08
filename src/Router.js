import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// Import App screens
import ImagesList from './components/ImagesListScreen';
import ImageDetail from './components/ImageDetailScreen';

function Router () {
  return (
    <BrowserRouter>
      <Route path='/' exact component={ImagesList} />
      <Route path='/detail/:id' component={ImageDetail} />
    </BrowserRouter>
  )
}

export default Router;
