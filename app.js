document.addEventListener('DOMContentLoaded', () => {
    // Projects Data
    const projects = [
        { title: "Calculator App", desc: "A Responsive front-end web calculator app. Built by Joshua Power.", link: "https://joshpower32.github.io/calculator-app/" },
        { title: "Daily Update Dashboard", desc: "An automated daily updating motivation dashboard app. Built by Joshua Power.", link: "https://joshpower32.github.io/joshuadaniel-daily-update/" },
        { title: "Juno Travel & E-commerce", desc: "A Responsive front-end e-commerce app. Built by Joshua Power for Juno College.", link: "https://joshpower32.github.io/joshpower32-JunoCollege-Project3/" },
        { title: "Juno Fitness Studio", desc: "A Responsive front-end fitness studio app. Built by Joshua Power for Juno College.", link: "https://joshpower32.github.io/joshpower32-JunoCollege-Project2/" },
        { title: "Juno Travel Blog", desc: "A Responsive front-end travel blog app. Built by Joshua Power for Juno College.", link: "https://joshpower32.github.io/joshpower32-JunoCollege-Project1/" }
    ];

    const container = document.getElementById('project-container');
    projects.forEach(p => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<h3>${p.title}</h3><p>${p.desc}</p><small>Click to open in new tab</small>`;
        card.style.cursor = "pointer";
        card.onclick = () => window.open(p.link, '_blank');
        container.appendChild(card);
    });

// Bounty Modal Logic
    const bountyModal = document.getElementById('bounty-modal');
    document.getElementById('read-more-btn').onclick = () => {
        document.getElementById('bounty-text').innerHTML = `
            <h2>Bug Bounty Security Research</h2>
            <p><strong>What is Bug Bounty Hunting?</strong> Companies pay independent security researchers to find vulnerabilities in their software before malicious hackers do. Rewards typically range from $100 to $5,000+ per finding depending on severity. This is legitimate, contracted work — every major tech company runs these programs.</p>
            
            <p><strong>Where I Am Honestly:</strong> I have been systematically learning and practicing bug bounty hunting since 2021 across four platforms: HackerOne, Bugcrowd, Intigriti, and YesWeHack. The majority of my reports have come back as Not Applicable or Duplicate. That is an honest and normal description of where a serious researcher is at this stage. What separates my situation from someone who isn't making progress is that several of those outcomes involved real vulnerabilities — the finding was correct, the timing or framing was the problem.</p>
            
            <p><strong>My Reports That Mattered:</strong></p>
            <ul>
                <li>
                    <strong>Dyson</strong> — Account Takeover Class Vulnerability
                    <br><em>Marked Duplicate. Confirmed real by Dyson's triage team. I independently discovered a vulnerability allowing an attacker to take control of another user's account across multiple international domains. Another researcher submitted it first. Potential payout: $1,350–$3,000+.</em>
                </li>
                <br>
                <li>
                    <strong>Zooplus</strong> — Unauthorized Access to Another User's Data
                    <br><em>Marked Duplicate. Confirmed real. I found that an authenticated attacker could read and modify private data belonging to another user without authorization, confirmed across multiple domains. Potential payout: $500–$1,500.</em>
                </li>
                <br>
                <li>
                    <strong>Visma</strong> — Cross-Tenant Authorization Bypass
                    <br><em>Marked Duplicate at Low severity. Confirmed real by Visma's security team. I found that an attacker could perform unauthorized actions against users in a completely separate company account by manipulating a single request parameter. Potential payout: €100.</em>
                </li>
                <br>
                <li>
                    <strong>Lightspeed Retail</strong> — Cross-Tenant Data Manipulation
                    <br><em>Marked Not Applicable. Included here because this report represents my most complete and professionally documented finding to date. I demonstrated that an attacker could both create and delete business data belonging to a completely separate merchant account by manipulating request headers — with full proof of concept screenshots, raw HTTP requests, and structured reproduction steps. The triage outcome was disputed. The documentation and methodology behind this report are the standard I now bring to every engagement.</em>
                </li>
            </ul>
            
            <p><strong>Honest Combined Estimate:</strong> The three confirmed-real duplicate findings above represent approximately <strong>$2,000–$4,600</strong> in findings that real security teams confirmed existed and fixed. That is not hypothetical — it is real work that produced real results, where timing was the only difference between that and a paid report.</p>
            
            <p><strong>What I'm Doing Now:</strong> Currently in structured engagements on <strong>Paddle.com</strong> (YesWeHack) and <strong>YNAB</strong> (Bugcrowd) using a professional dual-account methodology focused on Broken Access Control, Authorization Bypass, Business Logic Errors, and API security testing. My testing is documented, systematic, and methodical.</p>
            
            <p><strong>The gap between where I am and consistent income is not skill. It is target selection — and I am actively adjusting for that.</strong></p>
        `;
        bountyModal.style.display = "block";
    };

    document.getElementById('close-bounty').onclick = () => {
        bountyModal.style.display = "none";
    };
});
