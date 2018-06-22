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

/**
 * list of all the Typescript types used in the container package. these only apply
 * to the files with a .ts extension
 */

/** holds information about the user who is signed in */
interface AuthStateIF {
  old_uid?: string;
  new_uid?: string;
  new_user?: UserIF;
  old_user?: UserIF;
}

/** this represents a user object */
interface UserIF {
  displayName: string;
  photoURL: string;
  isAnonymous: boolean;
  email: string;
  emailVerified: boolean;
  uid: string;
  timestamp: any;
  googleAccessToken?: any;
}

/** this represents the data that is stored in firebase */
interface DataIF {
  todoArray: TodoIF[];
}

/** this represents a constituent element of the todoArray */
interface TodoIF {
  item: string;
  done: boolean;
}

/** export the following types publicly */
export {
  AuthStateIF,
  UserIF,
  DataIF,
  TodoIF
}