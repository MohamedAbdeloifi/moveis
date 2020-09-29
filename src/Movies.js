import React from 'react'

class Movies extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            movies: []
        }
    }

    componentDidMount() {// GET PAR DEFAUT
        fetch(`./ref.json`)// LE CHEMIN DEMARRE DU index.html AU BUILD, ON NE PEUT PAS SORTIR DU SRC !!!
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({ movies: data[0].movies})
                console.log(data);
                console.log(data[0].movies)
            })
    }

    render() {

        console.log(this.state.movies)
        return (
            <div id="bloc_images">
                {this.state.movies.map((movie,i)=>{
                    return <img key={i} src={movie.image}></img>
                })}
            </div>
        )
    }
}


export default Movies;