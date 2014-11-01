if (Meteor.isClient) {

  Template.body.events({
    'click button.modal': function(event) {
      var template = $(event.target).data('modal-template');
      Session.set('activeModal', template);
    }
  });

  Template.modal.helpers({
    activeModal: function() {
      return Session.get('activeModal');
    }
  });

}
