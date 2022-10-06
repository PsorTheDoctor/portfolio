import { Wrapper, Title, Subtitle, Image, Iframe } from "./Style";

export const AutonomousVehicle = () => (
  <Wrapper>
    <Title>Object recognition for the autonomous vehicle</Title>
    <Subtitle>Software system for the autonomous military truck. Project realised with Polish company STEKOP.</Subtitle>

    <p>The task was to create a real-time GPU-accelerated environment recognition system including object detection
    and distance estimation methods. The final solution will be implemented to TAERO autonomous military truck.</p>
    
    <Image>
      <Iframe width="560" height="315" src="https://www.youtube.com/embed/enHP7vtQyUs" title="YouTube video player" frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Iframe>      
    </Image>

    <p><b>Note</b></p>
    <p>STEKOP S.A. does not authorize this post.</p>
  </Wrapper>
);
