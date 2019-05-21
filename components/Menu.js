import React from "react";

import Link from "next/link";
import { Grid, Row, Col } from "@smooth-ui/core-sc";

export default () => (
  <Grid>
    <Row mt={2} justifyContent="flex-start">
      <Col xs={3} sm={2}>
        <Link href="/" prefetch>
          <div>
            <a>Home</a>
          </div>
        </Link>
      </Col>
      <Col xs={3} sm={2}>
        <Link href="/projects" prefetch>
          <div>
            <a>Projects</a>
          </div>
        </Link>
      </Col>
      <Col xs={3} sm={2}>
        <Link href="/tools" prefetch>
          <div>
            <a>Tools</a>
          </div>
        </Link>
      </Col>
    </Row>
  </Grid>
);
