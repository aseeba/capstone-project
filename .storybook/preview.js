import GlobalStyles from "../src/components/GlobalStyles";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { addDecorator } from "@storybook/react";

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone6',
  }
}

function withGlobalStyles(Story) {
  return (
    <>
      <GlobalStyles />
      {Story()}
    </>
  );
}

addDecorator(withGlobalStyles);
