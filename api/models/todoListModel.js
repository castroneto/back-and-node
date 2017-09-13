
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  uid: {
    type: String,
    Required: 'Kindly enter the name of the task'
  },
  password: {
    type: String,
    Required: 'Kindly enter the name of the task'
  },
  name: {
    type: String,
    Required: 'Kindly enter the name of the task'
  },
  startTime: {
    type: String,
    Required: 'Kindly enter the name of the task'
  },
  endTime: {
    type: String,
    Required: 'Kindly enter the name of the task'
  },
  oneDay: {
    type: String,
    Required: 'Kindly enter the name of the task'
  },
  adress: {
    type: String,
    Required: 'Kindly enter the name of the task'
  },
  description: {
    type: String,
    Required: 'Kindly enter the name of the task'
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);


/*
email
senha
id
eventos




*/
