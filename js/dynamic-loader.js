document.addEventListener('DOMContentLoaded', function () {
    if (!window.aerossData) {
        console.error("Aeross Data not found!");
        return;
    }

    renderTeam();
    renderAlumni();
    renderAchievements();
    renderLearn();
});

function renderTeam() {
    const container = document.getElementById('team-dynamic-container');
    if (!container) return;

    const data = window.aerossData.team;
    let html = '';

    data.forEach(group => {
        html += `<h2 class="subsection-title">${group.year}</h2>`;
        html += `<div class="remodel-grid">`;

        group.members.forEach(member => {
            html += `
            <div class="member-card">
                <div class="member-image-wrapper">
                    <img src="${member.image}" class="member-image" alt="${member.name}">
                </div>
                <div class="member-info">
                    <h3 class="member-name">${member.name}</h3>
                    <p class="member-role">${member.role}</p>
                    <div class="member-social">
                        ${member.socials[0] !== '#' ? `<a href="${member.socials[0]}" class="social-icon"><i class="fa fa-linkedin"></i></a>` : `<a href="#" class="social-icon"><i class="fa fa-linkedin"></i></a>`}
                        ${member.socials[1] !== '#' ? `<a href="${member.socials[1]}" class="social-icon"><i class="fa fa-instagram"></i></a>` : `<a href="#" class="social-icon"><i class="fa fa-instagram"></i></a>`}
                        ${member.socials[2] !== '#' ? `<a href="${member.socials[2]}" class="social-icon"><i class="fa fa-envelope"></i></a>` : `<a href="#" class="social-icon"><i class="fa fa-envelope"></i></a>`}
                    </div>
                </div>
            </div>`;
        });

        html += `</div>`;
    });

    container.innerHTML = html;
}

function renderAlumni() {
    const container = document.getElementById('alumni-dynamic-container');
    if (!container) return;

    const data = window.aerossData.alumni;
    let html = '';

    data.forEach(group => {
        html += `<div class="alumni-year-group">`;
        html += `<h2 class="subsection-title">${group.year}</h2>`;
        html += `<div class="remodel-grid">`;

        group.members.forEach(member => {
            html += `
            <div class="member-card alumni-card">
                <div class="member-info">
                    <h3 class="member-name">${member.name}</h3>
                    <p class="member-role">${member.role}</p>
                </div>
            </div>`;
        });

        html += `</div></div>`;
    });

    container.innerHTML = html;
}

function renderAchievements() {
    const container = document.getElementById('achievements-dynamic-body');
    if (!container) return;

    const data = window.aerossData.achievements;
    let html = `
        <tr>
            <th>Competition</th>
            <th>Award(s)</th>
            <th>Year</th>
            <th>Project Name</th>
        </tr>
    `;

    data.forEach(item => {
        html += `
        <tr>
            <td>${item.competition}</td>
            <td>${item.award}</td>
            <td>${item.year}</td>
            <td>${item.project}</td>
        </tr>`;
    });

    container.innerHTML = html;
}

function renderLearn() {
    const container = document.getElementById('learn-dynamic-container');
    if (!container) return;

    const data = window.aerossData.learn;
    let html = '';

    data.forEach(item => {
        html += `
        <div class="resource-card ${item.colorClass}">
            <div>
                <i class="fa ${item.icon}" style="font-size: 3rem; margin-bottom: 20px; color: rgba(255,255,255,0.2);"></i>
                <h3 class="resource-title">${item.title}</h3>
                <p class="resource-description">${item.author} &bull; ${item.date}</p>
            </div>
            <a href="${item.link}" target="_blank" class="resource-link">Read Material</a>
        </div>`;
    });

    container.innerHTML = html;
}
