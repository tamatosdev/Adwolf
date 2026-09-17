import Link from "next/link";

export function MakeBuildSection() {
  return (
    <section className="sec tight sides" id="make" aria-labelledby="sides-h">
      <div className="wrap">
        <h2 className="cond" id="sides-h">
          Make is what people see. <em>Build is what runs behind it.</em>
        </h2>
        <div className="row">
          <p className="word make cond">Make</p>
          <ul className="svc">
            <li data-c="ai">
              <Link href="/lp/ai-video-ads/">AI video ads <span className="tag ai">AI</span></Link>
            </li>
            <li data-c="d3">
              <Link href="/lp/cgi-product-films/">CGI and product films <span className="tag d3">3D</span></Link>
            </li>
            <li data-c="d2">
              <Link href="/lp/2d-animation/">2D animation and explainers <span className="tag d2">2D</span></Link>
            </li>
            <li data-c="d2">
              <Link href="/contact/">Content systems for social <span className="tag d2">2D</span></Link>
            </li>
          </ul>
        </div>
        <div className="row">
          <p className="word build cond">Build</p>
          <div>
            <ul className="svc">
              <li data-c="code">
                <Link href="/lp/websites-and-apps/">Websites and apps <span className="tag code">Code</span></Link>
              </li>
              <li data-c="code">
                <Link href="/lp/odoo-erp/">ERP and Odoo <span className="tag code">Code</span></Link>
              </li>
              <li data-c="code">
                <Link href="/build/#automation">Automation and AI agents <span className="tag code">Code</span></Link>
              </li>
              <li data-c="code">
                <Link href="/build/">Internal tools and dashboards <span className="tag code">Code</span></Link>
              </li>
            </ul>
            <p className="note">
              Most Build work sits behind a client login, so we walk you through it on a call.{" "}
              <Link className="link" href="/build/">See Build</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
