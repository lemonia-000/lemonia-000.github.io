# Cloudflare 配置指南

## 📋 配置预清单

### 阶段 1：添加站点
- [ ] 注册/登录 Cloudflare 账号
- [ ] 点击 "Add Site" 添加您的域名
- [ ] 选择免费计划（Free Plan）
- [ ] 确认 DNS 记录（Cloudflare 会自动扫描）
- [ ] 将域名服务器（Nameservers）更改为 Cloudflare 提供的

### 阶段 2：SSL/TLS 配置
- [ ] SSL/TLS → 加密模式：**Full**（完全）
- [ ] Edge Certificates → 始终使用 HTTPS：**开启**
- [ ] Edge Certificates → 自动 HTTPS 重写：**开启**
- [ ] Edge Certificates → HTTP Strict Transport Security (HSTS)：**开启**
  - Max-Age: 12 months (31536000)
  - Include subdomains: 是
  - Preload: 否（初次设置建议不开启）
  - No-sniff: 是

### 阶段 3：缓存与性能配置
#### Speed → Optimization
- [ ] Auto Minify：勾选 JavaScript、CSS、HTML
- [ ] Brotli：**开启**
- [ ] Rocket Loader™：**开启**

#### Caching → Configuration
- [ ] Caching Level：**Standard**
- [ ] Browser Cache TTL：**4 hours**
- [ ] Always Online™：**开启**

#### Caching → Rules（可选）
创建页面规则优化特定资源：
```
*yourdomain.com/*.css
缓存级别：缓存所有内容
边缘缓存 TTL：1 个月
```

```
*yourdomain.com/*.js
缓存级别：缓存所有内容
边缘缓存 TTL：1 个月
```

```
*yourdomain.com/*.jpg
*yourdomain.com/*.png
*yourdomain.com/*.webp
缓存级别：缓存所有内容
边缘缓存 TTL：2 个月
```

### 阶段 4：安全配置
#### Security → WAF
- [ ] 安全级别：**Medium**（中）
- [ ] Bot Fight Mode：**开启**
- [ ] Challenge Passage：30 分钟

#### Security → DDoS
- [ ] HTTP DDoS Attack Protection：**High**
- [ ] Network-layer DDoS Attack Protection：**High**

### 阶段 5：DNS 记录配置

| Type | Name | Content | Proxy status |
|------|------|---------|--------------|
| CNAME | @ | your-username.github.io | Proxied (橙色云朵) |
| CNAME | www | your-username.github.io | Proxied (橙色云朵) |

⚠️ **注意：**
- 如果 GitHub Pages 使用自定义域名，请先在 GitHub 仓库设置中配置域名
- 等待 DNS 传播完成（可能需要几小时到 48 小时）
- Cloudflare 证书颁发也需要时间

---

## 🔧 Pages Rules 配置示例

### 规则 1：强制 HTTPS
```
URL匹配：http://*yourdomain.com/*
设置：
  转发 URL → 301 永久重定向
  目标：https://$1yourdomain.com/$2
```

### 规则 2：管理后台安全（可选）
```
URL匹配：*yourdomain.com/admin*
设置：
  安全级别 → 高
  浏览器完整性检查 → 开启
```

### 规则 3：静态资源长缓存
```
URL匹配：*yourdomain.com/*.css
*yourdomain.com/*.js
*yourdomain.com/*.jpg
*yourdomain.com/*.png
*yourdomain.com/*.gif
*yourdomain.com/*.webp
设置：
  边缘缓存 TTL → 1 个月
  浏览器缓存 TTL → 1 天
  缓存级别 → 缓存所有内容
```

---

## ⏱️ 检查清单（部署后）

- [ ] 域名访问正常
- [ ] HTTPS 已启用（地址栏有小锁）
- [ ] Cloudflare 显示 "Active"（概述页面）
- [ ] SSL/TLS 证书已颁发
- [ ] 网站所有功能正常
- [ ] 图片和资源正常加载
- [ ] 后台管理可正常登录和使用

---

## 💡 常见问题

### Q: 多久能生效？
A: DNS 传播通常需要 2-48 小时，Cloudflare 证书需要等待 15 分钟到数小时。

### Q: 出现"重定向次数过多"怎么办？
A: 检查 Cloudflare SSL 模式是否设置为 "Full" 而非 "Flexible"。

### Q: 如何知道 Cloudflare 是否在工作？
A: 访问您的网站，打开开发者工具 → Network，查看响应头，有 `cf-cache-status` 说明在工作。

### Q: GitHub Pages + Cloudflare 有什么好处？
A: 免费 CDN 加速、DDoS 防护、免费 SSL 证书、页面优化、中国大陆访问速度提升。
