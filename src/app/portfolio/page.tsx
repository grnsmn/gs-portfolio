import type { NextPage } from "next";

const Portfolio: NextPage = () => {
  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Portfolio</h2>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-filter padd-15">
              {/* <button type="button" className="active" data-filter="all">
                All
              </button> */}
              {/* <button type="button" data-filter="graphics-design">
                Graphics Design
              </button>
              <button type="button" data-filter="web-design">
                Web Design
              </button>
              <button type="button" data-filter="wordpress">
                Wordpress
              </button> */}
            </div>
          </div>
          <div className="row">
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="cross-platform-app">
              <div className="portfolio-item-inner shadow-dark">
                <a href="https://vocaltrainer.netlify.app" target="_blank" rel="noopener noreferrer">
                  <div className="portfolio-img">
                    <img src="/imgs/portfolio/VocalTrainer.jpeg" alt="portfolio" />
                  </div>
                  <div className="portfolio-info">
                      <h4>Vocal Trainer</h4>
                      <div className="icon">
                        <i className="fa fa-chevron-right"></i>
                      </div>
                  </div>
                </a>
              </div>
            </div>
            {/* Portfolio Item End */}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="cross-platform-app">
              <div className="portfolio-item-inner shadow-dark">
                <a href="https://sabaothctdocs.netlify.app" target="_blank" rel="noopener noreferrer">
                  <div className="portfolio-img">
                    <img src="/imgs/portfolio/SabaothCTDocs.jpeg" alt="portfolio" />
                  </div>
                  <div className="portfolio-info">
                      <h4>Documentation APS Sabaoth Catania</h4>
                      <div className="icon">
                        <i className="fa fa-chevron-right"></i>
                      </div>
                  </div>
                </a>
              </div>
            </div>
            {/* Portfolio Item End */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
