// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Slide,
  Spectacle,
  Text,
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("../assets/styles/index.css");
require("spectacle/lib/themes/default/index.css");

// Import images
import images from './images';

preloader(images);

const joliColor = "#F7D325";
const retroFriendlyColor = "#0BCCA3";

const mainColor = joliColor;

const theme = createTheme({
  primary: mainColor,
  quartenary: mainColor
});
theme.screen.components.content.maxWidth = '1300px';
theme.screen.components.content.maxHeight = '1100px';
theme.screen.components.list.listStyleType = 'square';
theme.screen.components.listItem.fontSize = '1.3em';
theme.screen.components.codePane.pre.margin = '20px auto';
theme.screen.components.codePane.pre.fontSize = '1.6rem';

export default class Presentation extends React.Component {
  renderEqualityChapter() {
    if (!this.props.longVersion) {
      return null;
    }

    return [
      <Slide key='equality-1' textColor="primary">
        <Heading caps textColor="white" bgColor="primary">
          Égalité
        </Heading>
      </Slide>,

      <Slide key='equality-2' bgColor="primary" textColor="black">
        <Heading size={2} caps fit textColor="black">
          Égalité pas parfaite en PHP…
        </Heading>
      </Slide>,
      <Slide key='equality-3' bgColor="white" textColor="black">
        <Heading size={2} caps fit textColor="black">
          Tableau des égalités en JavaScript
        </Heading>
        <Image src={images.jsEquality} width="70%" style={{marginTop: '10px'}} />
        <Text>
          <Link href="https://dorey.github.io/JavaScript-Equality-Table/">https://dorey.github.io/JavaScript-Equality-Table/</Link>
        </Text>
        <Appear>
          <div>
            <Image src={images.trollFace} width="70%" style={{position: 'fixed', top: '200px', left: '220px'}} />
          </div>
        </Appear>
      </Slide>,
      <Slide key='equality-4' bgColor="white" textColor="black">
        <CodePane
          lang="php"
          source={require("raw!../assets/code/true-false/part1.example")}
        />
        <Appear>
          <CodePane
            lang="php"
            source={require("raw!../assets/code/true-false/part2.example")}
          />
        </Appear>
        <Appear>
          <CodePane
            lang="php"
            source={require("raw!../assets/code/true-false/part3.example")}
          />
        </Appear>
        <Appear>
          <CodePane
            lang="php"
            source={require("raw!../assets/code/true-false/part4.example")}
          />
        </Appear>
        <Appear>
          <Heading size={2} caps textColor="black">
            true == false
          </Heading>
        </Appear>
      </Slide>,
      <Slide key='equality-5' bgColor="white" textColor="black">
        <Heading size={1} caps fit textColor="black">
          String numérique comparée comme un entier <small>1/2</small>
        </Heading>
        <CodePane
          lang="php"
          source={require("raw!../assets/code/numeric-string-equality/part1.example")}
          padding="10px"
          style={{marginTop: '100px'}}
        />
        <Appear>
          <CodePane
            lang="bash"
            source={require("raw!../assets/code/output-true.example")}
            padding="10px"
          />
        </Appear>
        <Appear>
          <CodePane
            lang="php"
            source={require("raw!../assets/code/numeric-string-equality/part2.example")}
            padding="10px"
          />
        </Appear>
        <Appear>
          <CodePane
            lang="bash"
            source={require("raw!../assets/code/output-false.example")}
            padding="10px"
          />
        </Appear>
        <Appear>
          <CodePane
            lang="php"
            source={require("raw!../assets/code/numeric-string-equality/part3.example")}
            padding="10px"
          />
        </Appear>
        <Appear>
          <CodePane
            lang="bash"
            source={require("raw!../assets/code/output-true.example")}
            padding="10px"
          />
        </Appear>
        <Appear>
          <CodePane
            lang="php"
            source={require("raw!../assets/code/numeric-string-equality/part4.example")}
            padding="10px"
          />
        </Appear>
        <Appear>
          <CodePane
            lang="bash"
            source={require("raw!../assets/code/output-true.example")}
            padding="10px"
          />
        </Appear>
      </Slide>,
      <Slide key='equality-6' bgColor="white" textColor="black">
        <Heading size={2} caps fit textColor="black">
          String numérique comparée comme un entier <small>2/2</small>
        </Heading>
        <CodePane
          lang="php"
          source={require("raw!../assets/code/numeric-string-equality-hexa/part1.example")}
          style={{marginTop: '70px'}}
        />
        <Appear>
          <CodePane
            lang="bash"
            source={require("raw!../assets/code/output-false.example")}
          />
        </Appear>
        <Appear>
          <CodePane
            lang="php"
            source={require("raw!../assets/code/numeric-string-equality-hexa/part2.example")}
          />
        </Appear>
        <Appear>
          <CodePane
            lang="bash"
            source={require("raw!../assets/code/output-true.example")}
          />
        </Appear>
        <Appear>
          <CodePane
            lang="php"
            source={require("raw!../assets/code/numeric-string-equality-hexa/part3.example")}
          />
        </Appear>
        <Appear>
          <CodePane
            lang="bash"
            source={require("raw!../assets/code/output-true.example")}
          />
        </Appear>
      </Slide>,
      <Slide key='equality-7' bgColor="white" textColor="black">
        <Heading size={2} caps fit textColor="black">
          String numérique comparée comme un entier <small>2/2</small>
        </Heading>
        <CodePane
          lang="php"
          source={require("raw!../assets/code/numeric-string-equality-hexa/part1.example")}
          style={{marginTop: '70px'}}
        />
        <CodePane
          lang="bash"
          source={require("raw!../assets/code/output-false.example")}
        />
        <CodePane
          lang="php"
          source={require("raw!../assets/code/numeric-string-equality-hexa/part2.example")}
        />
        <CodePane
          lang="bash"
          source={require("raw!../assets/code/output-false.example")}
          className="force-red"
        />
        <CodePane
          lang="php"
          source={require("raw!../assets/code/numeric-string-equality-hexa/part3.example")}
        />
        <CodePane
          lang="bash"
          source={require("raw!../assets/code/output-false.example")}
          className="force-red"
        />
        <Text textColor="red" style={{position: "absolute"}}>PHP 7 ne traite plus les chaînes hexadécimales comme une string numérique \o/</Text>
      </Slide>,
    ];
  }

  renderIncrementationStringChapter() {
    return [
      <Slide key='incrementation-string-1' textColor="primary">
        <Heading caps textColor="white" bgColor="primary">
          Incrémentation<br /><span style={{color: 'black'}}>et</span> string
        </Heading>
      </Slide>,

      <Slide key='incrementation-string-2' bgColor="white" textColor="black">
        <CodePane
          lang="php"
          source={require("raw!../assets/code/incrementation-string-a/part1.example")}
        />
        <Appear>
          <CodePane
            lang="php"
            source={require("raw!../assets/code/incrementation-string-a/part2.example")}
          />
        </Appear>
        <Appear>
          <CodePane
            lang="bash"
            source={require("raw!../assets/code/incrementation-string-a/output1.example")}
          />
        </Appear>
        <Appear>
          <CodePane
            lang="php"
            source={require("raw!../assets/code/incrementation-string-a/part3.example")}
          />
        </Appear>
        <Appear>
          <CodePane
            lang="bash"
            source={require("raw!../assets/code/incrementation-string-a/output2.example")}
          />
        </Appear>
      </Slide>,
      <Slide key='incrementation-string-3' bgColor="white" textColor="black">
        <CodePane
          lang="php"
          source={require("raw!../assets/code/incrementation-string-z/part1.example")}
        />
        <Appear>
          <CodePane
            lang="php"
            source={require("raw!../assets/code/incrementation-string-z/part2.example")}
          />
        </Appear>
        <Appear>
          <CodePane
            lang="bash"
            source={require("raw!../assets/code/incrementation-string-z/output1.example")}
          />
        </Appear>
      </Slide>,
      <Slide key='incrementation-string-4' bgColor="white" textColor="black">
        <CodePane
          lang="php"
          source={require("raw!../assets/code/incrementation-string-loop/part1.example")}
        />
        <Appear>
          <div>
            <CodePane
              lang="bash"
              source={require("raw!../assets/code/incrementation-string-loop/output1.example")}
            />
            <Image src={images.aceVentura} />
          </div>
        </Appear>
      </Slide>,
    ];
  }

  renderUnicodeChapter() {
    const slides = [
      <Slide key='unicode-1' textColor="primary">
        <Heading caps textColor="white" bgColor="primary">
          Unicode �
         </Heading>
      </Slide>,

      <Slide key='unicode-2' bgColor="white" textColor="black">
        <Text>PHP supporte unicode…</Text>
        <Appear style={{marginTop: '50px'}}>
          <Text>…depuis toujours</Text>
        </Appear>
        <Appear style={{marginTop: '50px'}}>
          <Text>…dans le code</Text>
        </Appear>
      </Slide>,
      <Slide key='unicode-3' bgColor="white" textColor="black">
        <CodePane
          lang="php"
          source={require("raw!../assets/code/unicode-class.example")}
        />
      </Slide>,
      <Slide key='unicode-4' bgColor="white">
        <CodePane
          lang="php"
          source={require("raw!../assets/code/unicode-table-flip.example")}
          style={{padding: '10px'}}
        />
        <Link textColor="primary" href="https://github.com/sgolemon/table-flip">https://github.com/sgolemon/table-flip</Link>
      </Slide>,
    ];

    if (this.props.longVersion) {
      slides.push(
        <Slide key='unicode-5' bgColor="white">
          <CodePane
            lang="php"
            source={require("raw!../assets/code/unicode-math.example")}
          />
          { false ? <Image width="100%" src={images.unicodeMath}/> : null }
          <Link textColor="primary" href="https://github.com/markrogoyski/math-php">https://github.com/markrogoyski/math-php</Link>
        </Slide>
      );
      slides.push(
        <Slide key='unicode-6' bgColor="white">
          <Image width="100%" src={images.unicodeTest}/>
        </Slide>
      );
    }

    slides.push(
      <Slide key='unicode-7' bgColor="white">
        <Heading size={2} caps fit textColor="black">
          Unicode Homoglyph
        </Heading>
        <Text
          style={{marginTop: '50px'}}
        >Utiliser des variantes unicode à la place des caractères standards</Text>
        <List style={{ marginTop: "150px" }}>
          <ListItem><code>(</code> devient <code>﹝</code> ou <code>（</code></ListItem>
          <ListItem><code>{"{"}</code> devient <code>{"｛"}</code></ListItem>
          <ListItem><code>"</code> devient <code>״</code>, <code>″</code> ou <code>＂</code></ListItem>
        </List>
      </Slide>
    );

    slides.push(
      <Slide key='unicode-8' bgColor="white">
        <CodePane
          lang="php"
          source={require("raw!../assets/code/unicode-homoglyph/part1.example")}
        />
        <Appear>
          <CodePane
            lang="bash"
            source={require("raw!../assets/code/unicode-homoglyph/output1.example")}
          />
        </Appear>
      </Slide>
    );

    slides.push(
      <Slide key='unicode-9' bgColor="white">
        <Image width="100%" src={images.unicodeObfuscation}/>
      </Slide>
    );

    return slides;
  }

  renderTryFinallyChapter() {
    return [
      <Slide key="try-finally-1" textColor="primary">
        <Heading caps textColor="black" bgColor="primary">
          <span>try</span>
          {' '}
          <Image src={images.versus} width="30%" style={{verticalAlign: 'middle'}}/>
          {' '}
          <span>finally</span>
          <br />
          <small style={{color:'white'}}>the return</small>
        </Heading>
      </Slide>,

      <Slide key="try-finally-2" bgColor="white">
        <CodePane
          lang="php"
          source={require("raw!../assets/code/try-finally/part1.example")}
        />
        <Appear>
          <CodePane
            lang="bash"
            source={require("raw!../assets/code/try-finally/output1.example")}
          />
        </Appear>
      </Slide>,
      <Slide key="try-finally-3" bgColor="white">
        <CodePane
          lang="php"
          source={require("raw!../assets/code/try-finally/part2.example")}
        />
        <Appear>
          <CodePane
            lang="bash"
            source={require("raw!../assets/code/try-finally/output2.example")}
          />
        </Appear>
      </Slide>,
    ];
  }

  renderImmutabilityChapter() {
    const slides = [
      <Slide key="immutability-1" textColor="primary">
        <Heading caps textColor="white" bgColor="primary">
          Immutabilité
        </Heading>
      </Slide>
    ];

    if (this.props.longVersion) {
      slides.push(
        <Slide key="immutability-2" bgColor="white">
          <CodePane
            lang="php"
            source={require("raw!../assets/code/immutability/part1.example")}
          />
        </Slide>
      );
      slides.push(
        <Slide key="immutability-3" bgColor="white">
          <CodePane
            lang="php"
            source={require("raw!../assets/code/immutability/part2.example")}
          />
        </Slide>
      );
    }

    slides.push(
      <Slide key="immutability-4" bgColor="white">
        <CodePane
          lang="php"
          source={require("raw!../assets/code/immutability/part3.example")}
        />
      </Slide>
    );
    slides.push(
      <Slide key="immutability-5" bgColor="white">
        <CodePane
          lang="php"
          source={require("raw!../assets/code/immutability/part4.example")}
        />
        <Appear>
          <div>
            <CodePane
              lang="php"
              source={require("raw!../assets/code/immutability/part5.example")}
            />
            <Image src={images.leia} width="70%" />
          </div>
        </Appear>
      </Slide>
    );
    slides.push(
      <Slide key="immutability-6" bgColor="white">
        <CodePane
          lang="php"
          source={require("raw!../assets/code/immutability/part6.example")}
        />
      </Slide>
    );
    slides.push(
      <Slide key="immutability-7" bgColor="white">
        <CodePane
          lang="php"
          source={require("raw!../assets/code/immutability/part7.example")}
        />
        <Appear>
          <CodePane
            lang="php"
            source={require("raw!../assets/code/immutability/part8.example")}
          />
        </Appear>
      </Slide>
    );
    slides.push(
      <Slide key="immutability-8" bgColor="white">
        <Text>Immutabilité, c'est dans la tête</Text>
        <Text style={{marginTop: '100px'}}>Une question de convention…</Text>
      </Slide>
    );
    
    return slides;
  }

  renderArrayAccessChapter() {
    if (!this.props.longVersion) {
      return null;
    }

    return [
      <Slide key="array-access-1" textColor="primary">
        <Heading caps textColor="white" bgColor="primary">
          Array access
        </Heading>
      </Slide>,

      <Slide key="array-access-2" bgColor="white">
        <Heading size={2} caps fit textColor="black">
          Accès avec un mauvais type de clef
        </Heading>
        <CodePane
          lang="php"
          source={require("raw!../assets/code/array-access/part1.example")}
          style={{marginTop: '100px'}}
        />
        <CodePane
          lang="bash"
          source={require("raw!../assets/code/array-access/output1.example")}
          className="force-red"
        />
      </Slide>,
      <Slide key="array-access-3" bgColor="white">
        <Heading size={2} caps textColor="black">
          Accès à un non array
        </Heading>
        <CodePane
          lang="php"
          source={require("raw!../assets/code/array-access/part2.example")}
          style={{marginTop: '100px'}}
        />
        <Appear>
          <CodePane
            lang="bash"
            source={require("raw!../assets/code/array-access/output2.example")}
          />
        </Appear>
      </Slide>,
      <Slide key="array-access-4" bgColor="white">
        <Text>RFC en cours pour corriger ça</Text>
      </Slide>,
    ];
  }

  renderThisChapter() {
    const slides = [
      <Slide key="this-1" textColor="primary" bgImage={images.sparta}>
        <Heading caps textColor="black" bgColor="primary" padding="20px 0">
          $this is sparta
        </Heading>
      </Slide>,
    ];

    if (this.props.longVersion) {
      slides.push(
        <Slide key="this-2" bgColor="white">
          <Heading size={2} caps fit textColor="black">
            Utilisation de $this en paramètre interdite
          </Heading>
          <CodePane
            lang="php"
            source={require("raw!../assets/code/this/part1.example")}
            style={{marginTop: '100px'}}
          />
          <CodePane
            lang="bash"
            source={require("raw!../assets/code/this/output1.example")}
            className="force-red"
          />
          <Appear>
            <Text>Mais pas partout…</Text>
          </Appear>
        </Slide>
      );
      slides.push(
        <Slide key="this-3" bgColor="white">
          <CodePane
            lang="php"
            source={require("raw!../assets/code/this/part2.example")}
          />
          <Appear>
            <CodePane
              lang="bash"
              source={require("raw!../assets/code/this/output2.example")}
            />
          </Appear>
        </Slide>
      );
    }

    slides.push(
      <Slide key="this-4" bgColor="white">
        <Heading size={2} caps textColor="black" style={{fontSize: '1 rem'}}>
          Unset $this?
        </Heading>
        <CodePane
          lang="php"
          source={require("raw!../assets/code/this/part3.example")}
          style={{padding: '10px'}}
        />
        <Appear>
          <div>
            <CodePane
              lang="bash"
              source={require("raw!../assets/code/this/output3.example")}
              style={{padding: '10px'}}
            />
            <Image src={images.travolta} width="70%" style={{position: 'fixed', top: '300px', right: '-300px'}} />
          </div>
        </Appear>
      </Slide>
    );
    slides.push(
      <Slide key="this-5" bgColor="white">
        <Heading size={2} caps fit textColor="black">
          Utilisation de $this en variable interdite
        </Heading>
        <CodePane
          lang="php"
          source={require("raw!../assets/code/this/part4.example")}
          style={{marginTop: '100px'}}
        />
        <Appear>
          <CodePane
            lang="bash"
            source={require("raw!../assets/code/this/output4.example")}
          />
        </Appear>
        <Appear>
          <Text>Oui, mais…</Text>
        </Appear>
      </Slide>
    );
    slides.push(
      <Slide key="this-6" bgColor="white">
        <CodePane
          lang="php"
          source={require("raw!../assets/code/this/part5.example")}
        />
        <Appear>
          <CodePane
            lang="bash"
            source={require("raw!../assets/code/this/output5.example")}
          />
        </Appear>
      </Slide>
    );
    slides.push(
      <Slide key="this-7" bgColor="white">
        <Text style={{lineHeight: '2em'}}>
          PHP 7.1 a normalisé tous ces comportements :
          <br />
          pas touche à <code style={{display: 'inline'}}>$this</code>
        </Text>
      </Slide>
    );

    return slides;
  }

  render() {
    let slides = [
      <Slide key="cover" bgColor="primary" bgImage={images.cover}>
        <Heading caps textColor="black" bgColor="primary" padding="20px 0">
          <span style={{color: 'black'}}>
            PHP
          </span>
          {' '}
          <span style={{color: 'black'}}>
            WTF
          </span>
        </Heading>
        <Text textSize="1.5em" margin="100px 0px 0px" bold textColor="primary">Loïck Piera</Text>
      </Slide>,

      <Slide key="myself" bgColor="white" textColor="black">
        <Heading caps textColor="primary" textFont="primary" margin="0px auto 30px">
          Coucou, moi c'est <span style={{color: 'black'}}>Loïck</span>
        </Heading>
        <Layout>
          <Fit>
            <Image src={images.loick} margin="40px 40px 0px 40px" height="300px" style={{ borderRadius: "50%" }}/>
          </Fit>
          <Fill>
            <List style={{ marginTop: "80px" }}>
              <ListItem>Développeur chez <Link textColor="primary" href="http://jolicode.com" style={{fontWeight: "bold"}}>JoliCode</Link></ListItem>
              <ListItem>Principalement Symfony, PHP <small style={{fontSize: "0.5em"}}>et même un peu de React</small></ListItem>
              <ListItem><span style={{ fontWeight: "bold", color: mainColor }}>@pyrech</span> sur Twitter et GitHub</ListItem>
            </List>
          </Fill>
        </Layout>
      </Slide>,
    ];

    slides = slides.concat(
      this.renderEqualityChapter(),
      this.renderIncrementationStringChapter(),
      this.renderUnicodeChapter(),
      this.renderTryFinallyChapter(),
      this.renderImmutabilityChapter(),
      this.renderArrayAccessChapter(),
      this.renderThisChapter(),
    ).filter(slide => !!slide);

    slides.push(
      <Slide key="end" bgColor="white">
        <Heading caps textColor="black">
          Merci !
        </Heading>
        { this.props.longVersion ?
        <Heading textColor="primary">
          Des questions ?
        </Heading>
        : null }
      </Slide>
    );

    return (
      <Spectacle theme={theme}>
        <Deck progress="bar">
          {slides}
        </Deck>
      </Spectacle>
    );
  }
}