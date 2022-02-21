import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonIcon, IonCard, IonCardContent, IonFab, IonFabButton,} from '@ionic/react';
import { qrCode, searchSharp } from 'ionicons/icons';
import { useParams } from 'react-router';
import './Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBacon, faCarrot, faEgg, faFish, faIceCream, faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Splash from '../components/splash/Splash';
import { useEffect, useState } from 'react';
interface AppPage {
  mdIcon: string;
}

const appPages: AppPage[] = [
  {
    mdIcon: searchSharp,
  }
];

const Home: React.FC = () => {

    const [showSplash, setSplash] = useState(false);

    const { name } = useParams<{ name: string; }>();

    useEffect(() =>{
      setSplash(true);
      setTimeout(() => {
        setSplash(false);
      }, 4000);
    }, [])
    return (
      <IonPage id='main-bg'>
        {showSplash ? <Splash /> : null}
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            {appPages.map((appPage) => {
            return (
              <IonRow>
                <IonCol className='left-lost' size='12'>
                <h5 id='without-line'><Link to="/search">Search<IonIcon id='search-icon' md={appPage.mdIcon}></IonIcon></Link></h5>
                </IonCol>
              </IonRow>
            );
          })}
          </IonToolbar>
        </IonHeader>
  
        <IonContent id='main-bg' fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">{name}</IonTitle>
            </IonToolbar>
          </IonHeader>
          {/* <ExploreContainer name={name} /> */}
            <IonGrid className='background-jumbo'>
              <IonRow>
                <IonCol className='title-header' size="8">
                  Get Your Joule. <br />Be Happy.
                </IonCol>
                <IonCol className='title-home-to-explore' size='4'>
                  <Link to='/'>Explore</Link>
                </IonCol>
              </IonRow>
            </IonGrid>
            <IonGrid>
              <IonRow>
                <IonCol size='12'>
                  <p id='line-between'>Search by Type</p>
                </IonCol>
              </IonRow>

              {/* row 1 */}
              <IonRow>
                <IonCol size='4'>
                  <IonCard className='center-display'>
                    <IonCardContent>
                    <FontAwesomeIcon className='circle' icon={faBacon} size='2x' />
                    <br />
                      <h3 style={{fontSize:'12px'}}><b>Beef</b></h3>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                <IonCol size='4'>
                  <IonCard className='center-display'>
                    <IonCardContent>
                    <FontAwesomeIcon className='circle' icon={faFish} size='2x' />
                    <br />
                      <h3 style={{fontSize:'12px'}}><b>Seafood</b></h3>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                <IonCol size='4'>
                  <IonCard className='center-display'>
                    <IonCardContent>
                    <img className='circle' src={'assets/icon/chicken.svg'} alt="" />
                    <br />
                      <h3 style={{fontSize:'12px'}}><b>Poultry</b></h3>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>

              {/* row 2 */}
              <IonRow>
                <IonCol size='4'>
                  <IonCard className='center-display'>
                    <IonCardContent>
                    <img className='circle' src={'assets/icon/pork.svg'} alt="" />
                    <br />
                      <h3 style={{fontSize:'12px'}}><b>Pork</b></h3>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                <IonCol size='4'>
                  <IonCard className='center-display'>
                    <IonCardContent>
                    <img className='circle' src={'assets/icon/lamb.svg'} alt="" />
                    <br />
                      <h3 style={{fontSize:'12px'}}><b>Lamb</b></h3>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                <IonCol size='4'>
                  <IonCard className='center-display'>
                    <IonCardContent>
                    <img className='circle' src={'assets/icon/deer.svg'} alt="" />
                    <br />
                      <h3 style={{fontSize:'12px'}}><b>Game</b></h3>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>

              {/* row 3 */}
              <IonRow>
                <IonCol size='4'>
                  <IonCard className='center-display'>
                    <IonCardContent>
                    <FontAwesomeIcon className='circle' icon={faCarrot} size='2x' />
                    <br />
                      <h5 style={{fontSize:'10px'}}><b>Vegetables</b></h5>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                <IonCol size='4'>
                  <IonCard className='center-display'>
                    <IonCardContent>
                    <FontAwesomeIcon className='circle' icon={faIceCream} size='2x' />
                    <br />
                      <h5 style={{fontSize:'12px'}}><b>Desserts</b></h5>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                <IonCol size='4'>
                  <IonCard className='center-display'>
                    <IonCardContent>
                    <FontAwesomeIcon className='circle' icon={faEgg} size='2x' />
                    <br />
                      <h3 style={{fontSize:'12px'}}><b>Other</b></h3>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            </IonGrid>

    
            {/* cooking guides */}
            <IonGrid>
              <IonRow>
                <IonCol size='12'>
                  <p id='line-between'>Cooking Guides</p>
                </IonCol>
              </IonRow>

              {/* guide 1 */}
              <IonRow style={{height:'22vh'}}>
                  <IonCol size='6' className='padding-card2'>
                  <img src="/assets/images/1.jpg" className='pic' alt="" />
                  </IonCol>
                  <IonCol size='6' className='padding-card2'>
                    <IonCard className='card2 center-display2'>
                      <IonCardContent>
                        <h3 style={{marginTop:'3vh'}}><b> Get Started:<br/>Basic Guides</b></h3>
                        <br />
                        <FontAwesomeIcon style={{textAlign:'center', color:'#b2b1af', marginLeft:'32vw', marginTop:'2vh'}} icon={faLayerGroup} size='1x' />
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
              </IonRow>

              {/* guide 2 */}
              <IonRow style={{height:'22vh'}}>
              <IonCol size='6' className='padding-card2'>
                  <img src="/assets/images/2.jpg" className='pic' alt="" />
                  </IonCol>
                  <IonCol size='6' className='padding-card2'>
                    <IonCard className='card2 center-display2'>
                      <IonCardContent>
                        <h3 style={{marginTop:'3vh'}}><b> Quick & Easy<br/></b></h3>
                        <br />
                        <FontAwesomeIcon style={{textAlign:'center', color:'#b2b1af', marginLeft:'32vw', marginTop:'2vh'}} icon={faLayerGroup} size='1x' />
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
              </IonRow>

              {/* guide 3 */}
              <IonRow style={{height:'22vh'}}>
              <IonCol size='6' className='padding-card2'>
                  <img src="/assets/images/3.jpg" className='pic' alt="" />
                  </IonCol>
                  <IonCol size='6' className='padding-card2'>
                    <IonCard className='card2 center-display2'>
                      <IonCardContent>
                        <h3 style={{marginTop:'3vh'}}><b> Cook in a Jar- <br/>No Bag Required</b></h3>
                        <br />
                        <FontAwesomeIcon style={{textAlign:'center', color:'#b2b1af', marginLeft:'32vw', marginTop:'2px'}} icon={faLayerGroup} size='1x' />
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
              </IonRow>

              {/* guide 4 */}
              <IonRow style={{height:'22vh'}}>
              <IonCol size='6' className='padding-card2'>
                  <img src="/assets/images/4.jpg" className='pic' alt="" />
                  </IonCol>
                  <IonCol size='6' className='padding-card2'>
                    <IonCard className='card2 center-display2'>
                      <IonCardContent>
                        <h3 style={{marginTop:'3vh'}}><b> All The guides<br/></b></h3>
                        <br />
                        <FontAwesomeIcon style={{textAlign:'center', color:'#b2b1af', marginLeft:'32vw', marginTop:'10px'}} icon={faLayerGroup} size='1x' />
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
              </IonRow>

              {/* guide  */}
              <IonRow style={{height:'22vh'}}>
              <IonCol size='6' className='padding-card2'>
                  <img src="/assets/images/5.jpg" className='pic' alt="" />
                  </IonCol>
                  <IonCol size='6' className='padding-card2'>
                    <IonCard className='card2 center-display2'>
                      <IonCardContent>
                        <h3 style={{marginTop:'3vh'}}><b> Joule Ready<br/>(Available in the US)</b></h3>
                        <br />
                        <FontAwesomeIcon style={{textAlign:'center', color:'#b2b1af', marginLeft:'32vw', marginTop:'10px'}} icon={faLayerGroup} size='1x' />
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
              </IonRow>
              <br />
              <br />
              <br />
              <br />
            </IonGrid>

            
            <IonFab vertical="bottom" horizontal="end" slot="fixed">
              <IonFabButton>
                <IonIcon className='floating' icon={qrCode} />
              </IonFabButton>
            </IonFab>
            <IonFab style={{marginInlineStart:'-65px'}} vertical="bottom" horizontal="center" slot="fixed">
              <IonFabButton className='fab-rectangle'>Search for Joule</IonFabButton>
            </IonFab>
          </IonContent>
      </IonPage>
    );
  };
  
  export default Home;