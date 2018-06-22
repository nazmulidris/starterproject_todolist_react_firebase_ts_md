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

/// <reference path="../../../typings/globals/node/index.d.ts" />

/**
 * these functions handle modifying the data in the app and saving it to firebase
 */

import {DataIF, TodoIF} from "./interfaces";
const GLOBAL_CONSTANTS = require('../../global/constants').GLOBAL_CONSTANTS;
import * as persistence from './firebase';
import {applicationContext} from './context'
const lodash = require('lodash');

/** this sets up all the event listeners for data mutation events */
function init(ctx) {
  
  ctx.addListener(
    GLOBAL_CONSTANTS.LE_ADD_TODO_ITEM,
    _addTodoItem
  );
  
  ctx.addListener(
    GLOBAL_CONSTANTS.LE_MODIFY_TODO_ITEM,
    _modifyTodoItem
  );
  
}

/**
 * this actually adds the given todo_text string to the todoArray in DataIF in the
 * context
 * more info: https://lodash.com/docs/4.16.2#clone
 */
function _addTodoItem(todo_text?) {
  
  if (!lodash.isNil(todo_text)) {
    
    let data_copy: DataIF = lodash.cloneDeep(applicationContext.getData());
    
    let todoObject: TodoIF = {
      item: todo_text,
      done: false,
    };
    
    if (lodash.isNil(data_copy)) {
      data_copy = {todoArray: [todoObject]};
    } else {
      data_copy.todoArray.push(todoObject);
    }
    
    persistence.saveDataToFirebase(data_copy, applicationContext);
    
  }
  
}

/**
 * this actually modifies the completed state of the todoItem that is selected in the UI
 */
function _modifyTodoItem(index?) {
  
  try {
    
    let data_copy: DataIF = lodash.cloneDeep(applicationContext.getData());
    let todoObject: TodoIF = data_copy.todoArray[index];
    todoObject.done = !todoObject.done;
    persistence.saveDataToFirebase(data_copy, applicationContext);
    
  } catch (e) {
    console.log("_modifyTodoItem had a problem ...");
    console.dir(e);
  }
  
}

/** expose these functions publicly */
export {init}