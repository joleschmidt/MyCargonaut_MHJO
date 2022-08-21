

# MyCargonaut 

## Content
1. [Getting Started](#getting-started)
2. [Planning](#planning)
3. [Build / Update Project for Firebase](#build--update-project-for-firebase)
4. [Firebase hosting / deploying](#firebase-hosting--deploying)
5. [Firebase testing / debugging](#firebase-testing-/-debugging)
6. [Docs](#docs)


## Planning 
### Verlinkungen zu Figma mit dem das Project geplant wurde

Wireframes: https://www.figma.com/file/VXifLbsuiDOwhGb1AgyhNj/Wireframe---MyCargonaut

Mockup: https://www.figma.com/file/VXifLbsuiDOwhGb1AgyhNj/Wireframe---MyCargonaut?node-id=45%3A4

UML und Klassendiagramm:
https://www.figma.com/file/ol2GEWfYnLEG8Abu0IgIpN/UML---MyCargonaut?node-id=0%3A1
## Getting Started 
First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.                                                        




## Build / Update Project for Firebase

`npm run build`

## Firebase hosting / deploying

workflow in `Github Actions update and deploys website automatically` after push and successfull test

or 

update project ---> `firebase deploy --only hosting`
 (delete .firebase folder if project is not updated correctly)



## Firebase testing / debugging

`firebase serve --only hosting`
(port issues on mac with `firebase emulators:start` because of airplay & java)

## Docs

`React`

- [React.js Hooks Documentation](https://reactjs.org/docs/hooks-intro.html) - handle useState, useEffect & functional Components.

`Next.js` -

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

`Bootstrap`

- [Bootstrap Documentation](https://getbootstrap.com/docs/4.1/layout/overview/) - Layout, Content, Components etc.

`FontAwesome Icons`

- [FontAwesome Icons](https://fontawesome.com/search?s=solid%2Cbrands)

`Firebase`

- [Firebase Documentation](https://firebase.google.com/docs/firestore/manage-data/add-data#web-version-8_5) - use Web version 8 for better understanding.
- [Firebase / React Hooks](https://cloudnweb.dev/2020/02/building-an-app-with-firebase-and-react-hooks-in-simple-way/) - Add-, Get-, Delete Functions.
