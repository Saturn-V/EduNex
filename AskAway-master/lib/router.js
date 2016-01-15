// GLOBAL IRON ROUTER CONFIG
Router.configure({
  layoutTemplate: 'layout',
    notFoundTemplate: '404'
});


// Home
Router.route('/landing', {
  template: 'landing',
  name: "landing"
});

Router.route('/signUp', {
  template: 'signUp',
  name: 'signUp'
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
    data : function(){
        var currentDepartment = this.params._id;
        Session.set('currentDepartment', currentDepartment);
        return Departments.findOne({ _id: currentDepartment });
    }
});


Router.route('departmentOverview/allCourses/courseDetails/:_id', {
    template: 'courseDetails',
    name: 'courseDetails',
    data : function(){
        // var currentCourse = this.params._id;
        // var course = Courses.findOne({ _id: currentCourse });
        var currentDepartment = this.departmentID;
        return Departments.findOne({currentDepartment});
    }
    
})