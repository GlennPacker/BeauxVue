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

export default function LacDeSaintPardoux() {
  const schema = pageService.mapSchema(
    data,
    'lacDeSaintPardoux',
    useTranslations('pages')
  );

  return (<LakePage schema={schema} />);
}
