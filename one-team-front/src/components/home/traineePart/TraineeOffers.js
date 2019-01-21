import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import "./traineeOffers.css";

const offers = [
  {
    logo: "img/logo1.png",
    title: "titre de la mission, lanl kljfslkjlkjd f skjdlfj sjfljs df",
    content:
      "slksjkfj sldkjf lksqdjfskjf lksdjflksf slkdhd ksjlkjs osijdfl jqjdf sdkjfsdjzoiejf lzkejflkzjf zlkjef kzejf kzejfkjlkdjf ksjf lkjdflk qkdjf skdjf skjf slkdjfklqjsdjf skjf",
    website: "www.lkjelkjeelmfkzfljeflj.com"
  },
  {
    logo: "img/logo1.png",
    title: "titre de la mission, lanl kljfslkjlkjd f skjdlfj sjfljs df",
    content:
      "slksjkfj sldkjf lksqdjfskjf lksdjflksf slkdhd ksjlkjs osijdfl jqjdf sdkjfsdjzoiejf lzkejflkzjf zlkjef kzejf kzejfkjlkdjf ksjf lkjdflk qkdjf skdjf skjf slkdjfklqjsdjf skjf",
    website: "www.lkjelkjeelmfkzfljeflj.com"
  },
  {
    logo: "img/logo1.png",
    title: "titre de la mission, lanl kljfslkjlkjd f skjdlfj sjfljs df",
    content:
      "slksjkfj sldkjf lksqdjfskjf lksdjflksf slkdhd ksjlkjs osijdfl jqjdf sdkjfsdjzoiejf lzkejflkzjf zlkjef kzejf kzejfkjlkdjf ksjf lkjdflk qkdjf skdjf skjf slkdjfklqjsdjf skjf",
    website: "www.lkjelkjeelmfkzfljeflj.com"
  },
  {
    logo: "img/logo1.png",
    title: "titre de la mission, lanl kljfslkjlkjd f skjdlfj sjfljs df",
    content:
      "slksjkfj sldkjf lksqdjfskjf lksdjflksf slkdhd ksjlkjs osijdfl jqjdf sdkjfsdjzoiejf lzkejflkzjf zlkjef kzejf kzejfkjlkdjf ksjf lkjdflk qkdjf skdjf skjf slkdjfklqjsdjf skjf",
    website: "www.lkjelkjeelmfkzfljeflj.com"
  }
];

class TraineeOffers extends Component {
  render() {
    return (
      <div className="general-offers general_margin">
        <h2>Parcourir les offres de stage</h2>
        <div className="bloc-offers">
          {offers.map((element, index) => (
            <Paper className="papers-offers" elevation={3}>
              <div className="bloc-offers-solo" key={index}>
                <div className="logo-offers">
                  <img src={element.logo} alt={element.title} />
                </div>
                <h4 className="text-offers">{element.title}</h4>
                <p className="text-offers">{element.content}</p>
                <a className="text-offers" href={element.website}>
                  {element.website}
                </a>
              </div>
            </Paper>
          ))}
        </div>
      </div>
    );
  }
}

export default TraineeOffers;
