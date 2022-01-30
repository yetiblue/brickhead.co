import { createStore } from "redux";

interface VideoList {
  category: string;
  src: string;
  director: string;
  title: string;
}
let videoList: VideoList[] = [
  {
    category: "Music Video",
    src: "https://player.vimeo.com/video/561861537?h=cc6bed8ee6&title=0&byline=0&portrait=0",
    director: "Giles Perkins",
    title: "Alexa Dark - Fade to Black and Blue",
  },
  {
    category: "Music Video",
    src: "https://player.vimeo.com/video/630277429?h=76d9235adc&title=0&byline=0&portrait=0",
    director: "Giles Perkins",
    title: "Thomtide Summer",
  },
  {
    category: "Music Video",
    src: "https://player.vimeo.com/video/557433144?h=d2322ca6b5&title=0&byline=0&portrait=0",
    director: "Giles Perkins",
    title: "Thomtide Spring",
  },
  {
    category: "Music Video",
    src: "https://www.youtube.com/embed/dzQd-CsG-PE",
    director: "Adrian Sobrado",
    title: "Saikoh",
  },
  {
    category: "Music Video",
    src: "https://www.youtube.com/embed/OrNu31ENaKU",
    director: "Ragan Henderson",
    title: "Chloe Lilac - 10 things ",
  },
  {
    category: "Music Video",
    src: "https://player.vimeo.com/video/637492846?h=cd6b2d78dd&title=0&byline=0&portrait=0",
    director: "Jack Simon",
    title: "Cece Coakley - Listerine",
  },
  {
    category: "Music Video",
    src: "https://player.vimeo.com/video/574252091?h=7ccbfac7fd&title=0&byline=0&portrait=0",
    director: "Caleb Wild",
    title: "Montell Fish - WINGS",
  },
  {
    category: "Music Video",
    src: "https://player.vimeo.com/video/558695632?h=e501c4a5fa&title=0&byline=0&portrait=0",
    director: "Nick Freeman",
    title: "X2 MUCH DOPE - MAISON 2500",
  },
  {
    category: "Music Video",
    src: "https://www.youtube.com/embed/pcsSxjO-Pk4",
    director: "Caleb Wild",
    title: "Montell Fish - talk 2 me",
  },
  {
    category: "Music Video",
    src: "https://player.vimeo.com/video/620023024?h=f352a6a785&title=0&byline=0&portrait=0",
    director: "Jack Simon",
    title: "Porsh Bet$ - Neiman Marcus ",
  },
  {
    category: "Music Video",
    src: "https://www.youtube.com/embed/JvF-XYCxXPo",
    director: "Aaron Feinchell and Dante Napoli",
    title: "Cold Hart - Silver Stars",
  },
  {
    category: "Music Video",
    src: "https://www.youtube.com/embed/gtWgWhBvEL8",
    director: "Caleb Wild",
    title: "Montell Fish - natural high",
  },
  {
    category: "Music Video",
    src: "https://player.vimeo.com/video/578216069?h=005636ca71&title=0&byline=0&portrait=0",
    director: "Jack Simon",
    title: "EVIL - Wrecked",
  },
  {
    category: "Music Video",
    src: "https://player.vimeo.com/video/568839479?h=d456ae11a5&title=0&byline=0&portrait=0",
    director: "Christina Xing",
    title: "Frances Forever - Paranoia Party",
  },
  {
    category: "Music Video",
    src: "https://player.vimeo.com/video/589635401?h=8b2e496481&title=0&byline=0&portrait=0",
    director: "Nathaniel Stevens",
    title: "BODY BAG",
  },
  {
    category: "Music Video",
    src: "https://player.vimeo.com/video/586536109?h=a3139abab3&title=0&byline=0&portrait=0",
    director: "Jack Simon",
    title: "Porsh Bet$ - Peanut Butter",
  },
  {
    category: "Music Video",
    src: "https://player.vimeo.com/video/642717618?h=0e3c4c9d7d&title=0&byline=0&portrait=0",
    director: "ayodeji",
    title: "underscores - gunk",
  },
  {
    category: "Music Video",
    src: "https://player.vimeo.com/video/584009902?h=e03dcbd681&title=0&byline=0&portrait=0",
    director: "Zen Pace",
    title: "Dakota Jones “Lord Please”",
  },
  {
    category: "Music Video",
    src: "https://www.youtube.com/embed/_Mxi9Jsf5Co",
    director: "Ragan Henderson",
    title: "ALX - Freakshow ft Nina Chuba",
  },
  {
    category: "Branded Content",
    src: "https://player.vimeo.com/video/435362122?h=96ab3a67c8&title=0&byline=0&portrait=0",
    director: "Nick Freeman",
    title: "Love in the Dark - Jessie Reyez",
  },
  {
    category: "Branded Content",
    src: "https://player.vimeo.com/video/595472127?h=3090842b6d&title=0&byline=0&portrait=0",
    director: "Jack Simon",
    title: "US Mogul Ski Team Summer Training Edit",
  },
  {
    category: "Branded Content",
    src: "https://player.vimeo.com/video/670940741?h=d9a325566e&title=0&byline=0&portrait=0",
    director: "Zen Pace",
    title: "Americares",
  },
  {
    category: "Branded Content",
    src: "https://player.vimeo.com/video/670518670?h=f13f793351&title=0&byline=0&portrait=0",
    director: "James Dayton",
    title: "Rise, For Bedstuy Restoration",
  },
  {
    category: "Documentary",
    src: "https://player.vimeo.com/video/664925900?h=ec1736e4af&title=0&byline=0&portrait=0",
    director: "Gabriel Crawford Connelly",
    title: "Starr",
  },
  {
    category: "Documentary",
    src: "https://player.vimeo.com/video/542652790?h=b14e813f5e&title=0&byline=0&portrait=0",
    director: "Alex Fischman Cárdenas",
    title: "Teeth",
  },
  {
    category: "Narrative",
    src: "https://player.vimeo.com/video/609925864?h=ba9b0a452e&title=0&byline=0&portrait=0",
    director: "Mike Klubeck",
    title: "These Games We Play",
  },
];
function list(state = videoList, action: any) {
  switch (action.type) {
    default:
      return state;
  }
}
const store = createStore(list);
console.log(store.getState(), "store");

export default store;
