import Fetch from '@/components/layouts/default/Fetch';

describe('LoadingComponent.cy.ts', () => {
  it('playground', (mount) => {
    mount(
      <Fetch waitingFallback={<span>Fetching</span>} errorFallback={<span>Error message hello</span>} urls={[{ urlName: 'projects', endpoint: 'https://jam-portfolio-cms-production.up.railway.app/api/articles' }]}>
        {
          (v) => <>
            loaded
          </>
        }
      </Fetch>)
  })
})