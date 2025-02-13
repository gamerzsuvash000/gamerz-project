import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from './TabButton.js'
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
    <Section title="Examples" id={examples} className={className}>
                  <menu>
                    <TabButton
                      isSelected={selectedTopic === "Techno"}
                      onSelect={() => handleSelect("Techno")}
                    >
                      Techno gamerz
                    </TabButton>
                    <TabButton
                      isSelected={selectedTopic === "Total"}
                      onSelect={() => handleSelect("Total")}
                    >
                      Total gaming
                    </TabButton>
                    <TabButton
                      isSelected={selectedTopic === "live"}
                      onSelect={() => handleSelect("live")}
                    >
                      live insane
                    </TabButton>
                    <TabButton
                      isSelected={selectedTopic === "suvash"}
                      onSelect={() => handleSelect("suvash")}
                    >
                      suvash
                    </TabButton>
                  </menu>
                  {tabContent}
                </Section>
    );
}