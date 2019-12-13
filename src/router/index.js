import React from 'react'
import { Route, Switch } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import _ from 'lodash'
import config from '../router/config'
import AllComponent from '../pages'

export default function index() {
  return (
    <Switch>
      {
        _.map(config.menus, item => {
          const Component = AllComponent[item.component]
          return (
            <Route path={item.key} key={item.key}>
              <DocumentTitle title={item.title}>
                <Component />
              </DocumentTitle>
            </Route>
          )
        })
      }
    </Switch>
  )
}
