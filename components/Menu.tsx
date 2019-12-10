import React from 'react';

import Link from 'next/link';
import { Grid, Row, Col } from '@smooth-ui/core-sc';

export default () => (
  <Grid>
    <Row mt={7} justifyContent="flex-start">
      <Col>
        <Link href="/" prefetch>
          <a>Home</a>
        </Link>
      </Col>
      <Col>
        <Link href="/links" prefetch>
          <a>Links</a>
        </Link>
      </Col>
      <Col>
        <Link href="/projects" prefetch>
          <a>Projects</a>
        </Link>
      </Col>
      <Col>
        <Link href="/tech-stack" prefetch>
          <a>Tech Stack</a>
        </Link>
      </Col>
    </Row>
  </Grid>
);
