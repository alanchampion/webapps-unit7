/* GET 'home' page */
module.exports.classlist = function(req, res) {
  res.render('classes-list', {
    title: 'Mines Planner',
    pageHeader: {
      title: 'Mines Planner',
      strapline: 'Making sure you get it done!'
    },
    sidebar: "Select a class to get started! You will be able to view and add assignments by class. Mines Planner will help you keep track of those pesky due dates and assignment plannings.",
    classes: [{
      name: 'Web Apps',
      id: 'CSCI-446',
      instructor: 'Cyndi Rader'
    },{
      name: 'Creative Writing Foundations',
      id: 'LAIS-201',
      instructor: 'Seth Tucker'
    }]
  });
};

/* GET 'Location info' page */
module.exports.classInfo = function(req, res) {
  res.render('class-info', {title: 'Location info'});
};

/* GET 'Add review' page */
module.exports.addAssignment = function(req, res) {
  res.render('class-assignment-form', {title: 'Add review'});
};