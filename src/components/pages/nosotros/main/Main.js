import React from 'react'
import { SectionForm } from '../../../section-form/SectionForm';
import { Sidebar } from '../../../sidebar/Sidebar';
import { FirstSection } from '../section-1/FirstSection';
import { SecondSection } from '../section-2/SecondSection';
import { ThirdSection } from '../section-3/ThirdSection';

export const Main = () => {
  return (
    <main className="main__content d-flex flex-column">
      <div className="main__container container-fluid p-0 m-0 d-flex">
        <Sidebar /> 
        <FirstSection />
      </div>
        <SecondSection />
        <ThirdSection />
        <SectionForm />
    </main>
  )
}
