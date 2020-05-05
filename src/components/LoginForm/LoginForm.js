import React, { Component } from 'react';
import InputBox from '../UI/InputBox/InputBox';
import Button from '../UI/Button/Button';
import { NavLink} from 'react-router-dom'


class LoginForm extends Component{
    constructor(props)
    {
        super(props)
        
        this.state={
            loginForm:{
                username:{
                    elementType:'input',
                    elementConfig:{
                        type:'text',
                        maxLength:'50',
                        required:true
                    },
                    label:'Username',
                    value:''
                },
                userpwd:{
                    elementType:'input',
                    elementConfig:{
                        type:'password',
                        maxLength:'20',
                        required:true
                    },
                    label:'Password',
                   value:''
                },
            },
            errormsg:false
            

        }
    }
    inputChangeHandle=(e,id) =>{
        
        e.preventDefault();
        const updatedForm={ ...this.state.loginForm}
        let updatedElement={...updatedForm[id]}
        let val=e.target.value
            if(/^\S*$/.test(val))
            {
                updatedElement.value=val
                updatedForm[id]=updatedElement
                this.setState({loginForm:updatedForm})
            }
    }
    handleSubmit =(event) =>{
        event.preventDefault()
        let auth=false
        const resultArray=JSON.parse(localStorage.getItem('userdata')) || []
        
        for(let i=0;i<resultArray.length;i++)
        {
            if(resultArray[i][3].value===this.state.loginForm.username.value && resultArray[i][4].value===this.state.loginForm.userpwd.value)
             {
                 auth=true;
                break;
            } 
            
        }
        if(auth === true)
        {
            console.log('login')
            this.props.history.push({pathname:'/home'})
        }
        else{
           
            this.setState({errormsg:true})
        }
        
    }
    render(){
        const formArray = [];
        for (let key in this.state.loginForm) {
            formArray.push({
                id: key,
                config: this.state.loginForm[key]
            });
        }
       
        return(
            <React.Fragment>
                <div className="cardFormWrap">
                 <div className='headerTitle'>Member Login</div>
                <form onSubmit={this.handleSubmit}>
                    {
                        formArray.map((formElement) => (
                                <InputBox 
                                key={formElement.id}
                                elementType={formElement.config.elementType}
                                elementConfig={formElement.config.elementConfig}
                                label={formElement.config.label}
                                value={formElement.config.value}
                                changed={(event) => this.inputChangeHandle(event,formElement.id)}
                            />
                            
                        ))
                    }
                    <Button>Submit</Button>
                </form>
                {
                    this.state.errormsg ? <div className='errorMsg'>Invalid Credentials</div> :''
                }
                
            </div>
            <div className='registerMsg'>Don't have an account? <NavLink to="/register">Sign Up</NavLink> here</div>
            </React.Fragment>
            
        )
    }
}
export default LoginForm