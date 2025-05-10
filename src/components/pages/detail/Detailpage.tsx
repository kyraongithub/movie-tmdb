import React from 'react';
import { useParams } from 'react-router-dom';
import type { DetailParams } from './Detail.interface';

const Detailpage: React.FC = () => {
  const { id } = useParams<DetailParams>();
  return <div>{id}</div>;
};

export default Detailpage;
