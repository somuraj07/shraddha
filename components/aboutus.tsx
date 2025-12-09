import Link from 'next/link';

const PRIMARY_COLOR = '#F54E02'; 
const CARD_SHADE = '#F6601C';

const PARTNER_DATA = [
  { 
    name: 'AICTE Approved', 
    logoSrc: 'https://upload.wikimedia.org/wikipedia/en/e/eb/All_India_Council_for_Technical_Education_logo.png' 
  },
  { 
    name: 'APSCHE Approved', 
    logoSrc: 'https://apsche.ap.gov.in/img/APSCHE_Logo.jpg' 
  },
  { 
    name: 'Wipro Credential Partner', 
    logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/1200px-Wipro_Primary_Logo_Color_RGB.svg.png' 
  },
];

export default function AboutSection() {
  return (
    <section 
      className="py-18 px-8 lg:px-16"  // Increased padding around the section
      style={{ backgroundColor: PRIMARY_COLOR }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row gap-12">

        {/* Left Column: About Content */}
        <div className="lg:w-1/2 text-white flex flex-col justify-center space-y-8"> {/* Increased spacing between items */}

          {/* Quote */}
          <div className="flex items-center mb-6">
            <div className="w-12 h-1 bg-white rounded mr-4"></div>
            <p className="italic text-lg opacity-90 leading-relaxed">
              “Don’t be afraid to give up the good to go for the great”
            </p>
          </div>

          {/* Titles */}
          <h2 className="text-5xl lg:text-6xl font-extrabold" style={{ color: 'white' }}>
            About
          </h2>
          <h3 className="text-4xl lg:text-5xl font-bold">
            Shraddha
          </h3>

          {/* Description */}
          <p className="text-lg lg:text-xl leading-relaxed">
            Shraddha is the premier destination for top-quality technical courses. 
            As India&apos;s leading Edtech OTT platform, we provide a comprehensive range 
            of technical courses under a single subscription model. Our programs are 
            designed to meet industry demands and provide students with practical 
            skills that employers value.
          </p>

          {/* Know More Button */}
          <Link
            href="/about"
            className="inline-block px-10 lg:px-12 py-4 rounded-lg font-bold text-lg lg:text-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
            style={{ backgroundColor: 'white', color: PRIMARY_COLOR }}
          >
            Know More
          </Link>

        </div>

        {/* Right Column: Single Vertical Card */}
        <div className="lg:w-1/2 flex justify-center">
          <div 
            className="flex flex-col items-center p-8 lg:p-10 rounded-xl shadow-lg w-full gap-6" // Medium padding inside the main card
            style={{ backgroundColor: CARD_SHADE }}
          >
            {PARTNER_DATA.map((partner, index) => (
              <div 
                key={index} 
                className="flex items-center w-full p-6 rounded-lg shadow-md bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1" // Medium padding inside partner cards
              >
                <div className="w-16 h-16 flex items-center justify-center mr-4 flex-shrink-0">
                  <img
                    src={partner.logoSrc}
                    alt={partner.name}
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="text-gray-800 font-semibold text-base lg:text-lg">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
