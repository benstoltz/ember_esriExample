define(function () {

  var isDebug = true;
  var app = Ember.Application.create({
    LOG_TRANSITIONS: isDebug,
    LOG_TRANSITIONS_INTERNAL: isDebug,
    LOG_STACKTRACE
  })
})
