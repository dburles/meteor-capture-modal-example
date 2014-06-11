if (Meteor.isClient) {

  UI.body.events({
    'click .modal': function(event) {
      var template = $(event.target).data('modal-template');
      Session.set('activeModal', template);
    }
  });

  Template.modal.helpers({
    activeModal: function() {
      return Template[Session.get('activeModal')];
    }
  });

}
