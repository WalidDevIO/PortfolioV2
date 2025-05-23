# Étape 1 — Build 1f.RSAdRClEsBgA&+jDS
FROM node:18-alpine AS builder

WORKDIR /app

# Installer pnpm
RUN npm install -g pnpm

# Copier les fichiers nécessaires à l'installation
COPY package.json pnpm-lock.yaml ./

# Installer les dépendances (sans les dev si tu veux optimiser, ici on garde tout pour le build)
RUN pnpm install

# Copier le reste du code source
COPY . .

# Construire le projet Next.js
RUN pnpm build

# Étape 2 — Image finale
FROM node:18-alpine AS runner

WORKDIR /app

# Installer pnpm ici aussi si tu utilises `pnpm` pour le runtime
RUN npm install -g pnpm

# Copier uniquement les fichiers nécessaires à l'exécution
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./

# Exposer le port
EXPOSE 3000

# Démarrer l'app
CMD ["pnpm", "start"]
