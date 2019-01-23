class Github { 
  constructor() {
    this.client_id = '65be4ca69f9fd02d1014';
    this.client_secret = '6d570c7726d35ac6f0bea36c90b983b3cb908f0f'; 
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }
  async getUser(user) { 
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const profile = await profileResponse.json();      
    const repos = await reposResponse.json();      
    return {
      profile,
      repos
    }
    }
  }
