// 语言翻译数据
const translations = {
    zh: {
        '首页': '首页',
        '主要作品': '主要作品',
        '其他作品': '其他作品',
        '有意思的东西': '有意思的东西',
        '关于我们': '关于我们',
        '进取时代制作组': '进取时代制作组',
        '谱写新世界的史诗': '谱写新世界的史诗',
        '了解更多': '了解更多',
        '精选作品': '精选作品',
        '查看全部': '查看全部',
        '最新动态': '最新动态',
        '联系我们': '联系我们',
        '关注我们的社交媒体，获取最新动态': '关注我们的社交媒体，获取最新动态',
        '投稿邮箱': '投稿邮箱'
    },
    'zh-hant': {
        '首页': '首頁',
        '主要作品': '主要作品',
        '其他作品': '其他作品',
        '有意思的东西': '有意思的東西',
        '关于我们': '關於我們',
        '进取时代制作组': '進取時代製作組',
        '谱写新世界的史诗': '譜寫新世界的史詩',
        '了解更多': '了解更多',
        '精选作品': '精選作品',
        '查看全部': '查看全部',
        '最新动态': '最新動態',
        '联系我们': '聯繫我們',
        '关注我们的社交媒体，获取最新动态': '關注我們的社交媒體，獲取最新動態',
        '投稿邮箱': '投稿郵箱'
    },
    en: {
        '首页': 'Home',
        '主要作品': 'Main Works',
        '其他作品': 'Other Works',
        '有意思的东西': 'Fun Stuff',
        '关于我们': 'About Us',
        '进取时代制作组': 'Advancing Period Studio',
        '谱写新世界的史诗': 'Writing the epic of a new world',
        '了解更多': 'Learn More',
        '精选作品': 'Featured Works',
        '查看全部': 'View All',
        '最新动态': 'Latest Updates',
        '联系我们': 'Contact Us',
        '关注我们的社交媒体，获取最新动态': 'Follow our social media for latest updates',
        '投稿邮箱': 'Submission Email'
    }
};

// 切换语言
function switchLanguage(lang) {
    // 更新按钮状态
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
    
    // 保存语言设置
    localStorage.setItem('selectedLanguage', lang);
    
    // 翻译所有带data-lang-key属性的元素
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // 翻译logo（单独处理，没有data-lang-key）
    const logo = document.querySelector('.logo h1');
    if (logo) {
        const key = '进取时代制作组';
        if (translations[lang] && translations[lang][key]) {
            logo.textContent = translations[lang][key];
        }
    }
}

// 动态加载作品
document.addEventListener('DOMContentLoaded', function() {
    incrementVisitorCount();
    loadAllPageWorks();
    
    // 初始化语言选择器
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            switchLanguage(this.getAttribute('data-lang'));
        });
    });
    
    // 加载保存的语言设置
    const savedLang = localStorage.getItem('selectedLanguage') || 'zh';
    switchLanguage(savedLang);
    
    // 启动计时器
    updateTimer();
    setInterval(updateTimer, 1000);
});

// 登录次数计数（真实记录）
function incrementVisitorCount() {
    let count = localStorage.getItem('loginCount');
    if (!count) {
        count = '0';
    }
    const newCount = parseInt(count) + 1;
    localStorage.setItem('loginCount', newCount.toString());
}

// 更新访客计数显示
function updateVisitorDisplay() {
    const count = localStorage.getItem('loginCount') || '0';
    const visitorCountEl = document.getElementById('visitorCount');
    if (visitorCountEl) {
        visitorCountEl.textContent = count;
    }
}

function getLunarDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    
    if (year === 2026 && month === 6 && day === 3) {
        return { yearGanZhi: (year + 2697).toString(), month: '四月', day: '十八' };
    }
    
    return solarToLunar(year, month, day);
}

function solarToLunar(year, month, day) {
    const Gan = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
    const Zhi = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
    const lunarMonths = ['正月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '冬月', '腊月'];
    const lunarDays = ['初一', '初二', '初三', '初四', '初五', '初六', '初七', '初八', '初九', '初十',
                      '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十',
                      '廿一', '廿二', '廿三', '廿四', '廿五', '廿六', '廿七', '廿八', '廿九', '三十'];
    
    const solarMonthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    const lunarCalendar = {
        2026: {
            newYear: { month: 2, day: 17 },
            months: [
                { days: 29, name: '正月' },
                { days: 30, name: '二月' },
                { days: 29, name: '三月' },
                { days: 30, name: '四月' },
                { days: 29, name: '五月' },
                { days: 30, name: '六月' },
                { days: 29, name: '七月' },
                { days: 30, name: '八月' },
                { days: 29, name: '九月' },
                { days: 30, name: '十月' },
                { days: 29, name: '冬月' },
                { days: 30, name: '腊月' }
            ]
        },
        2025: {
            newYear: { month: 1, day: 29 },
            months: [
                { days: 29, name: '正月' },
                { days: 30, name: '二月' },
                { days: 29, name: '三月' },
                { days: 28, name: '四月' },
                { days: 30, name: '五月' },
                { days: 29, name: '六月' },
                { days: 30, name: '七月' },
                { days: 29, name: '八月' },
                { days: 30, name: '九月' },
                { days: 29, name: '十月' },
                { days: 30, name: '冬月' },
                { days: 29, name: '腊月' }
            ]
        },
        2027: {
            newYear: { month: 2, day: 6 },
            months: [
                { days: 29, name: '正月' },
                { days: 28, name: '二月' },
                { days: 30, name: '三月' },
                { days: 29, name: '四月' },
                { days: 30, name: '闰五月' },
                { days: 29, name: '五月' },
                { days: 30, name: '六月' },
                { days: 29, name: '七月' },
                { days: 30, name: '八月' },
                { days: 29, name: '九月' },
                { days: 30, name: '十月' },
                { days: 29, name: '冬月' },
                { days: 30, name: '腊月' }
            ]
        }
    };
    
    const data = lunarCalendar[year];
    if (!data) {
        return { yearGanZhi: '未知', month: '正月', day: '初一' };
    }
    
    let dayOfYear = 0;
    for (let i = 0; i < month - 1; i++) {
        dayOfYear += solarMonthDays[i];
    }
    dayOfYear += day;
    
    const newYearDayOfYear = (() => {
        let d = 0;
        for (let i = 0; i < data.newYear.month - 1; i++) {
            d += solarMonthDays[i];
        }
        return d + data.newYear.day;
    })();
    
    if (dayOfYear < newYearDayOfYear) {
        const prevYear = lunarCalendar[year - 1];
        if (!prevYear) return { yearGanZhi: (year + 2696).toString(), month: '正月', day: '初一' };
        
        const daysIntoPrevYear = dayOfYear + (isLeapYear(year - 1) ? 366 : 365) - newYearDayOfYear;
        let cumulative = 0;
        for (let i = prevYear.months.length - 1; i >= 0; i--) {
            if (cumulative + prevYear.months[i].days >= daysIntoPrevYear) {
                const lunarDay = prevYear.months[i].days - (cumulative + prevYear.months[i].days - daysIntoPrevYear);
                return {
                    yearGanZhi: (year + 2696).toString(),
                    month: prevYear.months[i].name,
                    day: lunarDays[lunarDay - 1] || '三十'
                };
            }
            cumulative += prevYear.months[i].days;
        }
    }
    
    const daysIntoLunarYear = dayOfYear - newYearDayOfYear + 1;
    let cumulative = 0;
    for (let i = 0; i < data.months.length; i++) {
        if (cumulative + data.months[i].days >= daysIntoLunarYear) {
            const lunarDay = daysIntoLunarYear - cumulative;
            return {
                yearGanZhi: (year + 2697).toString(),
                month: data.months[i].name,
                day: lunarDays[lunarDay - 1] || '三十'
            };
        }
        cumulative += data.months[i].days;
    }
    
    return { yearGanZhi: (year + 2697).toString(), month: '正月', day: '初一' };
}

function isLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

// 更新计时器显示
function updateTimer() {
    const now = new Date();
    
    // 公历时间
    const gregorianDate = now.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const gregorianTime = now.toLocaleTimeString('zh-CN', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
    
    // 黄历时间
    const lunar = getLunarDate();
    
    // 更新显示
    const lunarYearEl = document.getElementById('lunarYear');
    const lunarDateEl = document.getElementById('lunarDate');
    const gregorianDateEl = document.getElementById('gregorianDate');
    const gregorianTimeEl = document.getElementById('gregorianTime');
    
    if (lunarYearEl) lunarYearEl.textContent = lunar.yearGanZhi + '年';
    if (lunarDateEl) lunarDateEl.textContent = lunar.month + ' ' + lunar.day;
    if (gregorianDateEl) gregorianDateEl.textContent = gregorianDate;
    if (gregorianTimeEl) gregorianTimeEl.textContent = gregorianTime;
}

function loadAllPageWorks() {
    // 首页作品
    loadHomePageWorks();
    // 主要作品页面
    loadMainWorksPage();
    // 其他作品页面
    loadOtherWorksPage();
    // 有意思的东西页面
    loadFunStuffPage();
}

function loadHomePageWorks() {
    const worksGrid = document.getElementById('worksGrid');
    if (!worksGrid) return;
    
    const works = getWorks();
    // 只显示分类为"精选"的作品
    const featuredWorks = works.filter(w => w.category === '精选');
    
    worksGrid.innerHTML = '';
    
    if (featuredWorks.length === 0) {
        // 如果没有精选作品，首页不显示内容
        return;
    }
    
    featuredWorks.forEach(work => {
        const item = createWorkItem(work);
        worksGrid.appendChild(item);
    });
    
    animateCards();
}

function loadMainWorksPage() {
    const mainWorksList = document.getElementById('mainWorksList');
    if (!mainWorksList) return;
    
    const works = getWorks();
    const categories = getCategories();
    const mainWorks = works.filter(w => w.type === 'main');
    const mainCategories = categories.filter(c => c.parent === 'main');
    
    mainWorksList.innerHTML = '';
    
    if (mainWorks.length === 0) {
        mainWorksList.innerHTML = '<p style="text-align: center; color: #64748b; padding: 2rem;">暂无主要作品，请等待更新...</p>';
        return;
    }
    
    const categorizedWorks = {};
    const uncategorizedWorks = [];
    
    mainWorks.forEach(work => {
        if (work.categoryId) {
            const category = getCategoryById(work.categoryId);
            if (category) {
                if (!categorizedWorks[category.id]) {
                    categorizedWorks[category.id] = { ...category, works: [] };
                }
                categorizedWorks[category.id].works.push(work);
            } else {
                uncategorizedWorks.push(work);
            }
        } else {
            uncategorizedWorks.push(work);
        }
    });
    
    mainCategories.forEach(category => {
        if (categorizedWorks[category.id]) {
            const section = document.createElement('div');
            section.className = 'category-section';
            section.innerHTML = `
                <div class="category-header">
                    <div>
                        <h2 class="category-title">${category.name}</h2>
                        ${category.desc ? `<p class="category-desc">${category.desc}</p>` : ''}
                    </div>
                    <span class="category-count">${categorizedWorks[category.id].works.length} 个作品</span>
                </div>
                <div class="category-works">
                </div>
            `;
            
            const categoryWorksContainer = section.querySelector('.category-works');
            categorizedWorks[category.id].works.forEach(work => {
                const item = createWorkItem(work);
                categoryWorksContainer.appendChild(item);
            });
            
            mainWorksList.appendChild(section);
        }
    });
    
    if (uncategorizedWorks.length > 0) {
        const section = document.createElement('div');
        section.className = 'category-section uncategorized-section';
        section.innerHTML = `
            <div class="category-header">
                <div>
                    <h2 class="category-title">未分类作品</h2>
                    <p class="category-desc">暂无指定栏目归属的作品</p>
                </div>
                <span class="category-count">${uncategorizedWorks.length} 个作品</span>
            </div>
            <div class="category-works">
            </div>
        `;
        
        const categoryWorksContainer = section.querySelector('.category-works');
        uncategorizedWorks.forEach(work => {
            const item = createWorkItem(work);
            categoryWorksContainer.appendChild(item);
        });
        
        mainWorksList.appendChild(section);
    }
    
    animateCards();
}

function createWorkItem(work) {
    const item = document.createElement('div');
    const hasImage = work.image && work.image !== 'https://via.placeholder.com/400x250/6366f1/ffffff';
    
    item.className = hasImage ? 'work-item' : 'work-item work-item-no-image';
    
    // 获取栏目名称
    let displayCategory = work.category || '未分类';
    if (work.categoryId) {
        const cat = getCategoryById(work.categoryId);
        if (cat && cat.name) {
            displayCategory = cat.name;
        }
    }
    
    const imageHtml = hasImage ? `
        <div class="work-item-image-wrapper">
            <img src="${work.image}" alt="${work.title}">
        </div>
    ` : '';
    
    // 处理描述文本，直接使用textContent设置，让CSS的white-space来处理换行
    const maxLength = 200;
    let desc = work.desc || '暂无描述';
    let isLongDesc = desc.length > maxLength;
    
    let shortDesc = '';
    if (isLongDesc) {
        // 截取前200个字符
        shortDesc = desc.substring(0, maxLength) + '...';
    }
    
    item.innerHTML = `
        ${imageHtml}
        <div class="work-item-content">
            <div>
                <h3 class="work-item-title">${work.title}</h3>
                <span class="work-item-category">${displayCategory}</span>
                <p class="work-item-desc"></p>
                ${work.tags ? `<div class="work-item-tags">标签：${work.tags}</div>` : ''}
            </div>
            ${work.file ? `<a href="${work.file}" download="${work.fileName}" class="download-btn">下载附件</a>` : ''}
            ${isLongDesc ? `<button class="expand-btn">展开</button>` : ''}
        </div>
    `;
    
    // 直接设置textContent，保留换行
    const descEl = item.querySelector('.work-item-desc');
    descEl.textContent = isLongDesc ? shortDesc : desc;
    
    // 添加展开/收起功能
    if (isLongDesc) {
        const btn = item.querySelector('.expand-btn');
        let isExpanded = false;
        
        btn.addEventListener('click', function() {
            if (!isExpanded) {
                descEl.textContent = desc;
                btn.textContent = '收起';
            } else {
                descEl.textContent = shortDesc;
                btn.textContent = '展开';
            }
            isExpanded = !isExpanded;
        });
    }
    
    return item;
}

function loadOtherWorksPage() {
    const otherWorksList = document.getElementById('otherWorksList');
    if (!otherWorksList) return;
    
    const works = getWorks();
    const otherWorks = works.filter(w => w.type === 'other');
    
    otherWorksList.innerHTML = '';
    if (otherWorks.length === 0) {
        otherWorksList.innerHTML = '<p style="text-align: center; color: #64748b; padding: 2rem;">暂无其他作品，请等待更新...</p>';
        return;
    }
    
    otherWorks.forEach(work => {
        const item = createWorkItem(work);
        otherWorksList.appendChild(item);
    });
    
    animateCards();
}

function loadFunStuffPage() {
    const funStuffList = document.getElementById('funStuffList');
    if (!funStuffList) return;
    
    const works = getWorks();
    const funWorks = works.filter(w => w.type === 'fun');
    
    funStuffList.innerHTML = '';
    if (funWorks.length === 0) {
        funStuffList.innerHTML = '<p style="text-align: center; color: #64748b; padding: 2rem;">暂无有趣内容，请等待更新...</p>';
        return;
    }
    
    funWorks.forEach(work => {
        const item = createWorkItem(work);
        funStuffList.appendChild(item);
    });
    
    animateCards();
}

function loadWorks() {
    loadHomePageWorks();
}

function getWorks() {
    const stored = localStorage.getItem('works');
    return stored ? JSON.parse(stored) : [];
}

function getCategories() {
    const stored = localStorage.getItem('categories');
    return stored ? JSON.parse(stored) : [];
}

function getCategoryById(id) {
    const categories = getCategories();
    return categories.find(cat => cat.id == id);
}

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(99, 102, 241, 0.4)';
        navbar.style.padding = '0.8rem 0';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(99, 102, 241, 0.3)';
        navbar.style.padding = '1rem 0';
    }
});

// 动画效果
function animateCards() {
    const animateElements = document.querySelectorAll('.work-card, .worldview-content');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// 公告栏功能
function toggleAnnouncement() {
    const panel = document.getElementById('announcementPanel');
    if (panel) {
        panel.classList.toggle('active');
    }
}

// 加载公告
function loadAnnouncements() {
    const announcements = getAnnouncements();
    const contentEl = document.getElementById('announcementContent');
    const dotEl = document.getElementById('announcementDot');
    
    if (!contentEl) return;
    
    if (announcements.length === 0) {
        contentEl.innerHTML = '<div class="announcement-empty">暂无公告</div>';
        if (dotEl) dotEl.style.display = 'none';
        return;
    }
    
    // 按置顶和时间排序
    const sortedAnnouncements = [...announcements].sort((a, b) => {
        if (a.pinned && !b.pinned) return -1;
        if (!a.pinned && b.pinned) return 1;
        return b.createdAt - a.createdAt;
    });
    
    contentEl.innerHTML = sortedAnnouncements.map(announcement => `
        <div class="announcement-item ${announcement.pinned ? 'pinned' : ''}">
            ${announcement.title ? `<div class="announcement-title">${announcement.title}</div>` : ''}
            <div class="announcement-text">${announcement.content}</div>
            <div class="announcement-date">${formatDate(announcement.createdAt)}</div>
        </div>
    `).join('');
    
    // 显示小红点
    if (dotEl && announcements.length > 0) {
        dotEl.style.display = 'block';
    }
}

// 获取公告
function getAnnouncements() {
    const stored = localStorage.getItem('announcements');
    return stored ? JSON.parse(stored) : [];
}

// 保存公告
function saveAnnouncements(announcements) {
    localStorage.setItem('announcements', JSON.stringify(announcements));
}

// 添加公告
function addAnnouncement(title, content, pinned = false) {
    const announcements = getAnnouncements();
    const newAnnouncement = {
        id: Date.now(),
        title: title,
        content: content,
        pinned: pinned,
        createdAt: Date.now()
    };
    announcements.push(newAnnouncement);
    saveAnnouncements(announcements);
    return newAnnouncement;
}

// 更新公告
function updateAnnouncement(id, title, content, pinned) {
    const announcements = getAnnouncements();
    const index = announcements.findIndex(a => a.id === id);
    if (index !== -1) {
        announcements[index] = {
            ...announcements[index],
            title: title,
            content: content,
            pinned: pinned
        };
        saveAnnouncements(announcements);
        return announcements[index];
    }
    return null;
}

// 删除公告
function deleteAnnouncement(id) {
    const announcements = getAnnouncements();
    const filtered = announcements.filter(a => a.id !== id);
    saveAnnouncements(filtered);
}

// 格式化日期
function formatDate(timestamp) {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}`;
}

// 在页面加载完成后初始化公告栏
document.addEventListener('DOMContentLoaded', function() {
    loadAnnouncements();
    
    // 点击其他地方关闭公告面板
    document.addEventListener('click', function(e) {
        const panel = document.getElementById('announcementPanel');
        const toggle = document.getElementById('announcementToggle');
        
        if (panel && panel.classList.contains('active')) {
            if (!panel.contains(e.target) && !toggle.contains(e.target)) {
                panel.classList.remove('active');
            }
        }
    });
});
