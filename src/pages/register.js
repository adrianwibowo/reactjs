import React from 'react'
import '../assets/styles/register.scss'

//class base sama funsional base
/**
 * class base 
 */

// class Welcome extends React.Component {
//     render() {
//       return <h1>Hello, {this.props.name}</h1>;
//     }
//   }

/**
 * functional base, nah ini namanya hooks
 */


const Welcome = () => {
    let user = 'adrian';
    let loading = true;
    const terserah = '10';
    let arr = ['10', '20', '30']
    const initialState = {
        cards: [
            {
                id: 3,
                name: "Chlaudya Mamuaya",
                relation: "Teammate in Sayembara project",
                // picture:require("../../assets/images/chlau.jpeg"),
                testi: "Yogie is an excellent team leader (scrum master). He is dynamic, focused, committed and enthusiastic. He is always prepared to go that extra mile to help the team be successful. Yogie is great to share ideas with and he will often infuse the team with humor, games and a sense of positive team play. He's a great team player and excellent communicator not just to the teams he has worked with but all those around him as well. It's been a pleasure working with him for the past 1 month.",
                link: "https://www.linkedin.com/in/chlaudya-margareta-mamuaya-a50434118/"
            },
            {
                id: 4,
                name: "Galih Depri",
                relation: "Teammate in Sayembara project",
                // picture:require("../../assets/images/galih.jpeg"),
                testi: "Yogie's desire to learn is inspiring. He didn't have any IT background and yet was able to learn materials from the classes, and applied it very well to the project we worked together. As a scrum master, he also delivered his job very well. He understood the role and was able to manage the team, keep track of everyone's progress, solve problems. He lead the team to perform well. He's the perfect person to work with if you're looking for a fun, creative, committed, and highly-skilled person.",
                link: "https://www.linkedin.com/in/galih-depri-lenggana/"
            },
            {
                id: 5,
                name: "Prada Ayu Nurani",
                relation: "Teammate in Sayembara project",
                // picture:require("../../assets/images/ani.jpeg"),
                testi: "Yogie and I attended Glints Academy together. We were in the same team in one of the projects where he was voted as the scrum master. What I can tell you about Yogie is that he is a great team leader and his enthusiastic and positive attitude always brings great atmosphere to the team. He is a driven individual and is willing to go extra miles to achieve set goals. He is someone you would really like to work with in a team.",
                link: "https://www.linkedin.com/in/prada-ayu-nurani-ani-3a7830121/"
            }
        ]
    };
    return (
        <div className='page'>
            <h1>Hi <span>{user}</span></h1>
            <p> {loading ? 'loading' : 'finish loading'}</p>
            <p> {terserah ? 'true' : 'false'}</p>
            <p> {arr ? arr.map(i => i + " ") : 'nggada'} </p>
            {initialState ? initialState.cards.map(i => {
                return (<>
                    <div className="apa">
                        <h1> {i.name} </h1>
                        <p> {i.relation} </p>
                    </div>
                </>)
            }) : 'nggada'}
        </div>

    )
}

export default Welcome;
