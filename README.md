# Портфолио Евгении Фиалковской

Статический сайт-портфолио на Next.js, TypeScript, Tailwind CSS и App Router. Данные кейсов хранятся локально в `data/cases.ts`, изображения — в `public/images`.

## Запуск

```bash
npm install
npm run dev
```

Локально сайт откроется на `http://localhost:3000`.

## Сборка

```bash
npm run build
```

Проект настроен на static export через `output: "export"` в `next.config.js`. После сборки статические файлы будут в папке `out`.

Production-сборка настроена для GitHub Pages по адресу `https://efialkovskaia.github.io/portfolio/`.

## Публикация на GitHub Pages

Сайт публикуется по адресу:

```text
https://efialkovskaia.github.io/portfolio/
```

После каждого push в ветку `main` сайт автоматически собирается и публикуется через GitHub Actions из workflow `.github/workflows/deploy.yml`.

В настройках репозитория нужно выбрать:

```text
Settings → Pages → Build and deployment → Source → GitHub Actions
```

Для этого проекта используется `basePath: /portfolio` и `assetPrefix: /portfolio/` в production-сборке. Если в будущем репозиторий будет переименован, обновите `basePath` и `assetPrefix` в `next.config.js`.

## Резюме

Файл резюме лежит в `public/resume.pdf`. Замените его на актуальный PDF с тем же названием, чтобы кнопки «Резюме» и «Скачать резюме» продолжили работать без изменений.

## Изображения

Замените плейсхолдеры реальными файлами с теми же названиями:

- `public/images/avatar-placeholder.jpg`
- `public/images/cases/cdek-orders.jpg`
- `public/images/cases/vtb-accessibility.jpg`
- `public/images/cases/infinite-invoices.jpg`
- `public/images/cases/skyeng-certificates.jpg`

Если меняете названия файлов, обновите пути в `data/cases.ts` и `components/Hero.tsx`.

## GitHub Pages repository path

Сейчас проект уже настроен под репозиторий `portfolio`, то есть под адрес:

```text
https://efialkovskaia.github.io/portfolio/
```

Если репозиторий будет называться иначе, обновите значения `/portfolio` в `next.config.js`.

Для пользовательского сайта вида `username.github.io` без подпапки уберите production-значения `basePath` и `assetPrefix`.

## Редактирование кейсов

Все тексты карточек и детальных страниц находятся в `data/cases.ts`. Для нового кейса добавьте объект в массив `cases`; страница будет создана статически через App Router.
