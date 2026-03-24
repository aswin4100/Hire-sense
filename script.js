function applyJob(button) {
    let card = button.parentElement;
    let badge = card.querySelector(".badge");

    badge.textContent = "Applied";
    badge.classList.remove("new");
    badge.classList.add("applied");

    button.textContent = "Applied";
    button.disabled = true;
}

// DUMMY USERS

const students = [
    { email: "sriman@gmail.com", password: "bhavani" },
    { email: "aswin@gmail.com", password: "aswin" },
    { email: "bhaskar@gmail.com", password: "bhashar" }
];

const recruiters = [
    { email: "kajal@gmail.com", password: "kajal" },
    { email: "nayantara@gmail.com", password: "nayantara" },
    { email: "tammana@gmail.com", password: "tammana" }
];


// LOGIN FUNCTION

function login() {
    let role = document.getElementById("role").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let errorMsg = document.getElementById("error-msg");

    // STUDENT LOGIN CHECK
    if (role === "student") {
        let found = students.find(user => user.email === email && user.password === password);

        if (found) {
            alert("Student Login Successful");
            window.location.href = "Dashboard.html";
            return;
        }
    }

    // RECRUITER LOGIN CHECK
    if (role === "recruiter") {
        let found = recruiters.find(user => user.email === email && user.password === password);

        if (found) {
            alert("Recruiter Login Successful");
            window.location.href = "rec.html";
            return;
        }
    }

    // INVALID
    errorMsg.textContent = "Invalid email or password!";
}


function postJob() {
    let title = document.getElementById("jobTitle").value;
    let company = document.getElementById("company").value;
    let location = document.getElementById("location").value;

    if (title === "" || company === "" || location === "") {
        alert("Please fill all fields");
        return;
    }

    let jobList = document.getElementById("jobList");

    let jobCard = document.createElement("div");
    jobCard.classList.add("job-card");

    jobCard.innerHTML = `
        <h3>${title}</h3>
        <p>Company: ${company}</p>
        <p>Location: ${location}</p>
        <span class="badge new">Active</span>
    `;

    jobList.appendChild(jobCard);

    // Clear inputs
    document.getElementById("jobTitle").value = "";
    document.getElementById("company").value = "";
    document.getElementById("location").value = "";
}