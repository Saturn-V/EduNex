// FlowRouter.notFound = {
//     name: '404',
//     action() {
//         BlazeLayout.render('404');
//     }
// };

FlowRouter.route('/', {
    name: 'landing',
    action() {
        BlazeLayout.render('Landing');
    }
});

FlowRouter.route('/signup', {
    name: 'signup',
    action() {
        BlazeLayout.render('SignUp');
    }
});

FlowRouter.route('/login', {
    name: 'login',
    action() {
        BlazeLayout.render('LogIn');
    }
});

FlowRouter.route('/aboutus', {
    name: 'aboutus',
    action() {
        BlazeLayout.render('AboutUs');
    }
});

FlowRouter.route('/home', {
    name: 'home',
    action() {
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/departmentsOverview', {
    name: 'DepartmentsOverview',
    action() {
        BlazeLayout.render('DepartmentsOverview');
    }
});

FlowRouter.route('/departmentsOverview/coursesOverview/:_id', {
    name: 'CoursesOverview',
    action() {
        BlazeLayout.render('CoursesOverview');
    }
});

FlowRouter.route('/departmentsOverview/coursesOverview/:courseName/:_id', {
    name: 'Course',
    action() {
        BlazeLayout.render('Course');
    }
});







































// // GLOBAL IRON ROUTER CONFIG
// Router.configure({
//       layoutTemplate: 'mainLayout',
//       notFoundTemplate: '404'
// });
//
// Router.onStop(function () {
//     if (slideout) {
//       slideout.close();
//     }
//   });
//
//
// // Home
// Router.route('/', {
//   template: 'landing',
//   name: "landing"
// });
//
// Router.route('/createProfile', {
//   template: 'createProfile',
//   name: 'createProfile'
// });
//
// Router.route('/enroll', {
//   template: 'enroll',
//   name: 'enroll'
// });
//
// Router.route('/aboutUs', {
//   template: 'aboutUs',
//   name: 'aboutUs'
// });
//
//
// Router.route('/home', {
//   template: 'home',
//   name: 'home'
// });
//
// Router.route('/logIn', {
//   template: 'logIn',
//   name: 'logIn'
// });
//
//
// Router.route('/departmentOverview', {
//   template: 'departmentOverview',
//   name: 'departmentOverview'
// });
//
//
// Router.route('/loadData', {
//   template: 'loadData',
//   name: 'loadData'
// });
//
//
// Router.route('/profile', {
//     template: 'profile',
//     name: 'profile'
// });
//
// Router.route('/forgotPassword', {
//     template: 'forgotPassword',
//     name: 'forgotPassword'
// });
//
//
// Router.route('departmentOverview/allCourses/:_id', {
//     template: 'allCourses',
//     name: 'allCourses',
//     data : function() {
//         var curentDepartment = Departments.findOne({ _id: this.params._id});
//         Session.set("departmentID", this.params._id);
//             return curentDepartment;
//       }
// });
//
//
// Router.route('departmentOverview/allCourses/courseDetails/:_id', {
//     template: 'courseDetails',
//     name: 'courseDetails',
//     data : function() {
//             var getCourse = Courses.findOne({ _id: this.params._id });
//             return getCourse;
//     }
// })
