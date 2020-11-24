import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import { NodeConnectionPairPositionState } from '../../state/MindMap';



const Connection = ({ base, target }) => {
  const { basePosition, targetPosition } = useRecoilValue(NodeConnectionPairPositionState(base, target));

  const calculateBorder = () => {
    
  }

  return (
    <div style={{
      
    }} />
  );
}
