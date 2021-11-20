import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Header extends Component {
        constructor(props)
        {
            super(props)
            this.state = {
                firstName : '',
                lastName : '',
                phone : ''
            }
            this.handlechangeFirst = this.handlechangeFirst.bind(this)
            this.handlechangeLast = this.handlechangeLast.bind(this)
            this.handleChangePhone = this.handleChangePhone.bind(this)
        }
      
    

    handlechangeFirst =  (e) =>
        {
            e.preventDefault()
            this.setState({
                firstName : e.target.value
            })
            console.log(e.target.value,"Eeeee");
        }

        handlechangeLast =  (e) =>
        {
            e.preventDefault()
            this.setState({
                lastName : e.target.value
            })
            console.log(e.target.value,"Eeeee");
        }
        handleChangePhone =  (e) =>
        {
            e.preventDefault()
            this.setState({
                phone : e.target.value
            })
            console.log(e.target.value,"Eeeee");
        }

        submit = (e) =>{
            e.preventDefault()
            console.log(this.state,"State is here");
        }

    render() {
        return (
            <div>
                <form onSubmit={this.submit}>
                <input type="text" onChange={this.handlechangeFirst} value={this.state.firstName} />
                <input type="text" onChange={this.handlechangeLast} value={this.state.lastName} />
                <input type="text" onChange={this.handleChangePhone} value={this.state.phone} />
                <button type="submit" > submit</button>
                </form>
            </div>
        )
    }
}

export default Header
