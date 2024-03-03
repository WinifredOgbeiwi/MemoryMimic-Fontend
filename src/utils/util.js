import { Children } from "react";

export const Mapping = ({ render, of }) =>
  Children.toArray(of.map((item, index) => render(item, index)));

export const MOBILE_WINDOW_SIZE = 768;
