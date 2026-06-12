document.addEventListener('DOMContentLoaded', () => {
    // Projects Data
    const projects = [
        { title: "Counting App", desc: "An interactive front-end counting app. Built by Joshua Power.", link: "https://joshpower32.github.io/joshpower32-Counting-App-Project/" },
        { title: "Calculator App", desc: "A Responsive front-end calculator app. Built by Joshua Power.", link: "https://joshpower32.github.io/calculator-app/" },
        { title: "Daily Update Dashboard", desc: "An automated daily-updating (day of the year) motivation app. Built by Joshua Power.", link: "https://joshpower32.github.io/joshuadaniel-daily-update/" },
        { title: "(Juno) Travel & E-commerce App Design", desc: "A Responsive front-end e-commerce app. Built by Joshua Power for Juno College of Technology.", link: "https://joshpower32.github.io/joshpower32-JunoCollege-Project3/" },
        { title: "(Juno) Fitness Studio App Design", desc: "A Responsive front-end fitness studio app. Built by Joshua Power for Juno College of Technology.", link: "https://joshpower32.github.io/joshpower32-JunoCollege-Project2/" },
        { title: "(Juno) Travel Blog App Design", desc: "A Responsive front-end travel blog app. Built by Joshua Power for Juno College of Technology.", link: "https://joshpower32.github.io/joshpower32-JunoCollege-Project1/" }
    ];

    // Hardware & Electronics Repair Case Studies
    const repairs = [
        {
            title: "iPhone 8 Plus Screen Replacement",
            desc: "I replaced a shattered front display on an iPhone 8 Plus — full teardown, screen swap, touch-id button swap, and reassembly, then I confirmed the device powered on, updated, and worked normally for my family member to use it as their first iphone.",
            photos: [
                { src: "assets/iphone8plus-before.jpg", caption: "Before — shattered display" },
                { src: "assets/iphone8plus-during.jpg", caption: "Old screen removed; device booting and updating iOS" },
                { src: "assets/iphone8plus-after.jpg", caption: "After — new display installed and working" }
            ]
        },
        {
            title: "iPad Screen Replacement",
            desc: "I disassembled an iPad with a cracked digitizer, removed the broken glass, swapped the touch-id button, and installed a new screen — verified working at the setup screen afterward, done for my grandmother to continue using it.",
            photos: [
                { src: "assets/ipad-before.jpg", caption: "Disassembled — cracked digitizer removed" },
                { src: "assets/ipad-after.jpg", caption: "After — new screen installed, powered on" }
            ]
        },
        {
            title: "MacBook Air SSD Replacement",
            desc: "I replaced the storage in my MacBook Air with a 256GB M.2 PCIe (NVMe) SSD — sourcing a compatible drive, installing it, and returning the machine to working order to allow me to continue my research and development when the original failed and my machine suddenly wouldnt boot up one day.",
            photos: [
                { src: "assets/macbook-ssd-installed.jpg", caption: "256GB M.2 PCIe SSD installed" },
                { src: "assets/macbook-ssd-detail.jpg", caption: "Close detail of the SSD flash storage" }
            ]
        },
        {
            title: "MacBook Air Battery Diagnosis & Safe Removal",
            desc: "I identified a swelling lithium-polymer battery in my Macbook Air early 2015 after years of battery overuse and being unable to power on the machine without the AC power cord, — a genuine safety hazard — I safely removed it and recycled with proper e-waste, keeping my Macbook Air usable on the AC power cord until a replacement battery is fitted.",
            photos: [
                { src: "assets/macbook-battery.jpg", caption: "Swollen battery safely removed from the chassis" }
            ]
        },
        {
            title: "PlayStation 4 Diagnosis & Teardown",
            desc: "I opened and diagnosed my PS4 across multiple repair attempts. The final fault was a failed optical drive that blocked system software reinitialization — an unrepairable fault, I correctly identified through trial and error rather than guessed. Salvaged the internal 500GB drive into a working external hard drive enclosure.",
            photos: [
                { src: "assets/ps4-teardown.jpg", caption: "PS4 opened for diagnosis" },
                { src: "assets/ps4-hdd.jpg", caption: "Salvaged 500GB drive, repurposed in an external enclosure" }
            ]
        }
    ];

    // Render Projects
    const container = document.getElementById('project-container');
    if (container) {
        projects.forEach(p => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `<h3>${p.title}</h3><p>${p.desc}</p><small>Click to open in new tab</small>`;
            card.style.cursor = "pointer";
            card.onclick = () => window.open(p.link, '_blank');
            container.appendChild(card);
        });
    }

    // Render Hardware & Electronics Repair
    const repairContainer = document.getElementById('repair-container');
    if (repairContainer) {
        repairs.forEach(r => {
            const item = document.createElement('div');
            item.className = 'repair-item';
            const photosHtml = r.photos.map(ph => `
                <div class="repair-photo">
                    <img src="${ph.src}" alt="${r.title} — ${ph.caption}" loading="lazy" onclick="window.open('${ph.src}', '_blank')">
                    <small>${ph.caption}</small>
                </div>`).join('');
            item.innerHTML = `<h3>${r.title}</h3><p class="repair-desc">${r.desc}</p><div class="repair-photos">${photosHtml}</div>`;
            repairContainer.appendChild(item);
        });
    }

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
            
            <p><strong>What I'm Doing Now:</strong> Currently in structured engagements on <strong>Paddle.com</strong> (YesWeHack) using a professional dual-account methodology focused on Broken Access Control, Authorization Bypass, Business Logic Errors, and API security testing. My testing is documented, systematic, and methodical.</p>
            
            <p><strong>The gap between where I am and earning income is not skill. It is target selection and timing — and I am actively adjusting for that with every new program.</strong></p>
        `;
        bountyModal.style.display = "block";
    };

    document.getElementById('close-bounty').onclick = () => {
        bountyModal.style.display = "none";
    };
});