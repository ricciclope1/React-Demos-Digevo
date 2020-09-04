import React from 'react';
import Layout from '../components/Layout';

import Demos from '../components/Demos';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router';
import HOCCoco from '../components/HOCCoco';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Layout>
            <Demos
              title='COCO-SSD'
              description='This model detects objects defined in the COCO dataset, 
              which is a large-scale object detection, segmentation, and captioning dataset. 
              The model is capable of detecting 80 classes of objects. (SSD stands for Single Shot MultiBox Detection).
              Please allow the use of pop-up windows in the browser for the correct functioning of the application.'
            />
            <HOCCoco />
          </Layout>
        </Switch>
      </BrowserRouter>
    </>
  );
}
export default App;
