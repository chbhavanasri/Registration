let userArray = []
function show() {
    let name = document.getElementById("userName").value
    let email = document.getElementById("userEmail").value
    let userCount = userArray.filter((x) => {
        return x.ObjectEmail == email
    })
    if (userCount == 0) {
        let userDetails = { ObjectName: name, ObjectEmail: email }
        userArray.push(userDetails)
        console.log(userArray)
    }
    else {
        let b=document.getElementById('error')
        b.innerHTML="this email is already existed"

    }

    let userContainer = document.getElementById("userbhavana")
    userContainer.innerHTML=''
    userArray.map((x) => {
        let div = document.createElement('div')
        let headingTwo = document.createElement('h2')
        let headingFour = document.createElement('h4')
        div.classList.add('userdiv')
        headingTwo.innerHTML = x.ObjectName
        headingFour.innerHTML = x.ObjectEmail
        userContainer.appendChild(div)
        div.appendChild(headingTwo)
        div.appendChild(headingFour)
    })

    document.getElementById("userName").value = ''
    document.getElementById("userEmail").value = ''

}

