import Head from 'next/head';
import TopPanel from './TopPanel';
import About from './About';
import Header from './Header';
import Services from './Services';
import HowWeWorking from './HowWeWorking';
import Footer from './Footer';
import HowFind from './HowFind';
import Makes from './Makes';
import SeoText from './SeoText';

export default function MainLayout({
  model: {
    head: { title: headTitle },
    header: { title: headerTitle, subtitle },
    about: { title: aboutTitle, text: aboutText },
    categories,
    makesList,
    services,
    address,
    video,
    seo,
    timeOpen,
    phones,
  },
}) {
  return (
    <>
      <Head>
        <title>{headTitle}</title>
      </Head>
      <div className="sto-lp" id="sto-lp">
        <TopPanel logoTitle={headerTitle} phones={phones} />
        <Header
          categories={categories}
          title={headerTitle}
          subtitle={subtitle}
        />
        <main>
          <Services services={services} />
          <About title={aboutTitle} text={aboutText} video={video} />
          <Makes makes={makesList} />
          <HowWeWorking />
          <SeoText seo={seo} />
          <HowFind address={address} timeOpen={timeOpen} phones={phones} />
        </main>
        <Footer copyright={`© 2021 ${headerTitle}`} bannerTitle={headerTitle} />
      </div>
    </>
  );
}
