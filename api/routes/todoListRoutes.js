'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');


  // todoList Routes
  app.route('/events')
    .post(todoList.create_a_event)
    .get(todoList.list_all_events);



  app.route('/tasks/:taskId')
    .get(todoList.find_a_event)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);
};
