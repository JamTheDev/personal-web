import WaitingFallback from "@/components/fallbacks/waiting-fallback"
import '../../styles/globals.css';
import { mount } from "cypress/react18"

describe('<WaitingFallback />', () => {
  it('should render', () => {
    mount(<WaitingFallback />)
  })
})