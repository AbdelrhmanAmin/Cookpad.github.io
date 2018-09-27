import React, {Component} from 'react';
import './style.css';

class Modal extends Component {
    render() {
        const style = this.props.isShow ? {display: 'block'}: null;
        return(
            <div>
                <section className='form' style={style}>
                    <div className='top'>
                    <span className="close" onClick={this.props.onBlur}>&times;</span>
                        <h1>Sign up with Cookpad</h1>
                    </div>
                    <div className='mid'>
                        <button className='fbBtn'><i className="fa fa-facebook fa-lg"></i><p>Sign up with Facebook</p></button>
                        <button className='gBtn'><i className="fa fa-google-plus fa-lg"></i><p>Sign up with Google+</p></button>
                    </div>
                        <p className='hr'>or</p>
                    <div className='bottom'>
                        <button className='mBtn'><i className="fa fa-envelope fa-lg"></i><p>Sign up with Email</p></button>
                        <p className='terms'>
                        By creating an account I accept Cookpad's <a  href='#'>Terms of Service</a> and <a  href='#'>Privacy Policy</a>.
                        </p>
                    </div>       
                 </section>
            </div>
        )
    }
}

export default Modal;