import React from 'react';
import { Sidebar } from '../../../sidebar/Sidebar';
import { FirstSection } from '../first-section/FirstSection';
import { SecondSection } from '../second-section/SecondSection';
import { ThirdSection } from '../third-section/ThirdSection';
import { SectionForm } from '../../../section-form/SectionForm';
export const Main = () => {
  return (
    <main className="main__content d-flex flex-column">
      <div className="main__container p-0 d-flex">
      <Sidebar /> 
        <FirstSection />
      </div>
        <SecondSection />
        <ThirdSection />
        <SectionForm />
    </main>
  )
}
