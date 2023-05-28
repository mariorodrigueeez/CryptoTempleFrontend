// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import Btc from '../Components/Btc';
import Eth from '../Components/Eth';
import { getall } from '../../../services/index';


export const Container = () => {

  useEffect(() => {
    getall()

  }, []);


  return (
    <div>
      <Btc />
      <Eth />
    </div>
  )
}
export default Container;