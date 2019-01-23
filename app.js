const github = new Github;
const ui = new UI;
const searchUser = document.querySelector('#searchUser');
searchUser.addEventListener('keyup', (e) => {
  const text = e.target.value;
  if (text !== '') {
    github.getUser(text).then(data => {
      if (data.profile.message === 'Not Found') {
        //Show alert

        ui.showAlert ('Profile does not exist', 'alert alert-danger')

      } else {
        //Show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    })
  } else {
    ui.clearProfile();
  }
})