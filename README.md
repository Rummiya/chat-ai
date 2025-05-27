# 💬 Chat-AI — чат-приложение с авторизацией и мультиязычностью

Интерактивное приложение на базе Next.js с возможностью регистрации, авторизации и общения с ИИ, адаптированое под десктоп и мобильные устройства

## 🚀 Стек технологий

- **Next.js (App Router)**  
- **TypeScript**  
- **Tailwind CSS**  
- **shadcn/ui**  
- **Zustand** — глобальное хранилище токена и текущего пользователя  
- **TanStack Query** — для запросов данных  
- **next-intl** — мультиязычность (us English / ru Русский)
- **MockApi**

## ⚙️ Основной функционал

- 🔐 Имитация регистрации и входа через MockApi
- 🛡️ `AuthGuard` — защита маршрутов без токена
- 👤 Глобальный `currentUser` с загрузкой при инициализации
- 💬 Чат с интерфейсом:
  - отправка сообщений
  - автоскролл вниз
  - имитация ответа ИИ
- 🌐 Переключение языка

## 📸 Screenshots

<div align="center">
  <img src="https://github.com/user-attachments/assets/edec572b-7323-4992-ade0-a670d8c5fcdd" width="250" />
  <img src="https://github.com/user-attachments/assets/73b1f823-6152-45b3-9623-8c2ad435ae94" width="250" />
  <img src="https://github.com/user-attachments/assets/8530f63e-a363-4b67-982e-03ef8e3f2c34" width="250" />
</div>



## 🔧 Установка и запуск

```bash
# Клонировать проект
git clone https://github.com/Rummiya/chat-ai.git
cd chat-ai

# Установить зависимости
pnpm install

# Запустить
pnpm dev
```

