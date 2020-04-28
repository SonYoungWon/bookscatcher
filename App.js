import React from 'react';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {default as theme} from './global/custom-theme.json'; // <-- Import app theme
import {default as mapping} from './global/mapping.json'; // <-- Import app mapping
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import Navigator from './navigation/Navigator';

export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <Navigator />
      </ApplicationProvider>
    </>
  );
}
