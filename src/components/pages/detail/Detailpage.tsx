import React from 'react';
import { useParams } from 'react-router-dom';
import type { DetailParams } from './Detail.interface';
import useDetail from './useDetail';

const Detailpage: React.FC = () => {
  const { id } = useParams<DetailParams>();
  const { detailMovie } = useDetail(Number(id));

  return <div>{detailMovie?.title}</div>;
};

export default Detailpage;
