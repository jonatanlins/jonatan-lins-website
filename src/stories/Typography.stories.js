import React from "react";
import { action } from "@storybook/addon-actions";
import { H1, H2, H3, H4, H5, H6, P } from "../components/Typography";

export default { title: "Typography" };

const sampleText = "Some text";

export const heading1 = () => <H1>{sampleText}</H1>;
export const heading2 = () => <H2>{sampleText}</H2>;
export const heading3 = () => <H3>{sampleText}</H3>;
export const heading4 = () => <H4>{sampleText}</H4>;
export const heading5 = () => <H5>{sampleText}</H5>;
export const heading6 = () => <H6>{sampleText}</H6>;
export const paragraph = () => <P>{sampleText}</P>;
