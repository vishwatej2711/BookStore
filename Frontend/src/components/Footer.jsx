function Footer() {
  return (
    <div>
      <hr />
      <footer className="footer footer-center p-10 text-base-content rounded dark:bg-slate-900 dark:text-white">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover" href="/about">About Us</a>
          <a className="link link-hover" href="/contact">Contact</a>
          
        </nav>

        <aside>
          <p>Copyright © 2025 - All rights reserved by VRK</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
