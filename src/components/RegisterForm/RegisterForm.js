import React, { Component } from 'react';
import InputBox from '../UI/InputBox/InputBox';
import Button from '../UI/Button/Button';

class RegisterForm extends Component{
    constructor(props)
    {
        super(props)
        
        this.state={
            registerForm:{
                fullname:{
                    elementType:'input',
                    elementConfig:{
                        type:'text',
                        maxLength:'50',
                        required:true
                    },
                    label:'Name',
                    value:''
                },
                contactno:{
                    elementType:'input',
                    elementConfig:{
                        type:'text',
                        minLength:'8',
                        maxLength:'10',
                    },
                    label:'Contact',
                    value:''
                },
                email:{
                    elementType:'input',
                    elementConfig:{
                        type:'email',
                        required:true
                    },
                    label:'Email',
                    value:''
                },
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

        }
    }
    inputChangeHandle=(e,id) =>{
        
        e.preventDefault();
        const updatedForm={ ...this.state.registerForm}
        let updatedElement={...updatedForm[id]}
        let val=e.target.value
        if(id==='fullname')
        {
            if(!(/^[A-Z a-z ]+$/.test(val)))
            {
                return
            }
        }
         if(id==='contactno')
        {
            if(!(/^[0-9]+$/.test(val)))
            {
                return
            }
        }
            updatedElement.value=val
                updatedForm[id]=updatedElement
                this.setState({registerForm:updatedForm})
        
            
    }
    handleSubmit =(event) =>{
        event.preventDefault()
        const formdata = [];
        const resultArray=JSON.parse(localStorage.getItem('userdata')) || []
        for (let key in this.state.registerForm) {
            formdata.push({
                id: key,
                value: this.state.registerForm[key].value
            });
        }
        resultArray.push(formdata)
        localStorage.setItem('userdata',JSON.stringify(resultArray))
        this.props.history.push({pathname:'/login'})
    }
    render(){
        const formArray = [];
        for (let key in this.state.registerForm) {
            formArray.push({
                id: key,
                config: this.state.registerForm[key]
            });
        }
       
        return(
            <React.Fragment>
                <div className="registerFormWrap">
                 <div className='headerTitle'>Member Registration</div>
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
                    <Button>Register</Button>
                </form>
            </div>
            </React.Fragment>
            
        )
    }
}
export default RegisterForm