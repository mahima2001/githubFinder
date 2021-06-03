class Github{
    constructor(){
        this.client_id='de5de36fdfbc77e6cb2b';
        this.client_secret='b68ddf92ec88f86c2501f6cfdf50be7ba4c65db2';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

  async getUser(user){
    const profileResponse= await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    const profile=await profileResponse.json();
    const repos=await repoResponse.json();
    return{
        profile,
        repos
    }
 }
}