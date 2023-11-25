/* 1. In this part, you are importing necessary components from the reactstrap library. React is also imported because it's needed for writing JSX (the syntax used in React to describe what the UI should look like). */

import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import { CAMPSITES } from "../../app/shared/CAMPSITES";

// 2. This line defines a new React functional component named CampsiteCard. A component is a reusable piece of code that describes a part of the user interface.

const CampsiteCard = ({ campsite }) => {
  const { image, name } = campsite;
  return (
    // 3. The return statement is what the component will render. In this case, it's returning a Card component. Think of it as saying, "When you use this CampsiteCard component, it will display a Card."
    <Card>
      <CardImg // 4. Inside the Card component, there's a CardImg component. This is like saying, "Inside the card, there's an image with a width of 100%, and the source (image) and alt text come from the properties (props) passed to this component."
        width="100%"
        src={campsite.image}
        alt={campsite.name}
      />
      <CardImgOverlay>
        <CardTitle>{campsite.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
};
//5. ***See Above ***Still inside the Card component, there's an overlay (CardImgOverlay) containing a CardTitle component. This is saying, "On top of the image, there's an overlay displaying the campsite name."

//This line exports the CampsiteCard component so that it can be used in other parts of your application.
export default CampsiteCard;

//In summary, the CampsiteCard component is a reusable piece of code that represents a card with an image and an overlay displaying the campsite name. This component can be used wherever you want to display a campsite card in your React application. If you have specific questions about certain concepts or lines of code, feel free to ask! React can be complex at first, but with practice, it becomes more intuitive.
