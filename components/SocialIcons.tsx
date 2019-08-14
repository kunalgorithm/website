import * as React from 'react';

import Projects from './Projects';
import { Normalize, Grid, Row, Col } from '@smooth-ui/core-sc';
import { Box, Card, Image, Heading, Text } from 'rebass';
import styled from 'styled-components';
import {} from '@smooth-ui/core-sc';
import { Wrapper, Section } from '../styles';
import { Github } from 'styled-icons/fa-brands/Github';
import { MediumM } from 'styled-icons/fa-brands/MediumM';
import { Twitter } from 'styled-icons/fa-brands/Twitter';
import { LinkedinIn } from 'styled-icons/fa-brands/LinkedinIn';
import { Instagram } from 'styled-icons/fa-brands';

export default () => (
  <>
    <a
      href="https://instagram.com/hi.kunal"
      target="blank"
      style={{
        borderBottom: 'none',
      }}>
      <Instagram
        style={{
          width: '25px',
          marginRight: '1em',
        }}
      />
    </a>
    <a
      href="https://github.com/kunalgorithm"
      target="blank"
      style={{
        borderBottom: 'none',
      }}>
      <Github
        style={{
          width: '25px',
          marginRight: '1em',
        }}
      />
    </a>
    <a
      href="https://medium.com/@kunal.shah"
      target="blank"
      style={{
        borderBottom: 'none',
      }}>
      <MediumM
        style={{
          width: '25px',
          marginRight: '1em',
        }}
      />
    </a>
    <a
      href="https://twitter.com/kunalsh22"
      target="blank"
      style={{
        borderBottom: 'none',
      }}>
      <Twitter
        style={{
          width: '25px',
          marginRight: '1em',
        }}
      />
    </a>
    <a
      href="https://www.linkedin.com/in/kunalsh22/"
      target="blank"
      style={{
        borderBottom: 'none',
      }}>
      <LinkedinIn
        style={{
          width: '25px',
          marginRight: '1em',
        }}
      />
    </a>
  </>
);
