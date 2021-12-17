import React, { useState } from "react";
import Button from "../Button";
import HeaderText from "../HeaderText";
import TeamDiv from "../TeamDiv";
import Dr from "../../SourceFiles/SosialMedia/behance.png";
import Be from "../../SourceFiles/SosialMedia/dribbble.png";
import In from "../../SourceFiles/SosialMedia/linkedin.png";
import P1 from "../../SourceFiles/Team/person1.jpg";
import P2 from "../../SourceFiles/Team/person2.jpg";
import P3 from "../../SourceFiles/Team/person3.jpg";
import P4 from "../../SourceFiles/Team/person4.jpg";
import P5 from "../../SourceFiles/Team/person5.jpg";

function MeetTheTeem() {
  const [Team, useTeam] = useState([
    {
      id: 1,
      name: "Dolor",
      photo: P1,
      sm: [
        {
          name: "Behance",
          link: "https://www.behance.net/onboarding/adobe",
          img: Be,
        },
        {
          name: "Dribbble",
          link: "https://dribbble.com/",
          img: Dr,
        },
        {
          name: "Likedin",
          link: "https://www.linkedin.com/",
          img: In,
        },
      ],
    },
    {
      id: 2,
      name: "Lorem",
      photo: P2,
      sm: [
        {
          name: "Behance",
          link: "https://www.behance.net/onboarding/adobe",
          img: Be,
        },
        {
          name: "Dribbble",
          link: "https://dribbble.com/",
          img: Dr,
        },
        {
          name: "Likedin",
          link: "https://www.linkedin.com/",
          img: In,
        },
      ],
    },
    {
      id: 3,
      name: "Lorem",
      photo: P3,
      sm: [
        {
          name: "Behance",
          link: "https://www.behance.net/onboarding/adobe",
          img: Be,
        },
        {
          name: "Dribbble",
          link: "https://dribbble.com/",
          img: Dr,
        },
        {
          name: "Likedin",
          link: "https://www.linkedin.com/",
          img: In,
        },
      ],
    },
    {
      id: 4,
      name: "Ipsum",
      photo: P4,
      sm: [
        {
          name: "Behance",
          link: "https://www.behance.net/onboarding/adobe",
          img: Be,
        },
        {
          name: "Dribbble",
          link: "https://dribbble.com/",
          img: Dr,
        },
        {
          name: "Likedin",
          link: "https://www.linkedin.com/",
          img: In,
        },
      ],
    },
    {
      id: 4,
      name: "Dolor",
      photo: P5,
      sm: [
        {
          name: "Behance",
          link: "https://www.behance.net/onboarding/adobe",
          img: Be,
        },
        {
          name: "Dribbble",
          link: "https://dribbble.com/",
          img: Dr,
        },
        {
          name: "Likedin",
          link: "https://www.linkedin.com/",
          img: In,
        },
      ],
    },
  ]);

  return (
    <section id="meet-the-team">
      <div id="mtt-container-wrapper">
        <div id="mtt-container" className="container">
          <HeaderText
            name="Meet The Team"
            text="Lorem ipsum dolor sit amet. Proin gravida nibh vel velit auctor
            aliquet"
            color = '#006400'
          />
          <div id="mtt-content-container" className="flex">
            <div id="mtt-content" className="flex">
              {Team.map((teamMember) => {
                return (
                  <TeamDiv
                    key={teamMember.id}
                    name={teamMember.name}
                    photo={teamMember.photo}
                    sm={teamMember.sm}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div id="mtt-button-container" className="flex">
          <Button name="Work With Us" />
        </div>
      </div>
    </section>
  );
}

export default MeetTheTeem;
