import styled from "styled-components";
import { Link } from "react-router-dom";
import Debutant from "../../images/debutant.jpg";
import ElRoboMech from "../../images/elrobomech.jpg";
import Explory from "../../images/explory.jpg";
import Sonderborg from "../../images/sonderborg2.jpg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  text-align: justify;
  padding: 10px 10px 30px 10px;
`;

const Header = styled.p`
  font-size: 32px;
  font-weight: bold;
  text-align: left;
`;

const Chapter = styled.h5`
  margin-top: 10px;
`;

const Image = styled.div`
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Img = styled.img`
  max-width: 100%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
`;

const LinkA = styled.a`
  text-decoration: none;
  font-weight: bold;
`;

const List = styled.ul`
  text-align: left;
`;

export const AboutMe = () => (
  <Wrapper>
    <Header>About me</Header>

    <p>My name is Adam. I was born in a small town in north-eastern Poland around thirty kilometers 
    near to the Belarussian border. As a kid I experienced my first crush with LEGO 
    that made me keen on building and interested in technical fields. I used to build various
    devices since my early years. I built my first project – a mechanical rope-walking monkey when I was
    six. It was a simple automaton propelled by single motor geared
    down twenty times with a worm gear. The arms worked as slider-crank linkages ended with claws
    that hooked a rope in an alternating pattern. The result of this mechanism was a fully movable model of
    a monkey.</p>

    <Chapter>High School</Chapter>
    <p>In 2015-2018 I attended high school where I studied in a class with extended math
    and physics. Then I took an initiative to participate in the Polish Olympics of
    Creativity called Destination Imagination, on which I was a leader of 6-person team.
    At the end of my freshman's year at high school I was also a speaker at a conference about
    education that I was invited to attend. The conference was about the introduction of programming into
    school as an obligatory subject, and I showcased one of my projects there.</p>

    <Image>
      <Img src={Debutant} width="480px" alt="Destination Imagintion, Wrocław 2018" />
      <p>Destination Imagination Olympics of Creativity, Wrocław 2016</p>
    </Image>

    <p>With above  achievements up to this date, in my third year at high school I got my first
    scholarship founded by a local seafood company named SUEMPOL. With this money I started
    making a large project I had been thinking about for many 
    years – a <StyledLink to="/human-arm">mechanical human arm</StyledLink>.
    I have submitted a model to the 
    EL-ROBO-MECH contest organized by Bialystok University of Technology, where it took third
    place out of fifteen, winning a monetary prize and the university priority admission card.
    In the time of high school my mentors were teachers Sławomir Zieniewski and Ewa Trzeszczkowska.
    I also earned a subsidy
    from the European Union for a 7-month long Java programming course, in which I was the youngest participant.</p>

    <Image>
      <Img src={ElRoboMech} width="600px" alt="EL-ROBO-MECH, Białystok 2018" />
      <p>EL-ROBO-MECH award ceremony, Białystok 2018</p>
    </Image>

    <Chapter>Undergraduate studies</Chapter>
    <p>I started studying Automatic Control and Robotics in the Bialystok University of
    Technology (BUT) in 2018. A year after that I launched the Artificial Intelligence Scientific Club as a
    section of Robotics Students' Club at the Mechanical Faculty of BUT. We were a group of
    students that were learning modern technologies such as: neural networks, machine learning,
    and computer vision.</p>
    
    <Image>
      <Img src={Explory} width="600px" alt="Regional E(x)plory Competition, Łódź 2019" />
      <p>Regional E(x)plory competition, Łódź 2019</p>
    </Image>

    <p>Studies aside, I completed an internship at Standard Motor Products factory that
    produces plastic components, including the ignition coils. My role was to maintain
    the molding folds, operate an EDM machine, and make models of parts in a CAD software.
    So far, I still take a part in some competitions once in a while. In my third year of
    studies I got into the finals of the nationwide KOKOS Students' Construction Contest in the category of Smart Robots.
    During the last semester of my bachelor's degree I was studying at SDU (University of Southern Denmark) in Odense as
    an exchange student. I also was one of the total of four students that got a grant from
    Diamonds' Explorers foundation, which was launched and led by the previous Rector of BUT – Professor Lech
    Dzienis. In the time of my stay in Denmark I
    wrote a <StyledLink to="/robotic-manipulation">thesis</StyledLink> focused on robotic manipulation 
    using computer vision system – a quintessential
    problem in modern robotics. My supervisor was Adam Wolniakowski, PhD.</p>

    <Chapter>Master studies</Chapter>
    <p>After graduating I received an offer of work on 
    the <StyledLink to="/autonomous-vehicle">autonomous military vehicle</StyledLink> project supervised
    by Polish company STEKOP that specializes in security systems. As a freelance worker I was the main contributor responsible 
    for computer vision related to object detection and distance estimation. In fall 2022 the truck was unveiled
    at the Polish International Defence Industry Exhibition in Kielce.
    </p>

    <Image>
      <Img src={Sonderborg} width="800px" alt="SDU Case Competition, Sønderborg 2022" />
      <p>SDU Case Competition, Sønderborg 2022</p>
    </Image>

    <p>For my master's degree I was admitted to Aalborg University
    and SDU of which I chose the second – same place I was studying on the exchange.
    Not-so-long after that I had the pleasure to be a member of the winning team at the SDU Case Competition in Sønderborg. 
    The theme of the contest was to propose a solution that reduces carbon footprint backed by the usage of renewable energy sources.
    Our team presented an <LinkA href="https://www.youtube.com/watch?v=ZPzBONO5VmA">idea</LinkA> of 
    reusing exploited electric car batteries to store the green energy during high production periods
    and use it while consumption raises. Successfully, an innovation was noticed by the jury that decided to give us
    first place. 
    {/*and money prize. The check for 15000 DKK was handed over by previous chairman of the board of Danfoss – Jørgen Mads Clausen. */}
    </p>

    <Chapter>Plans for future</Chapter>
    <p>In the near future I am going to still develop further in the fields of my interests:
    robotics, artificial intelligence, but also cognitive science and psychology. Before the end of my
    studies I want to publish articles about robotic manipulation and practical
    usage of AI systems.</p>

    <Chapter>People who inspire me</Chapter>
    <ul>
      <li><LinkA href="https://petrospsyllos.com/en/">Petros Psyllos</LinkA></li>
      <li><LinkA href="https://pwwprojects.blogspot.com/">Piotr Wasilewski</LinkA></li>
    </ul>

    <Chapter>Recommended books</Chapter>
    <List>
      <li><i>Elon Musk</i> – Walter Isaacson</li>
      <li><i>Innovators</i> – Walter Isaacson</li>
      <li><i>Factfullness</i> – Hans Rosling</li>
      <li><i>The Accidental Billionaires</i> – Ben Mezrich</li>
      <li><i>Permanent Record</i> – Edward Snowden</li>
      <li><i>Outliers</i> – Malcolm Gladwell</li>
      <li><i>The Selfish Gene</i> – Richard Dawkins</li>
      <li><i>Sapiens: A Brief History of Humankind</i> – Yuval Noah Harari</li>
      <li><i>The LEGO Story</i> – Jens Andersen</li>
      <li><i>Shoe Dog</i> – Phil Knight</li>
    </List>
    <Chapter>Favourite movies</Chapter>
    <List>
      <li><i>The Butterfly Effect, The Island, The Social Network, Forrest Gump, The Curious Case of Benjamin Button</i></li>
    </List>
    <Chapter>TV series</Chapter>
    <List>
      <li><i>13 Reasons Why, Black Mirror, Sillicon Valley, The Dropout</i></li>
    </List>
  </Wrapper>
);
