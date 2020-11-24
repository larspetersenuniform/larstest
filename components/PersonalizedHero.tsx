import { contentfulOptimizeListReader } from '@uniformdev/optimize-tracker-contentful';
import { Personalize } from '@uniformdev/optimize-tracker-react';
import { Entry } from 'contentful';
import { PersonalizedHeroFields } from '../lib/contentful';

export const PersonalizedHero: React.FC<Entry<PersonalizedHeroFields>> = ({ fields }) => {
  const variations = contentfulOptimizeListReader(fields.unfrmOptP13nList);
  return (
    <Personalize name="Personalized Hero" variations={variations} trackingEventName="heroPersonalized" />
  );
};
