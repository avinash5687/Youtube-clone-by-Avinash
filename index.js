/*

Need 2 things :
(1) Show/Display video on homepage
(2) Search when something is typed in the search-box.

display()
-Show/Display video on homepage
-Based upon most popular videos
-Should be called directly without any event
(No Hover, No Click, No On Click)
-on page load


search-video()
-Search when something is typed in the search-box.
-Take the "String" typed in search-box on the string


*/

let div = document.getElementById("videoiv");

// Show/Display video on homepage

async function display(){


}

display();

// Search when something is typed in the search-box

async function searchVideos(){
    document.getElementById("videoiv").innerHTML="";

    let video = document.getElementById("video").value;
    
    // Search for videos
/*
    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${video}&type=video&key=AIzaSyA00OxUbfdfVAjHn-9l48s0t-n_j7CBbNs&maxResults=25`);
    let data = await res.json();

    for({
        id:{videoId}}of data.items){
            let videoiv = document.createElement("iframe")
            videoiv.setAttribute("class","mons")
            videoiv.src = `https://www.youtube.com/embed/${videoId}`;
            videoiv.allow = 'fullscreen'
            div.append(videoiv)
        }
}
*/
let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${video}&type=video&key=AIzaSyA00OxUbfdfVAjHn-9l48s0t-n_j7CBbNs&maxResults=25`);
let data = await res.json();

for({
id:{videoId}}of data.items){
let videodiv= document.createElement("iframe")
videodiv.setAttribute("class","mons")
videodiv.src = `https://www.youtube.com/embed/${videoId}`;
videodiv.allow = 'fullscreen'
div.append(videodiv)

}