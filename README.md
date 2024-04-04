# Development Documentations

The first thing you should know about this project is the concept. That the project I have been create is Visa-Indonesia website that the design is maked by S.P. Digital.
This is my first time to use the nuxt.js framework, so these framework little bit foreign to me and then I should learn all the nuxt features by reading the documentations. But I think some features are familiar to me because I have used the javascript frame work also, it's next.js framework in several times. 

This website is make using extra large screen display with my personal computer, that the width about 1520px and the height about 900px. When I start to developing this website, I'm facing some challanges from the design because of I can't use the components or export the images from figma, then I decided to create it by my own figma design on the several background like hero and footer. And then while creating this website I think that the good thing to develop this website by using the components base. By using this the components base framework I think all of it is easier, but it's seem not easy as I think. Because of one of the section its call one-stop-visa is has the different card border color, so I need to create some border styles and than call it by the classname in the section file and then it will go to the card file to bringing the differents classname.

And then I faced other challange about responsiveness to the different screen scale on the feedback section, so the feedback section in the extra large display it supposed to be showing five different feedbak card. But that's not the problem, the real challange is to make in less than extra large scale to be slider frame. And I decided to bring all the card in the horizontal position, then I the overflow in the horizontal way. And thankfully it's work, so I finally finished my developing process on the homepage of Visa Indonesia Website.

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
