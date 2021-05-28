import React, {Component} from "react";
import App from "../../App";

export class Search extends Component {

    state = {
        text: ''
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault()
        if  (this.state.text === '') {
            this.props.setAlert('please enter something', 'dark')
        } else this.props.searchUsers(this.state.text)

        this.setState({text: ''})
        // this.props.setAlert(null, null)


    }

    render() {
        const {showClear, clearUsers} = this.props
        return(
            <div>
                <form className='form' onSubmit={this.onSubmit}>
                    <input type='text' name='text' placeholder='search users..' value={this.state.text} onChange={this.onChange} />
                    <input type='submit' name='Search' className='btn btn-dark btn-block'/>

                </form>
                {showClear && (<button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>)}

            </div>
        )
    }

}


export default Search