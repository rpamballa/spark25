import Marquee from "react-fast-marquee";

import appleMusicLogo from "../imgs/logos/apple-music.svg";
import cocaColaLogo from "../imgs/logos/coca-cola.svg";
import disneyParksLogo from "../imgs/logos/disney-parks.svg";
import expediaLogo from "../imgs/logos/expedia.svg";
import googleLogo from "../imgs/logos/google.svg";
import loanSnapLogo from "../imgs/logos/loansnap.svg";
import merkleLogo from "../imgs/logos/merkle.svg";
import metaLogo from "../imgs/logos/meta.svg";
import ringCentralLogo from "../imgs/logos/ringcentral.svg";
import abcFitnessLogo from "../imgs/logos/abc-fitness.png";
import fuelLogo from "../imgs/logos/fuel.png";
import gerberLifeLogo from "../imgs/logos/gerber-life.png";
import justAnswerLogo from "../imgs/logos/justanswer.png";
import noosphereVenturesLogo from "../imgs/logos/noosphere-ventures.png";

const brands = [
  { name: "Google", logo: googleLogo },
  { name: "Meta", logo: metaLogo },
  { name: "Apple Music", logo: appleMusicLogo },
  { name: "Coca-Cola", logo: cocaColaLogo },
  { name: "Disney Parks", logo: disneyParksLogo },
  { name: "Expedia", logo: expediaLogo },
  { name: "RingCentral", logo: ringCentralLogo },
  { name: "Merkle", logo: merkleLogo },
  { name: "LoanSnap", logo: loanSnapLogo },
  { name: "ABC Fitness", logo: abcFitnessLogo },
  { name: "Fuel", logo: fuelLogo },
  { name: "Gerber Life", logo: gerberLifeLogo },
  { name: "JustAnswer", logo: justAnswerLogo },
  { name: "Noosphere Ventures", logo: noosphereVenturesLogo },
];

export default function Spark25Marquee() {
  return (
    <Marquee direction="left" pauseOnHover autoFill>
      {brands.map(({ name, logo }) => (
        <img
          key={name}
          src={logo}
          alt={name}
          title={name}
          className="mx-6 md:mx-16 h-8 md:h-10 w-auto max-w-[180px] object-contain brightness-0"
        />
      ))}
    </Marquee>
  );
}
