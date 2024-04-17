
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CustomerDetails = ({ customer }) => {
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(`https://api.unsplash.com/search/photos?query=face&page=${currentPage}&per_page=9&client_id=w9TE34LYaCrzRvAgNpBsfE7hv_OOhOywxHP0P1XhSdA&timestamp=${new Date().getTime()}`);
        if (response.data && Array.isArray(response.data.results)) {
          setPhotos(response.data.results.map(photo => photo.urls.small));
        } else {
          console.error('API response does not have the expected structure');
        }
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchPhotos();

    const intervalId = setInterval(() => {
      setCurrentPage(prevPage => (prevPage % 1000) + 1); // Increment the page number every 10 seconds, looping back to 1 after reaching 1000
    }, 10000);

    return () => clearInterval(intervalId); // Clean up on component unmount
  }, [currentPage]);

  const renderPhotos = () => {
    let photoGrid = [];
    for (let i = 0; i < 3; i++) {
      let row = [];
      for (let j = 0; j < 3; j++) {
        let index = i * 3 + j;
        if (index < photos.length) {
          row.push(<img key={index} src={photos[index]} alt="Customer" />);
        }
      }
      photoGrid.push(<div key={i} className="photo-row">{row}</div>);
    }
    return photoGrid;
  };

  return (
    <div className="customer-details">
      <h2>{customer.name}</h2>
      <p>{customer.title}</p>
      <p>{customer.address}</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat odio congue ligula tempus, eu dignissim ex facilisis. Sed eu ligula sed ex aliquet aliquam et in augue. Aliquam eros nisi, suscipit vitae nisl nec, ultrices malesuada ex. Donec commodo ut risus quis vehicula. Quisque sagittis posuere vestibulum. Vestibulum elementum massa laoreet eleifend aliquam. Maecenas elementum vitae neque ac luctus. Nullam pretium mauris non sagittis tincidunt. Quisque fringilla mi vitae posuere luctus. Vivamus a sagittis neque. Fusce molestie dictum ante ac elementum. Sed nisl augue, cursus at metus eu, congue feugiat purus.</p>
      <div className="photo-grid">
        {renderPhotos()}
      </div>
    </div>
  );
}

export default CustomerDetails;
