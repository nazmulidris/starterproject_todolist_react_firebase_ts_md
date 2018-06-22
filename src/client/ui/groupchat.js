/*
 * Copyright 2018 Nazmul Idris. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, {Component} from 'react';
import {applicationContext} from '../container/context';
import {Paper, Card, CardActions, CardHeader, CardText, FlatButton} from 'material-ui';
const GLOBAL_CONSTANTS = require('../../global/constants').GLOBAL_CONSTANTS;

/**
 * Props that are passed to it: n/a
 * State that it manages: n/a
 * Context that is requires: app
 */
class GroupChat extends Component {
  
  constructor(props, context) {
    super(props, context);
  }
  
  render() {
    const style = {
      height: 100,
      width: "100%",
      padding: 20,
      textAlign: 'center',
      display: 'inline-block',
    };
    
    return (
      <div>
        <Paper style={style}>
          This is where the group chat functionality goes
        </Paper>
      </div>
    );
  }
  
  /** tell react that we have this object in the context ... note static keyword */
  static contextTypes = {
    app: React.PropTypes.object.isRequired,
  }
  
}// end class GroupChat

export {GroupChat}