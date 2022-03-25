import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import './styles.css';

const Profile = ({ auth }) => {
  function getCurrentUser() {
    let user = {
      name: 'Default Name',
      email: 'email@email.com',
      imageUrl: 'https://analyticsindiamag.com/wp-content/uploads/2020/02/monero-hackers-crypto-1.jpeg',
    };

    if (auth.googleUser) {
      user = auth.googleUser;
    } else if (auth.localUser) {
      user = auth.localUser; //name, email
      user.imageUrl = require(`../../static/products/profileimage.jpeg`);
    }
    return user;
  }

  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <div className="card-title mb-4">
              <div className="d-flex justify-content-start">
                <div className="image-container">
                  <img
                    src={getCurrentUser().imageUrl}
                    style={{
                      width: 150,
                      height: 150,
                      objectFit: 'cover',
                    }}
                    className="img-thumbnail"
                  />
                </div>
                <div className="userData ml-3">
                  <h2>{getCurrentUser().name}</h2>
                  <h6>{getCurrentUser().email}</h6>
                  <h6>Customer info</h6>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <Tabs defaultActiveKey="info" id="uncontrolled-tab-example">
                  <Tab eventKey="info" title="Basic info">
                    <div className="mt-4">
                      <div className="row">
                        <div className="col-sm-3 col-md-2 col-5">
                          <label className="item-label">Full Name</label>
                        </div>
                        <div className="col-md-8 col-6">Team Project</div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3 col-md-2 col-5">
                          <label className="item-label">Birth Date</label>
                        </div>
                        <div className="col-md-8 col-6">Sept 15, 2021.</div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3 col-md-2 col-5">
                          <label className="item-label">Address</label>
                        </div>
                        <div className="col-md-8 col-6">Jersey City</div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3 col-md-2 col-5">
                          <label className="item-label">Wallet</label>
                        </div>
                        <div className="col-md-8 col-6">0 usd</div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3 col-md-2 col-5">
                          <label className="item-label">Position</label>
                        </div>
                        <div className="col-md-8 col-6">Admin</div>
                      </div>
                      <hr />
                    </div>
                  </Tab>
                  <Tab eventKey="additional" title="Additional info">
                    <div className="mt-4">
                      Project Manager: Ayushi Shah. Developers: Darsh Jalan and Ajay Gupta. Product Owner: Shreya Niphade. Tester: Daksh Jasani and Elsa Poonawala. Buisness Analyst: Noah Weitz.  
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(
  state => ({
    auth: state.authReducer,
  }),
  {},
)(Profile);
