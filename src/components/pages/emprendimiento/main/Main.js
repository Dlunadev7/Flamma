import React from 'react';
import { Sidebar } from '../../../sidebar/Sidebar';
import { FirstSection } from '../first-section/FirstSection';
import { SecondSection } from '../second-section/SecondSection';
// import { ThirdSection } from '../third-section/ThirdSection';
import { SectionForm } from '../../../section-form/SectionForm';
import { Header } from '../header/Header';

export const Main = () => {
  return (
    <>
      <header className="header">
        <Header />
      </header>
      <main className="main">
        <FirstSection />
        <SecondSection />
        {/*<ThirdSection /> */}
        {/* <SectionForm /> */}
      </main>
    </>
  )
}
