# Revok Discord Bot

**Revok** é um bot full‑stack para Discord, escrito em Node.js, com suporte a **slash commands**, **prefix commands**, **i18n** (pt‑BR & en‑US), e funcionalidades de:

- 🎫 **Sistema de Tickets** (open/close, embed + botão)  
- 🎭 **Reaction Roles**  
- 🛡️ **Moderação** (mute, ban, kick, com modo `dry-run`)  
- 📢 **Announce** (bot posta mensagem em canal)  
- 🆘 **Help** (embed listando comandos)  
- 🌐 **Internacionalização** via JSON em `locales/`  

---

## 🛠️ Pré-requisitos

- Node.js v16+  
- NPM ou Yarn  
- Um bot Discord com `BOT` scope e token em mãos  
- (Windows) FFmpeg no `PATH` se usar áudio  

## 📂 Estrutura do Projeto

```
revok-bot/
├─ commands/             # Slash & prefix commands
│  ├─ slash/
│  │  ├─ announce.js
│  │  ├─ help.js
│  │  ├─ ticket.js
│  │  ├─ reactionrole.js
│  │  ├─ ping.js
│  │  ├─ kick.js
│  │  ├─ ban.js
│  │  └─ mute.js
│  └─ prefix/
│     └─ say.js  (exemplo)
│
├─ events/               # Listeners (ready, interactionCreate, reactions...)
│  ├─ ready.js
│  └─ interactionCreate.js
│  └─ messageReactionAdd.js
│  └─ messageReactionRemove.js
│  └─ messageCreate.js
│
├─ stores/               # JSON stores (tickets, reactionRoles, guildConfigs)
│  ├─ ticketStore.js
│  ├─ reactionRoleStore.js
│  └─ guildConfigStore.js
│
├─ services/             # Abstrações sobre os stores (i.e. addRole, listRoles)
│  ├─ reactionRoleService.js
│  └─ ...
│
├─ locales/              # Internacionalização
│  ├─ pt.json
│  └─ en.json
│  └─ es.json (exemplo espanhol)
│
├─ utils/
│  ├─ i18n.js            # helper `t(guildId, key, vars)`
│  └─ action.js          # helper `doOrSimulate()` para DRY_RUN
│
├─ .env                  # variáveis de ambiente (excluído do VCS)
├─ nodemon.json          # ignora arquvos de store
├─ deploy-commands.js    # registra slash commands na API
├─ index.js              # bootstrap do client
└─ README.md             # este arquivo
```

---

## ⚙️ Configuração

1. **Instale dependências**:
   ```bash
   npm install
   ```

2. **.env**
   Crie um arquivo `.env` na raiz:
   ```env
   DISCORD_TOKEN=seu_token_aqui
   STAFF_ROLE_ID=ID_do_cargo_de_staff
   DRY_RUN=false          # true para simulação, false para ações reais
   ```

3. **Configurar nodemon**
   Em `nodemon.json`, garanta que:
   ```json
   {
     "ignore": [
       "*.json",            
       "tickets.json",
       "reactionRoles.json",
       "guildConfigs.json"
     ]
   }
   ```

4. **Deploy de comandos**
   ```bash
   node deploy-commands.js
   ```

5. **Rodar em modo dev**
   ```bash
   npm run dev
   ```

---

## 📌 Principais funcionalidades

### Internacionalização (i18n)
- Textos de runtime via `t(guildId, 'path.to.key', { vars })`  
- `locales/pt.json`, `locales/en.json`, `locales/es.json`  
- `/setlanguage <pt|en|es>` muda resposta de runtime  
- `setDescriptionLocalizations({ 'pt-BR': ..., 'en-US': ..., 'es-ES': ... })` para descrições de comandos

### Moderação
- `/kick @user [reason]`  
- `/ban @user [reason] [days]`  
- `/mute @user [duration] [unit] [reason]` (native timeout)  
- **Modo DRY_RUN** com variável `DRY_RUN=true` ou helper `doOrSimulate()`

### Reaction Roles
- `/reaction-role add message:<ID> emoji:<🔵|custom> role:@Role`  
- `/reaction-role remove ...`  
- `/reaction-role list`

### Tickets
- `/ticket open subject:<texto>` → cria canal privado + embed + botão `Fechar ticket`  
- `/ticket close` ou botão → fecha ticket e deleta canal

### Outros
- `/announce channel:#canal message:<texto>`  
- `/help` → embed listando comandos
- `/ping` → mostra latência de API

---

## 🚀 Próximos passos

- 🎨 Branding & White‑label: painel web por servidor  
- 🌍 Suporte a mais idiomas (de_DE, fr_FR, etc.)  
- 🎵 Reintregração de sistema de música após release  
- 🔧 Migração de JSON para banco de dados (Mongo/Postgres)  

---

Made with ❤️ by Gus