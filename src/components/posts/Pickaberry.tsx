import { Wrapper, Title, Subtitle, Header, Image, Img, Iframe } from "./Style";

export const Pickaberry = () => (
  <Wrapper>
    <Title>Pick-A-Berry</Title>
    <Subtitle>A mobile fruit-picking platform for smart agriculture.</Subtitle>

    <Image><Img src="https://www.jamesdysonaward.org/Document/875338d0-a8ee-44ab-905b-3431b38e0c1c/flag.png" width="800px" alt="Pick-A-Berry" /></Image>

    <p><Header>What it does</Header>
    Pick-A-Berry is a mobile platform for picking fruit, particularly designed for harvesting red currants. 
    Thanks to the unique design of its end-effector, it can pick berries in batches instead of one-by-one, 
    which speeds up harvesting and reduces arm movements.</p>

    <p><Header>My inspiration</Header>
    The inspiration came from my family garden, where red currants are planted. 
    Because berries are small and scattered around the bush, collecting them takes plenty of hours of human work. 
    So I came with the idea to improve it – by building a robot that will take over human work. 
    As I am freshly graduated robotics engineer, this task sounded like well-suited for me.</p>

    <Image><Img src="https://www.jamesdysonaward.org/Document/2754297e-260b-4273-a694-cca640beb2d0/inno.png" width="800px" alt="Pick-A-Berry" /></Image>

    <p><Header>How it works</Header>
    The robot is rover-like wheeled mobile platform with a 6-axis robot arm equipped with a custom end-effector. 
    I developed a remote control for the drive and steering, but ultimately it is supposed to navigate 
    autonomously using input from an onboard camera mounted in the front bumper. 
    This camera would enable SLAM localization and mapping, allowing robot to create a map of its environment 
    as it moves. A second camera is mounted on the robot arm and detects red currants using a computer vision system. 
    Unlike typical fruit-picking robots that harvest berries one-by-one, my system cuts the berry stems 
    with a set of pliers, letting the fruit fall into a bucket located below. In this way, 
    the robot can collect multiple berries in a single go and only unloads the bucket when full - by dumping 
    the load to a box placed on the rear half of the platform.</p>

    <Image><Img src="https://www.jamesdysonaward.org/Document/35a965fc-ea2e-46fd-ab4e-5531c594cded/desc.png" width="800px" alt="Pick-A-Berry" /></Image>

    <p><Header>Design process</Header>
    After accepting the challenge to automatize picking red currants, I began building the model 
    by prototyping a robot arm combining some pieces with two Lego Mindstorms units. 
    Since my custom-built robot arm may eventually be replaced by a certified industrial manipulator, 
    I designed it to follow a standard 6-axis kinematic chain – just like most commercial robots. 
    The main innovation lies in the unique end-effector I designed specifically for picking fruits. 
    It was inspired by a pelican's beak that features a large pouch used for catching fish – in a similar way 
    berries are gently scooped up into the bucket attached to the gripper. 
    Once the arm was complete, I mounted it onto a mobile wheeled platform that I also built from scratch. 
    The next step was to develop control software and a computer vision system capable of 
    detecting red currants in real-world conditions.
    </p>

    <Image><Img src="https://roadsendnaturalist.com/wp-content/uploads/2014/01/white-pelican-pouch-stretch-3.jpg" width="400px" alt="a pelican" /></Image>

    <p><Header>How it is different</Header>
    Most fruit-picking robots (like the ones developed by Belgian company Octinion) pick berries one-by-one,
    moving the robot arm repeatedly for each detection. This is slow and inefficient, 
    especially for small fruits like red currants. My design avoids this problem by introducing
    that uses a bucket underneath a gripper's pliers. These pliers cut the berry stems making the fruits 
    drop to the bucket. The vision system detects multiple fruits at once and the robot arm can plan 
    a trajectory from one fruit to another and dump the load only when the bucket is full. 
    This drastically reduces robot arm movements and speeds up harvesting. 
    Since the end-effector use pliers to cut the stems, there is no risk to damage a fruit by overwhelming it.
    Moreover, the perception system I developed relies solely on vision, which lower cost and complexity.
    </p>

    <p><Header>Future plans</Header>
    The next step is to found a start-up company focused on producing these type of fruit-picking robots. 
    We are going to manufacture the mobile platform ourselves and attach an industrial collaborative robot arm
    on the top of it. We plan to develop the control program in a similar way I did in this project, 
    but its additional feature will be the ability to detect fruit ripeness. 
    The goal is to offer scalable, efficient solution for fruit plantations.
    </p>

    <Image>
      <Iframe width="560" height="315" src="https://www.youtube.com/embed/QHORezo9idE?si=vrf2_IBT-oh6gwLZ" title="YouTube video player" frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Iframe>      
    </Image>
  </Wrapper>
);
