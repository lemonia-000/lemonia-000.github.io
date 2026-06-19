# 进取时代制作组 - 官方网站

[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-blue)](https://pages.github.com/)
[![Cloudflare](https://img.shields.io/badge/Cloudflare-Ready-orange)](https://cloudflare.com/)

这是「进取时代制作组」的官方网站，展示我们的主要作品、其他作品和有趣的内容。

## ✨ 功能特性

- 响应式设计，支持各种设备
- 作品分类展示（主要作品、其他作品、有趣的东西）
- 作品栏目分类管理
- 首页精选作品轮播
- 作品描述展开/收起功能
- 后台管理系统（管理员登录）
- 支持图片和文件附件上传
- 本地存储数据保存

## 🚀 快速开始

### 直接打开

直接用浏览器打开 `index.html` 即可预览网站。

### 本地服务器（推荐）

使用 Python 或 Node.js 启动本地服务器：

**Python 3:**
```bash
python -m http.server 8000
```

**Node.js (http-server):**
```bash
npx http-server
```

然后在浏览器访问 `http://localhost:8000`

## 🔐 后台管理

- 访问 `admin-login.html` 进入登录页
- 默认账号：策划
- 默认密码：061027114514

## 📁 文件结构

```
.
├── index.html              # 首页
├── main-works.html         # 主要作品页面
├── other-works.html        # 其他作品页面
├── fun-stuff.html          # 有意思的东西页面
├── about.html              # 关于我们页面
├── admin-login.html        # 管理员登录页面
├── admin-panel.html        # 后台管理面板
├── styles.css              # 样式文件
├── script.js               # 脚本文件
├── .nojekyll               # GitHub Pages 配置文件
├── DEPLOYMENT.md           # 部署指南
├── CLOUDFLARE.md           # Cloudflare 配置指南
└── README.md               # 本文件
```

## ☁️ GitHub Pages 部署

详细的部署步骤请查看 [DEPLOYMENT.md](DEPLOYMENT.md)

## 🌐 Cloudflare 加速

Cloudflare 配置步骤请查看 [CLOUDFLARE.md](CLOUDFLARE.md)

## 📝 技术栈

- 纯 HTML5 + CSS3 + JavaScript
- 无前端框架依赖
- LocalStorage 数据存储
- 响应式布局

## 🔧 优化项目

✅ 已移除 Google Fonts 依赖，使用系统字体回退
✅ 已替换 CDN 资源为国内稳定源（BootCDN）
✅ 已确认所有外部链接使用 HTTPS
✅ 已添加 GitHub Pages 适配文件
✅ 已生成部署文档和 Cloudflare 配置指南

## 👥 制作组

- 入间有明 - 画师
- 思明居士 - 总策划
- 噗噗睡不醒 - 编辑

## 📄 许可证

版权所有 © 进取时代制作组

---

**谱写新世界的史诗**
