import * as React from "react";
import styled from "styled-components";
import { primaryColor } from "../../styles/variables";

const Heading = styled.h1`
    color: ${primaryColor}
`

const Heading1 = (props) => <Heading>{props.children}</Heading>

export default Heading1