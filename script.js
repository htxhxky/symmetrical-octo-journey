// 留言板功能
 document.addEventListener('DOMContentLoaded', function() {
    // 加载留言
    loadMessages();

    // 留言表单提交
    const messageForm = document.getElementById('message-form');
    if (messageForm) {
        messageForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name && email && message) {
                const newMessage = {
                    id: Date.now(),
                    name: name,
                    email: email,
                    message: message,
                    date: new Date().toLocaleString()
                };
                
                // 保存留言到本地存储
                saveMessage(newMessage);
                
                // 重置表单
                messageForm.reset();
                
                // 重新加载留言
                loadMessages();
            }
        });
    }

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// 保存留言到本地存储
function saveMessage(message) {
    let messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.push(message);
    localStorage.setItem('messages', JSON.stringify(messages));
}

// 加载留言
function loadMessages() {
    const messageList = document.getElementById('message-list');
    if (!messageList) return;
    
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    
    if (messages.length === 0) {
        messageList.innerHTML += '<p>暂无留言，快来留下第一条留言吧！</p>';
        return;
    }
    
    messages.forEach(message => {
        const messageItem = document.createElement('div');
        messageItem.className = 'message-item';
        messageItem.innerHTML = `
            <h4>${message.name}</h4>
            <p>${message.message}</p>
            <small>${message.date}</small>
        `;
        messageList.appendChild(messageItem);
    });
}

// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(59, 130, 246, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = '#3B82F6';
            navbar.style.boxShadow = 'none';
        }
    }
});

// 项目卡片悬停效果
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
});

// 爱好卡片悬停效果
const hobbyCards = document.querySelectorAll('.hobby-card');
hobbyCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
});