const activities = [
    { name: "Math Assignment", description: "Complete algebra problems", completed: false },
    { name: "JavaScript Practice", description: "Practice DOM manipulation", completed: false },
    { name: "Mini Project", description: "Work on frontend project", completed: false },
    { name: "Exam Revision", description: "Revise Unit 1 and 2", completed: false },
    { name: "Coding Challenge", description: "Solve 2 coding problems", completed: false }
];

const activityList = document.getElementById("activityList");
const progressText = document.getElementById("progressText");

function renderActivities() {
    activityList.innerHTML = "";

    let completedCount = 0;

    activities.forEach((activity, index) => {

        if (activity.completed) {
            completedCount++;
        }

        const card = document.createElement("div");
        card.classList.add("activity-card");

        card.innerHTML = `
            <h3>${activity.name}</h3>
            <p>${activity.description}</p>
            <p class="status ${activity.completed ? "completed" : "pending"}">
                Status: ${activity.completed ? "Completed" : "Pending"}
            </p>
            <button class="complete-btn" onclick="markCompleted(${index})">
                Mark as Completed
            </button>
        `;

        activityList.appendChild(card);
    });

    progressText.textContent = 
        `${completedCount} out of ${activities.length} activities completed`;
}

function markCompleted(index) {
    activities[index].completed = true;
    renderActivities();
}

renderActivities();
