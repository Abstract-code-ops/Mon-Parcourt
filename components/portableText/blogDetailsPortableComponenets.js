import { urlFor } from '@/sanity/lib/image';

const PortableTextComponents = {
  block: {
    // Extract alignment class from marks
    getAlignmentClass: (value) => {
      if (value && value.marks) {
        const alignMark = value.marks.find(mark => ['left-align', 'centred', 'right-align'].includes(mark));
        return alignMark || '';
      }
      return '';
    },
    
    // Ex: Render all blocks with custom classes and alignment
    h1: ({ children, value }) => {
      const alignClass = PortableTextComponents.block.getAlignmentClass(value);
      return <h1 className={`text-4xl font-extrabold text-blue-800 mb-6 mt-10 ${alignClass}`}>{children}</h1>;
    },
    h2: ({ children, value }) => {
      const alignClass = PortableTextComponents.block.getAlignmentClass(value);
      return <h2 className={`text-3xl font-bold text-blue-700 mt-8 mb-4 mt-10 ${alignClass}`}>{children}</h2>;
    },
    h3: ({ children, value }) => {
      const alignClass = PortableTextComponents.block.getAlignmentClass(value);
      return <h3 className={`text-2xl font-semibold text-blue-600 mt-6 mb-3 mt-10 ${alignClass}`}>{children}</h3>;
    },
    h4: ({ children, value }) => {
      const alignClass = PortableTextComponents.block.getAlignmentClass(value);
      return <h4 className={`text-xl font-semibold text-blue-500 mt-5 mb-2 mt-10 ${alignClass}`}>{children}</h4>;
    },
    normal: ({ children, value }) => {
      const alignClass = PortableTextComponents.block.getAlignmentClass(value);
      return alignClass ? <p className={alignClass}>{children}</p> : <p>{children}</p>;
    },
  },
  
  // Lists must be defined under `list` so Sanity's Portable Text serializer
  // knows how to render bullet/number wrappers. Use `listItem` to customize
  // individual <li> elements if necessary.
  list: {
    bullet: ({ children }) => <ul className="list-item clearfix">{children}</ul>,
    number: ({ children }) => <ol className="list-item list-number clearfix">{children}</ol>,
  },
  listItem: {
    // keep default markup but allow class hooks if needed
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  
  marks: {
    // Decorators for text alignment
    'left-align': ({children}) => <span className="left-align">{children}</span>,
    'centered': ({children}) => <span className="centered">{children}</span>,
    'right-align': ({children}) => <span className="right-align">{children}</span>,
  },
  types: {
    // This targets the standard 'image' type within Portable Text
    image: ({ value }) => {
      if (!value || !value.asset) return null;

      // Size token and alignment
      const size = value.size || 'medium';
      const alignment = value.alignment || 'center';
      const wrapperClass = `blog-image-wrapper blog-image-${alignment} blog-image-${size} mb_30`;

      // Responsive widths (in px) to request from Sanity CDN for srcset
      const widths = [360, 640, 960, 1280, 1600];

      // Build srcset entries using width-based resizing (better for responsive layouts)
      const srcSet = widths
        .map((w) => `${urlFor(value).width(w).auto('format').quality(85).url()} ${w}w`)
        .join(', ');

      // Choose a sensible default src (middle width)
      const defaultWidth = 960;
      const src = urlFor(value).width(defaultWidth).auto('format').quality(85).url();

      // sizes attribute: tells the browser which resource size to pick from srcset
      // For 'full' images use full viewport width. For others use a constrained pattern.
      const sizesAttr = size === 'full'
        ? '100vw'
        : '(max-width: 600px) 90vw, (max-width: 1200px) 60vw, 800px';

      return (
        <div className={wrapperClass}>
          <figure>
            <img
              src={src}
              srcSet={srcSet}
              sizes={sizesAttr}
              alt={value.alt || ''}
              loading="lazy"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />

            {value.caption && (
              <figcaption style={{ textAlign: 'center', fontStyle: 'italic', marginTop: 8 }}>
                {value.caption}
              </figcaption>
            )}
          </figure>

          {(alignment === 'center' && size === 'full') && <div style={{ clear: 'both' }} />}
        </div>
      );
    },
  },
};

export default PortableTextComponents;
