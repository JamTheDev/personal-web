import { mount } from 'cypress/react18';
import '../../styles/globals.css';
import ErrorFallback from '../../components/fallbacks/error-fallback';

describe('<ErrorFallback />', () => {
  it('should render', () => {
    mount(<ErrorFallback />)
  })
})