import React, { useState, useContext } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { styled } from 'styled-components';

import { SocketContext } from '../Context';

const Container = styled.div`

  .root {
    display: flex;
    flex-direction: column0;
    }
  .gridContainer {
    width: 100%;
    [theme.breakpoints.down('xs')]: {
      flex-direction: column;
    }
  }
  .container {
    width: 600px;
    margin: 35px 0;
    padding: 0;
    [theme.breakpoints.down('xs')]: {
      width: 80%;
    }
  }
  .margin {
    margin-top: 20px;
  }
  .padding {
    padding: 20px;
  }
  .paper {
    padding: 10px 20px;
    border: 2px solid black;
  }
`;

const Sidebar = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');

  return (
    <Container>
    <div className="container">
      <div className="paper">
        <form className="root" noValidate autoComplete="off">
          <div className="gridContainer">
            <div className="padding">
              <h6>Account Info</h6>
              <input type= "text" label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
              <CopyToClipboard text={me} className="margin">
                <button>
                  Copy Your ID
                </button>
              </CopyToClipboard>
            </div>
            <div className="padding">
              <h6>Make a call</h6>
              <input type="text" label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
              {callAccepted && !callEnded ? (
                <button fullWidth onClick={leaveCall} className="margin">
                  Hang Up
                </button>
              ) : (
                <button fullWidth onClick={() => callUser(idToCall)} className="margin">
                  Call
                </button>
              )}
            </div>
          </div>
        </form>
        {children}
      </div>
    </div>
    </Container>
  );
};

export default Sidebar;
