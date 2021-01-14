import React from 'react';
import MainLayout from '../layouts/MainLayout'
import { Link } from 'react-router-dom'

class Detail extends React.Component {
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
        ],
        data: {
            id: "",
            name: "",
            description: "",
            image: ""
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id
        const data = this.state.skills.find(item => item.id === Number(id))
        console.log("ini id dan data", id, data.image.default)
        this.setState({ data: data })
    }

    render() {
        const { name, image, description } = this.state.data

        return (

            <MainLayout>
                <div style={container}>
                    <h1>{name}</h1>
                    <div style={box}>
                        {/* {image.default && <img src={image.default} /> } */}
                        <img style={img} src={image.default} alt={name} />
                        <div>
                            <p>{description}</p>
                            <Link to="/">batch home</Link>
                        </div>
                    </div>
                </div>
            </MainLayout>
        )
    }
}

export default Detail;

const container = {
    padding: "0 6rem"
}

const img = {
    width: "20rem",
    height: "20rem",
    marginRight: "2rem"
}

const box = {
    display: "flex"
}