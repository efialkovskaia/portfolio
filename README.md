# Портфолио Евгении Фиалковской

Статический сайт-портфолио на Next.js, TypeScript, Tailwind CSS и App Router. Данные кейсов хранятся локально в `data/cases.ts`, изображения — в `public/images`.

## Запуск

```bash
npm install
npm run dev
```

Локально сайт откроется на `http://localhost:3000/portfolio/`.

## Сборка

```bash
npm run build
```

Проект настроен на static export через `output: "export"` в `next.config.js`. После сборки статические файлы будут в папке `out`.

По умолчанию сайт собирается для GitHub Pages по адресу `https://efialkovskaia.github.io/portfolio/`.

## Публикация на GitHub Pages

1. Соберите проект командой `npm run build`.
2. Опубликуйте содержимое папки `out` в GitHub Pages.
3. Если используете GitHub Actions, укажите `out` как папку артефакта для публикации.

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

Если репозиторий будет называться иначе, задайте другой base path перед сборкой:

```bash
NEXT_PUBLIC_BASE_PATH=/repository-name npm run build
```

Этот путь используется в `next.config.js` для `basePath` и `assetPrefix`, а также в ссылках на локальные файлы вроде изображений и `resume.pdf`.

Для пользовательского сайта вида `username.github.io` без подпапки соберите с пустым base path:

```bash
NEXT_PUBLIC_BASE_PATH= npm run build
```

## Редактирование кейсов

Все тексты карточек и детальных страниц находятся в `data/cases.ts`. Для нового кейса добавьте объект в массив `cases`; страница будет создана статически через App Router.
