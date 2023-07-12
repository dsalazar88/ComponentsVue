/**
* @file js functions to App.vue
* @author Daniel Salazar <danielsalzar081@gmail.com>
* @copyright Daniel Salazar 2023
*/

/** @constant {constantDataTypeHere} */
const App = {
    /** 
    * This function obtain the posts from the API.
    * @param {}
    * @return {Array} Array with the posts obtained from the API.
    */
    getPost(){
        return fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => {
                return data
            });
    }
}

export {
    App
}