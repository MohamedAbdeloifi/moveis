import React from 'react'

class Series extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            series: []
        }
    }

    componentDidMount() {// GET PAR DEFAUT
        fetch(`./ref.json`)// LE CHEMIN DEMARRE DU index.html AU BUILD, ON NE PEUT PAS SORTIR DU SRC !!!
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({ series: data[1].series})
                console.log(data);
                console.log(data[1].series);
                console.log(data[1].series)
            })
    }

    render() {

        console.log(this.state.series)
        return (
            <div id="bloc_images">
                {this.state.series.map((serie,i)=>{
                    return <img key={i} src={serie.image}></img>
                })}
            </div>
        )
    }
}


export default Series;