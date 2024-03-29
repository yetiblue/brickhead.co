import "./CollaboratorList.css";
import { Link } from "react-router-dom";
function Collaborators(props: any) {
  document.body.style.overflow = "visible";
  return (
    <div>
      {/* <div className="about-wrapper__list">
        <div className="collaborators-wrapper">
          <ul className="about__collaborators">
            <li>
              <a
                href="https://www.byraekua.com/"
                className="list__link"
                target="_blank"
              >
                <h4>Ewurakua Dawson-Amoah </h4>
              </a>

              <p className="collab-description">
                Her work has been recognized in numerous film competitions,
                including Fusion Film Festival, Raindance Festival, Cinequest,
                Toronto Black Film Festival, NFFTY, and others, In August of
                2020, her short film “To the Girl That Looks Like Me” was named
                a finalist in the Alternative/Experimental category of the 2020
                Student Academy Awards. Ewurakua’s To the Girl That Looks Like
                Me is part of the Scene in Color Film Series, presented by
                Target, with the film available to watch on Rotten Tomatoes,
                MovieClips Indie Channel, Peacock, and NBC.
              </p>
            </li>
            <li>
              <a
                className="list__link"
                href="https://www.gabrielconnelly.com/
"
                target="_blank"
              >
                <h4>Gabriel Crawford Connelly </h4>
              </a>
              <p>
                Gabriel Crawford Connelly is a cinematographer and director
                based in New York and Los Angeles. His work has received Vimeo
                Staff Picks, Berlin Commercial Awards, and has been nominated
                for a Student Academy Award.
              </p>
            </li>
            <li>
              <a
                href="https://vimeo.com/astern"
                target="_blank"
                className="list__link"
              >
                <h4>Andrew Stern </h4>
              </a>
              <p>
                Andrew Stern is a director and producer of music videos and
                commercials. Based in New York, he’s dedicated to producing
                emotionally driven stories told in an immersive and cinematic
                way. His work includes short films, commercials, and acclaimed
                music videos which have played at festivals nationally and
                abroad.
              </p>
            </li>
            <li>
              <a
                className="list__link"
                href="https://zacdovwiesel.com/
"
                target="_blank"
              >
                <h4>Zach Dov Wiesel</h4>
              </a>
              <p>
                Zac Dov Wiesel is an Australian born director currently based in
                New York. He specialises in music-videos, working closely with
                his clients to craft a unique vision. His work has been featured
                on MTV, PAPER, Fault Mag, ABC Australia, and has won the
                audience award at NFFTY.
              </p>
            </li>
            <li>
              <a
                className="list__link"
                href="https://www.tashib.com/
"
                target="_blank"
              >
                <h4>Tashi B. </h4>
              </a>
              <p>
                Born in East India and raised in Queens, New York, Tashi is a
                photographer and filmmaker based in NYC. Her main focus being
                Music videos and Documentary work. She has worked with multiple
                major labels such as Atlantic, Interscope, 300 Ent, YSL, Motown,
                Roc Nation and Empire.
              </p>
            </li>
            <li>
              <a
                className="list__link"
                href="https://www.raganhenderson.com/

"
                target="_blank"
              >
                <h4>Ragan Henderson </h4>
              </a>
              <p>
                Ragan Henderson is a New York-based creative, specializing in
                directing and image making. She is fueled by telling diverse
                stories, as a form of knowledge for herself and anyone who
                consumes her art. Her work has been showcased at the MET Museum
                and across publications including Variety, GQ, Forbes, InStyle,
                and Interview Magazine. Notable clients include Nike, Gucci,
                Coca Cola, Polaroid Originals/ESP Camera, Universal Music Group,
                and Sony Music Entertainment.
              </p>
            </li>
            <li>
              <a
                className="list__link"
                href="https://georgiakrausefilm.com/about
"
                target="_blank"
              >
                <h4>Georgia Krause</h4>
              </a>
              <p>
                Georgia is a documentary filmmaker currently based in San Diego.
                They have worked on productions with ABC and National
                Geographic. Their work has screened at film festivals including
                DOC NYC, Defy Film Festival, South Texas Underground Film
                Festival, and the Women Texas Film Festival. Aside from
                filmmaking Georgia is interested in exploring antique stores,
                cephalopods, and hanging out with dogs.
              </p>
            </li>
            <li>
              <h4>Talia Smith</h4>
              <p>
                A filmmaker born and raised in South Africa. Her country’s rich
                heritage inspired her storytelling aspirations from a young age.
                Many of her films have thus far been centred around South
                African and Female lead narratives. Her latest film UMAMA was
                shortlisted for a student BAFTA and received the Gold Medal at
                the Student Academy Awards.
              </p>
            </li>
            <li>
              <a
                className="list__link"
                href="matthewoconnorfilms.com
"
                target="_blank"
              >
                <h4>Matthew O’Connor</h4>
              </a>
              <p>
                Matthew is a director, writer and editor with a surreal visual
                style and intuitive feel for comedic writing and rhythm. His
                tone lends itself perfectly to the music video and comedy space.
                His work ranges from hyper-stylized rap videos, heartfelt
                commercials, comedy web series, short films and television. He
                has directed multiple projects remotely, filming music videos
                for South African artists while he was stationed in New York
                City. Matt graduated from Tisch School of the Arts where he
                created one of the lowest budget carbon neutral films on record.
                The carbon neutral workflow he pioneered has been incorporated
                into the curriculum of film schools across the country including
                NYU Tisch School of the Arts.
              </p>
            </li>
            <li>
              <a
                className="list__link"
                href="https://www.nickfreemanfilm.com/
"
                target="_blank"
              >
                <h4>Nick Freeman</h4>
              </a>
              <p>
                Nick is a filmmaker who has directed music videos for various
                artists such as Jessie Reyez, Lil Tjay, Polo G, Fivio Foreign,
                and Jackboy. He has also directed content for brands such as The
                New Yorker, Puma, Amazon Music, BBC, and more.​
              </p>
            </li>
            <li>
              <a
                className="list__link"
                href="https://www.jacksimonmakes.com/
"
                target="_blank"
              >
                <h4>Jack Doc Simon</h4>
              </a>
              <p>
                After spending a year working at BBDO Advertising’s production
                house, Jack paired his emerging filmmaking career with an offer
                to run the elite mogul skiing programs at Aspen Valley Ski Club
                and Mount Hood Summer Ski Camp. In addition to directing
                personal ski films and content for the U.S. Ski Team, he’d made
                several narrative-based music videos with Artists like Evil and
                Porsh Bets.
              </p>
            </li>
            <li>
              <a
                className="list__link"
                href="https://alexfischman.com/
"
                target="_blank"
              >
                <h4>Alex Fischman</h4>
              </a>
              <p>
                Alex Fischman Cárdenas’s career began at 17, he directed the
                award-winning short film La Vieja Quinta, which traveled across
                the festival circuit from Los Angeles to Denver to Seoul. Since
                then Alex has continued to direct short films (Alienación,
                Ovejas y Lobos) documentaries (Teeth, Starr), and commissioned
                work (Uber, United Nations, Jacob Jonas The Company, Pangea).
              </p>
            </li>
            <li>
              <a
                className="list__link"
                href="https://calebwild.com/
"
                target="_blank"
              >
                <h4>Caleb Wild</h4>
              </a>
              <p>
                Caleb interned at A24 and worked as a script researcher on the
                film Waves. He has won over a dozen top prizes at film
                festivals, including the San Francisco International (Golden
                Gate Award) and the Next Film Festival (Best Screenplay) in
                Denmark. His most recent documentary, Mr. Wild, was a Vimeo
                Staff Pick.
              </p>
            </li>
            <li>
              <a
                className="list__link"
                href="https://zenzadihpace.com/
"
                target="_blank"
              >
                <h4>Zen Pace</h4>
              </a>
              <p>
                Zen Zadih Pace is a multi-hyphenate nonbinary creator, born and
                raised in Flint, Michigan. That upbringing and over 4 years of
                sobriety has helped them to cultivate a raw voice that leans
                into rooting out deep truths and creating beautiful visuals.
                This has led their work to be featured in some of the world's
                top film festivals such as The Palm Springs Film Festival;
                Bushwick Festival; HollyShorts; Sidewalk Film Festival; and
                International Rhode Island Film Festival. Their work has
                appeared in PAPER, Promo News TV, Huffington Post, Film
                Shortage, Broadway World, Latinx, Booooooom TV, and more.
              </p>
            </li>
            <li>
              <a
                className="list__link"
                href="https://www.mikeklubeck.com/
"
                target="_blank"
              >
                <h4>Mike Klubeck</h4>
              </a>
              <p>
                Mike Klubeck is a video director based out of New York City. His
                short films he has directed have been played at festivals around
                the world, he worked at Universal Music Group and worked with
                brands such as New York Fashion Week, Optimum, and Sam Adams. He
                is currently in development of his first feature film.
              </p>
            </li>
          </ul>
        </div>
      </div> */}
      <div className="collaborators-mobile">
        <h2 className="collaborators-title">COLLABORATORS</h2>
        <ul className="about__collaborators">
          <li className="about__image__name">
            <img src="https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-stills-2/Ewurakua_-min.jpg" />
            <a
              href="https://www.byraekua.com/"
              className="list__link"
              target="_blank"
            >
              <h4 className="list__link">Ewurakua Dawson-Amoah </h4>
              <p className="collab-description">
                Her work has been recognized in numerous film competitions,
                including Fusion Film Festival, Raindance Festival, Cinequest,
                Toronto Black Film Festival, NFFTY, and others, In August of
                2020, her short film “To the Girl That Looks Like Me” was named
                a finalist in the Alternative/Experimental category of the 2020
                Student Academy Awards. Ewurakua’s To the Girl That Looks Like
                Me is part of the Scene in Color Film Series, presented by
                Target, with the film available to watch on Rotten Tomatoes,
                MovieClips Indie Channel, Peacock, and NBC.
              </p>
            </a>
          </li>
          <li className="about__image__name">
            <img src="https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-correct-ratio/Starr-min.png" />
            <a
              className="list__link"
              href="https://www.gabrielconnelly.com/
"
              target="_blank"
            >
              <h4 className="list__link">Gabriel Crawford Connelly </h4>
              <p className="collab-description">
                Gabriel Crawford Connelly is a cinematographer and director
                based in New York and Los Angeles. His work has received Vimeo
                Staff Picks, Berlin Commercial Awards, and has been nominated
                for a Student Academy Award.
              </p>
            </a>
          </li>
          {/* <li className="about__image__name">
            <img src="https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-stills-2/EverybodysdeadSTILL.png" />
            <a
              href="https://vimeo.com/astern"
              target="_blank"
              className="list__link"
            >
              <h4>Andrew Stern</h4>
              <p>
                Andrew Stern is a director and producer of music videos and
                commercials. Based in New York, he’s dedicated to producing
                emotionally driven stories told in an immersive and cinematic
                way. His work includes short films, commercials, and acclaimed
                music videos which have played at festivals nationally and
                abroad.
              </p>
            </a>
          </li> */}
          <li className="about__image__name">
            <img src="https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-stills-2/EverybodysdeadSTILL.png" />

            <a
              className="list__link"
              href="https://zacdovwiesel.com/
"
              target="_blank"
            >
              <h4 className="list__link">Zach Dov Wiesel</h4>
              <p>
                Zac Dov Wiesel is an Australian born director currently based in
                New York. He specialises in music-videos, working closely with
                his clients to craft a unique vision. His work has been featured
                on MTV, PAPER, Fault Mag, ABC Australia, and has won the
                audience award at NFFTY.
              </p>
            </a>
          </li>
          <li className="about__image__name">
            <img src="https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-stills-2/Tashi+-2-min.jpg" />

            <a
              className="list__link"
              href="https://www.tashib.com/
"
              target="_blank"
            >
              <h4 className="list__link">Tashi B. </h4>
              <p>
                Born in East India and raised in Queens, New York, Tashi is a
                photographer and filmmaker based in NYC. Her main focus being
                Music videos and Documentary work. She has worked with multiple
                major labels such as Atlantic, Interscope, 300 Ent, YSL, Motown,
                Roc Nation and Empire.
              </p>
            </a>
          </li>
          <li className="about__image__name">
            <img src="https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-stills-2/Ragan-2-min.jpg" />

            <a
              className="list__link"
              href="https://www.raganhenderson.com/

"
              target="_blank"
            >
              <h4 className="list__link">Ragan Henderson </h4>
              <p>
                Ragan Henderson is a New York-based creative, specializing in
                directing and image making. She is fueled by telling diverse
                stories, as a form of knowledge for herself and anyone who
                consumes her art. Her work has been showcased at the MET Museum
                and across publications including Variety, GQ, Forbes, InStyle,
                and Interview Magazine. Notable clients include Nike, Gucci,
                Coca Cola, Polaroid Originals/ESP Camera, Universal Music Group,
                and Sony Music Entertainment.
              </p>
            </a>
          </li>
          <li className="about__image__name">
            <img src="https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-stills-2/Screen+Shot+2022-02-14+at+8.54.36+PM-min.png" />

            <a
              className="list__link"
              href="https://georgiakrausefilm.com/about
"
              target="_blank"
            >
              <h4 className="list__link">Georgia Krause</h4>
              <p>
                Georgia is a documentary filmmaker currently based in San Diego.
                They have worked on productions with ABC and National
                Geographic. Their work has screened at film festivals including
                DOC NYC, Defy Film Festival, South Texas Underground Film
                Festival, and the Women Texas Film Festival. Aside from
                filmmaking Georgia is interested in exploring antique stores,
                cephalopods, and hanging out with dogs.
              </p>
            </a>
          </li>

          <li className="about__image__name">
            <img src="https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-stills-2/Talia+-min.jpg" />

            <a className="list__link" href="/" target="_blank">
              <h4 className="list__link">Talia Smith</h4>
              <p>
                A filmmaker born and raised in South Africa. Her country’s rich
                heritage inspired her storytelling aspirations from a young age.
                Many of her films have thus far been centred around South
                African and Female lead narratives. Her latest film UMAMA was
                shortlisted for a student BAFTA and received the Gold Medal at
                the Student Academy Awards.
              </p>
            </a>
          </li>

          <li className="about__image__name">
            <img src="https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-stills-2/Nick-min.png" />

            <a
              className="list__link"
              href="https://www.nickfreemanfilm.com/
"
              target="_blank"
            >
              <h4 className="list__link">Nick Freeman</h4>
              <p>
                Nick is a filmmaker who has directed music videos for various
                artists such as Jessie Reyez, Lil Tjay, Polo G, Fivio Foreign,
                and Jackboy. He has also directed content for brands such as The
                New Yorker, Puma, Amazon Music, BBC, and more.​
              </p>
            </a>
          </li>
          {/* <li className="about__image__name">
            <img src="https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-stills-2/ListerineSTILL.png" />

            <a
              className="list__link"
              href="https://www.jacksimonmakes.com/
"
              target="_blank"
            >
              <h4>Jack Doc Simon</h4>
              <p>
                After spending a year working at BBDO Advertising’s production
                house, Jack paired his emerging filmmaking career with an offer
                to run the elite mogul skiing programs at Aspen Valley Ski Club
                and Mount Hood Summer Ski Camp. In addition to directing
                personal ski films and content for the U.S. Ski Team, he’d made
                several narrative-based music videos with Artists like Evil and
                Porsh Bets.
              </p>
            </a>
          </li> */}
          <li className="about__image__name">
            <img src="https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-stills-2/Alex_-min.png" />

            <a
              className="list__link"
              href="https://www.henry-dacosta.com/
"
              target="_blank"
            >
              <h4 className="list__link">Henry Dacosta</h4>
              <p>
                Henry’s an Indian, Persian, and Polish director. Raised in the
                suburbs of New York, and currently living in NYC. His work has
                been featured in Scientific American Magazine, Complex Media,
                Canon USA, Film Shortage and many others.
              </p>
            </a>
          </li>
          <li className="about__image__name">
            <img src="https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-stills-2/Caleb-min.png" />

            <a
              className="list__link"
              href="https://calebwild.com/
"
              target="_blank"
            >
              <h4 className="list__link">Caleb Wild</h4>
              <p>
                Caleb interned at A24 and worked as a script researcher on the
                film Waves. He has won over a dozen top prizes at film
                festivals, including the San Francisco International (Golden
                Gate Award) and the Next Film Festival (Best Screenplay) in
                Denmark. His most recent documentary, Mr. Wild, was a Vimeo
                Staff Pick.
              </p>
            </a>
          </li>
          <li className="about__image__name">
            <img src="https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-stills-2/Zen-min.png" />

            <a
              className="list__link"
              href="https://zenzadihpace.com/
"
              target="_blank"
            >
              <h4 className="list__link">Zen Pace</h4>
              <p>
                Zen Zadih Pace is a multi-hyphenate nonbinary creator, born and
                raised in Flint, Michigan. That upbringing and over 4 years of
                sobriety has helped them to cultivate a raw voice that leans
                into rooting out deep truths and creating beautiful visuals.
                This has led their work to be featured in some of the world's
                top film festivals such as The Palm Springs Film Festival;
                Bushwick Festival; HollyShorts; Sidewalk Film Festival; and
                International Rhode Island Film Festival. Their work has
                appeared in PAPER, Promo News TV, Huffington Post, Film
                Shortage, Broadway World, Latinx, Booooooom TV, and more.
              </p>
            </a>
          </li>
          <li className="about__image__name">
            <img src="https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-stills-2/Mike-min.png" />

            <a
              className="list__link"
              href="https://www.mikeklubeck.com/
"
              target="_blank"
            >
              <h4 className="list__link">Mike Klubeck</h4>
              <p>
                Mike Klubeck is a video director based out of New York City. His
                short films he has directed have been played at festivals around
                the world, he worked at Universal Music Group and worked with
                brands such as New York Fashion Week, Optimum, and Sam Adams. He
                is currently in development of his first feature film.
              </p>
            </a>
          </li>
          <li className="about__image__name">
            <img src="https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-stills-2/Audrey%2B5-min-2.png" />

            <a
              className="list__link"
              href="https://www.miaoxiwen.com
"
              target="_blank"
            >
              <h4 className="list__link">Xiwen Miao</h4>
              <p>
                Xiwen Miao is an award-winning Chinese writer/director based in
                New York City. In the branded and commercial world, she has
                directed for Condé Nast, Vogue and Michael Kors. As a music
                video director, she collaborates with young, talented artists
                around the United States. As a narrative filmmaker, she has
                received over 40 festival selections and numerous awards.
              </p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Collaborators;
