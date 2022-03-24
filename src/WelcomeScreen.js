import React from 'react';

import { Container, Row, Col, Card } from 'react-bootstrap';
import './WelcomeScreen.css';
function WelcomeScreen(props) {
  return props.showWelcomeScreen ? (
    <>
      <Card className="WelcomeScreen text-center" style={{ maxWidth: '50em' }}>
        <Card.Header as="h1">Welcome to the Meet app</Card.Header>
        <Card.Body>
          <Card.Title>
            Log in to see upcoming events around the world for full-stack
            developers
          </Card.Title>
          <div className="button_cont" align="center">
            <div className="google-btn">
              <div className="google-icon-wrapper">
                <img
                  className="google-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Log
o.svg"
                  alt="Google sign-in"
                />
              </div>
              <button
                onClick={() => {
                  props.getAccessToken();
                }}
                rel="nofollow noopener"
                className="btn-text"
              >
                <b>Sign in with google</b>
              </button>
            </div>
          </div>
          <Card.Link
            href="https://FluffyderDelphin.github.io/Meet_App/privacy.html"
            rel="nofollow noopener"
          >
            Privacy policy
          </Card.Link>
        </Card.Body>
      </Card>
    </>
  ) : null;
}
export default WelcomeScreen;
