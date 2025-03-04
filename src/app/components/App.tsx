import React from 'react';
import '../styles/ui.css';
import { webLightTheme, FluentProvider, Text } from '@fluentui/react-components';
import { OutputCard } from '@fluentui-copilot/react-copilot';
import { CopilotProvider } from '@fluentui-copilot/react-copilot';

function App() {
  React.useEffect(() => {
    // This is how we read messages sent from the plugin controller
    window.onmessage = (event) => {
      const { type, message } = event.data.pluginMessage;
      if (type === 'create-rectangles') {
        console.log(`Figma Says: ${message}`);
      }
    };
  }, []);

  return (
    <div>
      <FluentProvider theme={webLightTheme}>
      <CopilotProvider
        mode="sidecar" //or 'canvas'
        themeExtension={{
          colorBrandFlair1: 'red', // replace with your brand colors
          colorBrandFlair2: 'blue',
          colorBrandFlair3: 'green',
        }}
      >
        <OutputCard progress={{ value: undefined }} isLoading>
          <Text>Welcome to Fluent AI Copilot</Text>
        </OutputCard>
      </CopilotProvider>
    </FluentProvider>
    </div>
  );
}

export default App;
