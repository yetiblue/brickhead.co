import { createStore } from "redux";

interface VideoList {
  category: string;
  src: string;
  director: string;
  title: string;
  thumbnail: string;
  route: string;
}
let videoList: VideoList[] = [
  {
    category: "Music Video",
    src: "https://player.vimeo.com/video/561861537?h=cc6bed8ee6&title=0&byline=0&portrait=0",
    director: "Giles Perkins",
    title: "Alexa Dark - Fade to Black and Blue",
    route: "musicvideos",
    thumbnail: "",
  },
  {
    category: "Music Video",
    src: "https://player.vimeo.com/video/630277429?h=76d9235adc&title=0&byline=0&portrait=0",
    director: "Giles Perkins",
    title: "Thomtide Summer",
    route: "musicvideos",
    thumbnail: "",
  },
  {
    category: "Music Video",
    src: "https://player.vimeo.com/video/557433144?h=d2322ca6b5&title=0&byline=0&portrait=0",
    director: "Giles Perkins",
    title: "Thomtide Spring",
    route: "musicvideos",
    thumbnail: "",
  },
  {
    category: "Music Video",
    src: "https://www.youtube.com/embed/dzQd-CsG-PE",
    director: "Adrian Sobrado",
    title: "Saikoh",
    route: "musicvideos",
    thumbnail: "",
  },
  {
    category: "Music Video",
    src: "https://www.youtube.com/embed/OrNu31ENaKU",
    director: "Ragan Henderson",
    title: "Chloe Lilac - 10 things ",
    route: "musicvideos",
    thumbnail: "",
  },
  {
    category: "Music Video",
    src: "https://player.vimeo.com/video/637492846?h=cd6b2d78dd&title=0&byline=0&portrait=0",
    director: "Jack Simon",
    title: "Cece Coakley - Listerine",
    route: "musicvideos",
    thumbnail: "",
  },
  {
    category: "Music Video",
    src: "https://player.vimeo.com/video/574252091?h=7ccbfac7fd&title=0&byline=0&portrait=0",
    director: "Caleb Wild",
    title: "Montell Fish - WINGS",
    route: "musicvideos",
    thumbnail: "",
  },
  {
    category: "Music Video",
    src: "https://player.vimeo.com/video/558695632?h=e501c4a5fa&title=0&byline=0&portrait=0",
    director: "Nick Freeman",
    title: "X2 MUCH DOPE - MAISON 2500",
    route: "musicvideos",
    thumbnail:
      "https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-stills/Much+dope-min.png",
  },
  {
    category: "Music Video",
    src: "https://www.youtube.com/embed/pcsSxjO-Pk4",
    director: "Caleb Wild",
    title: "Montell Fish - talk 2 me",
    thumbnail:
      "https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-stills/Talk+to+me-min.png",
    route: "musicvideos",
  },
  {
    category: "Music Video",
    src: "https://player.vimeo.com/video/620023024?h=f352a6a785&title=0&byline=0&portrait=0",
    director: "Jack Simon",
    title: "Porsh Bet$ - Neiman Marcus ",
    route: "musicvideos",
    thumbnail: "",
  },
  {
    category: "Music Video",
    src: "https://www.youtube.com/embed/JvF-XYCxXPo",
    director: "Aaron Feinchell and Dante Napoli",
    title: "Cold Hart - Silver Stars",
    route: "musicvideos",
    thumbnail: "",
  },
  {
    category: "Music Video",
    src: "https://www.youtube.com/embed/gtWgWhBvEL8",
    director: "Caleb Wild",
    title: "Montell Fish - natural high",
    route: "musicvideos",
    thumbnail: "",
  },
  {
    category: "Music Video",
    src: "https://player.vimeo.com/video/578216069?h=005636ca71&title=0&byline=0&portrait=0",
    director: "Jack Simon",
    title: "EVIL - Wrecked",
    route: "musicvideos",
    thumbnail: "",
  },
  {
    category: "Music Video",
    src: "https://player.vimeo.com/video/568839479?h=d456ae11a5&title=0&byline=0&portrait=0",
    director: "Christina Xing",
    title: "Frances Forever - Paranoia Party",
    route: "musicvideos",
    thumbnail: "",
  },
  {
    category: "Music Video",
    src: "https://player.vimeo.com/video/589635401?h=8b2e496481&title=0&byline=0&portrait=0",
    director: "Nathaniel Stevens",
    title: "BODY BAG",
    route: "musicvideos",
    thumbnail:
      "https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-stills/BODYBAG_STILL_7_ALT-min.jpg",
  },
  {
    category: "Music Video",
    src: "https://player.vimeo.com/video/586536109?h=a3139abab3&title=0&byline=0&portrait=0",
    director: "Jack Simon",
    title: "Porsh Bet$ - Peanut Butter",
    route: "musicvideos",
    thumbnail: "",
  },
  {
    category: "Music Video",
    src: "https://player.vimeo.com/video/642717618?h=0e3c4c9d7d&title=0&byline=0&portrait=0",
    director: "ayodeji",
    title: "underscores - gunk",
    route: "musicvideos",
    thumbnail:
      "https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-stills/File_001-min.jpeg",
  },
  {
    category: "Music Video",
    src: "https://player.vimeo.com/video/584009902?h=e03dcbd681&title=0&byline=0&portrait=0",
    director: "Zen Pace",
    title: "Dakota Jones “Lord Please”",
    route: "musicvideos",
    thumbnail: "",
  },
  {
    category: "Music Video",
    src: "https://www.youtube.com/embed/_Mxi9Jsf5Co",
    director: "Ragan Henderson",
    title: "ALX - Freakshow ft Nina Chuba",
    route: "musicvideos",
    thumbnail: "",
  },
  {
    category: "Branded Content",
    src: "https://player.vimeo.com/video/435362122?h=96ab3a67c8&title=0&byline=0&portrait=0",
    director: "Nick Freeman",
    title: "Love in the Dark - Jessie Reyez",
    route: "branded",
    thumbnail:
      "https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-stills/LOVE+IN+THE+DARK+stills_1.2.5-min.jpg",
  },
  {
    category: "Branded Content",
    src: "https://player.vimeo.com/video/595472127?h=3090842b6d&title=0&byline=0&portrait=0",
    director: "Jack Simon",
    title: "US Mogul Ski Team Summer Training Edit",
    route: "branded",
    thumbnail: "",
  },
  {
    category: "Branded Content",
    src: "https://player.vimeo.com/video/670940741?h=d9a325566e&title=0&byline=0&portrait=0",
    director: "Zen Pace",
    title: "Americares",
    route: "branded",
    thumbnail: "",
  },
  {
    category: "Branded Content",
    src: "https://player.vimeo.com/video/670518670?h=f13f793351&title=0&byline=0&portrait=0",
    director: "James Dayton",
    title: "Rise, For Bedstuy Restoration",
    route: "branded",
    thumbnail: "",
  },
  {
    category: "Documentary",
    src: "https://player.vimeo.com/video/664925900?h=ec1736e4af&title=0&byline=0&portrait=0",
    director: "Gabriel Crawford Connelly",
    title: "Starr",
    route: "documentary",
    thumbnail:
      "https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-stills/4x3+starr_1.1.1-min.jpg",
  },
  {
    category: "Documentary",
    src: "https://player.vimeo.com/video/542652790?h=b14e813f5e&title=0&byline=0&portrait=0",
    director: "Alex Fischman Cárdenas",
    title: "Teeth",
    route: "documentary",
    thumbnail: "",
  },
  {
    category: "Narrative",
    src: "https://player.vimeo.com/video/609925864?h=ba9b0a452e&title=0&byline=0&portrait=0",
    director: "Mike Klubeck",
    title: "These Games We Play",
    route: "narrative",
    thumbnail:
      "https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-stills/Games+we+play-min.png",
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
