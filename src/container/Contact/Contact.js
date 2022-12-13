import React, { Component } from 'react';
import "font-awesome/css/font-awesome.css"
import "./Contact.css";

export default class ContactUs extends Component {
    render() {
    let Data = this.props.Data;
    return (
        <section id="contact">
            <div className="row section-head">
                <div className="ten columns">
                    <p className="lead">
                        Feel free to contact me for any work or suggestions below
                    </p>
                </div>
            </div>
            <div className="row details">
                <aside className="eigth columns footer-widgets">
                    <div className="widget">
                        <h4><i class='fas fa-sms'></i> : <a href="sms:415-960-5050">{Data.phoneNumber}</a></h4>
                        <h4 className="email-link"> <i class="fa fa-envelope" aria-hidden="true"></i> : <a href="mailto:allyglashes@gmail.com? subject=lashes" >{Data.email}</a></h4>
                    </div>
                </aside>
            </div>
        </section>
    );
  };
};