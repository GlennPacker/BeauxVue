import styles from '../styles/lake.module.css'
import Clickable from './clickable';
import Gallery from './gallery';
import BreadCrumb from '../components/breadBrumb';


export default function Lake({data: { 
    breadCrumb,
    para, 
    beach,
    cycling,
    fishing, 
    inflatables,
    kayaking,
    swimming,
    trekking,
    wingSurfAndFoil, 
    windsurfing,
    gallery, 
}}) {
    const frag = (title, allowed, link) => <>
        { 
            allowed ?
            <>
                <div>
                    <Clickable
                        content={title}
                        link={link}
                        show
                    />
                </div>
                <div>✓</div>
            </>:
            <></>
        }
    </>
    return (
        <>
            <Gallery items={ gallery } />
            <BreadCrumb  breadCrumb={ breadCrumb } />

            <div className={ styles.pageContainer }>               
                <div className={ styles.lakeContainer } >
                    <div className={ styles.para }>
                        <p>
                            { para }
                        </p>
                    </div>
                    <div className={ styles.lakeData }>
                        { frag('Beach', beach) }
                        { frag('Cycling', cycling, '/cycling') }
                        { frag('Fishing', fishing, '/fishing') }
                        { frag('Inflatables', inflatables) }
                        { frag('Kayaking', kayaking, 'kayaking') }
                        { frag('Swimming', swimming) }
                        { frag('Trekking', trekking, '/trekking') }
                        { frag('Wing Surf And Foil', wingSurfAndFoil, '/wing-surfing') }
                        { frag('Windsurfing', windsurfing, '/windsurfing') }
                    </div>
                </div>
            </div>
        </>
    );
  }