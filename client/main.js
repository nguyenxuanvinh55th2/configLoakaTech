import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';

import store from '../imports/store';
import {client} from '../imports/apollo-client';

import {renderRoutes} from '../imports/routes.js';

Meteor.startup(() => {
  render(
    <ApolloProvider store={store} client={client}>
      {renderRoutes()}
    </ApolloProvider>
    , document.getElementById('render-target'));
});
