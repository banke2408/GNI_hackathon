/* ============================================
   VeloSync — Interactive Dashboard Logic
   ============================================ */

// ── State & Data ───────────────────────────
const bikeData = [
    { id: 'VS-001', status: 'available', battery: 95, location: 'Library Dock', lastActivity: '10 min ago', locked: true, gps: 4 },
    { id: 'VS-002', status: 'available', battery: 88, location: 'Library Dock', lastActivity: '25 min ago', locked: true, gps: 4 },
    { id: 'VS-003', status: 'in-use', battery: 72, location: 'En Route', lastActivity: 'Active Now', locked: false, gps: 3 },
    { id: 'VS-004', status: 'available', battery: 91, location: 'Eng. Dock', lastActivity: '1 hr ago', locked: true, gps: 4 },
    { id: 'VS-005', status: 'available', battery: 100, location: 'Eng. Dock', lastActivity: 'Just serviced', locked: true, gps: 4 },
    { id: 'VS-006', status: 'in-use', battery: 65, location: 'En Route', lastActivity: 'Active Now', locked: false, gps: 4 },
    { id: 'VS-007', status: 'available', battery: 83, location: 'Café Dock', lastActivity: '15 min ago', locked: true, gps: 4 },
    { id: 'VS-008', status: 'in-use', battery: 54, location: 'En Route', lastActivity: 'Active Now', locked: false, gps: 2 },
    { id: 'VS-009', status: 'available', battery: 78, location: 'Eng. Dock', lastActivity: '8 min ago', locked: true, gps: 4 },
    { id: 'VS-010', status: 'in-use', battery: 82, location: 'En Route', lastActivity: 'Active Now', locked: false, gps: 4 },
    { id: 'VS-011', status: 'in-use', battery: 69, location: 'En Route', lastActivity: 'Active Now', locked: false, gps: 3 },
    { id: 'VS-012', status: 'available', battery: 94, location: 'Café Dock', lastActivity: '30 min ago', locked: true, gps: 4 },
    { id: 'VS-013', status: 'maintenance', battery: 45, location: 'Maintenance Bay', lastActivity: '2 hrs ago', locked: true, gps: 1 },
    { id: 'VS-014', status: 'available', battery: 87, location: 'Hostel Dock', lastActivity: '45 min ago', locked: true, gps: 4 },
    { id: 'VS-015', status: 'in-use', battery: 71, location: 'En Route', lastActivity: 'Active Now', locked: false, gps: 4 },
    { id: 'VS-016', status: 'available', battery: 92, location: 'Library Dock', lastActivity: '20 min ago', locked: true, gps: 4 },
    { id: 'VS-017', status: 'in-use', battery: 78, location: 'En Route', lastActivity: 'Active Now', locked: false, gps: 4 },
    { id: 'VS-018', status: 'available', battery: 86, location: 'Sports Dock', lastActivity: '1 hr ago', locked: true, gps: 4 },
    { id: 'VS-019', status: 'in-use', battery: 63, location: 'En Route', lastActivity: 'Active Now', locked: false, gps: 3 },
    { id: 'VS-020', status: 'maintenance', battery: 32, location: 'Maintenance Bay', lastActivity: '3 hrs ago', locked: true, gps: 0 },
    { id: 'VS-021', status: 'available', battery: 96, location: 'Café Dock', lastActivity: '5 min ago', locked: true, gps: 4 },
    { id: 'VS-022', status: 'in-use', battery: 81, location: 'En Route', lastActivity: 'Active Now', locked: false, gps: 4 },
    { id: 'VS-023', status: 'available', battery: 89, location: 'Library Dock', lastActivity: '35 min ago', locked: true, gps: 4 },
    { id: 'VS-024', status: 'in-use', battery: 58, location: 'En Route', lastActivity: 'Active Now', locked: false, gps: 2 },
    { id: 'VS-025', status: 'available', battery: 93, location: 'Café Dock', lastActivity: '12 min ago', locked: true, gps: 4 },
    { id: 'VS-026', status: 'in-use', battery: 76, location: 'En Route', lastActivity: 'Active Now', locked: false, gps: 4 },
    { id: 'VS-027', status: 'available', battery: 84, location: 'Sports Dock', lastActivity: '50 min ago', locked: true, gps: 4 },
    { id: 'VS-028', status: 'in-use', battery: 67, location: 'En Route', lastActivity: 'Active Now', locked: false, gps: 3 },
    { id: 'VS-029', status: 'available', battery: 91, location: 'Café Dock', lastActivity: '18 min ago', locked: true, gps: 4 },
    { id: 'VS-030', status: 'in-use', battery: 74, location: 'En Route', lastActivity: 'Active Now', locked: false, gps: 4 },
    { id: 'VS-031', status: 'in-use', battery: 52, location: 'Near Admin', lastActivity: 'Active Now', locked: false, gps: 1 },
    { id: 'VS-032', status: 'available', battery: 97, location: 'Library Dock', lastActivity: '3 min ago', locked: true, gps: 4 },
    { id: 'VS-033', status: 'in-use', battery: 80, location: 'En Route', lastActivity: 'Active Now', locked: false, gps: 4 },
    { id: 'VS-034', status: 'available', battery: 85, location: 'Hostel Dock', lastActivity: '1 hr ago', locked: true, gps: 4 },
    { id: 'VS-035', status: 'available', battery: 90, location: 'Sports Dock', lastActivity: '40 min ago', locked: true, gps: 4 },
    { id: 'VS-036', status: 'in-use', battery: 62, location: 'En Route', lastActivity: 'Active Now', locked: false, gps: 4 },
    { id: 'VS-037', status: 'available', battery: 88, location: 'Café Dock', lastActivity: '22 min ago', locked: true, gps: 4 },
    { id: 'VS-038', status: 'maintenance', battery: 18, location: 'Maintenance Bay', lastActivity: '5 hrs ago', locked: true, gps: 0 },
    { id: 'VS-039', status: 'in-use', battery: 79, location: 'En Route', lastActivity: 'Active Now', locked: false, gps: 4 },
    { id: 'VS-040', status: 'available', battery: 82, location: 'Sports Dock', lastActivity: '55 min ago', locked: true, gps: 4 },
    { id: 'VS-041', status: 'available', battery: 94, location: 'Café Dock', lastActivity: '7 min ago', locked: true, gps: 4 },
    { id: 'VS-042', status: 'in-use', battery: 68, location: 'En Route', lastActivity: 'Active Now', locked: false, gps: 3 },
];

// ── DOM Ready ──────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initKPICounters();
    initFleetDonutChart();
    initUsageChart();
    initFleetTable();
    initNotifications();
    initSidebar();
    initTelemetryLive();
    initPeakHeatmap();
    initDailyRidesChart();
    initHotspotBars();
});

// ── Navigation ─────────────────────────────
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const pages = document.querySelectorAll('.page');
    const pageTitle = document.getElementById('page-title');
    const pageSubtitle = document.getElementById('page-subtitle');

    const pageTitles = {
        dashboard: { title: 'Fleet Overview', subtitle: 'Campus Micro-Mobility Dashboard' },
        map: { title: 'Live Campus Map', subtitle: 'Real-time GPS tracking & dock status' },
        fleet: { title: 'Bike Fleet', subtitle: 'Manage all 42 bikes in the fleet' },
        telemetry: { title: 'Live Telemetry', subtitle: 'Active ride sensor data' },
        rebalance: { title: 'Rebalancing', subtitle: 'Smart bike redistribution & karma' },
        analytics: { title: 'Analytics', subtitle: 'Usage insights & performance metrics' },
        history: { title: 'Ride History', subtitle: 'Every ride with GPS fixes & lock events' },
        prototype: { title: '5-Bike Prototype', subtitle: 'App unlock · live GPS · reliability tests' },
        docs: { title: 'Docs & Tests', subtitle: 'System design, wiring, setup guide & test report' },
    };

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const page = item.dataset.page;

            navItems.forEach(n => n.classList.remove('active'));
            item.classList.add('active');

            pages.forEach(p => p.classList.remove('active'));
            const targetPage = document.getElementById('page-' + page);
            if (targetPage) targetPage.classList.add('active');

            if (pageTitles[page]) {
                pageTitle.textContent = pageTitles[page].title;
                pageSubtitle.textContent = pageTitles[page].subtitle;
            }

            // Re-trigger animations
            if (page === 'telemetry') {
                const routePath = document.querySelector('.route-path');
                if (routePath) {
                    routePath.style.animation = 'none';
                    routePath.offsetHeight; // force reflow
                    routePath.style.animation = '';
                }
            }

            // Canvases drawn while hidden have zero width — redraw when shown
            if (page === 'analytics') initDailyRidesChart();
            if (page === 'dashboard') { initFleetDonutChart(); initUsageChart(); }

            // Close sidebar on mobile
            document.getElementById('sidebar').classList.remove('open');
        });
    });
}

// ── Sidebar ────────────────────────────────
function initSidebar() {
    const toggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    toggle.addEventListener('click', () => sidebar.classList.toggle('open'));

    // Close sidebar on overlay click (mobile)
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && sidebar.classList.contains('open') && !sidebar.contains(e.target) && e.target !== toggle) {
            sidebar.classList.remove('open');
        }
    });
}

// ── KPI Counter Animation ──────────────────
function initKPICounters() {
    const counters = document.querySelectorAll('.kpi-value');
    counters.forEach(counter => {
        const target = parseInt(counter.dataset.count);
        let current = 0;
        const increment = target / 40;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            counter.textContent = Math.round(current);
        }, 30);
    });
}

// ── Fleet Donut Chart (Canvas) ─────────────
function initFleetDonutChart() {
    const canvas = document.getElementById('fleetDonutChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const centerX = 110, centerY = 110, radius = 80, lineWidth = 20;

    const data = [
        { value: 21, color: '#00E5A0' },
        { value: 18, color: '#00B4D8' },
        { value: 3, color: '#FFB800' },
    ];
    const total = data.reduce((s, d) => s + d.value, 0);

    let animProgress = 0;
    function drawDonut() {
        ctx.clearRect(0, 0, 220, 220);
        let startAngle = -Math.PI / 2;

        data.forEach(segment => {
            const sliceAngle = (segment.value / total) * 2 * Math.PI * animProgress;
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
            ctx.strokeStyle = segment.color;
            ctx.lineWidth = lineWidth;
            ctx.lineCap = 'round';
            ctx.stroke();
            startAngle += sliceAngle + 0.04;
        });

        if (animProgress < 1) {
            animProgress += 0.025;
            requestAnimationFrame(drawDonut);
        }
    }
    drawDonut();
}

// ── Usage Chart (Canvas) ───────────────────
function initUsageChart() {
    const canvas = document.getElementById('usageChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.parentElement.clientWidth;
    canvas.width = width;
    canvas.height = 200;

    const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const rides = [145, 198, 176, 212, 256, 180, 132];
    const unlocks = [130, 185, 160, 200, 240, 170, 120];
    
    const padding = { top: 20, right: 20, bottom: 35, left: 45 };
    const chartW = width - padding.left - padding.right;
    const chartH = 200 - padding.top - padding.bottom;
    const maxVal = Math.max(...rides) * 1.15;

    function drawChart(progress) {
        ctx.clearRect(0, 0, width, 200);

        // Grid lines
        ctx.strokeStyle = 'rgba(255,255,255,0.05)';
        ctx.lineWidth = 1;
        for (let i = 0; i <= 4; i++) {
            const y = padding.top + (chartH / 4) * i;
            ctx.beginPath();
            ctx.moveTo(padding.left, y);
            ctx.lineTo(width - padding.right, y);
            ctx.stroke();

            // Y-axis labels
            ctx.fillStyle = '#64748B';
            ctx.font = '10px JetBrains Mono';
            ctx.textAlign = 'right';
            ctx.fillText(Math.round(maxVal - (maxVal / 4) * i), padding.left - 8, y + 3);
        }

        // X-axis labels
        labels.forEach((label, i) => {
            const x = padding.left + (chartW / (labels.length - 1)) * i;
            ctx.fillStyle = '#64748B';
            ctx.font = '11px Inter';
            ctx.textAlign = 'center';
            ctx.fillText(label, x, 200 - 8);
        });

        // Draw area fill for rides
        ctx.beginPath();
        rides.forEach((val, i) => {
            const x = padding.left + (chartW / (rides.length - 1)) * i;
            const y = padding.top + chartH - (val / maxVal) * chartH * progress;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        });
        ctx.lineTo(padding.left + chartW, padding.top + chartH);
        ctx.lineTo(padding.left, padding.top + chartH);
        ctx.closePath();
        const gradient = ctx.createLinearGradient(0, padding.top, 0, padding.top + chartH);
        gradient.addColorStop(0, 'rgba(0, 229, 160, 0.15)');
        gradient.addColorStop(1, 'rgba(0, 229, 160, 0)');
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw rides line
        ctx.beginPath();
        rides.forEach((val, i) => {
            const x = padding.left + (chartW / (rides.length - 1)) * i;
            const y = padding.top + chartH - (val / maxVal) * chartH * progress;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        });
        ctx.strokeStyle = '#00E5A0';
        ctx.lineWidth = 2.5;
        ctx.lineJoin = 'round';
        ctx.stroke();

        // Draw unlocks line
        ctx.beginPath();
        unlocks.forEach((val, i) => {
            const x = padding.left + (chartW / (unlocks.length - 1)) * i;
            const y = padding.top + chartH - (val / maxVal) * chartH * progress;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        });
        ctx.strokeStyle = '#00B4D8';
        ctx.lineWidth = 2;
        ctx.setLineDash([6, 4]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Data points for rides
        rides.forEach((val, i) => {
            const x = padding.left + (chartW / (rides.length - 1)) * i;
            const y = padding.top + chartH - (val / maxVal) * chartH * progress;
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, Math.PI * 2);
            ctx.fillStyle = '#00E5A0';
            ctx.fill();
            ctx.beginPath();
            ctx.arc(x, y, 2, 0, Math.PI * 2);
            ctx.fillStyle = '#0a0e1a';
            ctx.fill();
        });
    }

    let p = 0;
    function animate() {
        p += 0.03;
        if (p > 1) p = 1;
        drawChart(p);
        if (p < 1) requestAnimationFrame(animate);
    }
    animate();
}

// ── Fleet Table ────────────────────────────
function initFleetTable() {
    renderFleetTable(bikeData);
    
    // Search
    document.getElementById('bikeSearch').addEventListener('input', (e) => {
        const q = e.target.value.toLowerCase();
        const filtered = bikeData.filter(b => 
            b.id.toLowerCase().includes(q) || 
            b.status.includes(q) || 
            b.location.toLowerCase().includes(q)
        );
        renderFleetTable(filtered);
    });

    // Filter chips
    document.querySelectorAll('.filter-chips .chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('.filter-chips .chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            const filter = chip.dataset.filter;
            if (filter === 'all') {
                renderFleetTable(bikeData);
            } else {
                renderFleetTable(bikeData.filter(b => b.status === filter));
            }
        });
    });
}

function renderFleetTable(data) {
    const tbody = document.getElementById('fleetTableBody');
    if (!tbody) return;
    tbody.innerHTML = data.map(bike => {
        const batteryClass = bike.battery >= 70 ? 'high' : bike.battery >= 40 ? 'medium' : 'low';
        const signalBars = Array(4).fill(0).map((_, i) => 
            `<div class="signal-bar ${i < bike.gps ? 'active' : ''}" style="height:${(i+1)*4}px"></div>`
        ).join('');
        
        return `<tr>
            <td><span class="bike-id">#${bike.id}</span></td>
            <td><span class="status-badge ${bike.status}">${bike.status === 'in-use' ? 'In-Use' : bike.status.charAt(0).toUpperCase() + bike.status.slice(1)}</span></td>
            <td>
                <div class="battery-indicator">
                    <div class="battery-mini-bar"><div class="battery-mini-fill ${batteryClass}" style="width:${bike.battery}%"></div></div>
                    <span style="font-size:0.78rem; font-family:'JetBrains Mono'">${bike.battery}%</span>
                </div>
            </td>
            <td style="font-size:0.82rem">${bike.location}</td>
            <td style="font-size:0.78rem; color:var(--text-tertiary)">${bike.lastActivity}</td>
            <td>
                <span class="lock-status ${bike.locked ? 'locked' : 'unlocked'}">
                    <span class="material-icons-round" style="font-size:16px">${bike.locked ? 'lock' : 'lock_open'}</span>
                    ${bike.locked ? 'Locked' : 'Unlocked'}
                </span>
            </td>
            <td>
                <div class="gps-signal">
                    <div class="signal-bars">${signalBars}</div>
                    <span style="font-size:0.72rem; color:var(--text-tertiary)">${bike.gps}/4</span>
                </div>
            </td>
            <td>
                ${bike.status === 'available' ? `<button class="btn-unlock-table" onclick="openNFCModal('${bike.id}')">Unlock</button>` : ''}
                ${bike.status === 'in-use' ? '<span style="font-size:0.72rem; color:var(--accent-cyan)">Tracking...</span>' : ''}
                ${bike.status === 'maintenance' ? '<span style="font-size:0.72rem; color:var(--accent-orange)">In Service</span>' : ''}
            </td>
        </tr>`;
    }).join('');
}

// ── Notifications ──────────────────────────
function initNotifications() {
    const btn = document.getElementById('notificationBtn');
    const panel = document.getElementById('notificationPanel');
    const close = document.getElementById('notifClose');

    btn.addEventListener('click', () => panel.classList.toggle('open'));
    close.addEventListener('click', () => panel.classList.remove('open'));

    document.addEventListener('click', (e) => {
        if (!panel.contains(e.target) && e.target !== btn && !btn.contains(e.target)) {
            panel.classList.remove('open');
        }
    });
}

// ── NFC Unlock Modal ───────────────────────
function openNFCModal(bikeId) {
    const modal = document.getElementById('nfcModal');
    const bikeIdEl = document.getElementById('nfcBikeId');
    const nfcTitle = document.getElementById('nfcTitle');
    const nfcSubtitle = document.getElementById('nfcSubtitle');
    const nfcBtn = document.getElementById('nfcSimulateBtn');
    const nfcAnim = document.getElementById('nfcAnimation');

    bikeIdEl.textContent = `Bike #${bikeId}`;
    nfcTitle.textContent = 'Tap to Unlock';
    nfcSubtitle.textContent = "Hold your student ID near the bike's NFC reader";
    nfcBtn.textContent = 'Simulate NFC Tap';
    nfcBtn.disabled = false;
    nfcBtn.style.opacity = '1';
    nfcAnim.classList.remove('nfc-success');

    modal.classList.add('open');
}

function closeNFCModal() {
    document.getElementById('nfcModal').classList.remove('open');
}

function simulateNFCUnlock() {
    const nfcTitle = document.getElementById('nfcTitle');
    const nfcSubtitle = document.getElementById('nfcSubtitle');
    const nfcBtn = document.getElementById('nfcSimulateBtn');
    const nfcAnim = document.getElementById('nfcAnimation');

    nfcBtn.textContent = 'Authenticating...';
    nfcBtn.disabled = true;
    nfcBtn.style.opacity = '0.5';

    setTimeout(() => {
        nfcTitle.textContent = '✓ Unlocked!';
        nfcSubtitle.textContent = 'Ride safely! Remember to return to a dock station.';
        nfcBtn.textContent = 'Ride Started';
        nfcBtn.style.background = 'rgba(0, 229, 160, 0.2)';
        nfcBtn.style.color = '#00E5A0';
        nfcAnim.classList.add('nfc-success');

        // Add activity to feed
        addActivityItem('unlock', `Bike ${document.getElementById('nfcBikeId').textContent} unlocked`, 'NFC tap simulated • Dashboard test');

        setTimeout(closeNFCModal, 2000);
    }, 1500);
}

function addActivityItem(type, title, detail) {
    const feed = document.getElementById('activityFeed');
    if (!feed) return;
    const iconMap = { unlock: 'lock_open', return: 'lock', alert: 'warning', maintenance: 'build' };
    const item = document.createElement('div');
    item.className = 'activity-item';
    item.style.animation = 'fadeInPage 0.3s ease';
    item.innerHTML = `
        <div class="activity-icon ${type}">
            <span class="material-icons-round">${iconMap[type]}</span>
        </div>
        <div class="activity-info">
            <strong>${title}</strong>
            <span>${detail}</span>
        </div>
        <span class="activity-time">Just now</span>
    `;
    feed.insertBefore(item, feed.firstChild);
}

// ── Rebalance Execute ──────────────────────
function executeRebalance(btn) {
    if (btn.classList.contains('executed')) return;
    btn.textContent = 'Executing...';
    btn.disabled = true;
    
    setTimeout(() => {
        btn.textContent = '✓ Completed';
        btn.classList.add('executed');
        btn.disabled = false;
        addActivityItem('return', 'Rebalance executed', 'Bikes moved successfully between stations');
    }, 2000);
}

// ── Karma Bounty Claim ─────────────────────
function claimBounty(btn) {
    if (btn.classList.contains('claimed')) return;
    btn.textContent = 'Claiming...';
    btn.disabled = true;
    
    setTimeout(() => {
        btn.textContent = '✓ Claimed';
        btn.classList.add('claimed');
        addActivityItem('unlock', 'Karma bounty claimed', 'Student picked up a rebalancing task');
    }, 1000);
}

// ── Live Telemetry Updates ─────────────────
function initTelemetryLive() {
    setInterval(() => {
        // Speed fluctuation
        const speed = (12 + Math.random() * 6).toFixed(1);
        const speedEl = document.getElementById('speedValue');
        if (speedEl) speedEl.textContent = speed;

        // Speed arc update
        const speedArc = document.getElementById('speedArc');
        if (speedArc) {
            const maxSpeed = 25;
            const ratio = parseFloat(speed) / maxSpeed;
            const totalLength = 251;
            speedArc.setAttribute('stroke-dashoffset', totalLength * (1 - ratio));
        }

        // Distance increment
        const distEl = document.getElementById('distanceValue');
        if (distEl) {
            const current = parseFloat(distEl.textContent);
            distEl.textContent = (current + 0.01).toFixed(2);
        }

        // Duration increment
        const durEl = document.getElementById('durationValue');
        if (durEl) {
            const parts = durEl.textContent.split(':');
            let mins = parseInt(parts[0]), secs = parseInt(parts[1]);
            secs += 1;
            if (secs >= 60) { secs = 0; mins += 1; }
            durEl.textContent = `${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;
        }
    }, 1000);
}

// ── Peak Hours Heatmap ─────────────────────
function initPeakHeatmap() {
    const container = document.getElementById('peakHeatmap');
    if (!container) return;

    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const hours = ['8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

    // Header row (days)
    const headerRow = document.createElement('div');
    headerRow.style.cssText = 'display:contents';
    const emptyCorner = document.createElement('div');
    container.appendChild(emptyCorner);
    days.forEach(d => {
        const cell = document.createElement('div');
        cell.className = 'peak-cell-label';
        cell.textContent = d;
        container.appendChild(cell);
    });

    container.style.gridTemplateColumns = `40px repeat(7, 1fr)`;

    hours.forEach((hour, hi) => {
        const label = document.createElement('div');
        label.className = 'peak-cell-label';
        label.style.textAlign = 'right';
        label.style.paddingRight = '6px';
        label.style.alignSelf = 'center';
        label.textContent = hour;
        container.appendChild(label);

        days.forEach((day, di) => {
            const cell = document.createElement('div');
            cell.className = 'peak-cell';
            
            // Generate realistic demand
            let intensity = 0.2;
            if ((hi >= 0 && hi <= 2) || (hi >= 6 && hi <= 8)) intensity = 0.5 + Math.random() * 0.5;
            if (hi === 1 || hi === 7) intensity = 0.7 + Math.random() * 0.3;
            if (di >= 5) intensity *= 0.5;
            intensity = Math.min(1, Math.max(0.05, intensity));
            
            const r = Math.round(0 + intensity * 0);
            const g = Math.round(50 + intensity * 179);
            const b = Math.round(80 + intensity * 80);
            cell.style.background = `rgba(0, ${Math.round(180 + intensity * 49)}, ${Math.round(160 + intensity * 56)}, ${intensity * 0.8})`;
            cell.title = `${day} ${hour}: ${Math.round(intensity * 100)}% demand`;
            container.appendChild(cell);
        });
    });
}

// ── Daily Rides Bar Chart ──────────────────
function initDailyRidesChart() {
    const canvas = document.getElementById('dailyRidesChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.parentElement.clientWidth;
    canvas.width = width;
    canvas.height = 250;

    const periodSel = document.getElementById('analyticsPeriod');
    const is30 = periodSel && periodSel.value === '30d';
    const labels = is30 ? ['Wk 1', 'Wk 2', 'Wk 3', 'Wk 4'] : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const values = is30 ? [1020, 1180, 1247, 1310] : [145, 198, 176, 212, 256, 180, 132];
    const maxVal = Math.max(...values) * 1.15;
    const padding = { top: 20, right: 20, bottom: 35, left: 45 };
    const chartW = width - padding.left - padding.right;
    const chartH = 250 - padding.top - padding.bottom;
    const barWidth = chartW / labels.length * 0.5;
    const gap = chartW / labels.length;

    let progress = 0;
    function draw() {
        ctx.clearRect(0, 0, width, 250);

        // Grid
        ctx.strokeStyle = 'rgba(255,255,255,0.04)';
        ctx.lineWidth = 1;
        for (let i = 0; i <= 4; i++) {
            const y = padding.top + (chartH / 4) * i;
            ctx.beginPath();
            ctx.moveTo(padding.left, y);
            ctx.lineTo(width - padding.right, y);
            ctx.stroke();
            ctx.fillStyle = '#64748B';
            ctx.font = '10px JetBrains Mono';
            ctx.textAlign = 'right';
            ctx.fillText(Math.round(maxVal - (maxVal / 4) * i), padding.left - 8, y + 3);
        }

        values.forEach((val, i) => {
            const x = padding.left + gap * i + (gap - barWidth) / 2;
            const barH = (val / maxVal) * chartH * progress;
            const y = padding.top + chartH - barH;

            // Bar gradient
            const grad = ctx.createLinearGradient(x, y, x, padding.top + chartH);
            grad.addColorStop(0, '#00E5A0');
            grad.addColorStop(1, 'rgba(0, 180, 216, 0.3)');
            
            ctx.beginPath();
            ctx.roundRect(x, y, barWidth, barH, [4, 4, 0, 0]);
            ctx.fillStyle = grad;
            ctx.fill();

            // Value on top
            if (progress > 0.9) {
                ctx.fillStyle = '#94A3B8';
                ctx.font = '10px JetBrains Mono';
                ctx.textAlign = 'center';
                ctx.fillText(val, x + barWidth / 2, y - 8);
            }

            // X label
            ctx.fillStyle = '#64748B';
            ctx.font = '11px Inter';
            ctx.textAlign = 'center';
            ctx.fillText(labels[i], x + barWidth / 2, 250 - 8);
        });

        if (progress < 1) {
            progress += 0.025;
            requestAnimationFrame(draw);
        }
    }
    draw();
}

// ── Hotspot Bars Animation ─────────────────
function initHotspotBars() {
    const fills = document.querySelectorAll('.hotspot-bar-fill');
    fills.forEach(fill => {
        const w = fill.style.width;
        fill.style.width = '0%';
        setTimeout(() => { fill.style.width = w; }, 300);
    });
}

// ── Canvas RoundRect Polyfill ──────────────
if (!CanvasRenderingContext2D.prototype.roundRect) {
    CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, radii) {
        const r = Array.isArray(radii) ? radii : [radii, radii, radii, radii];
        this.moveTo(x + r[0], y);
        this.lineTo(x + w - r[1], y);
        this.quadraticCurveTo(x + w, y, x + w, y + r[1]);
        this.lineTo(x + w, y + h - r[2]);
        this.quadraticCurveTo(x + w, y + h, x + w - r[2], y + h);
        this.lineTo(x + r[3], y + h);
        this.quadraticCurveTo(x, y + h, x, y + h - r[3]);
        this.lineTo(x, y + r[0]);
        this.quadraticCurveTo(x, y, x + r[0], y);
    };
}

/* ============================================
   Extended modules: Map interaction, Ride History,
   5-Bike Prototype simulator, Docs, Utilities
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    initMapInteractions();
    initRideHistory();
    initPrototype();
    initDocs();
    initMisc();
});

// ── Toast helper ───────────────────────────
function showToast(message, icon = 'check_circle') {
    let wrap = document.querySelector('.toast-wrap');
    if (!wrap) {
        wrap = document.createElement('div');
        wrap.className = 'toast-wrap';
        document.body.appendChild(wrap);
    }
    const t = document.createElement('div');
    t.className = 'toast';
    t.innerHTML = `<span class="material-icons-round">${icon}</span><span></span>`;
    t.lastChild.textContent = message;
    wrap.appendChild(t);
    setTimeout(() => { t.style.opacity = '0'; t.style.transition = 'opacity .3s'; setTimeout(() => t.remove(), 300); }, 2800);
}

// ── Live Map: station click + filters ──────
function initMapInteractions() {
    const svg = document.getElementById('fullCampusMapSVG');
    if (!svg) return;
    const stations = [
        { name: 'Library Dock', bikes: 5, cap: 8 },
        { name: 'Engineering Dock', bikes: 3, cap: 8 },
        { name: 'Café Dock', bikes: 7, cap: 8 },
        { name: 'Hostel Dock', bikes: 2, cap: 10 },
        { name: 'Sports Dock', bikes: 4, cap: 6 },
    ];
    const points = svg.querySelectorAll('.dock-point');
    const rings = svg.querySelectorAll('.dock-ring');
    const detail = document.getElementById('stationDetail');
    const hint = document.querySelector('#mapInfoPanel .hint-text');

    points.forEach((pt, i) => {
        const select = () => {
            const s = stations[i];
            if (!s) return;
            points.forEach(p => p.classList.remove('dock-selected'));
            pt.classList.add('dock-selected');
            const util = Math.round((s.bikes / s.cap) * 100);
            document.getElementById('stationName').textContent = s.name;
            document.getElementById('stationBikes').textContent = s.bikes;
            document.getElementById('stationCapacity').textContent = s.cap;
            document.getElementById('stationUtilization').textContent = util + '%';
            const bar = document.getElementById('stationBar');
            bar.style.width = util + '%';
            detail.classList.remove('hidden');
            if (hint) hint.style.display = 'none';
        };
        pt.addEventListener('click', select);
        if (rings[i]) rings[i].addEventListener('click', select);
    });

    // Filter buttons
    const riders = svg.querySelector('.active-riders');
    const docks = svg.querySelector('.dock-stations');
    // Maintenance bay marker (added dynamically)
    const NS = 'http://www.w3.org/2000/svg';
    const maint = document.createElementNS(NS, 'g');
    maint.setAttribute('class', 'maint-marker');
    maint.style.display = 'none';
    maint.innerHTML = `
        <circle cx="560" cy="540" r="20" fill="none" stroke="#FFB800" stroke-width="2" opacity="0.4"/>
        <circle cx="560" cy="540" r="10" fill="#FFB800"/>
        <text x="560" y="572" text-anchor="middle" fill="#FFB800" font-size="10" font-family="Inter" font-weight="600">Maintenance Bay · 3 bikes</text>`;
    svg.appendChild(maint);

    const btns = {
        mapShowAll: () => { riders.style.display = ''; docks.style.display = ''; maint.style.display = 'none'; docks.style.opacity = 1; },
        mapShowAvailable: () => { riders.style.display = 'none'; docks.style.display = ''; maint.style.display = 'none'; docks.style.opacity = 1; },
        mapShowRiding: () => { riders.style.display = ''; docks.style.display = ''; docks.style.opacity = 0.25; maint.style.display = 'none'; },
        mapShowMaint: () => { riders.style.display = 'none'; docks.style.display = ''; docks.style.opacity = 0.25; maint.style.display = ''; },
    };
    Object.keys(btns).forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        el.addEventListener('click', () => {
            Object.keys(btns).forEach(k => document.getElementById(k).classList.remove('active'));
            el.classList.add('active');
            btns[id]();
        });
    });
}

// ── Ride History ───────────────────────────
const rideHistory = [];
let historyFilter = 'all';

function seedRideHistory() {
    const routes = ['Hostel → Library', 'Library → Main Hub', 'Main Hub → Hostel', 'Canteen → Library', 'Hostel → Canteen', 'Library → Hostel'];
    const bikes = ['PB-01', 'PB-02', 'PB-03', 'PB-04', 'PB-05'];
    // Deterministic pseudo-random so the sample data is stable between reloads
    let seed = 42;
    const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
    const now = Date.now();
    for (let i = 0; i < 28; i++) {
        const dur = Math.round(6 + rnd() * 22);
        const dist = +(dur * (0.18 + rnd() * 0.1)).toFixed(1);
        const expected = dur * 60;
        const weak = rnd() < 0.18;
        const fixes = Math.round(expected * (weak ? 0.88 + rnd() * 0.05 : 0.97 + rnd() * 0.03));
        const flagged = rnd() < 0.07;
        rideHistory.push({
            id: 'R-' + String(1060 - i).padStart(4, '0'),
            bike: bikes[Math.floor(rnd() * bikes.length)],
            rider: 'S-' + (2000 + Math.floor(rnd() * 400)),
            route: routes[Math.floor(rnd() * routes.length)],
            start: now - (i * 47 + 12) * 60000,
            duration: dur,
            distance: dist,
            fixes, expected,
            result: flagged ? 'flag' : weak ? 'weak' : 'ok',
        });
    }
}

function initRideHistory() {
    seedRideHistory();
    renderHistory();
    const search = document.getElementById('historySearch');
    search.addEventListener('input', renderHistory);
    document.querySelectorAll('#historyChips .chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('#historyChips .chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            historyFilter = chip.dataset.hfilter;
            renderHistory();
        });
    });
    document.getElementById('exportHistoryBtn').addEventListener('click', exportHistoryCSV);
}

function getFilteredHistory() {
    const q = (document.getElementById('historySearch').value || '').toLowerCase();
    return rideHistory.filter(r =>
        (historyFilter === 'all' || r.result === historyFilter) &&
        (!q || [r.id, r.bike, r.rider, r.route].some(v => v.toLowerCase().includes(q)))
    );
}

function renderHistory() {
    const tbody = document.getElementById('historyTableBody');
    const rows = getFilteredHistory();
    const label = { ok: 'Completed', weak: 'Weak signal', flag: 'Flagged' };
    tbody.innerHTML = rows.length ? rows.map(r => {
        const pct = Math.round((r.fixes / r.expected) * 100);
        const t = new Date(r.start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        return `<tr>
            <td><span class="bike-id">${r.id}</span></td>
            <td class="mono">${r.bike}</td>
            <td class="mono">${r.rider}</td>
            <td style="font-size:.82rem">${r.route}</td>
            <td style="font-size:.78rem;color:var(--text-tertiary)">${t}</td>
            <td class="mono">${r.duration} min</td>
            <td class="mono">${r.distance} km</td>
            <td class="mono">${r.fixes}/${r.expected} (${pct}%)</td>
            <td><span class="result-pill ${r.result}">${label[r.result]}</span></td>
        </tr>`;
    }).join('') : '<tr class="empty-row"><td colspan="9">No rides match your filters.</td></tr>';

    // Summary
    const all = rideHistory;
    const km = all.reduce((s, r) => s + r.distance, 0).toFixed(1);
    const fixRate = (all.reduce((s, r) => s + r.fixes, 0) / all.reduce((s, r) => s + r.expected, 0) * 100).toFixed(1);
    document.getElementById('historySummary').innerHTML = `
        <div class="hs-item"><strong>${all.length}</strong><span>Rides logged</span></div>
        <div class="hs-item"><strong>${km} km</strong><span>Total distance</span></div>
        <div class="hs-item"><strong>${fixRate}%</strong><span>GPS fix rate</span></div>
        <div class="hs-item"><strong>${all.filter(r => r.result === 'flag').length}</strong><span>Flagged rides</span></div>`;
}

function exportHistoryCSV() {
    const rows = getFilteredHistory();
    const head = ['ride_id', 'bike', 'rider', 'route', 'start_iso', 'duration_min', 'distance_km', 'gps_fixes', 'expected_fixes', 'result'];
    const csv = [head.join(',')].concat(rows.map(r =>
        [r.id, r.bike, r.rider, `"${r.route}"`, new Date(r.start).toISOString(), r.duration, r.distance, r.fixes, r.expected, r.result].join(',')
    )).join('\n');
    const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
    const a = document.createElement('a');
    a.href = url; a.download = 'velosync_ride_history.csv';
    document.body.appendChild(a); a.click(); a.remove();
    URL.revokeObjectURL(url);
    showToast(`Exported ${rows.length} rides`, 'download');
}

// ── 5-Bike Prototype simulator ─────────────
const DOCKS = {
    hub: { name: 'Main Hub', x: 300, y: 170 },
    hostel: { name: 'Hostel Dock', x: 100, y: 170 },
    library: { name: 'Library Dock', x: 500, y: 170 },
};
const ROUTES = {
    hub: { to: 'library', pts: [[300, 170], [300, 70], [500, 70], [500, 170]] },
    hostel: { to: 'hub', pts: [[100, 170], [150, 120], [230, 110], [300, 170]] },   // crosses the poor-GPS zone
    library: { to: 'hostel', pts: [[500, 170], [500, 270], [300, 270], [100, 270], [100, 170]] },
};
const WEAK_ZONE = { cx: 180, cy: 120, rx: 70, ry: 38 };
const STEPS_PER_SEGMENT = 8;

const protoBikes = ['hub', 'hub', 'hub', 'hostel', 'library'].map((dock, i) => ({
    id: 'PB-0' + (i + 1), dock, x: DOCKS[dock].x, y: DOCKS[dock].y,
    lastX: DOCKS[dock].x, lastY: DOCKS[dock].y,
    locked: true, riding: false, busy: false, battery: [96, 91, 88, 94, 85][i],
    sats: 8 + i % 3, rssi: -52 - i * 3, buffered: 0, path: [], step: 0, rideStart: 0, fixes: 0, expected: 0, weakSeen: false,
}));
let protoStressTimer = null;

function protoLog(msg, cls = '') {
    const log = document.getElementById('protoLog');
    if (!log) return;
    const d = document.createElement('div');
    const t = new Date().toLocaleTimeString([], { hour12: false });
    d.innerHTML = `<span class="t">${t}</span><span class="${cls}"></span>`;
    d.lastChild.textContent = msg;
    log.insertBefore(d, log.firstChild);
    while (log.children.length > 40) log.removeChild(log.lastChild);
}

function interpolateRoute(pts) {
    const out = [];
    for (let s = 0; s < pts.length - 1; s++) {
        for (let k = 0; k < STEPS_PER_SEGMENT; k++) {
            const f = k / STEPS_PER_SEGMENT;
            out.push([pts[s][0] + (pts[s + 1][0] - pts[s][0]) * f, pts[s][1] + (pts[s + 1][1] - pts[s][1]) * f]);
        }
    }
    out.push(pts[pts.length - 1]);
    return out;
}

function inWeakZone(x, y) {
    const dx = (x - WEAK_ZONE.cx) / WEAK_ZONE.rx, dy = (y - WEAK_ZONE.cy) / WEAK_ZONE.ry;
    return dx * dx + dy * dy <= 1;
}

function initPrototype() {
    const markers = document.getElementById('protoBikeMarkers');
    if (!markers) return;
    const NS = 'http://www.w3.org/2000/svg';
    protoBikes.forEach(b => {
        const g = document.createElementNS(NS, 'g');
        g.setAttribute('class', 'proto-marker');
        g.id = 'pm-' + b.id;
        g.innerHTML = `
            <circle class="pm-pulse" r="7" fill="#00B4D8" opacity="0"/>
            <circle class="pm-dot" r="7" fill="#00E5A0"/>
            <text y="-12" text-anchor="middle" fill="#F1F5F9" font-size="9" font-family="JetBrains Mono" font-weight="600">${b.id}</text>`;
        markers.appendChild(g);
    });
    renderProtoBikes();
    protoBikes.forEach(placeMarker);
    protoLog('Gateway online · 5/5 nodes connected', 'ok');
    protoLog('MQTT broker ready at campus-gw.local:1883', 'info');

    document.getElementById('protoBikeList').addEventListener('click', (e) => {
        const btn = e.target.closest('button[data-bike]');
        if (!btn) return;
        const bike = protoBikes.find(b => b.id === btn.dataset.bike);
        bike.riding ? protoLockBike(bike) : protoUnlockBike(bike);
    });
    document.getElementById('runStressBtn').addEventListener('click', runStressTest);

    setInterval(protoTick, 1000);
}

function placeMarker(b) {
    const g = document.getElementById('pm-' + b.id);
    if (!g) return;
    // Spread bikes docked at the same station so markers do not overlap
    let ox = 0, oy = 0;
    if (!b.riding) {
        const peers = protoBikes.filter(p => !p.riding && p.dock === b.dock);
        const idx = peers.indexOf(b);
        ox = (idx - (peers.length - 1) / 2) * 34; oy = -24;
    }
    const x = (b.fix === false ? b.lastX : b.x) + ox, y = (b.fix === false ? b.lastY : b.y) + oy;
    g.style.transform = `translate(${x}px, ${y}px)`;
    g.classList.toggle('riding', b.riding);
    const dot = g.querySelector('.pm-dot');
    dot.setAttribute('fill', b.fix === false ? '#FF4D6A' : b.riding ? '#00B4D8' : '#00E5A0');
    g.querySelector('.pm-pulse').setAttribute('opacity', b.riding ? '0.7' : '0');
}

function renderProtoBikes() {
    const list = document.getElementById('protoBikeList');
    // Build rows once, then update in place so buttons are never replaced mid-click
    if (!list.children.length) {
        list.innerHTML = protoBikes.map(b => `
            <div class="pb-row" id="pbrow-${b.id}">
                <div class="pb-icon"><span class="material-icons-round"></span></div>
                <div class="pb-info"><strong>${b.id}</strong><div class="pb-meta"></div></div>
                <button class="pb-btn" data-bike="${b.id}"></button>
            </div>`).join('');
    }
    protoBikes.forEach(b => {
        const row = document.getElementById('pbrow-' + b.id);
        row.classList.toggle('riding', b.riding);
        row.querySelector('.material-icons-round').textContent = b.riding ? 'directions_bike' : 'lock';
        row.querySelector('.pb-meta').innerHTML = `
            <span>${b.riding ? 'Riding' : DOCKS[b.dock].name}</span>
            <span>BAT ${Math.round(b.battery)}%</span>
            <span class="${b.fix === false ? 'weak' : ''}">${b.fix === false ? 'No GPS fix · buffered ' + b.buffered : 'Sats ' + b.sats}</span>
            <span>RSSI ${b.rssi} dBm</span>`;
        const btn = row.querySelector('.pb-btn');
        btn.classList.toggle('lock', b.riding);
        btn.disabled = b.busy;
        const label = b.busy ? 'Working…' : b.riding ? 'Return & Lock' : 'Unlock';
        if (btn.textContent !== label) btn.textContent = label;
    });
    document.getElementById('protoRiding').textContent = protoBikes.filter(b => b.riding).length;
    document.getElementById('protoOnline').textContent = protoBikes.length + '/' + protoBikes.length;
}

function protoUnlockBike(b) {
    if (b.riding || b.busy) return;
    b.busy = true; renderProtoBikes();
    protoLog(`${b.id} ← UNLOCK request (BLE token ok)`, 'info');
    const retry = Math.random() < 0.12;   // occasional latch stall — retried automatically
    setTimeout(() => {
        if (retry) protoLog(`${b.id} servo stall detected → retry 1/3`, 'warn');
        setTimeout(() => {
            b.busy = false; b.locked = false; b.riding = true; b.fix = true;
            const route = ROUTES[b.dock];
            b.path = interpolateRoute(route.pts); b.step = 0; b.dest = route.to;
            b.rideStart = Date.now(); b.fixes = 0; b.expected = 0; b.weakSeen = false; b.buffered = 0;
            protoLog(`${b.id} unlocked in ${retry ? '2.1' : '1.2'} s · ride started`, 'ok');
            addActivityItem('unlock', `${b.id} unlocked from app`, 'BLE token verified · prototype pilot');
            renderProtoBikes();
        }, retry ? 900 : 0);
    }, 1100);
}

function protoLockBike(b) {
    if (!b.riding || b.busy) return;
    b.busy = true; renderProtoBikes();
    setTimeout(() => {
        const dest = b.dest || b.dock;
        const durMin = Math.max(1, Math.round((Date.now() - b.rideStart) / 60000)) ;
        const frac = b.path.length ? b.step / (b.path.length - 1) : 1;
        const result = b.weakSeen ? 'weak' : 'ok';
        rideHistory.unshift({
            id: 'R-' + String(1061 + rideHistory.filter(r => r.id > 'R-1060').length).padStart(4, '0'),
            bike: b.id, rider: 'S-2' + String(Math.floor(Math.random() * 900) + 100),
            route: `${DOCKS[b.dock].name.replace(' Dock', '')} → ${DOCKS[dest].name.replace(' Dock', '')}`,
            start: b.rideStart, duration: durMin,
            distance: +(2.4 * Math.max(0.3, frac)).toFixed(1),
            fixes: b.fixes, expected: Math.max(b.expected, b.fixes), result,
        });
        b.dock = dest; b.x = DOCKS[dest].x; b.y = DOCKS[dest].y; b.lastX = b.x; b.lastY = b.y;
        b.riding = false; b.locked = true; b.busy = false; b.fix = true; b.path = [];
        protoLog(`${b.id} docked at ${DOCKS[dest].name} · servo LOCKED · reed switch OK`, 'ok');
        addActivityItem('return', `${b.id} returned to ${DOCKS[dest].name}`, 'Locked & ride logged');
        placeMarker(b); renderProtoBikes(); renderHistory();
        showToast(`${b.id} locked at ${DOCKS[dest].name}`, 'lock');
    }, 900);
}

function protoTick() {
    let changed = false;
    protoBikes.forEach(b => {
        // idle battery drain / signal wobble
        b.battery = Math.max(5, b.battery - (b.riding ? 0.03 : 0.002));
        b.rssi = Math.max(-80, Math.min(-45, b.rssi + (Math.random() < 0.5 ? -1 : 1)));
        if (!b.riding) return;
        changed = true;
        if (b.step < b.path.length) {
            const [x, y] = b.path[b.step++];
            b.x = x; b.y = y;
            b.expected++;
            const weak = inWeakZone(x, y);
            if (weak) {
                if (b.fix !== false) protoLog(`${b.id} GPS fix lost (tree cover) · buffering locally`, 'warn');
                b.fix = false; b.weakSeen = true; b.buffered++; b.sats = 2;
            } else {
                if (b.fix === false) protoLog(`${b.id} fix regained · flushed ${b.buffered} buffered points`, 'ok');
                b.fix = true; b.fixes++; b.buffered = 0; b.sats = 7 + Math.floor(Math.random() * 4);
                b.lastX = x; b.lastY = y;
            }
            if (weak) b.fixes += 0; // no fix counted while in the zone
        } else if (!b.busy) {
            protoLockBike(b);   // reached destination dock → auto-lock
        }
    });
    protoBikes.forEach(placeMarker);
    renderProtoBikes();
}

function runStressTest() {
    if (protoStressTimer) return;
    const btn = document.getElementById('runStressBtn');
    const fill = document.getElementById('relBarFill');
    const pct = document.getElementById('relPct');
    const status = document.getElementById('relStatus');
    btn.disabled = true;
    const total = 120;
    let n = 0, lockOk = 0, fixOk = 0, fixTotal = 0;
    protoLog('Stress test started · 120 lock/unlock cycles across 5 bikes', 'info');
    protoStressTimer = setInterval(() => {
        const batch = 4;
        for (let i = 0; i < batch && n < total; i++, n++) {
            if (Math.random() < 0.992) lockOk++;
            const fixes = 60; fixTotal += fixes; fixOk += Math.round(fixes * (0.94 + Math.random() * 0.06));
        }
        const p = Math.round(n / total * 100);
        fill.style.width = p + '%'; pct.textContent = p + '%';
        status.textContent = `Running — cycle ${n}/${total}`;
        document.getElementById('relCycles').textContent = n;
        document.getElementById('relLock').textContent = (lockOk / n * 100).toFixed(1) + '%';
        document.getElementById('relFix').textContent = (fixOk / fixTotal * 100).toFixed(1) + '%';
        if (n >= total) {
            clearInterval(protoStressTimer); protoStressTimer = null;
            btn.disabled = false;
            status.textContent = `Complete — ${lockOk}/${total} locks OK`;
            document.getElementById('relSync').textContent = '100%';
            protoLog(`Stress test complete · lock ${(lockOk / total * 100).toFixed(1)}% · fix ${(fixOk / fixTotal * 100).toFixed(1)}%`, 'ok');
            showToast('Stress test complete', 'verified');
        }
    }, 150);
}

// ── Docs tabs ──────────────────────────────
function initDocs() {
    const tabs = document.querySelectorAll('#docsTabs .chip');
    tabs.forEach(tab => tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        document.querySelectorAll('.doc-panel').forEach(p => p.classList.remove('active'));
        document.getElementById('doc-' + tab.dataset.doc).classList.add('active');
    }));
}

// ── Misc wiring ────────────────────────────
function initMisc() {
    // Deep-link: index.html#prototype opens that page; nav clicks update the hash
    document.querySelectorAll('.nav-item').forEach(n =>
        n.addEventListener('click', () => history.replaceState(null, '', '#' + n.dataset.page)));
    const initial = document.querySelector(`.nav-item[data-page="${location.hash.slice(1)}"]`);
    if (initial) initial.click();
    const settings = document.getElementById('settingsBtn');
    if (settings) settings.addEventListener('click', () => showToast('Settings are not configurable in this demo build', 'settings'));

    const period = document.getElementById('analyticsPeriod');
    if (period) period.addEventListener('change', initDailyRidesChart);

    let rt;
    window.addEventListener('resize', () => {
        clearTimeout(rt);
        rt = setTimeout(() => {
            if (document.getElementById('page-analytics').classList.contains('active')) initDailyRidesChart();
            if (document.getElementById('page-dashboard').classList.contains('active')) initUsageChart();
        }, 200);
    });
}
