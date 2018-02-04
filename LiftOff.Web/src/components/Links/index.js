import React from 'react';
import Link from '../Link';
import './style.css';

export default ({ }) => (
  <div className="links">
    <Link type="link" link="www.google.com" title="Pravilnik o specifikacijama drona" />
    <Link type="pdf" link="www.google.com" title="Pravilnik upravljanju dronom" />
    <Link type="link" link="www.google.com" title="Pravne kategorije bespilotnih letjelica" />
    <Link type="pdf" link="www.google.com" title="Pravilnik o zrabanjenim zonama leta" />
    <Link type="link" link="www.google.com" title="Zakon o očuvanju okoliša" />
    <Link type="pdf" link="www.google.com" title="Postupak registriranja drona" />
  </div>
);
