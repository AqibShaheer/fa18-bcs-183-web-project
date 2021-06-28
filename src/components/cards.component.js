import React,{Component} from 'react';
import axios from 'axios';


export default class Team extends Component
{

    constructor(props)
    {
        super(props);

        this.state={    
            teams:[],
        };
    }

    componentDidMount() {
            axios.get('http://localhost:5000/api').then(res=>{
                
                this.setState({teams:res.data});
                console.log(this.state.teams);
            }).catch(err=>{
                console.log(err)
            })
    }

    teamsList()
    {
        return this.state.teams.map(currentcard =>{
            return (
                <div className="col-sm-4">
                <div className="team-member">
                  <img className="mx-auto rounded-circle" src={currentcard.link} alt=""/>
                  <h4>{currentcard.username}</h4>
                  <p className="text-muted">{currentcard.description}</p>
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                      <a href={currentcard.link}>
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href={currentcard.link}>
                        <i className="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href={currentcard.link}>
                        <i className="fa fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )
        })
    }


    render()
    {
        return(
            this.teamsList()
        )
        
    }

}