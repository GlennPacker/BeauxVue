import Clickable from '../../components/clickable';
import Link from 'next/link';

module.exports = {
  header: {
    breadCrumb: [{
      link: '/',
      text: `Beaux Vue, Chambres d'Hotes`
    }, {
      text: 'Local'
    }],
    src: '/bersac chambres dhotes.jpg',
    textClass: 'home'
  },
  cta: {
    minHeight: 150,
    items: [
      'accomodation',
      'watersports',
      'fishing',
      'cycling',
      'trekking',
      'moreActivities',
    ]
  },
  para:
    <>
    </>,
  infoPanels: [
    {
      title: 'Bessines sur Gartempe',
      map: {
        iframe:
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d22134.971831471896!2d1.3790022954779455!3d46.093539156688884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x47f95a840b40a8fd%3A0x2d5395a0125e4251!2s4%20Route%20de%20Maillofargueix%2C%20Bersac-sur-Rivalier%2C%20France!3m2!1d46.0797287!2d1.4243469!4m5!1s0x47f9513bc18f69e9%3A0x2b2757c676a03e5!2sBessines-sur-Gartempe!3m2!1d46.109223!2d1.3689118999999998!5e0!3m2!1sen!2suk!4v1671968325133!5m2!1sen!2suk'
            width="433px"
            height="405px"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />,
        link: 'https://goo.gl/maps/sViaP1RkayawmPE9A',
      },
      image: '/BessiessSurGartempeBersacSurRivalier.jpg',
      infoTable: [{
        title: 'Distance',
        data: '6.5 km'
      }, {
        title: 'Travel time (car)',
        data: '8 mins'
      }, {
        title: 'Directions',
        data: <Clickable
          link="https://goo.gl/maps/sViaP1RkayawmPE9A"
          content="from Beux Vue"
          show
        />
      }, {
        title: 'Tags',
        data: 'Shopping, Local town, Places to go'
      }],
      text: <>
        A photogenic small town with a market, several places to eat, tourist office, pharmacy and supermarkets. Attractions in the town include Ureka Museum, Paint balling, a lake
        {' ('}
        <Clickable link="/etang-de-sagnat" content="Etang De Sagnat" show />
        {') '}
        and the church of St leger.
      </>,
    }, {
      title: 'Oradour Sur Glane',
      map: {
        iframe:
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d177484.61344213627!2d1.0893644199993067!3d45.96732297905375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x47f95a840b40a8fd%3A0x2d5395a0125e4251!2s4%20Rte%20de%20Maillofargueix%2C%2087370%20Bersac-sur-Rivalier%2C%20France!3m2!1d46.0797287!2d1.4243469!4m5!1s0x47fec75c522fec3b%3A0x24dbb505433ee0a6!2sCenter%20of%20Oradour%20sur%20Glane%20Memory%2C%20L&#39;auze%2C%2087520%20Oradour-sur-Glane%2C%20France!3m2!1d45.929104699999996!2d1.0352227999999999!5e0!3m2!1sen!2suk!4v1671894836006!5m2!1sen!2suk'
            width="433px"
            height="405px"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />,
        link: 'https://goo.gl/maps/STuav1nfq11bbU2N9',
      },
      image: '/Oradour-sur-Glane.jpg',
      infoTable: [{
        title: 'Distance',
        data: '45 km'
      }, {
        title: 'Travel time (car)',
        data: '45 mins'
      }, {
        title: 'Directions',
        data: <Clickable
          link="https://goo.gl/maps/STuav1nfq11bbU2N9"
          content="from Beux Vue"
          show
        />
      }, {
        title: 'Historic Interest',
        data: <Clickable
          link="https://en.wikipedia.org/wiki/Oradour-sur-Glane_massacre"
          content="read more"
          show />
      }, {
        title: 'Tags',
        data: 'Historic interest, World war, Places to go',
      }, {
        title: 'Website',
        data: <Clickable
          link="https://www.oradour.info/"
          content="www.oradour.info"
          show />
      }],
      text: 'The SS Panzer Division Das Reich, destroyed the French village of Oradour-sur-Glane on 10th June 1944 under the command of Adolf Diekmann.',
    }, {
      title: 'Laurière',
      map: {
        iframe:
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d11070.11797797386!2d1.4411263502136864!3d46.0804221158081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x47f95a840b40a8fd%3A0x2d5395a0125e4251!2s4%20Route%20de%20Maillofargueix%2C%20Bersac-sur-Rivalier%2C%20France!3m2!1d46.0797287!2d1.4243469!4m5!1s0x47f95b62f4701cc1%3A0x405d39260e79550!2s87370%20Lauri%C3%A8re%2C%20France!3m2!1d46.076004!2d1.475384!5e0!3m2!1sen!2suk!4v1672002352817!5m2!1sen!2suk'
            width="433px"
            height="405px"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />,
        link: 'https://goo.gl/maps/11NtV9NYerJxp5PE6',
      },
      image: '',
      infoTable: [{
        title: 'Distance',
        data: '4.8 km'
      }, {
        title: 'Travel time (car)',
        data: '5 mins'
      }, {
        title: 'Directions',
        data: <Clickable
          link="https://goo.gl/maps/11NtV9NYerJxp5PE6"
          content="from Beux Vue"
          show
        />
      }, {
        title: 'Tags',
        data: 'Local town',
      }],
      text: <>
        A photogenic small town with somwhere to eat, a bank and bakery. Attractions in the town include the church and a lake
        {' ('}
        <Clickable show link="/lac-du-pont" content="Lac du Pont" />
        {').'}
      </>
    }, {
      title: 'Châteauponsac',
      map: {
        iframe:
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d177036.78181997777!2d1.2091194734488664!3d46.10692726130167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e0!4m4!1s0x47f95a840b40a8fd%3A0x2d5395a0125e4251!3m2!1d46.0797287!2d1.4243469!4m5!1s0x47f95499229321a9%3A0x405d39260e797f0!2sCh%C3%A2teauponsac%2C%20France!3m2!1d46.132886!2d1.276476!5e0!3m2!1sen!2suk!4v1672052977888!5m2!1sen!2suk'
            width="433px"
            height="405px"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />,
        link: 'https://goo.gl/maps/pC7JsaHxxATfRxxT9',
      },
      image: '',
      infoTable: [{
        title: 'Distance',
        data: '16 km'
      }, {
        title: 'Travel time (car)',
        data: '16 mins'
      }, {
        title: 'Directions',
        data: <Clickable
          link="https://goo.gl/maps/pC7JsaHxxATfRxxT9"
          content="from Beux Vue"
          show
        />
      }, {
        title: 'Tags',
        data: 'Local town, Places to go',
      }],
      text: <>
        Châteauponsac is an ancient fortified town with views over the the Gartempe. Attractions in Châteauponsac include an archeologic museum, benedictine priory, a medieval quarter of les Moustiers, the Romanesque church of Saint Thyrse.
      </>
    }, {
      title: 'Museums Ureka - Bessines sur Gartempe',
      map: {
        iframe:
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d44260.802607208054!2d1.36213053517114!3d46.104925563448155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x47f95a840b40a8fd%3A0x2d5395a0125e4251!2s4%20Route%20de%20Maillofargueix%2C%20Bersac-sur-Rivalier%2C%20France!3m2!1d46.0797287!2d1.4243469!4m5!1s0x47f9512d38cc6179%3A0x34e207b332ae6bb9!2sUR%C3%8AKA%2C%20le%20mus%C3%A9e%20interactif%20de%20la%20mine!3m2!1d46.1235788!2d1.3724659!5e0!3m2!1sen!2suk!4v1672066681684!5m2!1sen!2suk'
            width="433px"
            height="405px"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />,
        link: 'https://goo.gl/maps/4m2yGiR6umoU67Ck9',
      },
      image: '',
      infoTable: [{
        title: 'Distance',
        data: '10.2 km'
      }, {
        title: 'Travel time (car)',
        data: '11 mins'
      }, {
        title: 'Directions',
        data: <Clickable
          link="https://goo.gl/maps/4m2yGiR6umoU67Ck9"
          content="from Beux Vue"
          show
        />
      }, {
        title: 'Tags',
        data: 'Local town, Museums, Places to go',
      }, {
        title: 'Tour Time',
        data: 'over 2 hours',
      }, {
        title: 'Lanaguage',
        data: 'multilingual including English',
      }],
      text: 'Ureka is a Uranium Mining Museum.'
    }, {
      title: 'Saint Thyrse Church - Châteauponsac',
      map: {
        iframe:
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d44259.243234624904!2d1.3144085671733496!3d46.1068677530464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e0!4m4!1s0x47f95a840b40a8fd%3A0x2d5395a0125e4251!3m2!1d46.0797287!2d1.4243469!4m5!1s0x47f95519fa05402b%3A0x15ed0b4fe80392e0!2sEglise%20Saint-Thyrse%2C%20Place%20Saint-Thyrse%2C%20Ch%C3%A2teauponsac%2C%20France!3m2!1d46.1310922!2d1.2743646!5e0!3m2!1sen!2suk!4v1672054304912!5m2!1sen!2suk'
            width="433px"
            height="405px"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />,
        link: 'https://goo.gl/maps/FA5FDdmMbaWX7sTo6',
      },
      image: '',
      infoTable: [{
        title: 'Distance',
        data: '17 km'
      }, {
        title: 'Travel time (car)',
        data: '17 mins'
      }, {
        title: 'Directions',
        data: <Clickable
          link="https://goo.gl/maps/FA5FDdmMbaWX7sTo6"
          content="from Beux Vue"
          show
        />
      }, {
        title: 'Tags',
        data: 'Historic interest, Church',
      }],
      text: 'The Romanesque Church of Saint Thyrse in Châteauponsac was built by monks in the 11th Century.',
    }, {
      title: 'Church of Saint-Léger - Bessines Sur Gartempe',
      map: {
        iframe:
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d22134.98930371432!2d1.3777848534026509!3d46.093495624483374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x47f95a840b40a8fd%3A0x2d5395a0125e4251!2s4%20Route%20de%20Maillofargueix%2C%20Bersac-sur-Rivalier%2C%20France!3m2!1d46.0797287!2d1.4243469!4m5!1s0x47f9513c671273ad%3A0x376ab632682f8e0a!2sPl.%20Saint-L%C3%A9ger%2C%2087250%20Bessines-sur-Gartempe%2C%20France!3m2!1d46.1090764!2d1.367467!5e0!3m2!1sen!2suk!4v1672069124692!5m2!1sen!2suk'
            width="433px"
            height="405px"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />,
        link: 'https://goo.gl/maps/iwWzkN5oL5WbNUv98',
      },
      image: '',
      infoTable: [{
        title: 'Distance',
        data: '7 km'
      }, {
        title: 'Travel time (car)',
        data: '9 mins'
      }, {
        title: 'Directions',
        data: <Clickable
          link="https://goo.gl/maps/iwWzkN5oL5WbNUv98"
          content="from Beux Vue"
          show
        />
      }, {
        title: 'Tags',
        data: 'Historic interest, Church',
      }],
      text: 'The Church of Saint Léger Was built in 12/13 Century and had works in the 15th some parts and recent as the 19th.',
    }, {
      title: 'Église de la Nativité de la Très Sainte Vierge - Bersac Sur Ravalier',
      map: {
        iframe:
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d489.2401333045602!2d1.4253189300638192!3d46.07981140747885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x47f95a840b40a8fd%3A0x2d5395a0125e4251!2s4%20Route%20de%20Maillofargueix%2C%20Bersac-sur-Rivalier%2C%20France!3m2!1d46.0797287!2d1.4243469!4m5!1s0x47f95a8434991b57%3A0xe26cc62d1be7832e!2s%C3%89glise%20de%20la%20Nativit%C3%A9-de-la-Tr%C3%A8s-Sainte-Vierge%20Bersac%20sur%20ravalier!3m2!1d46.0799307!2d1.4264719!5e0!3m2!1sen!2suk!4v1672082359879!5m2!1sen!2suk'
            width="433px"
            height="405px"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />,
        link: 'https://goo.gl/maps/6HjKR2qkV4SdCVC59',
      },
      image: '',
      infoTable: [{
        title: 'Distance',
        data: '200m'
      }, {
        title: 'Travel time (walk)',
        data: '2 mins'
      }, {
        title: 'Directions',
        data: <Clickable
          link="https://goo.gl/maps/6HjKR2qkV4SdCVC59"
          content="from Beux Vue"
          show
        />
      }, {
        title: 'Tags',
        data: 'Historic interest, Church',
      }],
      text: `
      Église de la Nativité de la Très Sainte Vierge (Church of the Nativity of the Most Holy Virgin) is the local church and its bells can be heard at half past and on each hour from Beux Vue chambre d'hote.
      The churches history dates back to 1110 and has had building works in the 12th, 13th, 14th and 16th Century and has been listed as a historic monument scine 1976.
    `

    }],
}