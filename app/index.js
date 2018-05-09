import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import store from './store/store'
import {PreviewsMenuContainer} from './containers/PreviewsMenu'
import {AddOnPreviewMenuContainer} from './containers/AddOnPreviewMenu'
import './index.less';

render(
  <Provider store={store}>
    <div className="main-container">
      <PreviewsMenuContainer/>
      <AddOnPreviewMenuContainer/>
    </div>
  </Provider>,
  document.getElementById('app')
);