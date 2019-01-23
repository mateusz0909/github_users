class UI {
  constructor() {
    this.profile = document.querySelector('.profile');
  }
  showProfile(user) {
    console.log(user)
    this.profile.innerHTML = `
    <div class=" card card-body mb-3">
      <div class="row"> 
        <div class="col-md-3">
          <img class="img-fluid mb-2" src="${user.avatar_url}">
          <a href="${user.html_url}" target='_blank' class="btn btn-primary btn-block mb-4">View profile</a>
        </div>
        <div class="col-md-3">
          <span class="badge badge-primary">Public repos: ${user.public_repos}</span>
          <span class="badge badge-secondary">Public gits: ${user.public_gists}</span>
          <span class="badge badge-success">Followers: ${user.public_followers}</span>
          <span class="badge badge-primary">Following: ${user.public_following}</span>
          <br></br>
          <ul class="list-group">
            <li class="list-group-item">Company: ${user.comapny}</li>
            <li class="list-group-item">Website/blog: ${user.blog}</li>
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">Remember since: ${user.created_at}</li>
           </ul>  
        </div>
      </div>
    </div>
    <h3 class="page-heading mb-3">Latest repos</h3>
    <div id ="repos" class=""></div>  
    
    `
  }

  //show repos

  showRepos(repos) {
    let output = '';
    repos.forEach(function (repo) {
      output += `
      <div class= 'card card-body mb-2'>
        <div class = 'row'>
          <div class= 'col-md-6'>
          <a href = "${repo.html_url}" target="_blank">${repo.name}</a>
          </div>
          <div class= 'col-md-6'>
          <span class="badge badge-primary">Starss: ${repo.stargazers_count}</span>
          <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
          <span class="badge badge-success">Forks: ${repo.forks_count}</span>
          </div>
        </div>
      </div>
      `
    })

    //output repos

    document.getElementById('repos').innerHTML = output;
  }

  // clear alert of searchbox is empty
  clearProfile() {
    this.profile.innerHTML = '';
  }
  //show alert
  showAlert(message, className) {
    this.clearAlert()
    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.searchContainer');
    const search = document.querySelector('.search');

    container.insertBefore(div, search);
    setTimeout(() => {
      this.clearAlert();
    }, 2000)
  }

  clearAlert() {
    const currentAlert = document.querySelector('.alert')
    if (currentAlert) {
      currentAlert.remove()
    }
  }
}