function getAcademy(academyName, callback, errorCallback) {
  setTimeout(() => {
    let academy = { name: 'My academy' };

    callback(academy)
  }, 100);
}

function getUser(token, callback, errorCallback) {
  setTimeout(() => {
    let user = { id: 1, name: 'Misha' };

    callback(user)
  }, 100);
}

function getCourse(courseId, callback, errorCallback) {
  setTimeout(() => {
    let course = { id: 123, name: 'First course' };

    callback(course)
  }, 100);
}

function getUserProgressOnCourse(userId, courseId, callback, errorCallback) {
  setTimeout(() => {
    let progress = { percent: 5 };

    callback(progress)
  }, 100);
}


let academyPromise = getAcademy('academy');


let nextPromise = academyPromise
  .then((academy) => getUser(1))
  .then((user) => {
    this._currentUser = user;

    return getCourse(123)
  })
  .then((course) => getUserProgressOnCourse(course.id, this._currentUser.id))
  .then((progress) => {
    // ...
  });






getAcademy(
  'My academy',

  (academy) => {
    this._acacdemy = academy;

    getUser(
      1,

      (user) => {
        getCourse(123, (course) => {

          getUserProgressOnCourse(course.id, user.id)


        });
      },

      () => {
        // redirect to login page
      }
    )
  },

  (error) => {
    window.location.href = 'google.com';
  }
);