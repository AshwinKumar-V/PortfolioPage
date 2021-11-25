/*-----------JavaScript for index.html------------*/


/*-----------JavaScript for Projects Carousel----------------------------------------------------*/

const prev = document.getElementById("previous")
const next = document.getElementById("next")
const wrapper = document.getElementById("carousel_wrapper")

var page = 1
var maxPage = 3
var pos = 0
pageEnable()

//function to change page_btn style to enable
function pageEnable()
{
    document.getElementById(page.toString()).setAttribute("style", "background-color:#2F80ED; border-color: #2F80ED; color: #ffffff")
}

//function to change page_btn style to disable
function pageDisable()
{
    document.getElementById(page.toString()).setAttribute("style", "background-color:none; border-color: ##4F4F4F; color: #333333")
}

//function to go to previous page
prev.addEventListener('click', function(){
    if (page > 1)
    {
        pos -= 101
        wrapper.style.transform = 'translateX(-'+ pos +'%)'
        pageDisable()
        page -= 1
        pageEnable()
    }
})

//function to go to next page
next.addEventListener('click', function(){
    if (page < maxPage)
    {
        pos += 101
        wrapper.style.transform = 'translateX(-'+ pos +'%)'
        pageDisable()
        page += 1
        pageEnable()
    }
})

function pageReset()
{
    pos = 0
    wrapper.style.transform = 'translateX(-'+ pos +'%)'
    pageDisable()
    page = 1
    pageEnable()
}

//function to go to page 1
document.getElementById("1").addEventListener('click', function(){
    pageReset()
})

//function to go to page 2
document.getElementById("2").addEventListener('click', function(){
    pos = 101
    wrapper.style.transform = 'translateX(-'+ pos +'%)'
    pageDisable()
    page = 2
    pageEnable()
})

//function to go to page 3
document.getElementById("3").addEventListener('click', function(){
    pos = 202
    wrapper.style.transform = 'translateX(-'+ pos +'%)'
    pageDisable()
    page = 3
    pageEnable()
})

/*-----------------------------------------------------------------------------------------------*/

/*-----------JavaScript for Projects Filter----------------------------------------------------*/

//function to display only JS projects
document.getElementById("JS").addEventListener('click', function(){
    var i
    var all = document.getElementsByClassName("projects_card")
    var len = all.length
    for(i = 0; i < len; i += 1)
    {
        all[i].style.display = "none"
    }
    var list = document.getElementsByClassName("js")
    var len = list.length
    for(i = 0; i < len; i += 1)
    {
        list[i].style.display = "flex"
    }
    document.getElementById("project_count").innerHTML = len
    pageReset()
    maxPage = 1
    document.getElementById("2").style.display = "none"
    document.getElementById("3").style.display = "none"
})

//function to display all projects
function displayAll()
{
    var i
    var all = document.getElementsByClassName("projects_card")
    var len = all.length
    for(i = 0; i < len; i += 1)
    {
        all[i].style.display = "flex"
    }
    document.getElementById("project_count").innerHTML = len
    pageReset()
    maxPage = 3
    document.getElementById("2").style.display = "block"
    document.getElementById("3").style.display = "block"
}

document.getElementById("all").addEventListener('click', function(){
    displayAll()
})

document.getElementById("HTML").addEventListener('click', function(){
    displayAll()
})

document.getElementById("CSS").addEventListener('click', function(){
    displayAll()
})

document.getElementById("responsive").addEventListener('click', function(){
    displayAll()
})

/*-----------------------------------------------------------------------------------------------*/
