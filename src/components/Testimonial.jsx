import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
      
        <TestimonialCard1
           image={"../assets/image.png"}
          name={"Code With Harry"}
          feedback={"Your Teaching skills are so good."}
        />
        

        <TestimonialCard2
          name={"Apna College"}
          feedback={
            "Lot of Thanks to Apana college team and good teaching skills all programming !! "
          }
        />

        <TestimonialCard3
          name={"Sundar Pichai"}
          feedback={"Amazing seems like you should the Google CEO"}
        />
      </section>
    </div>
  );
};

const TestimonialCard1 = ({ name, feedback }) => (
  <article>
    <img
      src={"https://yt3.ggpht.com/595jBfGiPIV_WLChMq0GvYn1M9bSCM8uW0vCloE5G9ZcmKU_3R-cyyzVDoX7830fPNFuwCLtiJsG5n0=s640-c-fcrop64=1,00000000ffffffff-nd-v1"}
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);
const TestimonialCard2 = ({ name, feedback }) => (
  <article>
    <img
      src={"https://yt3.ggpht.com/Kz_4QhKOelfv3L0g01tq6kJuPJ3TJkP3k_Vaypoua194Ehj83Dnv0fOLKoBdFkcuGbLvMx6zY02ALSM=s640-c-fcrop64=1,00000000ffffffff-nd-v1"}
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);
const TestimonialCard3 = ({ name, feedback }) => (
  <article>
    <img
      src={"https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg"}
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
