import { IonCol, IonGrid,  IonLabel,  IonRow, IonSegment, IonSegmentButton } from "@ionic/react";
import './Search.css';

const Segment: React.FC<{selectedValue:"all"|"joule"|"chef"; onSelectValue: (value:"all"|"joule"|"chef") => void}> = props => {
    const inputSegmentHandler = (event:CustomEvent) => {
        props.onSelectValue(event.detail.value);
}
return (
    <IonGrid>
        <IonRow  style={{backgroundColor:'white'}}>
            <IonCol size="12">
                <IonSegment value={props.selectedValue} color="medium" onIonChange={inputSegmentHandler}>
                    <IonSegmentButton value="all">
                        <IonLabel>All</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="joule">
                        <IonLabel>Joule App</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="chef">
                        <IonLabel>ChefSteps.com</IonLabel>
                    </IonSegmentButton>
                </IonSegment>
            </IonCol>
        </IonRow>
    </IonGrid>
    );
};

export default Segment;