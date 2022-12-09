### Arent Test Result

#### Feature:
- Responsive
- Dynamic component view
- Graph Animation / data view

#### How to run source:
- Clone the project
- Run `yarn install`, can use `npm install` but not recommended, only run when duplicate package
- Run `npm run dev` or `yarn dev`

#### How to explore project
- Project main folder is listed in pages
![Screenshot 2022-12-09 at 6 20 16 PM](https://user-images.githubusercontent.com/37767903/206691252-3e5bb898-d0cc-456c-ab12-1d8a1742158e.png)
- `pages`: contain main pages (homepage, record, column) and subpages for you to check code clean, instruction on how to navigate will be as below:
  + 3 big page is `/homepage`, `/record` and `/column`
  + If you want to check code clean of each componenet of pages, navigate to /{pageName}/{subPageName}, example: `/homepage` to navigate to main page, `/homepage/banner` to check the banner component, `/banner` is the name of the file in the `homepage` folder
- components: contain basic component
- hooks: custom hooks
- data: DAL, mock because there's no server
- types: type definition
- layout: cucrently only 1 layout with same header/footer
- styles: variables.scss contain var for styling, global.scss contain global var
- public: public assets such as image, font, ....

### This is all we need to know about the project, hope you have a good time, thanks
