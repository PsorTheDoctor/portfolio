import styled from "styled-components";
import Manipulator from "../../videos/manipulator.mp4";
import Debutant from "../../images/debutant.jpg";
import ElRoboMech from "../../images/elrobomech.jpg";
import Explory from "../../images/explory.jpg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  text-align: justify;
`;

const Header = styled.div`
  font-size: 18px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Image = styled.div`
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const AboutMe = () => (
  <Wrapper>
    <Header><p>About me</p></Header>

    <p><b>Early years</b></p>
    <p>Even being a kid I have been interested in technical fields. I've been building various
    devices since my early years. I have built my first project – a mechanical monkey, when I was
    six. The idea was dead simple. It was basically an automata propelled by single motor geared
    down twenty times by a worm gear. The arms worked as slider-crank linkages ended with claws
    that hooked a rope alternately. The result of this mechanism was a fully movable model of
    a monkey that works just fine. After getting bored with the monkey, I unassembled it to build
    other creations such as: a spider driving on a rope, a jumping grasshopper, a fish with movable
    fins, a drill, a kitchen mixer and many more.</p>
    
    <p><b>Primary school</b></p>
    <p>Another things that kept me interested into mechanics were drivetrains. I built my first
    gearbox at the age of eleven. It was a simple 4-speed manual transmission that trasmitted
    rotary movement form car wheels to fake piston engine. Not only gearboxes were in the fields
    of my interests. I was also curious about suspension, steering and systems developed in
    construction equipment.</p>

    <p><b>High School</b></p>
    <p>In 2015-2018 I attended the High School, where I studied at a class with extended math
    and physics. Then, at the age of sixteen I designed my first manipulator. It was formed as a lazy
    vacation project among some others. It has four electric functions controlled remotely via IR:
    base rotation, lifting, gripper rotation and grasp. It was also my first model that I've presented
    out of home.</p>

    <Image>
      <video width="480px" loop autoPlay muted>
        <source src={Manipulator} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>My first manipulator</p>
    </Image>

    <p>Mechanical models aside, I also took the initative to participate Poland's Olympics of
    Creativity called Destination Imagination. I was a leader of 6-person team and our challenge
    was to create a musical instrument that can withstand as large as possible payload and to write
    a story focused on it.
    At the end of my first year at high school I was also a speaker at a conference about
    education, on which I was invited. The conference was about introduction of programming into
    school as an obligatory subject and I've shown one of my projects there. Encouraged by it, my
    teacher has bought an Arduino Uno board and gave it me for my projects. Not-so-much time
    after it, I also have started to learn programming. I've learnt basics of C++ language and some
    web development tools including HTML, CSS and JavaScript. I've used it to make a simple
    website about physics, but it has been never published.</p>

    <Image>
      <img src={Debutant} width="480px" alt="EL-ROBO-MECH, Warsaw 2018" />
      <p>Destination Imagination Olympics of Creativity, Wrocław 2016</p>
    </Image>

    <p>In spring 2017 I took a part in Regional E(x)plory Competition for young scientists with
    the project of automatic gearbox I've developed on my own. I have shown it widely in Warsaw –
    Polish capital city. I have also build one more project – a tracked robot as a loose interpretation
    of Pixar's WALL-E. It had ten motors, driving tracks, arms with prehensile grippers, remote
    control and was built just for fun.
    With above achievements up to date, in my third year at high school I got my first
    schoolarship founded by a local seafood company SUEMPOL. With these money I've started
    making a large project I had been thinking about for many years – a mechanical human arm.
    The arm had seven pneumatic and two electric functions. I have submitted a model to the EL-ROBO-MECH contest organized by Bialystok University of Technology, where it took third
    place winning money prize and the university priority admission card.
    During a high scool my mentors were Sławomir Zieniewski and Ewa Trzeszczkowska.
    A scholarship wasn't only money I've got for education. I also managed to get a subsidy
    from European Union for 7-month long Java programming course. During this I also started to
    read about my completely new area of interest – the artificial intelligence. On a holidays
    preceding studies I create my first artificial neural network. It's
    a program that simulates simplified model of human's brain processes in order to do the tasks
    that are hard to algorithmize, e.g. object recognition.</p>

    <Image>
      <img src={ElRoboMech} width="600px" alt="EL-ROBO-MECH, Warsaw 2018" />
      <p>EL-ROBO-MECH award ceremony, Białystok 2018</p>
    </Image>

    <p><b>Undergraduate studies</b></p>
    <p>I started studying Automatic Control and Robotics in the Bialystok University of
    Technology in 2018. A year after that I launched the Artificial Intelligence Research Club as a
    section of Robotics Students' Club at the Mechanical Faculty of BUT. We were group of
    students that were learning modern technologies such as: neural networks, machine learning
    and computer vision by making more than dozen of projects on various topics. My favorite one used special
    kind of neural networks – recurrent network with LSTM cells in order to generate text in the
    style of Shakespeare based on his dramas. Another example was neural net with convolutional
    layers that could draw an image in a style of any artist, eg. Picasso or Monet. I've also shown
    some of them at my second Regional E(x)plory Competition.</p>
    
    <Image>
      <img src={Explory} width="600px" alt="Regional E(x)plory Competition, Warsaw 2019" />
      <p>Regional E(x)plory competition, Warsaw 2019</p>
    </Image>

    {/* During summer holidays I also reminded myself basics of Java and Android
    programming. This time I made an app that uses machine learning systems to predict future
    cryptocurrency prices. The app itself has been submitted to Microsoft Imagine Cup
    competition before the end of 2020. */}
    <p>Programming aside, I did an internship at Standard Motor Products factory that
    produces plastic components especially the ignition coils. My role was to clean and unassemble
    the molding folds, operate an EDM machine and make models of parts in a CAD software.
    So far, I still take a part in some competitions once in a while. In my third year of
    studies I got into the final of KOKOS Students' Construction Contest in the category of Smart
    Robots. A work presented there was my old mechanical human arm project.
    During the last semester of my bachelor's degree I was studying at University of Southern Denmark in Odense as
    an exchange student. I also was one of the total of four students that got a grant from
    Diamonds' Explorers foundation launched and led by previous rector of BUT – PhD Lech
    Dzienis. In the time of my stay in Denmark I was working at Nordbo Robotics company and I
    wrote a thesis focused on robotic manipulation using computer vision system – a quintessential
    problem in modern robotics. My supervisor was PhD Adam Wolniakowski.</p>

    <p><b>Plans for future</b></p>
    <p>In the near future I am going to still develop further in the fields of my interests:
    robotics, artificial intelligence, but also cognitive science and psychology. Before the end of my
    studies I want to publish articles about robotic manipulation and practical
    usage of AI systems.</p>

    <p><b>Recommended books</b></p>
    <ul>
      <li><i>Elon Musk</i> - Ashlee Vance</li>
      <li><i>Innovators</i> - Walter Isaacson</li>
      <li><i>Losing My Virginity</i> - Richard Branson</li>
      <li><i>The Accidental Billionaires</i> - Ben Melzrich</li>
      <li><i>Permanent Record</i> - Edward Snowden</li>
      <li><i>Outliers</i> - Malcolm Gladwell</li>
      <li><i>The Selfish Gene</i> - Richard Dawkins</li>
      <li><i>Sapiens: A Brief History of Humankind</i> - Yuval Noah Harari</li>
      <li><i>Guns, Germs and Steel</i> - Jared Diamond</li>
      <li><i>Shoe Dog</i> - Phil Knight</li>
    </ul>
    <p><b>Favourite movies</b></p>
    <ul>
      <li><i>The Butterfly Effect, The Island, The Social Network, Forrest Gump, The Curious Case of Benjamin Button</i></li>
    </ul>
    <p><b>TV series</b></p>
    <ul>
      <li><i>13 Reasons Why, Black Mirror, Sillicon Valley</i></li>
    </ul>
  </Wrapper>
);
