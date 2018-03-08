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
      name: 'Web Applications',
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
  res.render('class-info', {
    title: 'Class Info',
    pageHeader: {
      title: 'CSCI-446 Web Applications'
    },
    classInfo: {
      instructor: "Cyndi Rader",
      credits: "3.0",
      location: "Online"
    },
    assignments: [{
      name: 'Unit 9',
      due: 'March 14',
      value: '50',
      status: 'in progress'
    },{
      name: 'Unit 10',
      due: 'March 21',
      value: '50',
      status: 'not started'
    }]
  });
};

/* GET 'Add review' page */
module.exports.addAssignment = function(req, res) {
  res.render('class-assignment-form', {
    title: 'Add assignment',
    pageHeader: {
      title: 'Add Assignment for CSCI-446S'
    },
    formInfo: {
      name: 'Name',
      due: 'Due',
      points: 'Points',
      status: 'Status'
    },
    statuses: ['Not started','In progress','Done','Submitted']
  });
};