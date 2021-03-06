#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
#
#
#
import cgi
import datetime
import urllib
import webapp2
import logging
from google.appengine.ext import db
from google.appengine.api import users

import jinja2
import os

template_dir = os.path.join(os.path.dirname(__file__), 'templates')
jinja_environment = jinja2.Environment(
   loader=jinja2.FileSystemLoader(template_dir))

class MainHandler(webapp2.RequestHandler):
    def get(self):
#        self.response.write('Hello world!')

#        Log = logging.getLogger('myLogger')
#        Log = logging.getLogger()
#        levels = {'CRITICAL' : logging.CRITICAL,
#                  'ERROR' : logging.ERROR,
#                  'WARNING' : logging. WARNING,
#                  'INFO' : logging.INFO,
#                  'DEBUG' : logging.DEBUG
#}
#        level = levels['CRITICAL']
#        Log.setLevel(level)
#        logging.basicConfig(level=logging.WARNING)

        logging.getLogger().setLevel(logging.DEBUG)
        template = jinja_environment.get_template('app.html')
        template_values = {}
        self.response.out.write(template.render(template_values))



app = webapp2.WSGIApplication([
    ('/', MainHandler)
], debug=True)
