import { urlFor } from "@/sanity/lib/image";

export default function PinnedEvents({ events }) {
  if (!events || events.length === 0) return null;

  // Server-requested thumbnail height (in px) — adjust as needed
  const thumbHeight = 200;

  return (
    <div className="sidebar-widget post-widget">
      <div className="widget-title">
        <h3>Recent Events</h3>
      </div>
      <div className="post-inner">
        {events.map((event) => (
          <div className="post" key={event.slug}>
            <figure className="post-thumb">
              <a href={`/blog/${event.slug}`}>
                {/* Use Sanity CDN to resize by height and crop to fill */}
                <img
                  src={urlFor(event.mainImage)
                    .height(thumbHeight)
                    .fit('crop')
                    .auto('format')
                    .quality(80)
                    .url()}
                  alt={event.mainImage?.alt || ''}
                  style={{ width: '100%', height: `${thumbHeight}px`, objectFit: 'cover' }}
                />
              </a>
            </figure>
            <h5>
              <a href={`/blog/${event.slug}`}>{event.title}</a>
            </h5>
            <span>
              <i className="icon-56"></i>
              {new Date(event.publishedAt).toDateString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}