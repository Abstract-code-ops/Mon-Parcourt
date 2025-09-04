import React from 'react';
import { urlFor } from '../lib/image';

// Custom component for rendering images in the Sanity Studio
export const SanityImageComponent = (props) => {
  const { value } = props;

  if (!value || !value.asset) {
    return null;
  }

  // Render image using CDN with sensible defaults. Studio should no longer control size.
  const imageUrl = urlFor(value).auto('format').quality(85).url();

  const figureStyle = {
    margin: '1.5em 0',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  return (
    <figure style={figureStyle} className="sanity-image">
      <img
        src={imageUrl}
        alt={value.alt || ''}
        style={{ width: '100%', height: 'auto', maxWidth: '100%', display: 'block' }}
      />
      {value.caption && (
        <figcaption style={{
          marginTop: '0.5em',
          fontStyle: 'italic',
          textAlign: 'center',
          fontSize: '0.9em',
          color: '#666'
        }}>
          {value.caption}
        </figcaption>
      )}
    </figure>
  );
};

export default SanityImageComponent;
