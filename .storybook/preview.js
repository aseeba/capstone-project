import GlobalStyles from "../src/components/GlobalStyles";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { addDecorator, storiesOf } from "@storybook/react";
import { MemoryRouter } from "react-router";
    
addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);

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
