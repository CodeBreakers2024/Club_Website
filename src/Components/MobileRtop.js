import React from 'react';
import ResourceCarousel from './ResourceCarousel';
import ResourceCard from './ResourceCard';
import { v4 as uuidv4 } from "uuid";  
function MobileRtop() {

  let cards = [
    {
      key: uuidv4(),
      content: (
        <ResourceCard imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg" />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <ResourceCard imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png" />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <ResourceCard imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png" />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <ResourceCard imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png" />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <ResourceCard imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg" />
      ),
    },
  ];

  return (
    <div>
      <h2>Mobile Resource Carousel</h2>
      <ResourceCarousel
        cards={cards}  
        height="500px"
        width="30%"
        margin="0 auto"
        offset={2}
        showArrows={false}  
      />
    </div>
  );
}

export default MobileRtop;
