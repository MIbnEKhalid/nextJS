import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="At MBK Tech Studio, We're A Team Of Passionate Tech Innovators" />
        <meta name="keywords" content="MBK Tech Studio, Open-Source, Software Development, Technology Solutions" />
        <meta property="og:title" content="Home | MBK Tech STudio" />
        <meta property="og:description" content="At MBK Tech Studio, We're A Team Of Passionate Tech Innovators" />
        <meta property="og:image" content="https://www.mbktechstudio.com/Assets/Images/Icon/logo.png" />
        <meta property="og:url" content="https://mbktechstudio.com/" />
        <script type="application/ld+json">
          {`
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "MBK Tech Studio",
            "url": "https://mbktechstudio.com/",
            "logo": "https://www.mbktechstudio.com/Assets/Images/Icon/logo.png",
            "description": "MBK Tech Studio: Empowering Technology Through Innovation. Explore our projects, services, and passion for cutting-edge solutions."
          `}
        </script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
        <title>MBK Tech Studio | Open-Source and Innovation</title>
      </Head>

      <Header />

      <div id="cookie"></div>

      <aside className="sidebar sidebar-collapsed" id="sidebar">
        <div className="sidebar-toggle" id="sidebar-toggle">
          <i className="fas fa-chevron-left"></i>
        </div>
        <div className="sidebar-content">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#technologies">Technologies</a></li>
            <li><a href="#services">Useful Links</a></li>
            <li><a href="#collaborators">Collaborators</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
      </aside>
      <body>

        <div className="scroll-button">
          <a href="#about"><i className="fas fa-arrow-up"></i></a>
        </div>

        <section className="about" id="about">
          <div className="content" style={{ margin: '0px auto' }}>
            <div className="title"><span>Welcome To MBK Tech Studio</span></div>
            <div className="about-details">
              <div className="center">
                <div className="topic">About Us:</div>
                <p>
                  MBK Tech Studio, Founded By <a className="links" href="https://github.com/MIbnEKhalid">Muhammad Bin
                    Khalid</a>, Is A Collaborative Development Studio Focusing
                  On Open-Source Contributions And Innovative Technology Solutions. We Empower Creators And
                  Problem-Solvers Through Software Development Services And Hardware Projects, With An Emphasis On
                  Community-Driven Initiatives. Our Goal Is To Create Impactful Digital And Hardware Solutions
                  That Benefit The Global Tech Community, Fostering Growth, Collaboration, And The Advancement Of
                  Open-Source Technologies.
                </p>
                <div className="topic">Connect With Us:</div>
                <p>
                  Ready to be part of the movement? Connect with us on <a className="links" href="https://mbktechstudio.com/#ssmedia">Social Media</a>, send us an <a className="links" title="Email us at support@mbktechstudio.com" href="mailto:support@mbktechstudio.com">email</a>, or
                  visit our <a className="links newtab" href="https://mbktechstudio.com/Support">Support & Contact Page</a> to fill out
                  the contact form. We'd love to hear from you!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="technologies" id="technologies" style={{ paddingTop: '10px !important' }}>
          <div className="content">
            <div className="title"><span>Technologies We Use</span></div>
            <div className="technology-container">
              <div className="technology-grid">
                <div className="technology-card">
                  <img src="https://skillicons.dev/icons?i=html" alt="html" />
                  <h2>HTML5</h2>
                </div>
                <div className="technology-card">
                  <img src="https://skillicons.dev/icons?i=css" alt="css" />
                  <h2>CSS3</h2>
                </div>
                <div className="technology-card">
                  <img src="https://skillicons.dev/icons?i=js" alt="js" />
                  <h2>JavaScript</h2>
                </div>
                <div className="technology-card">
                  <img src="https://skillicons.dev/icons?i=nodejs" alt="nodejs" />
                  <h2>Node.js</h2>
                </div>
                <div className="technology-card">
                  <img src="https://skillicons.dev/icons?i=postgres" alt="Postgres" />
                  <h2>Postgres</h2>
                </div>
                <div className="technology-card">
                  <img src="https://skillicons.dev/icons?i=python" alt="python" />
                  <h2>Python</h2>
                </div>
                <div className="technology-card">
                  <img src="https://skillicons.dev/icons?i=react" alt="react.js" />
                  <h2>React.js</h2>
                </div>
                <div className="technology-card">
                  <img src="https://skillicons.dev/icons?i=github" alt="github" />
                  <h2>GitHub</h2>
                </div>
                <div className="technology-card">
                  <img src="https://skillicons.dev/icons?i=aws" alt="aws" />
                  <h2>AWS</h2>
                </div>
                <div className="technology-card">
                  <img src="https://skillicons.dev/icons?i=vercel" alt="Vercel" />
                  <h2>Vercel</h2>
                </div>
                <div className="technology-card">
                  <img src="https://skillicons.dev/icons?i=linux" alt="linux" />
                  <h2>Linux</h2>
                </div>
                <div className="technology-card">
                  <img src="https://skillicons.dev/icons?i=cpp" alt="c++" />
                  <h2>C++</h2>
                </div>
                <div className="technology-card">
                  <img src="https://skillicons.dev/icons?i=c#" alt="c#" />
                  <h2>C#</h2>
                </div>
                <div className="technology-card">
                  <img src="https://skillicons.dev/icons?i=unity" alt="unity" />
                  <h2>Unity</h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services" id="services" style={{ paddingTop: '10px !important' }}>
          <div className="content">
            <div className="title"><span>Useful Links</span></div>
            <div className="Servicecontainer">
              <div className="Servicegrid">
                <a href="https://privacy.mbktechstudio.com" target="_blank" className="links Servicecard">
                  <h2>Privacy Policy</h2>
                  <p>Access the privacy policies and legal notices for our services.</p>
                </a>
                <a href="https://docs.mbktechstudio.com" target="_blank" className="links Servicecard">
                  <h2>Projects & Documentations</h2>
                  <p>Explore technical and user documentation for projects and services.</p>
                </a>
                <a href="https://blog.mbktechstudio.com" target="_blank" className="links Servicecard">
                  <h2>Blog</h2>
                  <p>Read our latest articles, updates, and insights.</p>
                </a>
                <a href="https://portal.mbktechstudio.com" target="_blank" className="links Servicecard">
                  <h2>Web Portal</h2>
                  <p>Centralized portal for private use or team members only.</p>
                </a>
                <a href="https://portfolio.mbktechstudio.com" target="_blank" className="links Servicecard">
                  <h2>Portfolio</h2>
                  <p>Showcasing professional projects and personal achievements of our team.</p>
                </a>
                <a href="https://unilib.mbktechstudio.com" target="_blank" className="links Servicecard">
                  <h2>Unilib</h2>
                  <p>Resource hub for course materials, quizzes, and assignments.</p>
                </a>
                <a href="https://api.mbktechstudio.com" target="_blank" className="links Servicecard">
                  <h2>API Services</h2>
                  <p>Explore and interact with our APIs for integration and development.</p>
                </a>
                <a href="https://download.mbktechstudio.com" target="_blank" className="links Servicecard">
                  <h2>Download Apps</h2>
                  <p>Download our latest apps for seamless integration and enhanced productivity.</p>
                </a>
                <a href="https://events.mbktechstudio.com" target="_blank" className="links Servicecard">
                  <h2>Events</h2>
                  <p>Stay updated with our upcoming events, webinars, and workshops.</p>
                </a>
              </div>
            </div>
          </div>
          <div style={{ marginBottom: '30px' }}></div>
        </section>


        <section className="collaborators" id="collaborators" style={{ paddingTop: '10px !important' }}>
          <div className="content">
            <div className="title"><span>Our Collaborators</span></div>
            <div className="Servicecontainer">
              <div className="Servicegrid">
                <a href="https://m-dev-theta.vercel.app/" target="_blank" className="links Servicecard">
                  <img src="https://mbktechstudio.com/Assets/Images/Icon/M-Dev.png" alt="MBK Tech Studio" />
                  <h2>Maaz Dev</h2>
                  <p>Maaz Dev is our partner specializing in AI and Data Science, contributing significantly to our Python and other projects.</p>
                </a>
              </div>
            </div>
          </div>
        </section >

        <section className="contact" id="contact" style={{ paddingTop: '0px !important' }}>
          <div className="content" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>            <div className="title">
            <span>Contact Us</span>
          </div>
            <div className="text">
              <div className="topic">
                <h3>Have a Project in Mind?</h3>
              </div>
              <p>
                We’re thrilled to collaborate with talented individuals and entities! Whether you have a project idea or
                need support, here’s how you can reach out to us:
              </p>
              <div style={{ textAlign: 'left', margin: '20px auto', padding: '15px', background: '#1f1f1f', borderRadius: '10px' }}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '15px', fontSize: '1rem', color: '#ccc' }}>
                    <strong>1.</strong> Visit our
                    <a className="links newtab" href="Support/" style={{ color: '#4dabf7', textDecoration: 'none' }}>Support &amp; Contact Page</a>
                    to fill out the contact form.
                  </li>
                  <li style={{ marginBottom: '15px', fontSize: '1rem', color: '#ccc' }}>

                    <strong>2.</strong> Send an email directly to
                    <a className="links" href="mailto:support@mbktechstudio.com" style={{ color: '#4dabf7', textDecoration: 'none' }} >support@mbktechstudio.com</a>.
                  </li>
                  <li style={{ fontSize: '1rem', color: '#ccc' }}>
                    <strong>3.</strong> Connect with us on Social Media.
                  </li>
                </ul>
              </div>
            </div>
            <div className="ssmedis" id="ssmedia"><a href="https://instagram.com/mbktech.studios" target="_blank"><i className="fab fa-instagram" aria-hidden="true"></i></a><a href="https://www.facebook.com/people/MBK-Tech-Studio/61559079077988/" target="_blank"><i className="fab fa-facebook-f" aria-hidden="true"></i></a><a href="https://www.linkedin.com/in/muhammad-bin-khalid-89711b25b" target="_blank"><i className="fab fa-linkedin" aria-hidden="true"></i></a><a href="https://x.com/ibnekhalid28" target="_blank"><i className="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/MIbnEKhalid" target="_blank"><i className="fab fa-github" aria-hidden="true"></i></a><a href="https://youtube.com/@mibnekhalid" target="_blank"><i className="fab fa-youtube" aria-hidden="true"></i></a><a href="https://discord.gg/" target="_blank"><i className="fab fa-discord" aria-hidden="true"></i></a><a href="https://signal.me/#eu/0Bxn3qmtp8gtYNuy6eJ_F3WaHWHrQW3uefaC2y01VCWtduFQCwJHvIFL6N4VOtsv" target="_blank"><i className="fa-brands fa-signal-messenger" aria-hidden="true"></i></a></div>
          </div>
        </section >

      </body >
      <script src="/Assets/Scripts/cookie.js"></script>
      <script src="/Assets/Scripts/main.js"></script>
      <Footer />
    </>
  )
}