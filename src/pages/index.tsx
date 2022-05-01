import LandingPage from '@/components/LandingPage';
import LandingTemplate from '@/templates/LandingTemplate';
import { Page } from '@types';

const Landing: Page = () => {
  return (
    <>
      <LandingPage />
    </>
  );
};

Landing.layout = LandingTemplate;

export default Landing;
