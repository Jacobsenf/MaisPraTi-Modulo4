import React from 'react';

function ImageGallery() {
  const images = [
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5f4bd7a6-f763-4518-9b81-bdfd40ce3fc9/d26yer1-421bb5b8-9fc2-4d5a-b2d1-1e1f81b26b82.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVmNGJkN2E2LWY3NjMtNDUxOC05YjgxLWJkZmQ0MGNlM2ZjOVwvZDI2eWVyMS00MjFiYjViOC05ZmMyLTRkNWEtYjJkMS0xZTFmODFiMjZiODIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.p5vfqGmq9kIylfG3glHGa20CAPUtoWlAxKEGpIvGOi8',
    'https://neofeed.com.br/wp-content/uploads/2023/02/lebron-james-nba-recorde-150x150.jpg',
    'https://www.conjur.com.br/wp-content/uploads/2024/04/musk-150x150.png',
    'https://ateliedocarro.com.br/wp-content/uploads/2020/12/Kombi-1975-1-150x150.jpg',
    'https://akamai.sscdn.co/tb/letras-blog/wp-content/uploads/2019/04/dab1df2-classicos_do_rock_1390x780-150x150.jpg',
  ];

  return (
    <div>
      <h2>Galeria de Imagens</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image, index) => (
          <div key={index} style={{ margin: '10px' }}>
            <img src={image} alt={`Imagem ${index + 1}`} style={{ width: '150px', height: '150px' }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
