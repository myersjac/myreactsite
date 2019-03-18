import React, { Component } from 'react';

import * as emailjs from 'emailjs-com';


const sgMail = require('@sendgrid/mail');

class Contact extends Component {


   constructor(props) {
      super(props);

      this.state = {
         name: '',
         email: '',
         subject: '',
         message: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   defaultstate = {
      name: '',
      email: '',
      subject: '',
      message: ''
   };

   handleChange(event, string) {
      switch (string) {
         case "name":
            this.setState({ name: event.target.value });
            break;
         case "email":
            this.setState({ email: event.target.value });
            break;
         case "subject":
            this.setState({ subject: event.target.value });
            break;
         case "message":
            this.setState({ message: event.target.value });
            break;
         default: break;

      }
   }

   handleSubmit(event) {

      event.preventDefault();
      console.log(this.state);
      // using SendGrid's v3 Node.js Library
      // https://github.com/sendgrid/sendgrid-nodejs
      // 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
      // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      // sgMail.setApiKey("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");
      const msg = {
         to: "jacobmyers922@gmail.com",
         from: this.state.email,
         subject: this.state.subject,
         text: this.state.message,
         html: '<strong>and easy to do anywhere, even with Node.js!</strong>',
      };

      emailjs.send("default_service", "contactme", msg, "user_jv6GwFGMxfrpuH2eoDCrH").then(function (response) {
         console.log('SUCCESS!', response.status, response.text);
         alert("Email Sent!");
         document.getElementById("contactForm").reset();
      }, function (error) {
         console.log('FAILED...', error);
         alert("Email Not Sent!");

         return false;
      });

      return false;
   }

   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
         var message = this.props.data.contactmessage;
      }

      return (
         <section id="contact">

            <div className="row section-head">

               <div className="two columns header-col">

                  <h1><span>Get In Touch.</span></h1>

               </div>

               <div className="ten columns">

                  <p className="lead">{message}</p>

               </div>

            </div>

            <div className="row">
               <div className="eight columns">

                  <form onSubmit={this.handleSubmit} id="contactForm" name="contactForm">
                     <fieldset>

                        <div>
                           <label htmlFor="contactName">Name <span className="required">*</span></label>
                           <input value={this.state.value} type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={(e) => {
                              this.handleChange(e, "name");
                           }} />
                        </div>

                        <div>
                           <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                           <input value={this.state.value} type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={(e) => {
                              this.handleChange(e, "email");
                           }} />
                        </div>

                        <div>
                           <label htmlFor="contactSubject">Subject</label>
                           <input value={this.state.value} type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={(e) => {
                              this.handleChange(e, "subject");
                           }} />
                        </div>

                        <div>
                           <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                           <textarea value={this.state.value} cols="50" rows="15" id="contactMessage" name="contactMessage" onChange={(e) => {
                              this.handleChange(e, "message");
                           }}></textarea>
                        </div>


                        <div>
                           {/* <button onSubmit={this.handleSubmit} className="submit">Submit</button> */}
                           <input type="submit" value="Submit" />
                           <span id="image-loader">
                              <img alt="" src="images/loader.gif" />
                           </span>
                        </div>
                     </fieldset>
                  </form>

                  <div id="message-warning"> Error boy</div>
                  <div id="message-success">
                     <i className="fa fa-check"></i>Your message was sent, thank you!<br />
                  </div>
               </div>


               <aside className="four columns footer-widgets">
                  <div className="widget widget_contact">

                     <h4>Address and Phone</h4>
                     <p className="address">
                        {name}<br />
                        {street} <br />
                        {city}, {state} {zip}<br />
                        <span>{phone}</span>
                     </p>
                  </div>

                  <div className="widget widget_tweets">
                     <h4 className="widget-title">Latest Tweets</h4>
                     <ul id="twitter">
                        <li>
                           <span>
                              This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                              Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                           </span>
                           <b><a href="#">2 Days Ago</a></b>
                        </li>
                        <li>
                           <span>
                              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                              eaque ipsa quae ab illo inventore veritatis et quasi
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                           </span>
                           <b><a href="#">3 Days Ago</a></b>
                        </li>
                     </ul>
                  </div>
               </aside>
            </div>
         </section>
      );
   }
}

export default Contact;
