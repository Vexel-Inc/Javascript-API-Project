# Javascript-API-Project
This Is a Viewr Github Repos App Using Javascript

## Advanteges
- Modern Style Like [Github](https://github.com/)
- Show The Repo:
   - Name
   - Description
   - Languages
   - Stars Count
   - Forks Count
- Show The Github User Gists Count
- Show The Github User Image & Name
- Show The Github User Followers
- Add The Footer

# Usage

```Javascript
// Fetching Data
let owner = new XMLHttpRequest();
owner.open("GET","https://api.github.com/users/elzerowebschool");
owner.send();
owner.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        let requestJson = JSON.parse(this.responseText);

        console.log(requestJson);
        // Change User Source Image
        user_image.src = requestJson.avatar_url;

        // Convert User Name To Array
        let user_txt_array = Array.from(requestJson.login); // ES6 [Ecma Script 6] Method
        // console.log(user_txt_array);
        user_txt_array = user_txt_array.join(" ").toUpperCase(); // Add a Separator To User Text Name & Convert To Upper Case

        // Change User Text Name
        user_txt.textContent = user_txt_array;

        // Change Gists Count
        gists_span.textContent = requestJson.public_gists + " Gists" || 0;

        // Change Followers Count
        followers_span.textContent = requestJson.followers + " Followers" || 0;

        // Change Type Text
        type_span.textContent = requestJson.type;

        // Change Repos Count Text
        repos_count.textContent = requestJson.public_repos + " Repositories" || 0;
    }
}
```
- Note: The Used Github User In This Repo Is: [ElzeroWebSchool](https://github.com/ElzeroWebSchool), You Can Change OR Add This User Later

# License
This Project Licensed Under The [MIT License](https://github.com/Vexel-Inc/Javascript-API-Project/blob/main/LICENSE)
