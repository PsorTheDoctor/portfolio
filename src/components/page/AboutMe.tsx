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
  margin: 0 auto;
  text-align: justify;
  padding: 10px 10px 30px 10px;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
`;

const Column = styled.div`
  float: left;
  @media (max-width: 1000px) {
    max-width: 100%;
  }
  @media (min-width: 1000px) {
    max-width: 600px;
  }
`;

const Image = styled.div`
  float: left;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Header = styled.p`
  font-size: 32px;
  font-weight: bold;
  text-align: left;
`;

const Chapter = styled.h5`
  margin-top: 10px;
  font-weight: bold;
`;

const Img = styled.img`
  max-width: 100%;
  margin-bottom: 5px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
`;

const LinkA = styled.a`
  text-decoration: none;
  font-weight: bold;
`;

const Books = styled.div`
  float: left;
  @media (max-width: 1000px) {
    max-width: 100%;
  }
  @media (min-width: 1000px) {
    min-width: 540px;
  }
`;

const Movies = styled.div`
  float: left;
  @media (max-width: 1000px) {
    max-width: 100%;
  }
  @media (min-width: 1000px) {
    min-width: 420px;
  }
`;

const List = styled.ul`
  text-align: left;
`;

export const AboutMe = () => (
  <Wrapper>
    <Header>About me</Header>
    <Grid>
      <Column>
        <p>My name is Adam. I was born in a small town in north-eastern Poland around thirty kilometers 
        near to the Belarussian border. As a kid I experienced my first crush with LEGO 
        that made me keen on building and interested in technical fields. I used to build various
        devices since my early years. I built my first project – a mechanical rope-walking monkey when I was
        six. It was a simple automaton propelled by single motor geared
        down with a worm gear. The arms worked as slider-crank linkages ended with claws
        that hooked a rope in an alternating pattern. The result of this mechanism was a fully movable model of
        a monkey.</p>

        <Chapter>High school</Chapter>
        <p>In 2015-2018 I attended high school where I studied in a class with extended math
        and physics. Then I took an initiative to participate in the nationwide Olympiad of
        Creativity called Destination Imagination, on which I was a leader of 6-person team.
        At the end of my freshman year I was also a speaker at a conference about
        the introduction of programming into school as an obligatory subject.</p>
      </Column>

      <Image>
        <Img src={Debutant} width="360px" alt="Destination Imagination, Wrocław 2018" />
        <p>Destination Imagination Olympiad of Creativity,<br/>Wrocław 2016</p>
      </Image>
    </Grid>
    <Grid>
      <Image>
        <Img src={ElRoboMech} width="360px" alt="EL-ROBO-MECH, Białystok 2018" />
        <p>EL-ROBO-MECH award ceremony,<br/>Białystok 2018</p>
      </Image>
      <Column>
        <p>Keeping above in mind, in my third year at high school I got my first
        scholarship funded by a local seafood company SUEMPOL. With this money I started
        making a large project I had been thinking about for many 
        years – a <StyledLink to="/human-arm">mechanical human arm</StyledLink>.
        I have submitted the model to the 
        EL-ROBO-MECH contest organized by Bialystok University of Technology, where it took third
        place out of fifteen, winning a monetary prize and the university priority admission card.
        In the time of high school my teachers were Sławomir Zieniewski and Ewa Trzeszczkowska.
        I also earned a subsidy from the European Union for a 7-month long Java programming course.</p>
      </Column>
    </Grid>

    <Chapter>Undergraduate studies</Chapter>
    <Grid>
      <Column>
        <p>I started studying Automatic Control and Robotics in the Bialystok University of
        Technology (BUT) in 2018. A year after that I launched the AI Science Club as a
        section of Robotics Student Club at the Mechanical Faculty of BUT. 
        Seventeen students enrolled, but only a bunch of them actually participated in our meetings
        on whose we covered the fundamentals of AI, which was even more exciting before the ChatGPT era.</p>

        <p>Studies aside, I completed an internship at Standard Motor Products factory that
        produces plastic components, primarily ignition coils. My role was to maintain
        injection molds, operate an EDM machine, and make models of parts in a CAD software.
        During the last semester of my bachelor's degree I was studying at SDU (University of Southern Denmark) in Odense as
        an exchange student. I also was one of the total of four students that got a grant from
        Diamond Explorers foundation, which was launched and led by the former Rector of BUT – Professor Lech
        Dzienis. In the time of my stay in Denmark I wrote a thesis focused on object pose estimation.
        My supervisor was Adam Wolniakowski.</p>
      </Column>
      <Image>
        <Img src={Explory} width="360px" alt="Regional E(x)plory Competition, Łódź 2019" />
        <p>Regional E(x)plory competition,<br/>Łódź 2019</p>
      </Image>
    </Grid>

    <Chapter>Master studies</Chapter>
    <p>After finishing my bachelor's degree I received an offer of work on 
    the <StyledLink to="/autonomous-vehicle">military vehicle</StyledLink> that was able to drive in both manned and unmanned mode.
    The project was supervised by Polish company STEKOP that specializes in security systems. As a freelance worker I was responsible 
    for computer vision related to object detection and distance estimation. In fall 2022 the truck was unveiled
    at the Polish International Defence Industry Exhibition in Kielce.
    </p>
    <Grid>
      <Image>
        <Img src={Sonderborg} width="360px" alt="SDU Case Competition, Sønderborg 2022" />
        <p>SDU Case Competition, Sønderborg 2022</p>
      </Image>
      <Column>
        <p>For my master's degree I was admitted to Aalborg University
        and SDU of which I chose the second – same place I was studying on the exchange.
        Not-so-long after that I had the pleasure to be a member of the winning team at the SDU Case Competition in Sønderborg. 
        The theme of the contest was to propose a solution that reduces carbon footprint backed by the usage of renewable energy sources.
        Our team presented the <LinkA href="https://www.youtube.com/watch?v=ZPzBONO5VmA">idea</LinkA> of 
        reusing exploited electric car batteries to store the green energy during high production periods
        and use it while consumption raises. Successfully, the innovation was noticed by the jury that decided to give us
        first place.</p>
      </Column>
    </Grid>
    <p>In the third semester of my master's I was employed as a student programmer at Qpurpose – a spin-off company from Center of Quantum Mathematics at SDU. 
    Despite how overstating it sounds, my role was to develop python programs to analyze and visualize given data. 
    I took a part in two projects. One of them was the healthcare application to assist physicians in diagnosing liver diseases based on biomarkers. 
    I deployed it as a standalone window app with a functional GUI. Another one was the finance project in collaboration with Jyske Bank 
    focused on value estimation of financial products where I did a basic data processing, such as sorting and segregation.
    At the end of my formal education I defended my master's <StyledLink to="/visuomotor-robot-policies">thesis</StyledLink> supervised 
    by Iñigo Iturrate and Ralph Brorsen with the highest grade.
    The thesis was focused on teaching robots dexterous skills based on a raw visual input. It was written in collaboration with Universal Robots 
    who provided me with computational assets and a pleasant working atmosphere.</p>

    <Chapter>Tech start-ups and humanoids</Chapter>
    <p>Seeking opportunities to get involved in humanoids I contacted the Polish-American start-up Clone. 
    They invited me to their facility and offered me a job, which I later rejected due to very invasive contract. 
    Luckily, at the same time, a strawberry plantation owner contacted me with a proposal to join his start-up R-BOS 
    that builds mobile berry-picking platforms. Since it was pretty aligned to what I had covered during my studies, 
    I didn't hesitate much and joined the initiative as an engineer specialized in robot perception and kinematics. 
    Later that year, I got intrigued by a newly-founded Polish humanoid start-up SI Robotics. 
    Trying to find out more about them, I went to a job interview that made me hired the same day. 
    My role at SI came down to implementing AI solutions, including teleoperation, teaching robots how to walk and manipulate objects.
    This was also my first chance to take a part in developing a full-size humanoid.</p>

    <Chapter>Recommendations</Chapter>
    <Grid>
      <Books>
        <h6>Books</h6>
        <List>
          <li><i>The Accidental Billionaires</i> – Ben Mezrich</li>
          <li><i>The Diary of a CEO</i> – Steven Bartlett</li>
          <li><i>Elon Musk</i> – Walter Isaacson</li>
          <li><i>Factfullness</i> – Hans Rosling</li>
          <li><i>Innovators</i> – Walter Isaacson</li>
          <li><i>Losing My Virginity</i> – Richard Branson</li>
          <li><i>Outliers</i> – Malcolm Gladwell</li>
          <li><i>Permanent Record</i> – Edward Snowden</li>
          <li><i>The Righteous Mind</i> – Jonathan Haidt</li>
          <li><i>Sapiens: A Brief History of Humankind</i> – Yuval Noah Harari</li>
          <li><i>Steve Jobs</i> – Walter Isaacson</li>
          <li><i>The Selfish Gene</i> – Richard Dawkins</li>
          <li><i>Shoe Dog</i> – Phil Knight</li>
          <li><i>Surely You're Joking, Mr. Feynman!</i> – Richard Feynman</li>
        </List>
      </Books>
      <Movies>
        <h6>Movies</h6>
        <List>
          <li><i>Amateur</i> (2018)</li>
          <li><i>The Butterfly Effect</i></li>
          <li><i>The Curious Case of Benjamin Button</i></li>
          <li><i>The Elephant Man</i></li>
          <li><i>Forrest Gump</i></li>
          <li><i>The Great Gatsby</i> (2013)</li>
          <li><i>The Island</i> (2005)</li>
          <li><i>Lost Highway</i></li>
          <li><i>The Social Network</i></li>
        </List>
        <h6>TV series</h6>
        <List>
          <li><i>13 Reasons Why</i></li>
          <li><i>Black Mirror</i></li>
          <li><i>The Dropout</i></li>
          <li><i>Silicon Valley</i></li>
        </List>
      </Movies>
    </Grid>
  </Wrapper>
);
