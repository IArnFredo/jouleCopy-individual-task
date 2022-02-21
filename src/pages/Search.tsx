import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonSearchbar, IonToolbar } from "@ionic/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './Search.css';
import Segment from "./Segment";

const Search: React.FC = () => {
    const [segmentUnits, setSegment]= useState<"all"|"joule"|"chef">("all");
    const selectCalcUnitHandler = (selectedValue: "all"|"joule"|"chef")=> {
        setSegment(selectedValue);
      }
      
return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonGrid>
                        <IonRow>
                            <IonCol size="8">
                                <IonSearchbar className="iconleft" animated ></IonSearchbar>
                            </IonCol>
                            <IonCol size="4">
                                <Link to="/" style={{textDecoration:'none'}}><IonButton color="medium" routerDirection="back" fill="clear" expand="full">Cancel</IonButton></Link>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                    
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <Segment selectedValue={segmentUnits} onSelectValue={selectCalcUnitHandler}/>
                {segmentUnits === 'all' ? 
                <IonGrid>
                    <IonRow>
                        <IonCol size="12">
                            <p style={{fontSize:'12px', color:'#b3b3b3'}}><b>Visual Doneness Guides</b></p>
                        </IonCol>
                    </IonRow>
                    <IonCard>
                        <IonRow>
                            <IonCol size="4">
                                <img src={'assets/imagessearch/2.jpg'} className="circle2" alt="" />
                            </IonCol>
                            <IonCol size="8" style={{alignItems:'center', justifyContent:'center'}}>
                                <IonCardContent className="card-change" style={{alignItems:'center', justifyContent:'center', marginTop:'20px'}}>
                                    <h5><b>Cuban-Style Mojo Pork</b></h5>
                                    <p style={{color:'#b3b3b3', fontSize:'10px'}}>VISUAL DONENESS GUIDES</p>
                                </IonCardContent>
                            </IonCol>
                        </IonRow>
                    </IonCard>

                    {/* 2 */}
                    <IonCard>
                        <IonRow>
                            <IonCol size="4">
                                <img src={'assets/imagessearch/1.jpg'} className="circle2" alt="" />
                            </IonCol>
                            <IonCol size="8" style={{alignItems:'center', justifyContent:'center'}}>
                                <IonCardContent className="card-change" style={{alignItems:'center', justifyContent:'center', marginTop:'20px'}}>
                                    <h5><b>Sous Vide Yogurt</b></h5>
                                    <p style={{color:'#b3b3b3', fontSize:'10px'}}>VISUAL DONENESS GUIDES</p>
                                </IonCardContent>
                            </IonCol>
                        </IonRow>
                    </IonCard>

                    {/* 3 */}
                    <IonCard>
                        <IonRow>
                            <IonCol size="4">
                                <img src={'assets/imagessearch/3.jpg'} className="circle2" alt="" />
                            </IonCol>
                            <IonCol size="8" style={{alignItems:'center', justifyContent:'center'}}>
                                <IonCardContent className="card-change" style={{alignItems:'center', justifyContent:'center', marginTop:'20px'}}>
                                    <h5><b>Tomato Soup</b></h5>
                                    <p style={{color:'#b3b3b3', fontSize:'10px'}}>VISUAL DONENESS GUIDES</p>
                                </IonCardContent>
                            </IonCol>
                        </IonRow>
                    </IonCard>


                    {/* chefsteps */}
                    <IonRow>
                        <IonCol size="12">
                            <p style={{fontSize:'12px', color:'#b3b3b3'}}><b>ChefSteps.com Results</b></p>
                        </IonCol>
                    </IonRow>

                    
                    {/* 4 */}
                    <IonCard>
                        <IonRow>
                            <IonCol size="4">
                                <img src={'assets/imagessearch/4.jpg'} className="circle2" alt="" />
                            </IonCol>
                            <IonCol size="8" style={{alignItems:'center', justifyContent:'center'}}>
                                <IonCardContent className="card-change" style={{alignItems:'center', justifyContent:'center', marginTop:'20px'}}>
                                    <h5><b>Boiled Egg and Asparagus</b></h5>
                                    <p style={{color:'#b3b3b3', fontSize:'10px'}}>CHEFSTEPS.COM</p>
                                </IonCardContent>
                            </IonCol>
                        </IonRow>
                    </IonCard>

                    {/* 5 */}
                    <IonCard>
                        <IonRow>
                            <IonCol size="4">
                                <img src={'assets/imagessearch/5.jpg'} className="circle2" alt="" />
                            </IonCol>
                            <IonCol size="8" style={{alignItems:'center', justifyContent:'center'}}>
                                <IonCardContent className="card-change" style={{alignItems:'center', justifyContent:'center', marginTop:'20px'}}>
                                    <h5><b>Green Pea Soup</b></h5>
                                    <p style={{color:'#b3b3b3', fontSize:'10px'}}>CHEFSTEPS.COM</p>
                                </IonCardContent>
                            </IonCol>
                        </IonRow>
                    </IonCard>

                    {/* 6 */}
                    <IonCard>
                        <IonRow>
                            <IonCol size="4">
                                <img src={'assets/imagessearch/6.jpg'} className="circle2" alt="" />
                            </IonCol>
                            <IonCol size="8" style={{alignItems:'center', justifyContent:'center'}}>
                                <IonCardContent className="card-change" style={{alignItems:'center', justifyContent:'center', marginTop:'20px'}}>
                                    <h5><b>Latte</b></h5>
                                    <p style={{color:'#b3b3b3', fontSize:'10px'}}>CHEFSTEPS.COM</p>
                                </IonCardContent>
                            </IonCol>
                        </IonRow>
                    </IonCard>
                </IonGrid> : null}
                {segmentUnits === 'joule' ? 
                <IonGrid>
                    <IonCard>
                        <IonRow>
                            <IonCol size="4">
                                <img src={'assets/imagessearch/2.jpg'} className="circle2" alt="" />
                            </IonCol>
                            <IonCol size="8" style={{alignItems:'center', justifyContent:'center'}}>
                                <IonCardContent className="card-change" style={{alignItems:'center', justifyContent:'center', marginTop:'20px'}}>
                                    <h5><b>Cuban-Style Mojo Pork</b></h5>
                                    <p style={{color:'#b3b3b3', fontSize:'10px'}}>VISUAL DONENESS GUIDES</p>
                                </IonCardContent>
                            </IonCol>
                        </IonRow>
                    </IonCard>

                    {/* 2 */}
                    <IonCard>
                        <IonRow>
                            <IonCol size="4">
                                <img src={'assets/imagessearch/1.jpg'} className="circle2" alt="" />
                            </IonCol>
                            <IonCol size="8" style={{alignItems:'center', justifyContent:'center'}}>
                                <IonCardContent className="card-change" style={{alignItems:'center', justifyContent:'center', marginTop:'20px'}}>
                                    <h5><b>Sous Vide Yogurt</b></h5>
                                    <p style={{color:'#b3b3b3', fontSize:'10px'}}>VISUAL DONENESS GUIDES</p>
                                </IonCardContent>
                            </IonCol>
                        </IonRow>
                    </IonCard>

                    {/* 3 */}
                    <IonCard>
                        <IonRow>
                            <IonCol size="4">
                                <img src={'assets/imagessearch/3.jpg'} className="circle2" alt="" />
                            </IonCol>
                            <IonCol size="8" style={{alignItems:'center', justifyContent:'center'}}>
                                <IonCardContent className="card-change" style={{alignItems:'center', justifyContent:'center', marginTop:'20px'}}>
                                    <h5><b>Tomato Soup</b></h5>
                                    <p style={{color:'#b3b3b3', fontSize:'10px'}}>VISUAL DONENESS GUIDES</p>
                                </IonCardContent>
                            </IonCol>
                        </IonRow>
                    </IonCard>
                </IonGrid> : null}
                {segmentUnits === 'chef' ? 
                <IonGrid>
                {/* 4 */}
                    <IonCard>
                        <IonRow>
                            <IonCol size="4">
                                <img src={'assets/imagessearch/4.jpg'} className="circle2" alt="" />
                            </IonCol>
                            <IonCol size="8" style={{alignItems:'center', justifyContent:'center'}}>
                                <IonCardContent className="card-change" style={{alignItems:'center', justifyContent:'center', marginTop:'20px'}}>
                                    <h5><b>Boiled Egg and Asparagus</b></h5>
                                    <p style={{color:'#b3b3b3', fontSize:'10px'}}>CHEFSTEPS.COM</p>
                                </IonCardContent>
                            </IonCol>
                        </IonRow>
                    </IonCard>

                    {/* 5 */}
                    <IonCard>
                        <IonRow>
                            <IonCol size="4">
                                <img src={'assets/imagessearch/5.jpg'} className="circle2" alt="" />
                            </IonCol>
                            <IonCol size="8" style={{alignItems:'center', justifyContent:'center'}}>
                                <IonCardContent className="card-change" style={{alignItems:'center', justifyContent:'center', marginTop:'20px'}}>
                                    <h5><b>Green Pea Soup</b></h5>
                                    <p style={{color:'#b3b3b3', fontSize:'10px'}}>CHEFSTEPS.COM</p>
                                </IonCardContent>
                            </IonCol>
                        </IonRow>
                    </IonCard>

                    {/* 6 */}
                    <IonCard>
                        <IonRow>
                            <IonCol size="4">
                                <img src={'assets/imagessearch/6.jpg'} className="circle2" alt="" />
                            </IonCol>
                            <IonCol size="8" style={{alignItems:'center', justifyContent:'center'}}>
                                <IonCardContent className="card-change" style={{alignItems:'center', justifyContent:'center', marginTop:'20px'}}>
                                    <h5><b>Latte</b></h5>
                                    <p style={{color:'#b3b3b3', fontSize:'10px'}}>CHEFSTEPS.COM</p>
                                </IonCardContent>
                            </IonCol>
                        </IonRow>
                    </IonCard>
                </IonGrid> : null}
                
            </IonContent>

            {/* list */}

        </IonPage>
    );
  };
  
  export default Search;