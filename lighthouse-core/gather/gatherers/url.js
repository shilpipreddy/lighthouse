/**
 * @license
 * Copyright 2016 Google Inc. All rights reserved.
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
'use strict';

const Gatherer = require('./gatherer');

class URL extends Gatherer {

  afterPass(options) {
    // Used currently by cache-start-url audit, which wants to know if the start_url
    // in the manifest is stored in the cache.
    // Instead of the originally inputted URL (options.initialUrl), we want the resolved
    // post-redirect URL (which is here at options.url)
    return {
      initialUrl: options.initialUrl,
      finalUrl: options.url
    };
  }
}

module.exports = URL;
