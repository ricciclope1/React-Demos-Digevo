import React from 'react';
import { useLocation } from 'react-router-dom';
import Coco from '../components/Coco';
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const HOCCoco = () => {
  let query = '';
  useQuery().get('video')
    ? (query = useQuery().get('video'))
    : (query = 'Digevo-Video-Demo-Prueba_Coco_02938947589126.mp4');
  return (
    <>
      <Coco video={query} />
    </>
  );
};

export default HOCCoco;
