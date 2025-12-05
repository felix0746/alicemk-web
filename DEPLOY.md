# 部署到 Vercel 指南

## 步驟一：創建 GitHub 倉庫

1. 前往 [GitHub](https://github.com) 並登入您的帳號
2. 點擊右上角的 **+** 按鈕，選擇 **New repository**
3. 填寫倉庫資訊：
   - **Repository name**: `alicemk-web` (或您喜歡的名稱)
   - **Description**: Alice MK Face 皮膚管理網站
   - **Visibility**: 選擇 Public 或 Private
   - **不要**勾選 "Initialize this repository with a README"（因為我們已經有本地倉庫）
4. 點擊 **Create repository**

## 步驟二：連接本地倉庫到 GitHub

在終端機中執行以下命令（將 `YOUR_USERNAME` 替換為您的 GitHub 用戶名）：

```bash
git remote add origin https://github.com/YOUR_USERNAME/alicemk-web.git
git branch -M main
git push -u origin main
```

如果您的 GitHub 倉庫名稱不同，請相應調整 URL。

## 步驟三：部署到 Vercel

### 方法一：透過 Vercel 網站（推薦）

1. 前往 [Vercel](https://vercel.com) 並使用 GitHub 帳號登入
2. 點擊 **Add New Project** 或 **Import Project**
3. 選擇您剛創建的 GitHub 倉庫 `alicemk-web`
4. Vercel 會自動偵測 Next.js 專案，確認以下設定：
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (預設)
   - **Build Command**: `npm run build` (預設)
   - **Output Directory**: `.next` (預設)
   - **Install Command**: `npm install` (預設)
5. 點擊 **Deploy**
6. 等待部署完成（通常需要 1-2 分鐘）

### 方法二：使用 Vercel CLI

1. 安裝 Vercel CLI：
   ```bash
   npm i -g vercel
   ```

2. 在專案目錄中執行：
   ```bash
   vercel
   ```

3. 按照提示完成設定：
   - 登入 Vercel 帳號
   - 選擇專案設定
   - 確認部署

## 步驟四：環境變數（如果需要）

如果您的專案需要環境變數（例如 API keys），可以在 Vercel 專案設定中添加：

1. 進入 Vercel 專案頁面
2. 點擊 **Settings** → **Environment Variables**
3. 添加所需的環境變數

## 步驟五：自訂網域（可選）

1. 在 Vercel 專案頁面，點擊 **Settings** → **Domains**
2. 輸入您的網域名稱
3. 按照指示設定 DNS 記錄

## 自動部署

完成設定後，每次您推送代碼到 GitHub 的 `main` 分支，Vercel 會自動：
- 偵測變更
- 重新建置專案
- 部署最新版本

## 檢查部署狀態

- 在 Vercel 專案頁面查看部署歷史
- 每個部署都會有唯一的 URL，例如：`https://alicemk-web.vercel.app`
- 可以設定生產環境的預設網域

## 疑難排解

### 建置失敗
- 檢查 `package.json` 中的建置腳本是否正確
- 確認所有依賴都已正確安裝
- 查看 Vercel 的建置日誌找出錯誤

### 圖片無法顯示
- 確認 `next.config.ts` 中已設定 `images.remotePatterns`
- 檢查圖片 URL 是否可公開存取

### 樣式問題
- 確認 Tailwind CSS 配置正確
- 檢查 `globals.css` 是否正確導入

## 有用的連結

- [Vercel 文件](https://vercel.com/docs)
- [Next.js 部署指南](https://nextjs.org/docs/app/building-your-application/deploying)
- [GitHub 文件](https://docs.github.com)

