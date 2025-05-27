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
  <img src="https://github.com/user-attachments/assets/6fff21b6-b370-4c77-ae6f-8616dc38a8fd" width="300" />
  <img src="https://github.com/user-attachments/assets/71608147-3baa-460c-830f-5ae7155a5759" width="300" />
  <img src="https://github.com/user-attachments/assets/a5832952-0a40-4087-a7f1-3de0ef95ace6" width="300" />
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

