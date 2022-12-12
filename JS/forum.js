function generateError() {
    let result = document.createElement("div")
    result.innerHTML = `
                        <div class="card-header">
                          <h2>⚠Произошла ошибочка⚠</h2>
                        </div>
                        <p>Больше информации в консоли</p>`
    result.classList = "card"
    return result
}

function getForum() {
    return document.getElementById("posts-container-id")
}

function filter() {
    return Math.floor(Math.random() * 100);
}

function ready() {
    let forum = getForum();
    let string = "";
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(result => result.json())
        .then(object => {
            let filtered_posts = object.filter(param => param.id > filter());
            filtered_posts.forEach(element =>
                string += "<div class='post'> <div class='post-title'>" + element.title + "</div>" +
                    "<div class='post-body'>" + element.body + "</div> </div>")
            forum.innerHTML = string;
            document.getElementById("preloader-img").style.display = "none";
        })
        .catch(error => {
            forum.innerHTML = "<div class='error'> Произошла ошибка </div>";
        })
}

document.addEventListener("DOMContentLoaded", ready)