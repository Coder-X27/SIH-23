import React, { useState } from 'react';
import '../../Styles/Login.css';
import image1 from '../../Assets/img/log.svg';
import image2 from '../../Assets/img/register.svg';
import { Box, Button, HStack, Heading, Image, PinInput, PinInputField } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const Login = () => {
  const [switchToggled, setSwitchToggled] = useState(false);
  const toggelSwitch = () => {
    switchToggled ? setSwitchToggled(false) : setSwitchToggled(true);
  };
  return (
    <div
      class={
        switchToggled ? 'container1 sign-in-mode' : 'container1 sign-up-mode'
      }
    >
      <div className="forms-container1">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Log In</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                className="inputarea"
                type="text"
                placeholder="Enter Your Mobile Number"
              />
            </div>
            <Button variant={'ghost'} colorScheme="orange">
              Send OTP
            </Button>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <HStack>
                <PinInput type="alphanumeric" mask>
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>
            </div>
            <input
              type="submit"
              value="Login"
              className="inputarea btn solid"
            />
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Register</h2>
            <HStack
              marginY={'100px'}
              display={'flex'}
              justifyContent={'space-between'}
            >
              <Link width={'50%'} to={'/reguser'}>
                <Box
                  width={'100%'}
                  height={'auto'}
                  paddingY={'20px '}
                  boxShadow={'0px 10px 61px 10px rgba(0,0,0,0.1)'}
                  paddingX={'30px'}
                  borderRadius={'10%'}
                >
                  <Image src={image1} />
                  <Heading
                    fontSize={'20px'}
                    fontWeight={'medium'}
                    textAlign={'center'}
                    fontFamily={'montserrat'}
                  >
                    As User
                  </Heading>
                </Box>
              </Link>
              {/* <Box width={'10px'} height={'200px'} backgroundColor={'orange'}></Box> */}
              <Link width={'50%'} to={'/regorg'}>
                <Box
                  width={'100%'}
                  height={'auto'}
                  paddingY={'20px'}
                  boxShadow={'0px 10px 61px 10px rgba(0,0,0,0.1)'}
                  paddingX={'30px'}
                  borderRadius={'10%'}
                >
                  <Image src={image1} />

                  <Heading
                    fontSize={'20px'}
                    fontWeight={'medium'}
                    textAlign={'center'}
                    fontFamily={'montserrat'}
                  >
                    As Orgranization
                  </Heading>
                </Box>
              </Link>
            </HStack>
          </form>
        </div>
      </div>

      <div className="panels-container1">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>Register to the PGRKAM</p>
            <button className="btn " onClick={toggelSwitch} id="sign-up-btn">
              Register
            </button>
          </div>
          <img src={image1} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>Log In to PGRKAM</p>
            <button className="btn " onClick={toggelSwitch} id="sign-in-btn">
              Log In
            </button>
          </div>
          <img src={image2} className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
