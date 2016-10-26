import React from "react";
import { render } from "react-dom";

import Presentation from "./presentation";

const container = document.getElementById("root");
render(<Presentation longVersion={container.getAttribute("data-long-version") === 'true'} />, container);
