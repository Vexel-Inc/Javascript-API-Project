// Variables
let main_title = 'Javascript API Fetching Web App';
let repositories_boxs = document.querySelector(".repositories-boxs");
let user_image = document.querySelector('[alt="user-image"]');
let user_txt = document.querySelector(".user-txt");
let gists_span = document.querySelector(".gists-span");
let followers_span = document.querySelector(".followers-span");
let type_span = document.querySelector(".type-span");
let repos_count = document.querySelector(".repos-count");
let footer_span = document.querySelector(".footer-span");


// Change Document Title
document.title = main_title;

// Change Footer Text
footer_span.textContent = `${main_title} Created By Ahmed Moharem © ${new Date().getFullYear()}`;

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


let request = new XMLHttpRequest();
request.open("GET","https://api.github.com/users/elzerowebschool/repos");
request.send();

request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        let requestJson = JSON.parse(this.responseText);

        for (let i = 0; i < requestJson.length; i++) {
            // console.log(requestJson[i]);

            let repository_box_content = `
            <header>
                <ion-icon name="book-outline"></ion-icon>
                <span class="repo-name">${requestJson[i].name}</span>
            </header>
            <div class="repository-content">
                <span>${requestJson[i].description || "No Any Description To Show"}</span>
            </div>
            <div class="repository-end-boxs">
                <div class="repository-end-box" title="${requestJson[i].language + " Language" || "No Any Language To Show"}">
                    <span id="txt"><b><ion-icon name="code-outline"></ion-icon></b> ${requestJson[i].language || "No Any Language To Show"}</span>
                </div>
                <div class="repository-end-box" title="Stars Count">
                    <span>
                        <ion-icon name="star-outline"></ion-icon>
                        ${requestJson[i].stargazers_count || 0}
                    </span>
                </div>
                <div class="repository-end-box" title="Forks Count">
                    <span>
                        <ion-icon name="git-branch-outline"></ion-icon>
                        ${requestJson[i].forks || 0}
                    </span>
                </div>
            </div>`;

            // Create Repository Box
            let repository_box = document.createElement("div");
            repository_box.className = "repository-box";

            // Add Repository Box To Repositories Boxs
            repositories_boxs.appendChild(repository_box);

            // Add Content To Repository Box
            repository_box.innerHTML = repository_box_content;

            // Conditions
            // if (requestJson[i].language === null) {
            //     console.log('aa');
                
            // }
            // if (requestJson[i].language === 'html'.toUpperCase()) {
            //     let txt_sp = document.querySelectorAll('#txt');
            //     txt_sp.forEach(txts => {
            //         txts.textContent = `🔴 ${requestJson[i].language}`;
            //     });
            // }

            // let txt_sp = document.querySelector('#txt');

            // switch (requestJson[i].language) {
            //     case requestJson[i].language = 'html'.toUpperCase():
            //             txt_sp.textContent = `🔴 ${requestJson[i].language}`;
            //         break;
            
            //     default:
            //         break;
            // }
        }
    }
}