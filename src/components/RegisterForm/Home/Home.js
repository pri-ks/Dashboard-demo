import React, { Component } from 'react';

class Home extends Component{
    constructor(props)
    {
        super(props)
        
        
        
        this.state={
                fullname:'',
                contactno:'',
                email:'',
                username:''
        }
    }

    render(){
       
        return(
            <React.Fragment>
                <div className="registerFormWrap">
                    <div className='headerTitle'>Home - User Details</div>
                    <div>

                    </div>
                </div>
            </React.Fragment>
            
        )
    }
}
export default Home