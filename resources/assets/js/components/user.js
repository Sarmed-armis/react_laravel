/**
 * Created by lenovo on 4/22/2017.
 * this is for user data
 */
import  React, {Component} from 'react';
import ReactDOM  from 'react-dom';
import axios from 'axios';


class User extends Component {
    constructor(props) {
        super(props);


        this.state =
            {
                details: []
        };
    }
    componentDidMount() {
        axios.get('/api/details/'+window.name)
            .then(response => {
                return response
            })
            .then(details => {
                console.log(details.data.name);
                this.setState({ details:details });
            })    .catch(function (error) {
            console.log(error);
        });

    }
 sendData(){

     axios.post('api/post',
         {
         firstName: 'Fred',
         lastName: 'Flintstone'
     })
         .then(function (response) {
             console.log(response.data);
         })
         .catch(function (error) {
             console.log(error);
         });

 }




    render() {

        return (

            <section>
                  <h1>{this.state.details.name}</h1>
            <button className="btn-danger" onClick={this.sendData.bind(this)}>send</button>
            </section>

        )
    }

}

if(document.getElementById('userdetails')){

    ReactDOM.render(<User />,document.getElementById('userdetails'))
}