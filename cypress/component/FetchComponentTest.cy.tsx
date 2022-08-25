/// <reference types="cypress" />

import '../../styles/globals.css';

import Fetch from "@/components/Fetch";
import cmsUrl from "@/helper/url.helper";
import { mount } from "cypress/react18"

describe('Testing the Fetch Component', () => {
  beforeEach(() => {
    mount(
      <>
      <Fetch urls={[
        {
          endpoint: `https://jam-portfolio-cms.herokuapp.com/api/about-me`,
          urlName: "aboutMe"
        }
      ]}>
        <span>success</span>
      </Fetch>
      </>
    );
  })

  it('should show a success inside a span ', () => {
    cy.contains("success")
  })
})