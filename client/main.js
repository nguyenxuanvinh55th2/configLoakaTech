import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';

import store from '../imports/store';
import {client} from '../imports/apollo-client';

import {renderRoutes} from '../imports/routes.js';

import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/ag-grid/dist/styles/ag-grid.css';
import '/node_modules/ag-grid/dist/styles/theme-fresh.css';

Meteor.startup(() => {
  render(
    <ApolloProvider store={store} client={client}>
      {renderRoutes()}
    </ApolloProvider>
    , document.getElementById('render-target'));
});
