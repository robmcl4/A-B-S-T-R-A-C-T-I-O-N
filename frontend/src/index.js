import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import apollo from '../config/apollo'
import history from './history'
import store from './store'

import Admin from './Admin/Page'
import Home from './Home/Page'
import NotFound from './shared/components/NotFound'

// Initialize Global Imports
import 'moment-timezone' // See: https://github.com/headzoo/react-moment#timezone-support
import 'react-dates/initialize' // See: https://github.com/airbnb/react-dates#initialize
import 'bootstrap/dist/css/bootstrap.css' // See: https://github.com/reactstrap/reactstrap#adding-bootstrap
import 'semantic-ui-css/semantic.min.css' // See: https://react.semantic-ui.com/usage#semantic-ui-css-package
import 'react-dates/lib/css/_datepicker.css' // See: https://github.com/airbnb/react-dates#webpack
import 'open-iconic/font/css/open-iconic-bootstrap.css' // See: https://github.com/iconic/open-iconic#with-bootstrap

const Root = () => (
  <ApolloProvider client={apollo}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/admin' component={Admin} />
          <Route component={NotFound} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  </ApolloProvider>
)

export default Root
