import {
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonRow,
} from '@ionic/react';

import { Link, useLocation } from 'react-router-dom';
import { discOutline, helpCircleOutline, homeOutline, settingsOutline } from 'ionicons/icons';
import './Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faShrimp } from '@fortawesome/free-solid-svg-icons';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/',
    iosIcon: homeOutline,
    mdIcon: homeOutline
  },
  {
    title: 'Tips & Tricks',
    url: '/',
    iosIcon: discOutline,
    mdIcon: discOutline
  },
  {
    title: 'Help & Support',
    url: '/',
    iosIcon: helpCircleOutline,
    mdIcon: helpCircleOutline
  },
  {
    title: 'Settings',
    url: '/',
    iosIcon: settingsOutline,
    mdIcon: settingsOutline
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    
    <IonMenu contentId="main" type="push" id="top">
      <IonContent>
        <IonList id="inbox-list">
          {/* <IonListHeader>Inbox</IonListHeader>
          <IonNote>hi@ionicframework.com</IonNote> */}
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
            <IonCard className='formenu'>
              <IonCardContent>
                <b>Get your claws around Joule Today !</b>
                <br />
                <Link to="/"><b>Check it Out</b><span><FontAwesomeIcon style={{marginLeft:'8px', marginBottom:'2px'}} icon={faArrowUpRightFromSquare} size='1x' /></span></Link>   
              </IonCardContent>
            </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonRow>
            <IonCol className='center-display' style={{color:'white'}} size='12'><FontAwesomeIcon className='center-display' icon={faShrimp} size='6x' />
</IonCol>
          </IonRow>
      </IonContent>
      <IonContent>
      </IonContent>
      
    </IonMenu>
    
  );
};

export default Menu;
