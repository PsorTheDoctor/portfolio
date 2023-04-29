import { Wrapper, Title, Subtitle, Image, Img, Iframe } from "./Style";
import Taero from "../../images/taero2.jpg";

export const AutonomousVehicle = () => (
  <Wrapper>
    <Title>Perception for the autonomous vehicle</Title>
    <Subtitle>Software system for the autonomous military truck. Project realised with Polish company STEKOP.</Subtitle>

    <Image><Img src={Taero} width="600px" alt="Taero truck" /></Image>

    <p>The task was to create a real-time GPU-accelerated environment recognition system including object detection
    and distance estimation methods. The final solution will be implemented to TAERO autonomous military truck.
    The premiere of the vehicle was in autumn 2022 when it had been revealed at 30th edition of International Defence Industry Exhibition in Kielce, Poland.</p>
    
    <Image>
      <Iframe width="560" height="315" src="https://www.youtube.com/embed/enHP7vtQyUs" title="YouTube video player" frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Iframe>      
    </Image>

    <p><b>Note</b></p>
    <p>STEKOP S.A. does not authorize this post.</p>
  </Wrapper>
);
