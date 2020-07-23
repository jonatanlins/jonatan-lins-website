import { action } from "@storybook/addon-actions";
import React from "react";

import Button from "../components/Button";

export default { title: "Button" };

export const primary = () => (
  <Button primary onClick={action("clicked")}>
    Button text
  </Button>
);

export const secondary = () => (
  <Button onClick={action("clicked")}>Button text</Button>
);
