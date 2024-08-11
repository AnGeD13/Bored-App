const statusNode = document.querySelector('.activity-status');
const titleNode = document.querySelector('.activity-title');
const btnNode = document.querySelector('.js-btn');
const bodyNode = document.body;

const STATUS_GOOD = "Ура, теперь не скучно 🔥";


btnNode.addEventListener('click', function() {

    fetch("https://bored.api.lewagon.com/api/activity/")
        .then(data => data.json())
        .then(res => {
            if (res.activity) {
                let activity = res.activity;
                bodyNode.classList.add("activity");
                statusNode.innerText = STATUS_GOOD;
                titleNode.innerText = activity;
            }
        })
});

