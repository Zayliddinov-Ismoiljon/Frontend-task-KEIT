# 1. Minimal va engil NodeJS bazaviy tasvirini ishlatamiz
FROM node:18-alpine AS builder

# 2. Ishchi katalogni yaratamiz
WORKDIR /app

# 3. Paketlar va lock fayllarni nusxalash (cashing uchun muhim)
COPY package.json package-lock.json ./

# 4. Faqat dependency-larni o‘rnatamiz (yaxshi caching uchun)
RUN npm ci --legacy-peer-deps

# 5. Loyihaning barcha kodlarini konteynerga nusxalash
COPY . .

# 6. Loyihani build qilish
RUN npm run build

# 7. Engil nginx tasvirini ishlatamiz
FROM nginx:alpine

# 8. Build qilingan fayllarni nginx serverga joylash
COPY --from=builder /app/dist /usr/share/nginx/html

# 9. Default konfiguratsiyani o‘chiramiz va yangi config qo‘shamiz
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

# 10. Port ochamiz
EXPOSE 80

# 11. Nginx serverni ishga tushiramiz
CMD ["nginx", "-g", "daemon off;"]
