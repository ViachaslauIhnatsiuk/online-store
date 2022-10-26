import { FC } from 'react';
import { FooterTop } from './footerTop/FooterTop';
import { FooterBottom } from './footerBottom/FooterBottom';

const Footer: FC = () => {
  return (
    <>
      <FooterTop />
      <FooterBottom />
    </>
  )
}

export { Footer };