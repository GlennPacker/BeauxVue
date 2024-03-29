import LakePage from "../components/lakePage";
import { useTranslations } from 'use-intl';
import pageService from '../services/pageService';
import data from '../services/dataService';

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default
    }
  };
}

export default function Gartempe() {
  const schema = pageService.mapSchema(
    data,
    'gartempe',
    useTranslations('pages')
  );

  return (<LakePage schema={schema} />);
}
