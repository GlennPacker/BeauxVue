import Head from 'next/head'
import Cover from '../components/cover';
import Gallery from './gallery';
import BreadCrumb from '../components/breadBrumb';

export default function LakePage({ schema }) {
  return (
    <>
      <Head>
        <title>{schema.pageTitle}</title>
        <meta name="description" content={schema.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Cover data={schema} />

      <Gallery items={schema.gallery} />
      <BreadCrumb breadCrumb={schema.breadCrumb} />
    </>
  )
};
