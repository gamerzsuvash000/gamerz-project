import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from './TabButton.js'
import Tabs from "./Tabs.jsx";
import Section from "./Section.jsx";


export default function Examples () {
      const [selectedTopic, setSelectedTopic] = useState();
    
      function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
      }
    
      let tabContent = <p>!!!Click to view some gamerz!!!</p>;
    
      if (selectedTopic) {
        tabContent = (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        );
      }

    return (
    <Section title="Examples" id="examples">
      <tabs Button={
        <>
                    <TabButton
                      isSelected={selectedTopic === "Techno"}
                      onClick={() => handleSelect("Techno")}
                    >
                      Techno gamerz
                    </TabButton>
                    <TabButton
                      isSelected={selectedTopic === "Total"}
                      onClick={() => handleSelect("Total")}
                    >
                      Total gaming
                    </TabButton>
                    <TabButton
                      isSelected={selectedTopic === "live"}
                      onClick={() => handleSelect("live")}
                    >
                      live insane
                    </TabButton>
                    <TabButton
                      isSelected={selectedTopic === "suvash"}
                      onClick={() => handleSelect("suvash")}
                    >
                      suvash gaming
                    </TabButton>
        </>
        }>
        {tabContent}
        </tabs>
   </Section>
    );
}