document.body.style.backgroundColor = "lightgrey"; // 设置背景颜色为浅灰色

Telegram.WebApp.ready(); // 确保 Web App API 已准备就绪

// 按钮配置数据 (您可以根据需要修改)
const buttonsData = [
    { text: "Offer 1", url: "https://watchful-glass.com/bc3_Vn0.PT3LpzvRbkmbVkJ/ZQDC0O2/MTTYEpynO_DsQF0YL/TZYJxxMCTbIz4/NwDfUE" },
    { text: "Offer 2", url: "https://watchful-glass.com/b/3eVE0.Pp3hppvBb/mqV/JZZODZ0/2iMFTYEAysOHDHIS2DLTTHYrxoMVTRIb4-MbjncC" },
    { text: "Offer 3", url: "https://watchful-glass.com/b.3/Vp0gPu3NpXv/b/mfViJrZLDI0F2_MbTUERyeOnD/AdyVL/TVY-xHMLTxIi4gMsDFMk" },
];

// 获取容器
const buttonContainer = document.getElementById('buttonContainer');

// 创建多个 <a> 标签
for (let i = 0; i < 6; i++) {  // 创建6个链接
    const offerLink = document.createElement('a');
    offerLink.textContent = `Offer ${i + 1}`; // 设置链接文本，动态生成
    offerLink.href = "#"; // 设定为 #，我们通过脚本来控制跳转
    offerLink.className = 'offer-link'; // 添加一个类名以便样式使用

    // 设置链接样式
    offerLink.style.fontSize = "20px";
    offerLink.style.padding = "15px 30px";
    offerLink.style.borderRadius = "8px";
    offerLink.style.color = "black";
    offerLink.style.border = "2px solid #000";
    offerLink.style.cursor = "pointer";
    offerLink.style.margin = "10px"; // 给链接加点间距，防止它们太挤
    offerLink.style.textDecoration = "none"; // 去掉默认的下划线

    // 链接点击事件：随机选择链接
    offerLink.addEventListener('click', function(event) {
        event.preventDefault(); // 阻止默认的跳转行为
        
        // 随机选择一个链接
        const randomUrl = getRandomLink(buttonsData);
        
        // 使用 Telegram WebApp API 打开链接
        Telegram.WebApp.openLink(randomUrl);
    });

    // 将链接添加到容器中
    buttonContainer.appendChild(offerLink);
}

// 获取随机链接的函数
function getRandomLink(links) {
    const randomIndex = Math.floor(Math.random() * links.length);
    return links[randomIndex].url;
}
