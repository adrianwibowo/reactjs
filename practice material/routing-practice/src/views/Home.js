import React from 'react';
import MainLayout from '../layouts/MainLayout'
import { Link } from 'react-router-dom'

class Home extends React.Component {
    state = {
        skills: [
            {
                id: 1,
                name: "Javascript",
                description: "Javascript Description",
                image: require('../images/js.png')
            },
            {
                id: 2,
                name: "React",
                description: "React Description",
                image: require('../images/react.jpg')
            },
            {
                id: 3,
                name: "Vue",
                description: "Vue Description",
                image: require('../images/vue_js.jpg')
            },
            {
                id: 4,
                name: "Svelte",
                description: "Svelte Description",
                image: require('../images/svelte.png')
            }
        ]
    }
    render() {
        const { skills } = this.state;
        return (
            <div style={{ height:"100vh"}}>
                <MainLayout>
                    <h1 style={container}>Home Page</h1>
                    <div style={container}>
                        {skills.map(i =>
                            // {console.log(i.image.default)}
                            <div key={i.id} style={card}>
                               
                                <Link to={`/detail/${i.id}`}>
                                <img src={i.image.default} alt={i.name} style={img} />
                                <h3>{i.name}</h3>
                                </Link>
                            </div>
                        )}
                    </div>
                </MainLayout>
            </div>
        )
    }
}

export default Home

const container = {
    display: "flex",
    padding: "0 6rem",
    justifyContent: 'space-between'
 
}

const card = {
    width: "20%",
    height: "15rem"
}

const img = {
    width: "100%",
    height: "100%"
}