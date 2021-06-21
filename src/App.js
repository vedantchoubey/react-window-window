
import { photosData } from "./constants/data";
import Card from "./components/Card/Card";
import {FixedSizeList} from 'react-window'
import { useCallback } from "react";

export default function App() {

  const Row = useCallback(({index, style}) => {

    const {id, title, thumbnailUrl} = photosData[index] || {};

    return (
      <div style={style}>
        <Card id={id} key={id} title={title} thumbnailUrl={thumbnailUrl} />
      </div>
    )
  }, [])

  return (
    <div className="App">
      <div className="cardsContainer">
        {/* {photosData.map(({ id, title, thumbnailUrl }) => (
          <Card id={id} key={id} title={title} thumbnailUrl={thumbnailUrl} />
        ))} */}
        <FixedSizeList
        height={600}
        width={600}
        itemSize={150}
        itemCount={photosData.length}
        >
          {Row}
        </FixedSizeList>
      </div>
    </div>
  );
}
