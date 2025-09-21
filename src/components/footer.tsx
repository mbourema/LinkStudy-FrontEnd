const Footer: React.FC = () => {

  return (
        <footer className="bg-secondary">
          <div className="flex flex-row items-center h-20">
            <div className="flex flex-col ml-8 md:ml-24">
              <div className="text-xl font-medium justify-center racing-sans-one-regular text-white text-footer">
                Nous contacter :
              </div>
              <a href="mailto:spaacetree@gmail.com" className="text-xl font-medium text-white hover:underline mt-4 text-footer">
              spaacetree@gmail.com
              </a>
            </div>
            <div className="flex-grow"></div>
            <div className="flex flex-col mr-8 md:mr-24">
              <div className="text-xl font-medium justify-center racing-sans-one-regular text-white text-footer">
                Mentions légales :
              </div>
              <a className="text-xl font-medium text-white hover:underline mt-4 text-footer" href="/mentions">
              Cliquez ici
              </a>
            </div>
          </div>
        </footer>
        );
    };

export default Footer;