# E-Commerce Admin Dashboard

Nx monorepo ile oluşturulan **Admin Dashboard** uygulaması. Angular standalone components kullanarak modern ve modüler bir yapı sağlar.

## 🚀 Teknolojiler

- **Framework**: Angular 20 (Standalone Components)
- **Build Tool**: Nx Monorepo
- **Package Manager**: npm
- **Styling**: CSS3
- **Routing**: Angular Router

## 📁 Proje Yapısı

```
myorg/
├── apps/
│   └── admin/
│       └── src/
│           ├── app/
│           │   ├── app.component.ts
│           │   ├── app.routes.ts
│           │   └── app.config.ts
│           ├── page/
│           │   ├── layouts/
│           │   │   ├── layouts.component.ts
│           │   │   ├── layouts.component.html
│           │   │   └── layouts.component.css
│           │   ├── home/
│           │   │   ├── home.component.ts
│           │   │   ├── home.component.html
│           │   │   └── home.component.css
│           │   ├── login/
│           │   │   ├── login.component.ts
│           │   │   ├── login.component.html
│           │   │   └── login.component.css
│           │   └── test/
│           │       ├── test.component.ts
│           │       ├── test.component.html
│           │       └── test.component.css
│           └── index.html
└── package.json
```

## 🛠️ Kurulum

### Gereksinimler
- Node.js 18+
- npm 9+

### Adımlar

1. **Bağımlılıkları yükleyin:**
```bash
npm install
```

2. **Geliştirme sunucusunu başlatın:**
```bash
npx nx serve admin
```

3. Tarayıcıda açın: [http://localhost:4200](http://localhost:4200)

## 📝 Komutlar

### Geliştirme
```bash
# Dev sunucusunu başlat
npx nx serve admin

# Linting kontrol et
npx nx lint admin

# Testleri çalıştır
npx nx test admin
```

### Production
```bash
# Production build yap
npx nx build admin

# Tüm projeleri graph olarak gör
npx nx graph
```

### Component Oluşturma
```bash
# Yeni component oluştur
nx g @nx/angular:component --name=mycomponent --path=apps/admin/src/page/mycomponent --standalone
```

## 🗺️ Routing Yapısı

Uygulama aşağıdaki route yapısına sahiptir:

```
/ (Layouts)
├── /home (Home Component)
├── /login (Login Component)
└── /test (Test Component)
```

**Layouts Component** ana layout olarak çalışır ve `Home` ve `Login` componentlerini içerir.

## 📦 Componentler

### 1. **Layouts Component** (`page/layouts/`)
Ana layout sayfası. Tüm sayfa öğelerinin düzenini yönetir.
- Children: Home, Login components
- Standalone: ✅

### 2. **Home Component** (`page/home/`)
Ana sayfa. Dashboard ve önemli bilgiler gösterilir.
- Standalone: ✅

### 3. **Login Component** (`page/login/`)
Giriş sayfası. Kullanıcı kimlik doğrulaması sağlar.
- Standalone: ✅

### 4. **Test Component** (`page/test/`)
Test amaçlı örnek component.
- Standalone: ✅

### 5. **App Component** (`app/`)
Kök component. Routing'i yönetir.

## 🎨 Stil Yönetimi

Her component'in kendi CSS dosyası vardır:
- `layouts.component.css` - Layout stilleri
- `home.component.css` - Home sayfa stilleri
- `login.component.css` - Login form stilleri
- `app.component.css` - Global app stilleri

## 📚 Kaynaklar

- [Nx Dokumentasyonu](https://nx.dev)
- [Angular Dokumentasyonu](https://angular.io)
- [Angular Standalone Components](https://angular.io/guide/standalone-components)
- [Angular Router](https://angular.io/guide/router)

## 📄 Lisans

Bu proje açık kaynak olarak sunulmaktadır.

---

**Geliştirici İpuçları:**
- Nx CLI ile component oluşturmak için `nx g @nx/angular:component` kullanın
- Yeni route eklemek için `app.routes.ts` dosyasını düzenleyin
- Component'ler standalone olduğu için ayrı module'a gerek yoktur

---

## 👨‍💼 Hazırlayanlar

**Lead Developer:** Ali Can Yücel

Proje 2026'da E-Commerce Admin Dashboard olarak başlatılmıştır.

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Set up CI!

### Step 1

To connect to Nx Cloud, run the following command:

```sh
npx nx connect
```

Connecting to Nx Cloud ensures a [fast and scalable CI](https://nx.dev/ci/intro/why-nx-cloud?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) pipeline. It includes features such as:

- [Remote caching](https://nx.dev/ci/features/remote-cache?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Task distribution across multiple machines](https://nx.dev/ci/features/distribute-task-execution?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Automated e2e test splitting](https://nx.dev/ci/features/split-e2e-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Task flakiness detection and rerunning](https://nx.dev/ci/features/flaky-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

### Step 2

Use the following command to configure a CI workflow for your workspace:

```sh
npx nx g ci-workflow
```

[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:
- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
