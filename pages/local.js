import styles from '../styles/local.module.css';
import CtaList from '../components/ctaList';
import InfoPanel from '../components/infoPanel';
import { TagPicker } from 'rsuite';
import { useState } from 'react';
import { useTranslations } from 'use-intl';
import pageService from '../services/pageService';
import data from '../services/dataService';
import Header from '../components/header';

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default
    }
  };
}

export default function Local() {
  const schema = pageService.mapSchema(
    data,
    'local',
    useTranslations('pages')
  );

  const tags = [...new Set(
    schema.infoPanels
      .map(r => r.infoTable.filter(f => f.title === 'Tags')
        .map(m => m.data))
      .join(', ')
      .split(', ')
      .sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : (a.toLowerCase() === b.toLowerCase() ? 0 : -1))
  )];

  const tagOptions = tags.map(
    item => ({ label: item, value: item })
  );

  const [selectedTags, setSelectedTags] = useState([]);

  const filteredPanels = !selectedTags || !selectedTags.length ? [] : schema.infoPanels.filter(ip => ip.infoTable.some(itl => itl.title === 'Tags' && itl.data.split(', ').some(t => selectedTags.includes(t))));

  const infoPanels = filteredPanels.length ? filteredPanels : schema.infoPanels;

  return (
    <>
      <Header schema={schema.header} />

      <div className="pageContainer">
        <div className="page">
          <TagPicker
            size="lg"
            data={tagOptions}
            style={{ width: '100%' }}
            onChange={setSelectedTags}
            placeholder="Search"
          />
        </div>
      </div>

      <main className="main">
        {infoPanels.map((item, index) => (<InfoPanel key={`${index}`} data={item} />))}
        <CtaList ctaData={schema.cta}></CtaList>
      </main>
    </>
  );
}