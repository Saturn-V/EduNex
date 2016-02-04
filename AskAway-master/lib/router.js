// GLOBAL IRON ROUTER CONFIG
Router.configure({
      layoutTemplate: 'mainLayout',
      notFoundTemplate: '404',
});

Router.onStop(function () {
    if (slideout) {
      slideout.close();
    }
  });


// Home
Router.route('/', {
  template: 'landing',
  name: "landing"
});

Router.route('/enroll', {
  template: 'enroll',
  name: 'enroll'
});

Router.route('/aboutUs', {
  template: 'aboutUs',
  name: 'aboutUs'
});


Router.route('/home', {
  template: 'home',
  name: 'home'
});

Router.route('/logIn', {
  template: 'logIn',
  name: 'logIn'
});


Router.route('/departmentOverview', {
  template: 'departmentOverview',
  name: 'departmentOverview'
});


Router.route('/loadData', {
  template: 'loadData',
  name: 'loadData'
});


Router.route('/profile', {
    template: 'profile', 
    name: 'profile'
});

Router.route('/forgotPassword', {
    template: 'forgotPassword', 
    name: 'forgotPassword'
});


Router.route('departmentOverview/allCourses/:_id', {
    template: 'allCourses',
    name: 'allCourses',
    data : function() {
        var curentDepartment = Departments.findOne({ _id: this.params._id});
            return curentDepartment;
      }
});


Router.route('departmentOverview/allCourses/courseDetails/:_id', {
    template: 'courseDetails',
    name: 'courseDetails',
    data : function() {
            var getCourse = Courses.findOne({ _id: this.params._id });
            return getCourse;
    }
})