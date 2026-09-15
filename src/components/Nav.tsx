import Link from 'next/link';
import './Nav.css';

export default function Nav() {
  return (
    <header className="site-header">
      <div className="label">
        <Link href="/">SAHU</Link>
      </div>
      
      <nav className="site-nav">
        <Link href="/work">WORK</Link>
        <Link href="/now">NOW</Link>
        <Link href="/ideas">IDEAS</Link>
        <Link href="/about">ABOUT</Link>
        <Link href="/contact">CONTACT</Link>
      </nav>
    </header>
  );
}
