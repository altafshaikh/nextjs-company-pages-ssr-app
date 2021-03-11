# Company Website: Server Side Rendering

A Server Side Pre-Rendered Company Website build using NextJs

## Features
The application renders three pages for the following companies

1. Raw Engineering
2. Contentstack
3. Surfboard Ventures

- all pages are server side rendered
- app is fetching data from a JSON server hosted on Github [here](https://github.com/ialtafshaikh/static-files/tree/master/json)
- bootsrap is used to layout and design the pages and components
- app make use of sass and css
- nextjs app is hosted on **Vercel**


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
To Download this project and run locally

First, clone the repository into your local machine:
```
git clone https://github.com/altafshaikh/nextjs-company-pages-ssr-app.git
```
Secondly, install all the dependencies
```
npm i
```

then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## To See All Statically Pre-Render Pages on Server

- Download the Project as mentioned in Getting Started Section
- once all dependencies are installed, run below command to create a build
```
npm run build
```
- navigate to `.nextjs > server > pages > companies` folder to see Raw Enginnering, Contentstack and Surfboard pages
- navigate to `.nextjs > server > pages ` folder to see index page (Landing Page)


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Resources

- [NextJs official tutorial](https://nextjs.org/learn/basics/create-nextjs-app)
- [bootstap docs](https://getbootstrap.com/docs/4.0/getting-started/introduction/)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

## Live Demo of this Project

[Live Working link](https://company-ssr-app.vercel.app/)


Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Author

* **Altaf Shaikh** - *work by* - [altafshaikh](https://github.com/altafshaikh)

![altaf shaikh](https://raw.githubusercontent.com/ialtafshaikh/static-files/master/coollogo_com-327551664.png)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
