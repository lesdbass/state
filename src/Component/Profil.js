import React, {setState} from 'react';
import {Card , Button} from 'react-bootstrap';

class Profil extends React.Component {
    constructor (props) {
        super(props)
        
        this.state= {
                   id: this.props.person.id ,
                   fullName : this.props.person.fullName ,
                   bio : this.props.person.bio,
                   imgSrc : this.props.person.imgSrc, 
                   profession: this.props.person.profession , 
                   show : this.props.person.show ,
                   count : 0,
                   intervalID :0
        }
        console.log(this.state.show)
         //this.handleClick=this.handleClick.bind(this);
    }
    componentDidMount()
    {
        
        this.state.intervalID=setInterval(()=>
            {
                    this.setState({count : this.state.count+1})
          }
          ,1000
        )

    }
    componentWillUnmount()
    {
        clearInterval(this.state.intervalID);

    }
    handleClick= () =>  
    {
        this.setState({show : !this.state.show})        // this.props.person ={ show : !this.props.person.show };
        console.log(this.state.show)

    }



    render() {


        if (this.state.show===false)
        {
            return ( <Button variant="primary" onClick={this.handleClick}>Show Me</Button>)
        }
        else 
        {
            return (
                <div>
                    <Button variant="primary" onClick={this.handleClick}>Hide Me</Button>
                    <h6>{`component was mounted from : ${this.state.count} s`}</h6>
                    <div key={this.state.id}>       
                            <Card style={{ width: '18rem' }}>
                                <Card.Header className='bg-primary' >{this.state.profession}</Card.Header>
                                <Card.Img variant="top" src={this.state.imgSrc} />
                                <Card.Body>
                                    <Card.Title className="badge bg-primary text-wrap fs-1">{this.state.fullName}</Card.Title>
                                    <Card.Text >
                                    {this.state.bio}
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                    </div>
                </div>
            )

        }

    }
}

export default Profil;

