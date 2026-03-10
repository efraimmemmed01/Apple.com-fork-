// Footer.jsx — Apple Azerbaijan Footer
import "./Footer.css";

const NAV_COLUMNS = [
  {
    title: "Mac-ı kəşf et",
    links: [
      { label: "Mac-a baxın", href: "#" },
      { label: "MacBook Air", href: "#" },
      { label: "MacBook Pro", href: "#" },
      { label: "iMac", href: "#" },
      { label: "Mac mini", href: "#" },
      { label: "Mac Studio", href: "#" },
      { label: "Mac Pro", href: "#" },
      { label: "Mac aksesuarları", href: "#" },
      { label: "Bütün Mac modellərini müqayisə et", href: "#" },
    ],
  },
  {
    title: "iPhone",
    links: [
      { label: "iPhone-a baxın", href: "#" },
      { label: "iPhone 16 Pro", href: "#" },
      { label: "iPhone 16", href: "#" },
      { label: "iPhone 15", href: "#" },
      { label: "iPhone 13", href: "#" },
      { label: "iPhone aksesuarları", href: "#" },
      { label: "Bütün iPhone modellərini müqayisə et", href: "#" },
    ],
  },
  {
    title: "iPad",
    links: [
      { label: "iPad-ə baxın", href: "#" },
      { label: "iPad Pro", href: "#" },
      { label: "iPad Air", href: "#" },
      { label: "iPad mini", href: "#" },
      { label: "iPad", href: "#" },
      { label: "iPad aksesuarları", href: "#" },
      { label: "Bütün iPad modellərini müqayisə et", href: "#" },
    ],
  },
  {
    title: "Watch",
    links: [
      { label: "Apple Watch-a baxın", href: "#" },
      { label: "Apple Watch Series 10", href: "#" },
      { label: "Apple Watch SE", href: "#" },
      { label: "Apple Watch Ultra 2", href: "#" },
      { label: "Apple Watch Hermès", href: "#" },
      { label: "Watch aksesuarları", href: "#" },
    ],
  },
  {
    title: "Dəstək",
    links: [
      { label: "Apple Dəstəyi", href: "#" },
      { label: "AppleCare+", href: "#" },
      { label: "Zəmanət yoxlama", href: "#" },
      { label: "Servis mərkəzləri", href: "#" },
      { label: "iPhone Servis", href: "#" },
      { label: "Mac Servis", href: "#" },
      { label: "Əlaqə", href: "#" },
    ],
  },
];

const LEGAL_LINKS = [
  { label: "Məxfilik Siyasəti", href: "#" },
  { label: "İstifadə Şərtləri", href: "#" },
  { label: "Satış Siyasəti", href: "#" },
  { label: "Hüquqi Məlumat", href: "#" },
  { label: "Sayt Xəritəsi", href: "#" },
];

export default function Footer() {
  return (
    <footer className="apple-footer">
      {/* Disclaimer note */}
      <div className="apple-footer__note">
        <p>
         
        
        </p>
      </div>

      {/* Navigation columns */}
      <nav className="apple-footer__nav" aria-label="Footer naviqasiyası">
        {NAV_COLUMNS.map((col) => (
          <div key={col.title} className="apple-footer__col">
            <p className="apple-footer__col-title">{col.title}</p>
            <ul className="apple-footer__col-list">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

    
      <div className="apple-footer__bottom">
        <p className="apple-footer__copyright">
          Copyright &copy; {new Date().getFullYear()} iSpace Azerbaijan. Bütün
          hüquqlar qorunur.
        </p>

        <div className="apple-footer__legal-links">
          {LEGAL_LINKS.map((link, i) => (
            <span key={link.label} style={{ display: "flex", alignItems: "center" }}>
              {i > 0 && <span className="apple-footer__divider">|</span>}
              <a href={link.href}>{link.label}</a>
            </span>
          ))}
        </div>

        <span className="apple-footer__country">Azərbaycan</span>
      </div>
    </footer>
  );
}