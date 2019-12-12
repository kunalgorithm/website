import React from 'react';

import Link from 'next/link';
import { Grid, Row, Col } from '@smooth-ui/core-sc';

const routes = [
  { name: "Home", path: "/" },
  { name: "Links", path: "/links" },
  { name: "Projects", path: "/projects" },
  { name: "Tech Stack", path: "/tech-stack" },
]

export default () => (
  <Grid flexDirection="column">
    <Row mt={7} justifyContent="flex-start" >

      {routes.map(route => (
        <Col key={route.path}>
          <Link href={route.path} >
            <a>{route.name}</a>
          </Link>
        </Col>)
      )}

    </Row>
  </Grid>
);
