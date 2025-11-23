/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
import React, { useState } from 'react';

export function ContactLeft() {

  return (
    <>

    {/*-- Contact Start --*/}
    <div className="contact-form bg-light p-30">
        <div id="success"></div>
        <form name="sentMessage" id="contactForm" noValidate>
            <div className="control-group">
                <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your Name"
                required
                data-validation-required-message="Please enter your name"
                />
                <p className="help-block text-danger"></p>
            </div>

            <div className="control-group">
                <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Your Email"
                required
                data-validation-required-message="Please enter your email"
                />
                <p className="help-block text-danger"></p>
            </div>

            <div className="control-group">
                <input
                type="text"
                className="form-control"
                id="subject"
                placeholder="Subject"
                required
                data-validation-required-message="Please enter a subject"
                />
                <p className="help-block text-danger"></p>
            </div>

            <div className="control-group">
                <textarea
                className="form-control"
                rows={8}
                id="message"
                placeholder="Message"
                required
                data-validation-required-message="Please enter your message"
                ></textarea>
                <p className="help-block text-danger"></p>
            </div>

            <div>
                <button className="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">
                Send Message
                </button>
            </div>
        </form>
    </div>
    {/*-- Contact End --*/}
    </>
  );
}

export default ContactLeft;
