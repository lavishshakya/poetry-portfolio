import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Poems.css';

const Poems = () => {
  const poems = [
    {
      id: 2,
      title: "भारत की महानता",
      content: `जब सारा विश्व कराह रहा था,
तब सबकुछ हमने संभाल रखा था,
ज्यादा बात न बिगड़े, इसलिए सबको घर में विठाल था,
मुसीबत के दिनों में सबकुछ हाथों-हाथ तैयार किया,
मास्क हो या सैनिटाइजर, भरपूर व्यापार किया,

न दवा की कमी थी न दुआ की,
कि मंदिर का काम भी अपनी रफ्तार से चल रहा था,
मल्टी-स्पेशलिटी हॉस्पिटल भी बिना रुके बन रहा था,
जब पुरा विश्व मचल रहा था,
तब कुछ सामान्य मेरे देश में लग रहा था,

कदम से कदम मिलाकर चल रहा था,
मेरा भारत, मुसीबत में भी आगे बढ़ रहा था।
हर बार की तरह दुनिया फिर भारत की दाद देने लग गई,
चाहे कोई कितना भी एडवांस्ड हो,
सबको हमारी सभ्यता से सीख लेने की जरूरत पड़ गई,
कदम से कदम मिलाकर चल रहा था,
मेरा भारत मुसीबत में भी आगे बढ़ रहा था।

ये मेरा देश यूँही नहीं महान बना है,
कदम से कदम मिलाकर चला है,
मेरा भारत मुसीबत में भी आगे बढ़ा है।`,
      date: "मार्च 2021",
      category: "देशभक्ति",
      author: "लविश शाक्य"
    },
    {
      id: 1,
      title: "मैं कैसे लिखता हूँ",
      content: `एक पन्ना है पतला सा,
मैं कलम से मद्धम लिखता हूँ,
ये शब्द मेरे बेजान नहीं,
मैं इनमें तुमको रखता हूँ,

तुम बिन, मेरे सब अलफाज अधूरे हैं,
मैं इन्हें तुमसे पूरा करता हूँ,
जब यह शब्द निकलते हैं मेरे कंठ से,
मैं तुम्हें जहन में रखता हूँ,

यह शब्द यूँ ही खास नहीं,
यह शब्द मेरे बेजान नहीं,
ओ जान मेरी मैं इनमें तुमको रखता हूँ,
यह जो लगती है कविता सबको,
मैं तो बस तुमको लिखता हूँ।`,
      date: "अक्टूबर 2022",
      category: "रोमांटिक",
      author: "लविश शाक्य"
    }
  ];

  const [selectedPoem, setSelectedPoem] = useState(poems[0]);

  return (
    <div className="poems-page">
      {/* Header */}
      <header className="poems-header">
        <Link to="/" className="back-btn">
          <i className="fa-solid fa-arrow-left"></i> 
          <span>Portfolio</span>
        </Link>
        <h1>मेरी कविताएं</h1>
        {/* <p>जहाँ कोड और भावनाएं मिलती हैं</p> */}
        <h2 className="elegant">कलम से दिल तक ...</h2>
      </header>

      {/* Main Content */}
      <div className="poems-main">
        {/* Left Panel - Poems List */}
        <div className="poems-sidebar">
          <div className="poems-list">
            <h3>कविताओं की सूची ({poems.length})</h3>
            {poems.map((poem) => (
              <div
                key={poem.id}
                className={`poem-item ${selectedPoem.id === poem.id ? 'active' : ''}`}
                onClick={() => setSelectedPoem(poem)}
              >
                <h4>{poem.title}</h4>
                <div className="poem-meta">
                  <span className="poem-category">{poem.category}</span>
                  <span className="poem-date">{poem.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel - Selected Poem */}
        <div className="poem-display">
          <div className="poem-header">
            <h1>{selectedPoem.title}</h1>
            <div className="poem-info">
              <span className="category-badge">{selectedPoem.category}</span>
              <span className="date-badge">{selectedPoem.date}</span>
            </div>
          </div>

          <div className="poem-content">
            {selectedPoem.content.split('\n\n').map((paragraph, index) => (
              paragraph.trim() === '' ? 
                <div key={index} className="stanza-break"></div> :
                <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="poem-navigation">
            <button 
              className="nav-btn prev-btn"
              onClick={() => {
                const currentIndex = poems.findIndex(p => p.id === selectedPoem.id);
                if (currentIndex > 0) {
                  setSelectedPoem(poems[currentIndex - 1]);
                }
              }}
              disabled={poems.findIndex(p => p.id === selectedPoem.id) === 0}
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            
            <button 
              className="nav-btn next-btn"
              onClick={() => {
                const currentIndex = poems.findIndex(p => p.id === selectedPoem.id);
                if (currentIndex < poems.length - 1) {
                  setSelectedPoem(poems[currentIndex + 1]);
                }
              }}
              disabled={poems.findIndex(p => p.id === selectedPoem.id) === poems.length - 1}
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="poems-footer">
        <p>&copy; 2025 लविश शाक्य।</p>
      </footer>
    </div>
  );
};

export default Poems;