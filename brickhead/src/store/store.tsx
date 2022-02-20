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
  // {
  //   category: "Music Video",
  //   src: "https://player.vimeo.com/video/561861537?h=cc6bed8ee6&title=0&byline=0&portrait=0",
  //   director: "Sophie Hur",
  //   title: "DIZZY",
  //   route: "musicvideos",
  //   thumbnail:
  //     "https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-stills-2/DIZZY1-min.jpg",
  // },
  {
    category: "Music Video",
    src: "https://player.vimeo.com/video/561861537?h=cc6bed8ee6&title=0&byline=0&portrait=0",
    director: "Giles Perkins",
    title: "Alexa Dark - Fade to Black and Blue",
    route: "musicvideos",
    thumbnail:
      "https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-correct-ratio/AlexaDark-min.png",
  },
  {
    category: "Music Video",
    src: "https://player.vimeo.com/video/630277429?h=76d9235adc&title=0&byline=0&portrait=0",
    director: "Giles Perkins + Jacob Lowy",
    title: "Thomtide - Season IV: Summer",
    route: "musicvideos",
    thumbnail:
      "https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-correct-ratio/Season4summer-min.png",
  },
  {
    category: "Music Video",
    src: "https://player.vimeo.com/video/557433144?h=d2322ca6b5&title=0&byline=0&portrait=0",
    director: "Giles Perkins + Jacob Lowy",
    title: "thomTide - Season III: Spring",
    route: "musicvideos",
    thumbnail:
      "https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-correct-ratio/Season3Spring-min.png",
  },
  {
    category: "Music Video",
    src: "https://www.youtube.com/embed/dzQd-CsG-PE",
    director: "Adrian Sobrado",
    title: "Cecilia Gault - Saikoh",
    route: "musicvideos",
    thumbnail:
      "https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-correct-ratio/Saikoh-min.png",
  },
  {
    category: "Music Video",
    src: "https://www.youtube.com/embed/OrNu31ENaKU",
    director: "Ragan Henderson",
    title: "Chloe Lilac - 10 things ",
    route: "musicvideos",
    thumbnail:
      "https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-correct-ratio/10ThingsStill+4-min.png",
  },
  // {
  //   category: "Music Video",
  //   src: "https://player.vimeo.com/video/637492846?h=cd6b2d78dd&title=0&byline=0&portrait=0",
  //   director: "Jack Doc Simon",
  //   title: "Cece Coakley - Listerine",
  //   route: "musicvideos",
  //   thumbnail:
  //     "https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-stills-2/ListerineSTILL.png",
  // },
  {
    category: "Music Video",
    src: "https://player.vimeo.com/video/574252091?h=7ccbfac7fd&title=0&byline=0&portrait=0",
    director: "Caleb Wild",
    title: "Montell Fish - WINGS",
    route: "musicvideos",
    thumbnail:
      "https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-correct-ratio/Wings-2-min.png",
  },
  {
    category: "Music Video",
    src: "https://player.vimeo.com/video/558695632?h=e501c4a5fa&title=0&byline=0&portrait=0",
    director: "Nick Freeman",
    title: "X2 MUCH DOPE - MAISON 2500",
    route: "musicvideos",
    thumbnail:
      "https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-correct-ratio/Maison500-min.png",
  },
  {
    category: "Music Video",
    src: "https://www.youtube.com/embed/pcsSxjO-Pk4",
    director: "Caleb Wild",
    title: "Montell Fish - Talk 2 me",
    thumbnail:
      "https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-stills/Talk+to+me-min.png",
    route: "musicvideos",
  },
  {
    category: "Music Video",
    src: "https://player.vimeo.com/video/620023024?h=f352a6a785&title=0&byline=0&portrait=0",
    director: "Jack Doc Simon",
    title: "Porsh Bet$ - Neiman Marcus ",
    route: "musicvideos",
    thumbnail:
      "https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-correct-ratio/NiemanMarcus-min.png",
  },
  {
    category: "Music Video",
    src: "https://www.youtube.com/embed/JvF-XYCxXPo",
    director: "Aaron Feinchell and Dante Napoli",
    title: "Cold Hart - Silver Stars",
    route: "musicvideos",
    thumbnail:
      "https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-correct-ratio/SilverStar-min.png",
  },
  {
    category: "Music Video",
    src: "https://www.youtube.com/embed/gtWgWhBvEL8",
    director: "Caleb Wild",
    title: "Montell Fish - natural high",
    route: "musicvideos",
    thumbnail:
      "https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-correct-ratio/NaturalHigh-min.png",
  },
  {
    category: "Music Video",
    src: "https://player.vimeo.com/video/578216069?h=005636ca71&title=0&byline=0&portrait=0",
    director: "Jack Doc Simon",
    title: "EVIL - Wrecked",
    route: "musicvideos",
    thumbnail:
      "https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-correct-ratio/Wrecked-min.png",
  },
  {
    category: "Music Video",
    src: "https://player.vimeo.com/video/568839479?h=d456ae11a5&title=0&byline=0&portrait=0",
    director: "Christina Xing",
    title: "Frances Forever - Paranoia Party",
    route: "musicvideos",
    thumbnail:
      "https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-correct-ratio/ParanoiaParty-min.png",
  },
  {
    category: "Music Video",
    src: "https://player.vimeo.com/video/589635401?h=8b2e496481&title=0&byline=0&portrait=0",
    director: "Nathaniel Stevens",
    title: "Yellow Shoots - BODY BAG",
    route: "musicvideos",
    thumbnail:
      "https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-correct-ratio/BodyBag-min.png",
  },
  {
    category: "Music Video",
    src: "https://player.vimeo.com/video/586536109?h=a3139abab3&title=0&byline=0&portrait=0",
    director: "Jack Doc Simon",
    title: "Porsh Bet$ - Peanut Butter",
    route: "musicvideos",
    thumbnail:
      "https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-correct-ratio/PorshBets-min.png",
  },
  {
    category: "Music Video",
    src: "https://player.vimeo.com/video/642717618?h=0e3c4c9d7d&title=0&byline=0&portrait=0",
    director: "ayodeji",
    title: "Underscores - gunk",
    route: "musicvideos",
    thumbnail:
      "https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-correct-ratio/Gunk-min.png",
  },
  {
    category: "Music Video",
    src: "https://player.vimeo.com/video/584009902?h=e03dcbd681&title=0&byline=0&portrait=0",
    director: "Zen Pace + Doug Harrison",
    title: "Dakota Jones - Lord Please",
    route: "musicvideos",
    thumbnail:
      "https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-correct-ratio/LordePlease-min.png",
  },
  {
    category: "Music Video",
    src: "https://www.youtube.com/embed/_Mxi9Jsf5Co",
    director: "Ragan Henderson",
    title: "ALX - Freakshow ft Nina Chuba",
    route: "musicvideos",
    thumbnail:
      "https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-correct-ratio/Freakshow-min.png",
  },
  {
    category: "Branded",
    src: "https://player.vimeo.com/video/435362122?h=96ab3a67c8&title=0&byline=0&portrait=0",
    director: "Nick Freeman",
    title: "Love in the Dark - Jessie Reyez",
    route: "branded",
    thumbnail:
      "https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-correct-ratio/LoveInTheDark-min.png",
  },
  {
    category: "Music Video",
    src: "https://player.vimeo.com/video/670166440?h=7fe2d67bad&title=0&byline=0&portrait=0",
    director: "Andrew Stern",
    title: "Underscores -  Everybody’s Dead",
    route: "musicvideos",
    thumbnail:
      "https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-correct-ratio/Everybodysdead-min.png",
  },
  {
    category: "Branded",
    src: "https://player.vimeo.com/video/595472127?h=3090842b6d&title=0&byline=0&portrait=0",
    director: "Jack Doc Simon",
    title: "US Mogul Ski Team Summer Training Edit",
    route: "branded",
    thumbnail:
      "https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-correct-ratio/Ski+Team-min.png",
  },
  // {
  //   category: "Branded",
  //   src: "https://player.vimeo.com/video/670940741?h=d9a325566e&title=0&byline=0&portrait=0",
  //   director: "Zen Pace",
  //   title: "Americares",
  //   route: "branded",
  //   thumbnail: "",
  // },
  {
    category: "Branded",
    src: "https://player.vimeo.com/video/670518670?h=f13f793351&title=0&byline=0&portrait=0",
    director: "Zen Pace",
    title: "Rise, For Bedstuy Restoration",
    route: "branded",
    thumbnail:
      "https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-correct-ratio/Rise-min.png",
  },
  {
    category: "Documentary",
    src: "https://player.vimeo.com/video/664925900?h=ec1736e4af&title=0&byline=0&portrait=0",
    director: "Gabriel Crawford Connelly + Alex Fischman Cardenas",
    title: "Starr",
    route: "documentary",
    thumbnail:
      "https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-correct-ratio/Starr-min.png",
  },
  {
    category: "Documentary",
    src: "https://player.vimeo.com/video/542652790?h=b14e813f5e&title=0&byline=0&portrait=0",
    director: "Alex Fischman Cárdenas",
    title: "Teeth",
    route: "documentary",
    thumbnail:
      "https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-correct-ratio/Teeth-min.png",
  },
  {
    category: "Narrative",
    src: "https://player.vimeo.com/video/609925864?h=ba9b0a452e&title=0&byline=0&portrait=0",
    director: "Mike Klubeck",
    title: "These Games We Play",
    route: "narrative",
    thumbnail:
      "https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-correct-ratio/TheseGames-min.png",
  },
  {
    category: "Music Video",
    src: "https://player.vimeo.com/video/639321337?h=04aa0e9bf6&title=0&byline=0&portrait=0",
    director: "Henry DaCosta",
    title: "Abby T - Legos",
    route: "musicvideos",
    thumbnail:
      "https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-correct-ratio/Legos-min.png",
  },
  {
    category: "Branded",
    src: "https://player.vimeo.com/video/656167638?h=1fee9f7823&title=0&byline=0&portrait=0",
    director: "Alex Fischman",
    title: "Jacob Jones The Company - Neptune's Dreams",
    route: "branded",
    thumbnail:
      "https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-correct-ratio/NeptuneDream-min.png",
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
